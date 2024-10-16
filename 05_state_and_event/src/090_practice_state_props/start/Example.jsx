import {useState} from 'react'
const Example = () => {
  const [count,setCount]=useState(0)
  return (
    <>
      <h3>練習問題</h3>
      <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>

        <CountResult title="カウント" count={count} setCount={setCount} />
        <CountUpdate count={count} setCount={setCount}/> 
    </>
  );
};
const CountResult = ({count}) => <h3>カウント:{count}</h3>

const CountUpdate = ({setCount}) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount((prevstate)=>prevstate-1)
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
