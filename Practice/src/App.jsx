import React, { useState, useEffect } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols]);

  const generatePassword = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Password Generator</h1>
      <div>
        <label>
          Length:
          <input 
            type="number" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            min="1"
          />
        </label>
      </div>
      <div>
        <label>
          Include Numbers:
          <input 
            type="checkbox" 
            checked={includeNumbers} 
            onChange={(e) => setIncludeNumbers(e.target.checked)} 
          />
        </label>
      </div>
      <div>
        <label>
          Include Symbols:
          <input 
            type="checkbox" 
            checked={includeSymbols} 
            onChange={(e) => setIncludeSymbols(e.target.checked)} 
          />
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <h2>Your Password:</h2>
        <p style={{ fontFamily: 'monospace', fontSize: '20px' }}>{password}</p>
      </div>
    </div>
  );
};

export default App;
