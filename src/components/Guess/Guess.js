import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Cell = ({ letter, status }) => {
    const cellStatus = status ? `cell ${status}` : 'cell';
    return <span className={cellStatus}>{letter}</span>;
};

function Guess({ currentGuess, answer }) {
    const result = checkGuess(currentGuess, answer);
    return (
        <p className="guess">
            {range(5).map((num) => (
                <Cell 
                  key={num} 
                  letter={result ? result[num].letter : ''} 
                  status={result ? result[num].status : ''} />
            ))}
        </p>
    );
}

export default Guess;
