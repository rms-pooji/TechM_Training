import React from 'react';
import Flower from './Flower'; // Import the Flower component

function App() {
  return (
    <div className="App">
      <Flower name="Rose" /> {/* Pass "Rose" as the name prop */}
    </div>
  );
}

export default App;
