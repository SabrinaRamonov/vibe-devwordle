import React from 'react';
import { Delete } from 'lucide-react';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
];

const Key = ({ letter, state, onPress, disabled }) => {
  const stateClasses = {
    correct: 'bg-green-600 hover:bg-green-700 border-green-500',
    present: 'bg-yellow-600 hover:bg-yellow-700 border-yellow-500',
    absent: 'bg-gray-700 hover:bg-gray-800 border-gray-600',
    default: 'bg-green-900 hover:bg-green-800 border-green-700'
  };

  const isSpecial = letter === 'ENTER' || letter === 'BACKSPACE';
  const displayContent = letter === 'BACKSPACE' ? <Delete className="h-5 w-5" /> : letter;

  return (
    <button
      onClick={() => onPress(letter)}
      disabled={disabled}
      className={`
        ${isSpecial ? 'px-4' : 'px-3'}
        py-4 rounded border-2 font-bold text-sm
        transition-all duration-200
        ${stateClasses[state] || stateClasses.default}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}
        text-green-100
      `}
    >
      {displayContent}
    </button>
  );
};

const Keyboard = ({ onKeyPress, letterStates, disabled }) => {
  return (
    <div className="flex flex-col gap-2 max-w-2xl">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="flex gap-1 justify-center">
          {row.map(letter => (
            <Key
              key={letter}
              letter={letter}
              state={letterStates[letter]}
              onPress={onKeyPress}
              disabled={disabled}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;