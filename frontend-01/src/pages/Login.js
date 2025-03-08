import React, { useState } from "react";
import { loginUser } from "../services/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await loginUser(email, password);
        alert(response.message);
    };

    return (
        <form onSubmit={handleLogin} className="p-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-full mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
        </form>
    );
};

export default Login;
