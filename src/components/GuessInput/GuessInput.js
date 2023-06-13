import React from 'react';

function GuessInput() {
    const [answer, setAnswer] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ guess: answer.toUpperCase() });
        setAnswer('');
    };

    return (
        <form class="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={answer}
                onChange={(event) => {
                    setAnswer(event.target.value);
                }}
            />
        </form>
    );
}

export default GuessInput;
