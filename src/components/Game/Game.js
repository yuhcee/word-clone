import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const gameWon = guesses.length > 0 && checkGuess(guesses.at(-1), answer).every((result) => result.status === 'correct');
    const gameLost = !gameWon && guesses.length >= NUM_OF_GUESSES_ALLOWED;
    console.log({ gameLost, gameWon });

    const handleAddGuess = (guess) => {
        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);
    };
    return (
        <>
            <GuessResults guesses={guesses} answer={answer} gameWon={gameWon} gameLost={gameLost} />
            <GuessInput handleAddGuess={handleAddGuess} disabled={gameLost || gameWon} />
            <Banner gameWon={gameWon} gameLost={gameLost} guessCount={guesses.length} answer={answer} />
        </>
    );
}

export default Game;
