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
import { Trophy, XCircle } from 'lucide-react';

const GameModal = ({ isOpen, gameStatus, targetWord, guesses, onPlayAgain }) => {
  const isWon = gameStatus === 'won';

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-black border-2 border-green-500 text-green-400 matrix-glow">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-green-400">
            {isWon ? (
              <>
                <Trophy className="h-6 w-6 text-yellow-400" />
                ACCESS GRANTED
              </>
            ) : (
              <>
                <XCircle className="h-6 w-6 text-red-400" />
                ACCESS DENIED
              </>
            )}
          </DialogTitle>
          <DialogDescription className="text-green-300">
            {isWon
              ? `You cracked the code in ${guesses} ${guesses === 1 ? 'attempt' : 'attempts'}!`
              : `The word was: ${targetWord}`}
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