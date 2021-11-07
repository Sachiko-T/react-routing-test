import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <p>パラメータの扱い</p>
      <Link to="/page2/0011?name=taro">id: 0011, 太郎</Link>
      <br />
      <Link to="/page2/0015?name=hanako">id: 0015, 花子</Link>
    </div>
  );
};
