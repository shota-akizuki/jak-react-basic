/* eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
  console.log('最初');
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const countUp = () => {
    setNum(num + 1);
  };
  const countDown = () => {
    setNum(num - 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffectに空の配列を渡すことで最初の一回だけ走らせたい処理を持たせることができる
  //配列の入れた変数のみの関心を持つ（今回はnum）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        //すでにflagがtrueならsetFaceShowFlag(true);は呼びたくのいので、
        //左側がfalseの場合に右側の処理を使用
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <p>{num}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {/* faceShowFlagがtrueの場合にpタグを表示 */}
      {faceShowFlag && <p>\(゜Ｑ。)/</p>}
    </>
  );
};

export default App;
