function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

/* ちなみに、 a > b が true だった場合、
   if 文内部の return で関数実行が中断されるため、
 else {} は必ずしも必要ではない。*/

document.write(`${4}と${7}のうち大きいのは${max(4, 7)}です。`);
