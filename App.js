import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

function App() {
    const [meals, setMeals] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dietPlan, setDietPlan] = useState([]);
    const [feedback, setFeedback] = useState({});
    const [newMeal, setNewMeal] = useState(""); // State for new meal input

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const fetchMeals = async () => {
        try {
            const formattedDate = selectedDate.toISOString().split("T")[0];
            const response = await axios.get(`http://localhost:5000/meals?date=${formattedDate}`);
            setMeals(response.data);
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    };

    const fetchDietPlan = async () => {
        try {
            const response = await axios.get("http://localhost:5000/dietPlan");
            setDietPlan(response.data);
        } catch (error) {
            console.error("Error fetching diet plan:", error);
        }
    };

    useEffect(() => {
        fetchMeals();
        fetchDietPlan();
    }, [selectedDate]);

    const handleMealConsumed = async (mealId, index) => {
        try {
            await axios.patch(`http://localhost:5000/meals/${mealId}`, { consumed: true });
            setMeals((prevMeals) => {
                const updatedMeals = [...prevMeals];
                updatedMeals[index].consumed = true;
                return updatedMeals;
            });
        } catch (error) {
            console.error("Error updating meal consumption status:", error);
        }
    };

    const handleFeedbackChange = (mealId, value) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [mealId]: value,
        }));
    };

    const submitFeedback = async (mealId) => {
        try {
            await axios.post(`http://localhost:5000/meals/${mealId}/feedback`, { feedback: feedback[mealId] });
            alert("Feedback submitted!");
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    };

    const handleAddMeal = async () => {
        if (!newMeal) return; // Prevent adding empty meals
        try {
            const formattedDate = selectedDate.toISOString().split("T")[0];
            const response = await axios.post(`http://localhost:5000/meals`, {
                meal: newMeal,
                date: formattedDate,
                consumed: false,
            });
            setMeals((prevMeals) => [...prevMeals, response.data]);
            setNewMeal(""); // Clear the input after adding
        } catch (error) {
            console.error("Error adding new meal:", error);
        }
    };

    return (
        <div className="App">
            <nav>
                <div className="logo">Pregnancy Diet Tracker</div>
            </nav>
            <div className="content">
                <div className="hero-section">
                    <div className="left-part">
                        <div className="calendar-container">
                            <Calendar onChange={handleDateClick} value={selectedDate} />
                        </div>
                    </div>
                    <div className="right-part">
                        <div className="meals">
                            <h2>Meals for {selectedDate.toDateString()}</h2>
                            <ul>
                                {meals.map((meal, index) => (
                                    <li
                                        key={meal._id}
                                        style={{
                                            backgroundColor: meal.consumed ? "lightgreen" : "lightcoral",
                                        }}
                                    >
                                        <div className="meal-details">
                                            <span className="meal-text">{meal.meal}</span>
                                            <button
                                                className="consume-button"
                                                onClick={() => handleMealConsumed(meal._id, index)}
                                            >
                                                {meal.consumed ? "Undo" : "Consumed"}
                                            </button>
                                            <input
                                                type="text"
                                                placeholder="Feedback"
                                                value={feedback[meal._id] || ""}
                                                onChange={(e) => handleFeedbackChange(meal._id, e.target.value)}
                                            />
                                            <button onClick={() => submitFeedback(meal._id)}>Submit Feedback</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="add-meal">
                                <input
                                    type="text"
                                    placeholder="Add a new meal"
                                    value={newMeal}
                                    onChange={(e) => setNewMeal(e.target.value)}
                                />
                                <button onClick={handleAddMeal}>Add Meal</button>
                            </div>
                        </div>
                        <div className="diet-plan">
                            <h2>Recommended Diet Plan</h2>
                            <ul>
                                {dietPlan.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;