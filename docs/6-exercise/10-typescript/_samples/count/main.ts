function count<T>(a: T[], f: (x: T) => boolean): number {
  let result = 0;
  for (const x of a) {
    if (f(x)) result += 1;
  }
  return result;
}

// 使用例
console.log(count([1, 2, 3], (x) => x >= 2)); // 2
console.log(count(["a", "aa"], (x) => x.length === 2)); // 1
