import React from 'react';
import { range } from '../../utils';

const Cell = ({ letter, status }) => {
    const cellStatus = status ? `cell ${status}` : 'cell';
    return <span className={cellStatus}>{letter}</span>;
};

function Guess({ currentGuess }) {
    return (
        <p className="guess">
            {range(5).map((num) => (
                <Cell key={num} letter={currentGuess ? currentGuess[num].letter : undefined} status={currentGuess ? currentGuess[num].status : undefined} />
            ))}
        </p>
    );
}

export default Guess;
