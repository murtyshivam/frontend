import React, { useState } from 'react';
import { add } from './stringCalculator';
import './App.css'; 

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
        <div className="container"> {/* Main container */}
            <h1>String Calculator App</h1> {/* Main heading */}
            <div className="input-section"> {/* Input section for alignment */}
                <label htmlFor="input">Enter numbers :</label>
                <input
                    id="input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button id="calculate" onClick={handleCalculate}>
                    Add
                </button>
            </div>
            <div id="result">{result}</div>
        </div>
    );
};

export default App;
