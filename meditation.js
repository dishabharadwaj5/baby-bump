// Meditation Component
import React from 'react';

const Meditation = () => {
  const meditations = [
    { title: 'Morning Calm', duration: '10 min', link: 'link_to_audio' },
    { title: 'Evening Relaxation', duration: '15 min', link: 'link_to_audio' },
  ];

  return (
    <div>
      <h2>Meditation</h2>
      <ul>
        {meditations.map((meditation, index) => (
          <li key={index}>
            <a href={meditation.link}>{meditation.title} - {meditation.duration}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meditation;
