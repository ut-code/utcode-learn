class Animal {
  weight;

  sound;

  say() {
    alert(this.sound);
  }
}

class Cat extends Animal {
  weight = 5;

  isKitten = true;

  sound = "ニャー";
}

class Dog extends Animal {
  weight = 10;

  isPuppy = false;

  sound = "ワンワン";
}

class Chicken extends Animal {
  weight = 2.8;

  isDelicious = true;

  sound = "コケコッコー";
}

class Bear extends Animal {
  weight = 80;

  sound = "グルルル";
}

const cat = new Cat();
const dog = new Dog();
const chicken = new Chicken();
const bear = new Bear();

cat.say();
dog.say();
chicken.say();
bear.say();
