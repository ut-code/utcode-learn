let nameLength = 7;
if (4 <= nameLength && nameLength <= 10) {
  // 比較演算子を2つ並べるのではなく、論理演算子&&を用います。
  document.write("登録できます");
} else if (nameLength === 0) {
  // else if の else が抜けていました。
  document.write("名前を入力してください");
} else {
  document.write("名前は4文字以上10文字以下で入力してください");
}
