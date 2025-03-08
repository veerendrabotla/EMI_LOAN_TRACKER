



import React, { useEffect, useState,Link } from "react";
import { fetchEMIs } from "../services/api";
import EmiCard from "../components/EmiCard";

const Home = () => {
    const [emis, setEmis] = useState([]);

    useEffect(() => {
        fetchEMIs().then(setEmis);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">My EMI Details</h1>
            <div className="grid gap-4">
                {emis.length > 0 ? (
                    emis.map((emi) => <EmiCard key={emi.id} emi={emi} />)
                ) : (
                    <p>No EMI records found.</p>
                )}
            </div>
            <div>
      <h2>Welcome to EMI Tracker</h2>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
    </div>
        </div>
        
    );
};

export default Home;
