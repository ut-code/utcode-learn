class Cat {
  weight = 5;

  isKitten = true;

  meow() {
    const div = document.createElement("div");
    div.textContent = "ニャー";
    document.body.appendChild(div);
  }
}

class Dog {
  weight = 10;

  isRetriever = false;

  bark() {
    const div = document.createElement("div");
    div.textContent = "ワンワン";
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

  growl() {
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
bear.growl();
