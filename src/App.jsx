import React, { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
  };
  const countDown = () => {
    setNum(num - 1);
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <p>{num}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default App;
