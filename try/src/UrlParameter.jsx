import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams(); // URLパラメータの取得
  const { search } = useLocation(); // クエリパラメータの取得
  const queryParams = new URLSearchParams(search);
  const name = queryParams.get("name"); // クエリパラメータ 'name' の取得
  console.log(search);
  return (
    <div>
      <h1> UrlParameterページです</h1>
      <p>パラメータは{id}です。</p>
      <p>クエリパラメータ 'name' は{name}です。</p>
    </div>
  );
};
