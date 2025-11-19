import React, { useState } from "react";
import MealCard from "./MealCard";

const Hero = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const myFun = async () => {
        if (search.trim() === "") {
            setMsg("Please Enter Something to Search...");
            setData([]);
            return;
        }

        try {
            const get = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            );
            const res = await get.json();

            if (!res.meals) {
                // no results
                setData([]);
                setMsg("Recipe is not Avilable");
            } else {
                setData(res.meals);
                setMsg("");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
            setMsg("Recipe is not Avilable");
        }
    };

    return (
        <div className="w-full">
            <div className="bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center h-64 md:h-80 lg:h-106 flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Search for food items..."
                    onChange={handleInput}
                    className="w-56 sm:w-80 md:w-96 px-4 py-3 rounded-md border border-gray-300 bg-white/90 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    className="bg-yellow-300 px-4 py-3  rounded-lg font-bold ml-2"
                    type="submit"
                    onClick={myFun}
                >
                    Search
                </button>
            </div>
            <h1 className="text-2xl font-bold text-gray-600 text-center mt-4">{msg}</h1>
            <MealCard detail={data} />
        </div>
    );
};

export default Hero;
