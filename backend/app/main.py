from fastapi import FastAPI
from app.routes import base, chat, email
from app.services.rag_ingest import ingest 

app = FastAPI(
    title="Portfolio API",
    description="API do portfólio de Daniel Dias",
    version="1.0.0"
)

# Inclui as rotas
app.include_router(base.router)
app.include_router(chat.router)
app.include_router(email.router)

# Executa ingest no startup
@app.on_event("startup")
async def startup_event():
    print("📌 Iniciando ingest do RAG...")
    ingest()
    print("✅ RAG carregada!")
