import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Game() {
    // running | won | lost
    const [gameStatus, setGameStatus] = React.useState('running');
    const [answer, setAnswer] = React.useState(() => sample(WORDS));
    const [guesses, setGuesses] = React.useState([]);

    const handleAddGuess = (guess) => {
        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);

        if (guess === answer) {
            setGameStatus('won');
        } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lost');
        }
    };

    function handleRestart() {
        const newAnswer = sample(WORDS);
        setAnswer(newAnswer);
        setGuesses([]);
        setGameStatus('running');
    }

    const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

    return (
        <>
            <GuessResults validatedGuesses={validatedGuesses} />

            <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />

            <Keyboard validatedGuesses={validatedGuesses} />

            {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart} />}

            {gameStatus === 'lost' && <LostBanner answer={answer} handleRestart={handleRestart} />}
        </>
    );
}

export default Game;
