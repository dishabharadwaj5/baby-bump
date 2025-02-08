import React, { useState } from 'react';
import './styles.css'; // Assuming you have an external CSS file

const WorkoutSuggestions = () => {
    const [trimester, setTrimester] = useState("1");
    const [intensity, setIntensity] = useState("low");
    const [workouts, setWorkouts] = useState("");

    const showWorkouts = () => {
        let suggestedWorkouts = "";

        if (trimester === "1") {
            if (intensity === "low") {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Gentle Yoga - 30 minutes</li><li>Walking - 20 minutes</li></ul>";
            } else if (intensity === "medium") {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Pregnancy Yoga - 30 minutes</li><li>Light Aerobics - 25 minutes</li></ul>";
            } else {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Moderate Walking - 30 minutes</li><li>Swimming - 30 minutes</li></ul>";
            }
        } else if (trimester === "2") {
            if (intensity === "low") {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Stretching - 20 minutes</li><li>Walking - 30 minutes</li></ul>";
            } else if (intensity === "medium") {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Yoga - 30 minutes</li><li>Light Jogging - 20 minutes</li></ul>";
            } else {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Cardio Dance - 30 minutes</li><li>Swimming - 40 minutes</li></ul>";
            }
        } else {
            if (intensity === "low") {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Gentle Stretching - 15 minutes</li><li>Walking - 20 minutes</li></ul>";
            } else if (intensity === "medium") {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Yoga - 30 minutes</li><li>Light Aerobics - 25 minutes</li></ul>";
            } else {
                suggestedWorkouts = "<h4>Suggested Workouts:</h4><ul><li>Moderate Walking - 30 minutes</li><li>Swimming - 30 minutes</li></ul>";
            }
        }

        setWorkouts(suggestedWorkouts);
    };

    return (
        <div>
            <header>
                <h1>Workout Suggestions for Pregnancy</h1>
            </header>
            <main>
                <section>
                    <h2>Select Your Trimester and Intensity</h2>
                    <label htmlFor="trimester">Trimester:</label>
                    <select id="trimester" value={trimester} onChange={(e) => setTrimester(e.target.value)}>
                        <option value="1">First Trimester</option>
                        <option value="2">Second Trimester</option>
                        <option value="3">Third Trimester</option>
                    </select>

                    <label htmlFor="intensity">Intensity Level:</label>
                    <select id="intensity" value={intensity} onChange={(e) => setIntensity(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>

                    <button onClick={showWorkouts}>Get Workout Suggestions</button>
                </section>

                <div className="workout-suggestions" dangerouslySetInnerHTML={{ __html: workouts }}></div>
            </main>
            <footer>
                <p>&copy; 2025 Pregnancy Dashboard</p>
            </footer>
        </div>
    );
};

export default WorkoutSuggestions;
