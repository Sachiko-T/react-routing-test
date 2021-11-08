import { useHistory } from "react-router-dom";

export const Page3 = () => {
  const history = useHistory();
  const onClickDetail = () => history.push("/page3/detail");
  return (
    <div>
      <h1>Page3です</h1>
      <p>linkタグを使わずにJSでページを遷移</p>
      <button onClick={onClickDetail}>ボタンで遷移</button>
    </div>
  );
};
