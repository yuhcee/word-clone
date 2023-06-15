import React from 'react';

function GuessResults({ guesses }) {
    return (
        <div class="guess-results">
            {guesses.map(({ guess, id }) => (
                <p key={id} class="guess">
                    {guess}
                </p>
            ))}
        </div>
    );
}

export default GuessResults;
