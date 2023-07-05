import React from 'react';

function GuessInput({ handleAddGuess, disabled }) {
    const [guess, setGuess] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (guess.length < 5) return;
        handleAddGuess(guess);
        setGuess('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase());
                }}
                disabled={disabled}
            />
        </form>
    );
}

export default GuessInput;
