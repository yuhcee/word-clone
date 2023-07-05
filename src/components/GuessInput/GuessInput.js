import React from 'react';

function GuessInput({ handleAddGuess }) {
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
                id="guess-input"
                type="text"
                value={guess}
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
