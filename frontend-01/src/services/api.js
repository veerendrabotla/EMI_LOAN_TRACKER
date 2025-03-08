const BASE_URL = "http://localhost:8000"; // FastAPI Backend URL

export const fetchEMIs = async () => {
    const response = await fetch(`${BASE_URL}/emi/`);
    return response.json();
};

export const registerUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    return response.json();
};

export const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    return response.json();
};
