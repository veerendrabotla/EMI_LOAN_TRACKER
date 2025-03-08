import React, { useState } from "react";
import { registerUser } from "../services/api";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await registerUser(email, password);
        alert(response.message);
    };

    return (
        <form onSubmit={handleRegister} className="p-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-full mb-2" />
            <button type="submit" className="bg-green-500 text-white p-2 w-full">Register</button>
        </form>
    );
};

export default Register;
