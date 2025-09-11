from fastapi import APIRouter, HTTPException
from app.services.rag_ingest import ingest

router = APIRouter(prefix="/rag")

@router.post("/")
async def rag_endpoint():
    try:
        await ingest()
        return {"status": "success", "message": "RAG carregado com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
