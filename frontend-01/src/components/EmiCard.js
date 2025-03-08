import React from "react";

const EmiCard = ({ emi }) => {
    return (
        <div className="p-4 border rounded shadow-md">
            <h3 className="text-lg font-semibold">EMI: ₹{emi.emi_amount}</h3>
            <p>Due Date: {emi.due_date}</p>
            <p>Status: {emi.status}</p>
        </div>
    );
};

export default EmiCard;
