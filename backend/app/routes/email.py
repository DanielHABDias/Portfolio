from fastapi import APIRouter, HTTPException
from app.models.schemas import EmailRequest
from app.services.email_service import send_email

router = APIRouter(prefix="/send-email")

@router.post("/")
def send_email_endpoint(request: EmailRequest):
    try:
        send_email(request.name, request.email, request.message)
        return {"status": "success", "message": "Email enviado com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
