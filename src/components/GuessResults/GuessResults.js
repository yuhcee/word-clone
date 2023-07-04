import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
    console.log(guesses);
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <p className="guess" key={num}>
                    {range(5).map((index) => (
                        <span className="cell" key={index}>
                            {guesses.length > num && guesses[num].guess.length > index ? guesses[num].guess[index] : ''}
                        </span>
                    ))}
                </p>
            ))}
        </div>
    );
}

export default GuessResults;
