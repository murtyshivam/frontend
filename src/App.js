// src/StringCalculator.js
import React, { useState } from 'react';
import { add } from './stringCalculator'; // Import your add function

const App = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(`Result: ${sum}`);
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div>
            <input
                id="input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button id="calculate" onClick={handleCalculate}>
                Add
            </button>
            <div id="result">{result}</div>
        </div>
    );
};

export default App;
