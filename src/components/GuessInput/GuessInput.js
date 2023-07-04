import React from 'react';

function GuessInput({ handleAddGuess }) {
    const [answer, setAnswer] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ guess: answer });
        handleAddGuess(answer);
        setAnswer('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={answer}
                onChange={(event) => {
                    setAnswer(event.target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
