import React from "react";
import { Link } from "react-router-dom";

function Businessboost() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white flex items-center justify-center py-16 px-6">
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Does your Online business need a boost?</h1>
                <p className="text-lg lg:text-xl text-gray-300 mb-8">
                    We pursue relationships based on transparency, persistence, mutual trust, and integrity with our employees, clients, and business partners.
                </p>
                <button 
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-all text-lg"
                     >
                 <Link to="/reach-us">Reach Us</Link>
                    
                </button>
            </div>
        </div>
    );
}

export default Businessboost;