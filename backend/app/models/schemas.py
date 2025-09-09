from pydantic import BaseModel, EmailStr

class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

class EmailRequest(BaseModel):
    name: str
    email: EmailStr
    message: str
