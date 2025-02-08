// Mood Tracker Component
import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');

  const handleMoodSubmit = () => {
    // Submit mood logic (e.g., API call or local storage)
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <select onChange={(e) => setMood(e.target.value)}>
        <option value="">Select your mood</option>
        <option value="happy">😊 Happy</option>
        <option value="sad">😢 Sad</option>
        <option value="anxious">😟 Anxious</option>
        <option value="calm">😌 Calm</option>
      </select>
      <button onClick={handleMoodSubmit}>Submit Mood</button>
    </div>
  );
};

export default MoodTracker;
