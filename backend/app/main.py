from fastapi import FastAPI
from app.routes import base, chat, email, rag

app = FastAPI(
    title="Portfolio API",
    description="API do portfólio de Daniel Dias",
    version="1.0.0"
)

# Inclui as rotas
app.include_router(base.router)
app.include_router(chat.router)
app.include_router(email.router)
app.include_router(rag.router)
