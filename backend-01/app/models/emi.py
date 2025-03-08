from sqlalchemy import Column, Integer, String, Float, Date, Boolean # type: ignore
from ..database import Base

class EMI(Base):
    __tablename__ = "emis"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=False)
    loan_amount = Column(Float, nullable=False)
    emi_amount = Column(Float, nullable=False)
    due_date = Column(Date, nullable=False)
    status = Column(String, default="pending")
    penalty = Column(Boolean, default=False)
