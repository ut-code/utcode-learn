function apply<T, U>(f: (x: T) => U, x: T): U {
  return f(x);
}

function double(x: number): string {
  return (2 * x).toString();
}

console.log(apply<number, string>(double, 2));
