import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Trophy, XCircle, Flag } from 'lucide-react';

const GameModal = ({ isOpen, gameStatus, targetWord, guesses, onPlayAgain }) => {
  const isWon = gameStatus === 'won';
  const gaveUp = gameStatus === 'gaveup';

  const getTitle = () => {
    if (isWon) {
      return (
        <>
          <Trophy className="h-6 w-6 text-yellow-400" />
          ACCESS GRANTED
        </>
      );
    } else if (gaveUp) {
      return (
        <>
          <Flag className="h-6 w-6 text-orange-400" />
          SURRENDERED
        </>
      );
    } else {
      return (
        <>
          <XCircle className="h-6 w-6 text-red-400" />
          ACCESS DENIED
        </>
      );
    }
  };

  const getDescription = () => {
    if (isWon) {
      return `You cracked the code in ${guesses} ${guesses === 1 ? 'attempt' : 'attempts'}!`;
    } else if (gaveUp) {
      return `Better luck next time! You gave up after ${guesses} ${guesses === 1 ? 'attempt' : 'attempts'}.`;
    } else {
      return `Game over! The word was: ${targetWord}`;
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-black border-2 border-green-500 text-green-400 matrix-glow">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-green-400">
            {getTitle()}
          </DialogTitle>
          <DialogDescription className="text-green-300">
            {getDescription()}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="text-center">
            <p className="text-lg mb-2 text-green-300">Target Word:</p>
            <p className="text-3xl font-bold tracking-wider matrix-glow-strong">{targetWord}</p>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={onPlayAgain}
            className="w-full bg-green-600 hover:bg-green-700 text-black font-bold"
          >
            REBOOT SYSTEM
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;