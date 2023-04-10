const score: number = 80;

function App() {
  let message: JSX.Element;
  if (score >= 80) {
    message = <div>大変よくできました。</div>;
  } else if (score >= 50) {
    message = <div>よくできました。</div>;
  } else {
    message = <div>もう少し頑張りましょう。</div>;
  }
  return message;
}

export default App;
