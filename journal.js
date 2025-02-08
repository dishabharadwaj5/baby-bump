import React, { useState } from 'react';

const Journaling = () => {
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    // Save entry logic (e.g., API call or local storage)
  };

  return (
    <div>
      <h2>Journaling</h2>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
      />
      <button onClick={handleSave}>Save Entry</button>
    </div>
  );
};

export default Journaling;
