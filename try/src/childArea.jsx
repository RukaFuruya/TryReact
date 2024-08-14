import { memo } from "react";

const style = {
  width: "200%",
  height: "200px",
  backgroundColor: "khaki",
};

export const ChildArea = memo((props) => {
  const { open , clickChange} = props;
  const data = [...Array(2000).keys()];
  console.log("レンダリングされている！");
  data.forEach(() => {
    console.log("・・・");
  });
  if (!open) {
    return null;
  }
  return (
    <>
      <div style={style}>
        <p>子ポーネント</p>
        <br />
        <button onClick={clickChange}>閉じる</button>
      </div>
    </>
  );
});
