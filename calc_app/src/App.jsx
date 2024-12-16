import { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Use eval for simplicity, but be cautious with untrusted input
    } catch (error) {
      setInput('Error');
    }
  };

  return (
      <div className="calculator">
        <div className="display">{input || '0'}</div>
        <div className="buttons">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((char) => (
              <button
                  key={char}
                  className={char === 'C' ? 'clear' : char === '=' ? 'equals' : 'button'}
                  onClick={() => {
                    if (char === 'C') return clearInput();
                    if (char === '=') return calculateResult();
                    handleButtonClick(char);
                  }}
              >
                {char}
              </button>
          ))}
        </div>
      </div>
  );
}

export default App;