from fastapi import APIRouter, HTTPException # type: ignore
from app.services.auth_service import register_user, login_user
from pydantic import BaseModel # type: ignore

router = APIRouter(prefix="/auth", tags=["Authentication"])

class UserRegister(BaseModel):
    email: str
    password: str

@router.post("/register")
def register(data: UserRegister):
    return register_user(data.email, data.password)

@router.post("/login")
def login(data: UserRegister):
    return login_user(data.email, data.password)
