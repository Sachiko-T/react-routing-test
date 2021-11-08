import { useHistory } from "react-router-dom";

export const Page3Detail = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page3Detailです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
