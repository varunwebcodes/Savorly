import { Link } from 'react-router-dom';

const MealCard = ({detail}) => {
  if (!detail || detail.length === 0) return null;

  return (
    
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full pb-64">
        {detail.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-lg overflow-hidden shadow-md m-2"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 sm:h-44 md:h-48 object-cover block"
            />
            <div className="p-3">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
                {meal.strMeal}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">
                {meal.strCategory || meal.strArea || ''}
              </p>
              <Link to={`/${meal.idMeal}`}>
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
}

export default MealCard