import React, { useState } from "react";
import "./App.css";

const mealPlans = {
  vegetarian: [
    { breakfast: "Oatmeal with banana", lunch: "Quinoa salad", dinner: "Vegetable curry with rice", calories: 1800 },
    { breakfast: "Greek yogurt with honey", lunch: "Lentil soup", dinner: "Stuffed bell peppers", calories: 1900 },
    { breakfast: "Smoothie bowl", lunch: "Chickpea stir-fry", dinner: "Paneer tikka with salad", calories: 2000 },
    { breakfast: "Avocado toast", lunch: "Spinach and ricotta pasta", dinner: "Mushroom risotto", calories: 1950 },
    { breakfast: "Fruit salad with nuts", lunch: "Tofu stir-fry with rice", dinner: "Dal with roti", calories: 1850 },
    { breakfast: "Whole wheat pancakes", lunch: "Vegetable biryani", dinner: "Grilled corn with soup", calories: 1900 },
    { breakfast: "Poha with peanuts", lunch: "Rajma with rice", dinner: "Pumpkin soup with bread", calories: 1950 },
  ],
  nonVegetarian: [
    { breakfast: "Egg sandwich", lunch: "Grilled chicken with veggies", dinner: "Fish curry with rice", calories: 2000 },
    { breakfast: "Scrambled eggs with toast", lunch: "Beef stew", dinner: "Shrimp stir-fry", calories: 2100 },
    { breakfast: "Omelet with cheese", lunch: "Chicken salad", dinner: "Baked salmon with quinoa", calories: 2200 },
    { breakfast: "Yogurt with berries", lunch: "Turkey sandwich", dinner: "Lamb curry with naan", calories: 2150 },
    { breakfast: "Boiled eggs with toast", lunch: "Grilled fish with mashed potatoes", dinner: "Chicken tikka with rice", calories: 2050 },
    { breakfast: "Pancakes with eggs", lunch: "BBQ chicken with salad", dinner: "Beef stir-fry with noodles", calories: 2100 },
    { breakfast: "French toast with eggs", lunch: "Roast chicken with veggies", dinner: "Tuna salad with bread", calories: 2150 },
  ],
};

// Function to shuffle meals
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [shuffledMeals, setShuffledMeals] = useState([]);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShuffledMeals(shuffleArray(mealPlans[plan]));
  };

  return (
    <div className="app-container">
      {!selectedPlan ? (
        <div className="selection-screen">
          <h1>Select Your Meal Plan</h1>
          <button className="btn veg-btn" onClick={() => handleSelectPlan("vegetarian")}>
            Vegetarian
          </button>
          <button className="btn nonveg-btn" onClick={() => handleSelectPlan("nonVegetarian")}>
            Non-Vegetarian
          </button>
        </div>
      ) : (
        <div className="meal-plan">
          <h1>{selectedPlan === "vegetarian" ? "Vegetarian" : "Non-Vegetarian"} Meal Plan</h1>
          <button className="btn back-btn" onClick={() => setSelectedPlan(null)}>Go Back</button>
          <table className="meal-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {shuffledMeals.map((meal, index) => (
                <tr key={index}>
                  <td>{["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][index]}</td>
                  <td>{meal.breakfast}</td>
                  <td>{meal.lunch}</td>
                  <td>{meal.dinner}</td>
                  <td>{meal.calories} kcal</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;