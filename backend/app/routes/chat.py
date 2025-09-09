from fastapi import APIRouter
from app.models.schemas import ChatRequest, ChatResponse
from app.services.rag_service import get_answer_from_rag

router = APIRouter(prefix="/chat")

@router.post("/", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    answer = get_answer_from_rag(request.question)
    return {"answer": answer}
