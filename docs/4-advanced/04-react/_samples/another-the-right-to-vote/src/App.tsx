const age: number = 20;

export default function App() {
  let message: JSX.Element;
  if (age < 18) {
    message = <span>選挙権はありません</span>;
  } else if (age < 25) {
    message = <span>投票に行けます</span>;
  } else {
    message = <span>衆議院議員に立候補できます</span>;
  }
  return message;
}
