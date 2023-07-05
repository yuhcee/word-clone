import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessResults({ guesses, answer }) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <p className="guess" key={num}>
                    {range(5).map((index) => {
                        const validateGuess = guesses.length > num ? checkGuess(guesses[num].guess, answer) : [{}];

                        return (
                            <span className={`cell ${validateGuess[index] ? validateGuess[index].status : ''}`} key={index}>
                                {guesses.length > num && guesses[num].guess.length > index ? guesses[num].guess[index] : ''}
                            </span>
                        );
                    })}
                </p>
            ))}
        </div>
    );
}

export default GuessResults;
