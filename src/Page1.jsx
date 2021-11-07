import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です</h1>
      <p>静的ルート</p>
      <Link to="/page1/about">about</Link>
    </div>
  );
};
