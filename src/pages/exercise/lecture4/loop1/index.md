import ViewSource from "@site/src/components/ViewSource";

## 課題(繰り返し)

正の整数 n に対して、以下の操作を考えます。

- n が偶数の場合、n を 2 で割る。
- n が奇数の場合、n に 3 をかけて 1 を足す。

`n = 27` から始めて、`n` が `1` になるまで操作を繰り返します。それぞれの操作の後の `n` の値を順番に表示するプログラムを、while 文を用いて作成してください。

例えば、`n = 3` から始めて操作を繰り返すと、`n` の値は 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 と変化します。

:::tip `a` を `b` で割った余り

`a` を `b` で割った余りは `a % b` と表します。これを用いて `n` が偶数か奇数かを判定しましょう。

```javascript
let n = 27;
if (n % 2 === 0) {
  document.write("nは偶数です");
} else {
  document.write("nは奇数です");
}
```

:::

### 解答例

<ViewSource url={import.meta.url} path="_samples/collatz-problem" />
