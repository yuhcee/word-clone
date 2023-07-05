import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';

function GuessResults({ guesses, answer, gameWon, gameLost }) {
    const checkGuessResults = guesses.map((guess) => checkGuess(guess, answer));

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
                const currentGuess = guesses[num] ? guesses[num] : '';
                const currentCheckGuessResult = checkGuessResults[num] || [];

                return (
                    <p className="guess" key={num}>
                        {range(5).map((index) => {
                            const currentLetter = currentGuess[index] || '';
                            const cellStatus = currentGuess.length && currentCheckGuessResult.length ? currentCheckGuessResult[index].status : '';
                            return (
                                <span className={`cell ${cellStatus}`} key={index}>
                                    {currentLetter}
                                </span>
                            );
                        })}
                    </p>
                );
            })}
            <Banner gameWon={gameWon} gameLost={gameLost} guessCount={guesses.length} answer={answer} />
        </div>
    );
}

export default GuessResults;
