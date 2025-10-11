import React from 'react';

const Tile = ({ letter, state, animate }) => {
  const stateClasses = {
    correct: 'bg-green-600 border-green-500 matrix-glow-strong',
    present: 'bg-yellow-600 border-yellow-500',
    absent: 'bg-gray-700 border-gray-600',
    empty: 'bg-black border-green-900',
    filled: 'bg-black border-green-500 scale-105'
  };

  return (
    <div
      className={`
        w-14 h-14 border-2 rounded flex items-center justify-center
        text-2xl font-bold transition-all duration-300
        ${stateClasses[state] || stateClasses.empty}
        ${animate ? 'animate-flip' : ''}
      `}
    >
      {letter}
    </div>
  );
};

const GameBoard = ({ guesses, currentGuess, maxGuesses, wordLength }) => {
  const rows = [];

  // Render previous guesses
  guesses.forEach((guess, i) => {
    const row = [];
    for (let j = 0; j < wordLength; j++) {
      row.push(
        <Tile
          key={`${i}-${j}`}
          letter={guess.word[j]}
          state={guess.evaluation[j]}
          animate={false}
        />
      );
    }
    rows.push(
      <div key={i} className="flex gap-2 mb-2">
        {row}
      </div>
    );
  });

  // Render current guess row
  if (guesses.length < maxGuesses) {
    const row = [];
    for (let j = 0; j < wordLength; j++) {
      const letter = currentGuess[j] || '';
      row.push(
        <Tile
          key={`current-${j}`}
          letter={letter}
          state={letter ? 'filled' : 'empty'}
          animate={false}
        />
      );
    }
    rows.push(
      <div key="current" className="flex gap-2 mb-2">
        {row}
      </div>
    );
  }

  // Render empty rows
  for (let i = rows.length; i < maxGuesses; i++) {
    const row = [];
    for (let j = 0; j < wordLength; j++) {
      row.push(
        <Tile key={`${i}-${j}`} letter="" state="empty" animate={false} />
      );
    }
    rows.push(
      <div key={i} className="flex gap-2 mb-2">
        {row}
      </div>
    );
  }

  return <div className="flex flex-col">{rows}</div>;
};

export default GameBoard;