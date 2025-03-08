from fastapi import FastAPI # type: ignore
from app.routes import emi_routes, auth_routes

app = FastAPI()

app.include_router(emi_routes.router)
app.include_router(auth_routes.router)

@app.get("/")
def root():
    return {"message": "EMI Tracking API is running"}
