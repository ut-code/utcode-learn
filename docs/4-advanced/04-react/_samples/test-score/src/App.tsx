const score: number = 80;

export default function App() {
  return (
    <>
      {score >= 80 ? (
        <div>大変よくできました。</div>
      ) : score >= 50 ? (
        <div>よくできました。</div>
      ) : (
        <div>もう少し頑張りましょう。</div>
      )}
    </>
  );
}
