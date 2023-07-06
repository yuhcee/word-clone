import React from 'react';

function GuessInput({ handleAddGuess, gameStatus }) {
    const [guess, setGuess] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddGuess(guess);
        setGuess('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                minLength={5}
                maxLength={5}
                pattern="[a-zA-z]{5}"
                title="5 letter word"
                id="guess-input"
                type="text"
                value={guess}
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase());
                }}
                disabled={gameStatus !== 'running'}
            />
        </form>
    );
}

export default GuessInput;
