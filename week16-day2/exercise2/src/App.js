import React, {useRef, useState} from 'react';
import "./App.css";

const CharacterCounter = () => {
  const [count, updateCount] = useState(0)
  const inputRef = useRef();

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    // Update the character count based on textLength
    updateCount(textLength);
  };



  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {count}</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;