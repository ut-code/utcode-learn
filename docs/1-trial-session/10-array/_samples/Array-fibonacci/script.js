// 配列.push 関数を用いて、フィボナッチ数列の配列を作成
const f = [1, 1];
for (let i = 0; i < 100; i += 1) {
  f.push(f[f.length - 1] + f[f.length - 2]);
}

// 作成した配列の各要素を for ～ of 文を用いて出力
for (const item of f) {
  document.write(item);
}