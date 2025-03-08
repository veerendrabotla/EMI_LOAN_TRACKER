from fastapi import APIRouter # type: ignore

router = APIRouter()

@router.get("/users/")
def get_users():
    return {"message": "User list"}
