import React from 'react';

const LoanDetails = ({ loan }) => {
  return (
    <div>
      <h2>Loan Details</h2>
      <p>Amount: ₹{loan.loanAmount}</p>
      <p>Interest Rate: {loan.interestRate}%</p>
    </div>
  );
};

export default LoanDetails;