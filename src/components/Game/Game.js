import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const gameLost = guesses.length >= NUM_OF_GUESSES_ALLOWED;

    const handleAddGuess = (guess) => {
        const newGuess = { guess, id: crypto.randomUUID() };
        const newGuesses = [...guesses, newGuess];
        setGuesses(newGuesses);
    };
    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessInput handleAddGuess={handleAddGuess} disabled={gameLost} />
        </>
    );
}

export default Game;
