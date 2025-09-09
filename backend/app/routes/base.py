from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_root():
    return {
        "name": "Portfolio API",
        "version": "1.0.0",
        "author": "Daniel Dias",
        "description": "API para meu portfólio que possui duas rotas: /chat (comunicação com IA respondendo apenas coisas sobre mim) e /send-email (me auto enviando um email com seus dados)."
    }