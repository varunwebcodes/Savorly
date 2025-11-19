import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-extrabold text-yellow-500">
                
                    Savorly
                </Link>
                
                <nav>
                    <Link to="/" className="text-gray-700 hover:text-yellow-500 mx-4">   
                        Home
                    </Link>
                
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
