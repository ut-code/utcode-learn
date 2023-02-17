---
title: オブジェクト
---

import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";

## <Term type="javascriptObject">オブジェクト</Term>

JavaScript で扱うことのできる<Term type="javascriptValue">値</Term>の種類として、これまで<Term type="javascriptNumber">数値</Term>、<Term type="javascriptString">文字列</Term>、<Term type="javascriptBoolean">論理値</Term>を扱ってきました。<Term strong type="javascriptObject">オブジェクト</Term>もまた、<Term type="javascript">JavaScript</Term> の<Term type="javascriptValue">値</Term>ですが、今まで扱ってきた<Term type="javascriptValue">値</Term>とは少し性質が異なります。

<Term type="javascriptObject">オブジェクト</Term>を用いると、これまで扱ってきたような単純な<Term type="javascriptValue">値</Term>を複数まとめて一つの<Term type="javascriptValue">値</Term>として扱うことができます。

今まで扱ってきたような「それ以上分解できない」<Term type="javascriptValue">値</Term>のことを<Term strong type="javascriptPrimitive">プリミティブ</Term>といい、<Term type="javascriptPrimitive">プリミティブ</Term>でない値はすべて<Term type="javascriptObject">オブジェクト</Term>です。

![値の種類・オブジェクト付き](./value-types-with-object.drawio.svg)

:::tip ほかの言語の経験者へ
JavaScript の<Term type="javascriptObject">オブジェクト</Term>は、ほかの言語でいう**辞書**や**連想配列**、**Map**に近いものです。ただ、こういったものと比べ、JavaScript の<Term type="javascriptObject">オブジェクト</Term>は使用頻度が非常に高いです。
:::

## オブジェクトの作成

<Term type="javascriptObject">オブジェクト</Term>は、複数の<Term strong type="javascriptProperty" strong>プロパティ</Term>と呼ばれる<Term type="javascriptValue">値</Term>を持ちます。<Term type="javascriptProperty">プロパティ</Term>にはそれぞれ名前がついています。<Term type="javascriptProperty">プロパティ</Term>の名前には文字列しか指定できませんが、<Term type="javascriptProperty">プロパティ</Term>の<Term type="javascriptValue">値</Term>としては <Term type="javascript">JavaScript</Term> で使用できるすべての<Term type="javascriptValue">値</Term>が使用可能です。

```javascript
let person = { name: "田中", age: 18 };
```

![プロパティ](properties.png)

<p><Term type="javascriptObject">オブジェクト</Term>の中に<Term type="javascriptObject">オブジェクト</Term>を入れることもできます。</p>

```javascript
let person = {
  name: "田中",
  scores: { math: 80, science: 90 },
};
```

:::note

<p><Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>は、<Term type="css">CSS</Term> における<Term type="cssProperty">プロパティ</Term>と似ているものの、全く異なるものです。文脈により何を意味しているのかが変わるので注意してください。</p>
:::

## <Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>を取得・変更する

ドット記号を用いることで、<Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>を取得・変更できます。通常の<Term type="javascriptVariable">変数</Term>のように扱えます。

```javascript
person.age = person.age + 1;
document.write(person.age);
```

## 課題

<p><Term type="javascriptObject">オブジェクト</Term>も<Term type="javascriptValue">値</Term>の一種なので、<Term type="javascriptFunction">関数</Term>の<Term type="javascriptParameter">引数</Term>や<Term type="javascriptReturnValue">戻り値</Term>として使用できます。</p>

`age` <Term type="javascriptProperty">プロパティ</Term>に 1 を加えた<Term type="javascriptObject">オブジェクト</Term>を返す関数 `incrementAge` を定義してみましょう。

```javascript
function incrementAge(person) {
  // ここに書く
}

let tanaka = { name: "田中", age: 18 };
let nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age); // 19 と表示されてほしい
```

<ViewSource url={import.meta.url} path="_samples/incrementAge" />
