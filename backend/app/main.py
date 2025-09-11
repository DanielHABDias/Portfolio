from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import base, chat, email, rag

app = FastAPI(
    title="Portfolio API",
    description="API do portfólio de Daniel Dias",
    version="1.0.0"
)

origins = [
    "http://localhost:3000", 
    "https://portfolio-danielhabdias.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,              
    allow_credentials=True,             
    allow_methods=["*"],                
    allow_headers=["*"],                
)

# Inclui as rotas
app.include_router(base.router)
app.include_router(chat.router)
app.include_router(email.router)
app.include_router(rag.router)
