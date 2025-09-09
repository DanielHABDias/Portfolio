import os
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA

load_dotenv()

embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
vectorstore = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0,
    google_api_key=os.getenv("GOOGLE_API_KEY")
)

qa = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    chain_type="stuff"
)

def get_answer_from_rag(question: str) -> str:
    answer = qa.run(question)
    if not answer or "desculpe" in answer.lower():
        return "Desculpe, não encontrei essa informação no meu portfólio."
    return answer

if __name__ == "__main__":
    reponse:str = get_answer_from_rag("Quem é Paulo?")
    print("REPONSE: " + reponse)