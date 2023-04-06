class Cat {
  weight = 5;

  isKitten = true;

  meow() {
    alert("ミャー");
  }
}

class Dog {
  weight = 10;

  isPuppy = false;

  bark() {
    alert("ワンワン");
  }
}

class Chicken {
  weight = 2.8;

  isDelicious = true;

  crow() {
    alert("コケコッコー");
  }
}

class Bear {
  weight = 80;

  growl() {
    alert("グルルル");
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
