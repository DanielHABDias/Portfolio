import os
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_google_community import GoogleDriveLoader
from google.oauth2 import service_account

load_dotenv()

def ingest():
    print("📌 Iniciando ingest do RAG...")

    folder_id = os.getenv("FOLDER_ID")
    service_account_path = os.path.join(os.getcwd(), os.getenv("GOOGLE_APPLICATION_CREDENTIALS"))

    if not os.path.exists(service_account_path):
        raise Exception(f"Arquivo de credenciais não encontrado: {service_account_path}")

    print("📂 Conectando ao Google Drive via Service Account...")

    # Carregar credenciais da service account
    creds = service_account.Credentials.from_service_account_file(
        service_account_path,
        scopes=["https://www.googleapis.com/auth/drive.readonly"]
    )

    # Passar credenciais diretamente para o loader
    loader = GoogleDriveLoader(
        folder_id=folder_id,
        credentials=creds, 
        recursive=False,
        file_types=["application/pdf", "application/vnd.google-apps.document"]
    )

    docs = loader.load()
    print(f"📄 {len(docs)} documentos carregados do Google Drive.")

    splitter = CharacterTextSplitter(chunk_size=200, chunk_overlap=20)
    chunks = splitter.split_documents(docs)

    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/gemini-embedding-001",
        google_api_key=os.getenv("GOOGLE_API_KEY")
    )

    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory="./chroma_db"
    )
    vectorstore.persist()
    print("✅ Base RAG criada em ./chroma_db")

if __name__ == "__main__":
    ingest()
    print("✅ RAG carregada!")
