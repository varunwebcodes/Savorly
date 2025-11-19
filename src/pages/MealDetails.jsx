import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealDetails = () => {

    const {mealid} = useParams();
    const [info, setInfo] = useState();
    // console.log(mealid);

    const getInfo = async()=>{

    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    const res = await get.json();
    setInfo(res.meals[0]);
    }
    if(info != "" ){
        getInfo();
    }

  return (
    <div>
        {
            !info ? (
                <div className="flex items-center justify-center min-h-[60vh]">
                    <p className="text-gray-500">Loading meal details...</p>
                </div>
            ) : (
                <div className="max-w-5xl mx-auto p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <img
                            src={info?.strMealThumb}
                            alt={info?.strMeal}
                            className="w-full lg:w-1/3 rounded-lg shadow-md object-cover max-h-96"
                        />

                        <div className="flex-1">
                            <h1 className="text-2xl sm:text-3xl font-bold">{info?.strMeal}</h1>

                            <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600">
                                {info?.strCategory && (
                                    <span className="px-2 py-1 bg-gray-100 rounded">{info.strCategory}</span>
                                )}
                                {info?.strArea && (
                                    <span className="px-2 py-1 bg-gray-100 rounded">{info.strArea}</span>
                                )}
                                {info?.strTags &&
                                    info.strTags.split(",").map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-yellow-100 rounded">
                                            {tag}
                                        </span>
                                    ))}
                            </div>

                            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h2 className="font-semibold text-lg">Ingredients</h2>
                                    <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {Array.from({ length: 20 }).map((_, i) => {
                                            const ing = info?.[`strIngredient${i + 1}`];
                                            const measure = info?.[`strMeasure${i + 1}`];
                                            if (!ing || !ing.trim()) return null;
                                            return (
                                                <li
                                                    key={i}
                                                    className="text-sm bg-gray-50 rounded px-2 py-1 border border-gray-100"
                                                >
                                                    <span className="font-medium">{measure?.trim() || ""}</span>{" "}
                                                    <span>{ing}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="font-semibold text-lg">Details</h2>
                                    <div className="mt-3 text-sm text-gray-700 space-y-2">
                                        {info?.strTags && (
                                            <p>
                                                <span className="font-medium">Tags: </span>
                                                {info.strTags}
                                            </p>
                                        )}
                                        {info?.strSource && (
                                            <p>
                                                <span className="font-medium">Source: </span>
                                                <a
                                                    href={info.strSource}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-blue-600 underline"
                                                >
                                                    View source
                                                </a>
                                            </p>
                                        )}
                                        {info?.strDrinkAlternate && (
                                            <p>
                                                <span className="font-medium">Drink Alternate: </span>
                                                {info.strDrinkAlternate}
                                            </p>
                                        )}
                                        {info?.strCreativeCommonsConfirmed && (
                                            <p>
                                                <span className="font-medium">License: </span>
                                                {info.strCreativeCommonsConfirmed}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h2 className="font-semibold text-lg">Instructions</h2>
                                <p className="mt-2 text-sm leading-relaxed text-gray-800 whitespace-pre-line">
                                    {info?.strInstructions}
                                </p>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3 pb-55">
                                {info?.strYoutube && (
                                    <a
                                        href={info.strYoutube}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded shadow-sm text-sm"
                                    >
                                        Watch on YouTube
                                    </a>
                                )}
                                {info?.strSource && (
                                    <a
                                        href={info.strSource}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center px-4 py-2 border rounded text-sm"
                                    >
                                        Open Source Link
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default MealDetails