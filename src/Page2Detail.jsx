import { useParams, useLocation } from "react-router-dom";

export const Page2Detail = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>Page2Detailです</h1>
      <p>idは{id}です</p>
      <p>nameは{query.get("name")}です</p>
    </div>
  );
};
