from sqlalchemy.orm import Session # type: ignore
from app.models.user import User
from app.database import get_db
from passlib.context import CryptContext # type: ignore

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def register_user(email: str, password: str):
    db = next(get_db())
    hashed_password = pwd_context.hash(password)
    new_user = User(email=email, password_hash=hashed_password)
    db.add(new_user)
    db.commit()
    return {"message": "User registered successfully"}

def login_user(email: str, password: str):
    db = next(get_db())
    user = db.query(User).filter(User.email == email).first()
    if not user or not pwd_context.verify(password, user.password_hash):
        return {"message": "Invalid credentials"}
    return {"message": "Login successful"}
