import { useState, useCallback } from "react";
import "./index.css";
import { ChildArea } from "./childArea";

export default function App() {
  // 表示の有無用のステート（初期値=false）
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };
  // ボタンが押されたらオン/オフを切り替える
  const changeOpen = () => {
    setOpen(!open);
  };

  const clickChange = useCallback(() => setOpen(false), []);
  return (
    <div>
      <input value={text} onChange={changeText} />
      <br />
      <br />
      <button onClick={changeOpen}>表示</button>
      {/* 表示部分のコンポーネント化 */}
      <ChildArea open={open} clickChange={clickChange} />
    </div>
  );
}
