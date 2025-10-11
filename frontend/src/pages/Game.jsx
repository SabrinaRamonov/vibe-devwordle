import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from '../components/GameBoard';
import Keyboard from '../components/Keyboard';
import GameModal from '../components/GameModal';
import { getRandomWord, isValidWord } from '../data/mock';
import { RotateCcw, Flag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

const Game = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost, gaveup
  const [letterStates, setLetterStates] = useState({}); // correct, present, absent
  const { toast } = useToast();

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newWord = getRandomWord();
    setTargetWord(newWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setLetterStates({});
  };

  const evaluateGuess = (guess) => {
    const result = [];
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');
    const letterCount = {};

    // Count letters in target
    targetLetters.forEach(letter => {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    });

    // First pass: mark correct positions
    guessLetters.forEach((letter, i) => {
      if (letter === targetLetters[i]) {
        result[i] = 'correct';
        letterCount[letter]--;
      }
    });

    // Second pass: mark present letters
    guessLetters.forEach((letter, i) => {
      if (result[i] !== 'correct') {
        if (targetLetters.includes(letter) && letterCount[letter] > 0) {
          result[i] = 'present';
          letterCount[letter]--;
        } else {
          result[i] = 'absent';
        }
      }
    });

    return result;
  };

  const updateLetterStates = (guess, evaluation) => {
    const newStates = { ...letterStates };
    guess.split('').forEach((letter, i) => {
      const currentState = newStates[letter];
      const newState = evaluation[i];

      if (newState === 'correct') {
        newStates[letter] = 'correct';
      } else if (newState === 'present' && currentState !== 'correct') {
        newStates[letter] = 'present';
      } else if (!currentState) {
        newStates[letter] = newState;
      }
    });
    setLetterStates(newStates);
  };

  const submitGuess = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH) {
      toast({
        title: "Not enough letters",
        description: "Please enter a 5-letter word",
        variant: "destructive"
      });
      return;
    }

    if (!isValidWord(currentGuess)) {
      toast({
        title: "Invalid word",
        description: "Not in CS vocabulary list",
        variant: "destructive"
      });
      return;
    }

    const evaluation = evaluateGuess(currentGuess);
    const newGuesses = [...guesses, { word: currentGuess, evaluation }];
    setGuesses(newGuesses);
    updateLetterStates(currentGuess, evaluation);

    if (currentGuess === targetWord) {
      setGameStatus('won');
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameStatus('lost');
    }

    setCurrentGuess('');
  }, [currentGuess, guesses, targetWord, letterStates, toast]);

  const handleKeyPress = useCallback((key) => {
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      submitGuess();
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < WORD_LENGTH && /^[A-Z]$/.test(key)) {
      setCurrentGuess(prev => prev + key);
    }
  }, [currentGuess, gameStatus, submitGuess]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleKeyPress('ENTER');
      } else if (e.key === 'Backspace') {
        handleKeyPress('BACKSPACE');
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col">
      {/* Matrix rain effect background */}
      <div className="matrix-bg"></div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-green-900 bg-black/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wider matrix-glow">CS WORDLE</h1>
          <Button
            onClick={startNewGame}
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-950 hover:text-green-300"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            New Game
          </Button>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
        <GameBoard
          guesses={guesses}
          currentGuess={currentGuess}
          maxGuesses={MAX_GUESSES}
          wordLength={WORD_LENGTH}
        />
        
        <div className="mt-8">
          <Keyboard
            onKeyPress={handleKeyPress}
            letterStates={letterStates}
            disabled={gameStatus !== 'playing'}
          />
        </div>
      </main>

      {/* Game Result Modal */}
      <GameModal
        isOpen={gameStatus !== 'playing'}
        gameStatus={gameStatus}
        targetWord={targetWord}
        guesses={guesses.length}
        onPlayAgain={startNewGame}
      />
    </div>
  );
};

export default Game;