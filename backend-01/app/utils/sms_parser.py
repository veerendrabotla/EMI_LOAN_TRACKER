import re

def parse_emi_sms(sms_text: str):
    pattern = r"EMI of (\d+(\.\d+)?) due on (\d{4}-\d{2}-\d{2})"
    match = re.search(pattern, sms_text)
    
    if match:
        return {"emi_amount": float(match.group(1)), "due_date": match.group(3)}
    
    return {"error": "No EMI details found"}
