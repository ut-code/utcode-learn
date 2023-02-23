---
title: class
---

## 第４回　クラスの問題

次のコードは、ブラウザ上に動物の鳴き声を表示するプログラムです。

```html title="animals.html"
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>動物</title>
</head>
<body>
    <script src="animals.js"></script>
</body>
</html>
```

```javascript title="animals.js"
class Cat {
  weight = 5;

  isKitten = true;

  meow() {
    const div = document.createElement("div");
    div.textContent = "にゃー"
    document.body.appendChild(div);
  }
}

class Dog {
  weight = 10;

  isRetriever = false;

  bark() {
    const div = document.createElement("div");
    div.textContent = "わんわん"
    document.body.appendChild(div);
  }
}

class Chicken {
  weight = 2.8;

  isDelicious = true;

  crow() {
    const div = document.createElement("div");
    div.textContent = "コケコッコー"
    document.body.appendChild(div);
  }
}

const cat = new Cat();
const dog = new Dog();
const chicken = new Chicken();

cat.meow();
dog.bark();
chicken.crow();
```

1. 新たにbear（熊）クラスを追加し、体重を80として、`grr` クラスで「グルルル」と鳴くようにしてみましょう。

2. 1のようにどんどん動物を増やしていく事もできますが、いくつかの性質や処理は共通点があり、１つの親クラスにまとめることができるように見えます。どのようなクラスを用意すればきれいにまとめることができるでしょうか？

## 解答例

### 1 の解答例

```javascript title="animals.js"
class Cat {
  weight = 5;

  isKitten = true;

  meow() {
    const div = document.createElement("div");
    div.textContent = "にゃー";
    document.body.appendChild(div);
  }
}

class Dog {
  weight = 10;

  isRetriever = false;

  bark() {
    const div = document.createElement("div");
    div.textContent = "わんわん";
    document.body.appendChild(div);
  }
}

class Chicken {
  weight = 2.8;

  isDelicious = true;

  crow() {
    const div = document.createElement("div");
    div.textContent = "コケコッコー";
    document.body.appendChild(div);
  }
}

class Bear {
  weight = 80;

  grr() {
    const div = document.createElement("div");
    div.textContent = "グルルル";
    document.body.appendChild(div);
  }
}

const cat = new Cat();
const dog = new Dog();
const chicken = new Chicken();
const bear = new Bear();

cat.meow();
dog.bark();
chicken.crow();
bear.grr();
```

### 2 の解答例

以下のようなクラス `animal` を用意します。つまり、動物の体重という性質や動物が「鳴く」という処理は同じであり、変わるのは声のみなので、一括で扱ってしまいます。

```javascript
class animal {
  weight;

  sound;

  speak(sound) {
    const div = document.createElement("div");
    div.textContent = sound;
    document.body.appendChild(div);
  }
}
```

このようなクラスを作れば、次のようにコードをきれいに書くことができます。

```javascript title="animals.js"
class animal {
  weight;

  sound;

  speak(sound) {
    const div = document.createElement("div");
    div.textContent = sound;
    document.body.appendChild(div);
  }
}

class Cat extends animal {
  weight = 5;

  isKitten = true;

  sound = "にゃー";
}

class Dog extends animal {
  weight = 10;

  isRetriever = false;

  sound = "わんわん";
}

class Chicken extends animal {
  weight = 2.8;

  isDelicious = true;

  sound = "コケコッコー";
}

class Bear extends animal {
  weight = 80;

  sound = "グルルル";
}

const cat = new Cat();
const dog = new Dog();
const chicken = new Chicken();
const bear = new Bear();

cat.speak();
dog.speak();
chicken.speak();
bear.speak();

```

また、たとえばある正体不明の動物のインスタンスを引数として受け取ったときに鳴き声を表示する関数を作るとします。このとき、メソッドがバラバラだと次のように関数が長いコードになってしまいます。

```javascript
function showSound(animal){
    if(animal instanceof cat){
        animal.meow();
    }
    else if(animal instanceof dog){
        animal.bark();
    } 
    else if(animal instanceof chicken){
        animal.grr();
    }
    // 動物が増えるとさらに条件分岐が続く
}
```

これも、親クラスを作ることで短く書けます。

```javascript
function showSound(animal){
    animal.speak();
    // なんの動物であるかを気にする必要がない
}
```

このように、同じ処理でも動物によって処理が変わるにもかかわらず、コードは１つにまとめることができました。この「同じ処理でも動物（クラス、引数など）によって処理が変わる」ことを、**ポリモーフィズム**と言います。
