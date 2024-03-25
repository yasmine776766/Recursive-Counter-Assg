import React, { useState } from "react";

const Counter = ({ depth, parentCount }) => {
  const [childCount, setChildCount] = useState(0); 
  const [isVisible, setIsVisible] = useState(true);
  const [childNodes, setChildNodes] = useState([]);

  const handleIncrement = () => {
    setChildCount(childCount + 1); 
    setChildNodes(prevChildNodes => [
      ...prevChildNodes,
      <Counter key={childCount + 1} depth={depth + 1} parentCount={childCount === 0 ? 1 : childCount + 1} /> 
    ]);
  };

  const handleDecrement = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
      setChildNodes(prevChildNodes =>
        prevChildNodes.slice(0, -1) 
      );
    }
  };

  return isVisible ? (
    <div style={{ marginLeft: depth * 20 }}>
      <span>-</span>
      {depth === 0 ? 1 : parentCount} {/* Set the value to 1 if it's the first parent counter */}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button> {/* Decrement button */}
      <br />
      {childNodes}
    </div>
  ) : (
    <></>
  );
};

export default Counter;
