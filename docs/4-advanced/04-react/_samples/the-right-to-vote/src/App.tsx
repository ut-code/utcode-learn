const age: number = 20;

export default function App() {
  return (
    <>
      {age < 18 ? (
        <div>選挙権はありません</div>
      ) : age < 25 ? (
        <div>投票に行けます</div>
      ) : (
        <div>衆議院議員に立候補できます</div>
      )}
    </>
  );
}
