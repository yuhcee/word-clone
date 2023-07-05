import React from 'react';

function Banner({ gameWon, gameLost, guessCount, answer }) {
    return (
        <>
            {gameWon && (
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in <strong>{guessCount} guesses</strong>.
                    </p>
                </div>
            )}
            {gameLost && (
                <div className="sad banner">
                    <p>
                        Sorry, the correct answer is <strong>{answer}</strong>.
                    </p>
                </div>
            )}
        </>
    );
}

export default Banner;
