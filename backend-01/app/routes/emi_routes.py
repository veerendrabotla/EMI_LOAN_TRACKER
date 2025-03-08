from fastapi import APIRouter, Depends # type: ignore
from sqlalchemy.orm import Session # type: ignore
from app.database import get_db
from app.services.emi_service import get_all_emis # type: ignore

router = APIRouter(prefix="/emi", tags=["EMI"])

@router.get("/")
def list_emis(db: Session = Depends(get_db)):
    return get_all_emis(db)
