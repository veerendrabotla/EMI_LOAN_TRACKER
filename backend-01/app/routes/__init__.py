#### 📂 **backend/app/routes/__init__.py** (Routes Init)

from fastapi import APIRouter
from .emi_routes import router as emi_router

router = APIRouter()
router.include_router(emi_router, prefix="/api")