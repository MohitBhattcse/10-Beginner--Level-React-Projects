import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Meals = () => {
  const [mals, setMals] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then((response) => {
        setMals(response.data.meals);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const MealsList = mals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div className="meal-card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section>{strMeal}</section>
        <p>#{idMeal}</p>
      </div>
    );
  });

  return <div className="meals-container">{MealsList}</div>;
};

export default Meals;
