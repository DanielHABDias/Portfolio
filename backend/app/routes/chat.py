from fastapi import APIRouter
from app.models.schemas import ChatRequest
from app.services.rag_service import get_answer_from_rag

router = APIRouter(prefix="/chat")

@router.post("/")
def chat_endpoint(request: ChatRequest):
    answer = get_answer_from_rag(request.question)
    return {"status": "success", "response": answer, "message": "Resposta obtida com sucesso!"}
