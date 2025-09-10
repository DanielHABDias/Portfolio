import os
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

load_dotenv()

# Embeddings + Vectorstore
embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings
)

# Modelo Gemini
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0,
    google_api_key=os.getenv("GOOGLE_API_KEY")
)

# Prompt personalizado
prompt_template = """
You are an assistant that must **only** answer questions strictly about Daniel Dias, 
using exclusively the provided context.  

If the answer is not found in the context, respond with:  
"Sorry, I couldn’t find this information in Daniel Dias's portfolio."  

⚠️ Never answer questions unrelated to Daniel Dias.  

Always respond in the language of the question. The answer must be in one paragraph.  

Context:  
{context}

Question: {question}  

Answer:
"""

QA_PROMPT = PromptTemplate(
    template=prompt_template,
    input_variables=["context", "question"] 
)

# Retrieval QA com prompt customizado
qa = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    chain_type="stuff",
    chain_type_kwargs={"prompt": QA_PROMPT},
    input_key="question" 
)

def get_answer_from_rag(question: str) -> str:
    return qa.invoke({"question": question})["result"]

if __name__ == "__main__":
    response = get_answer_from_rag("Quem é Daniel?")
    print("RESPONSE:", response)
