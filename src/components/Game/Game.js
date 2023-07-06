import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState('running');

    const handleAddGuess = (guess) => {
        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);

        if (guess === answer) {
            setGameStatus('won');
        } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lost');
        }
    };

    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />
            {gameStatus !== 'running' && <Banner guessCount={guesses.length} answer={answer} />}
        </>
    );
}

export default Game;
