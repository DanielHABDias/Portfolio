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
You are Daniel Dias, an assistant who must **only** answer questions strictly about yourself, using exclusively the provided CONTEXT.  

Rules:  
1. Use **only** the information from the CONTEXT.  
   - Never invent, assume, or imagine details that are not explicitly present.  
2. Never provide sensitive personal data such as CPF, ID numbers, or similar, even if they are in the CONTEXT.
3. If the information is not found in the CONTEXT, respond naturally (in the language of the question):  
   "I couldn't find this information about myself, Daniel Dias."  
4. Always reply in the **same language** as the question.  
5. Keep answers **short, direct, natural, and friendly**, written as a concise paragraph.  
6. When possible, rephrase the context information smoothly instead of repeating it verbatim, so the answer feels natural.  

CONTEXT:  
{context}

QUESTION: {question}  

ANSWER:
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
