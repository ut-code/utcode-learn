---
title: オブジェクト
---

import Term from "@site/src/components/Term";

## <Term type="javascriptObject">オブジェクト</Term>

JavaScript で扱うことのできる<Term type="javascriptValue">値</Term>の種類として、これまで<Term type="javascriptNumber">数値</Term>、<Term type="javascriptString">文字列</Term>、<Term type="javascriptBoolean">論理値</Term>を扱ってきました。<Term strong type="javascriptObject">オブジェクト</Term>もまた、<Term type="javascript">JavaScript</Term> の<Term type="javascriptValue">値</Term>ですが、今まで扱ってきた<Term type="javascriptValue">値</Term>とは少し性質が異なります。

オブジェクトを用いると、これまで扱ってきたような単純な<Term type="javascriptValue">値</Term>を複数まとめて一つの<Term type="javascriptValue">値</Term>として扱うことができます。

![値の種類・論理値付き](./value-types-with-object.drawio.svg)

## 論理<Term type="javascriptOperator">演算子</Term>

<p><Term type="javascriptBoolean">論理値</Term>に対して適用できる<Term type="javascriptOperator">演算子</Term>が存在します。</p>

```javascript
let isMonsterBig = true;
let isMonsterSmall = !true; // false
let isHunterStrong = false;
let shouldEscape = !isHunterStrong && isMonsterBig; // true
let shouldFight = isHunterStrong || isMonsterSmall; // false
```

詳細は以下の通りです。 `!` のみが作用する対象を 1 つしかとらないことに注意してください。

| 演算子                    | 意味       | 詳細                                                                 |
| ------------------------- | ---------- | -------------------------------------------------------------------- |
| `!`                       | ～ではない | `true` ならば `false`、`false` ならば `true`                         |
| `&&`                      | かつ       | 両方 `true` ならば `true`、どちらか 1 つでも `false` ならば `false`  |
| <code>&#124;&#124;</code> | または     | 両方 `false` ならば `false` 、どちらか 1 つでも `true` ならば `true` |

## 比較<Term type="javascriptOperator">演算子</Term>

比較<Term type="javascriptOperator">演算子</Term>は、複数の<Term type="javascriptValue">値</Term>を比較して、単一の<Term type="javascriptBoolean">論理値</Term>を得ます。

```javascript
let age = 15;
let height = 155;
let isFourteen = age === 14; // false
let isNotFourteen = age !== 14; // true
let isChild = age < 20; // true
let canRideRollerCoasters = age >= 10 && height >= 140; // true
```

各<Term type="javascriptOperator">演算子</Term>の詳細は、次の通りです。

| 演算子 | 意味       | 詳細                            |
| ------ | ---------- | ------------------------------- |
| `===`  | 等しい     |                                 |
| `!==`  | 等しくない |                                 |
| `<`    | 小なり     | 左辺が右辺より小さければ `true` |
| `<=`   | 以下       | 左辺が右辺より以下ならば `true` |
| `>`    | 大なり     | 左辺が右辺より大きければ `true` |
| `>=`   | 以上       | 左辺が右辺より以上ならば `true` |

`&&` や `||` よりも比較<Term type="javascriptOperator">演算子</Term>の方が<Term type="javascriptOperatorPriority">優先順位</Term>が高いため、最後の例のように複数の条件を「かつ」「または」などで組み合わせることは容易です。
