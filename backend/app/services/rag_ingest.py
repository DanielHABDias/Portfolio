import os
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain_community.document_loaders import PyPDFLoader

load_dotenv()

def ingest():

    script_dir = os.path.dirname(os.path.abspath(__file__))
    loader = PyPDFLoader(script_dir + "/../../docs/curriculo.pdf")
    docs = loader.load()

    splitter = CharacterTextSplitter(chunk_size=200, chunk_overlap=20)
    chunks = splitter.split_documents(docs)

    embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001", google_api_key=os.getenv("GOOGLE_API_KEY"))
    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory="./chroma_db"
    )
    vectorstore.persist()
    print("✅ Base RAG com Gemini Embeddings criada em ./chroma_db")

if __name__ == "__main__":
    ingest()
