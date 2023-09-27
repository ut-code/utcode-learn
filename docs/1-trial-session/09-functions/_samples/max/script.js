function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

/* a > b がtrueだった場合、if文内部のreturnで関数実行が中断されるため、
} else { は必ずしも必要ではない。(あっても動く)*/


document.write(`${4}と${7}のうち大きいのは${max(4,7)}です。`);