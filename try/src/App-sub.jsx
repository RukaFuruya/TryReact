import { useState } from "react";
import "./index.css";

export default function App() {
  // カウント保持用のステート
  // countの初期値を0に設定
  const [count, setCount] = useState(0);

  //   カウンター用のボタンが押された時に、setCountとして＋１
  const onClickCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* countの初期値（０）表示 */}
      <p>{count}</p>
      <button onClick={onClickCounter}>カウントアップ</button>
      <br />
    </div>
  );
}
