import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MealDetails from './pages/MealDetails'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:mealid' element={<MealDetails/>} />
      </Routes>

      <Footer/>
   
    </div>
  )
}

export default App










































// import { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFood = async () => {
//       try {
//         // DummyJSON recipes endpoint
//         const res = await axios.get(`https://dummyjson.com/recipes?limit=30`);
//         console.log(res.data); // data is in res.data
//         setFoods(res.data.recipes); // set the recipes to state
//       } catch (error) {
//         console.error("Bhai, API toot gayi:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFood();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Food Items</h1>
//       {foods.map((item) => (
//         <div key={item.id} style={{ marginBottom: "20px" }}>
//           <h3>{item.title}</h3>
//           <p>{item.instructions}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
