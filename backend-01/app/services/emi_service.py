from sqlalchemy.orm import Session # type: ignore
from app.models.emi import EMI

def get_all_emis(db: Session):
    return db.query(EMI).all()
def create_emi(db: Session, emi_data):
    from app.models.emi import EMI  # Move import inside the function
    new_emi = EMI(**emi_data)
    db.add(new_emi)
    db.commit()
    db.refresh(new_emi)
    return new_emi