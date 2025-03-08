import React, { useState } from "react";

const LoanForm = ({ onSubmit }) => {
    const [emiAmount, setEmiAmount] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ emi_amount: emiAmount, due_date: dueDate });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <input 
                type="number" 
                value={emiAmount} 
                onChange={(e) => setEmiAmount(e.target.value)} 
                placeholder="EMI Amount" 
                className="border p-2 w-full mb-2"
            />
            <input 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
                className="border p-2 w-full mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                Add EMI
            </button>
        </form>
    );
};

export default LoanForm;
