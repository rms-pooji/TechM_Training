import React from 'react';

// Functional component called Flower that accepts props
function Flower(props) {
  return (
    <div className="flower-container">
      <h2>The name of this flower is: {props.name}</h2>
    </div>
  );
}

export default Flower;
