let box = 25;
let weight = 1000;

if (box <= 30 && weight <= 2000) {
  document.write('<p style="color: green">出発できます</p>');
} else if (box > 30 && weight <= 2000) {
  document.write('<p style="color: red">箱の数を減らしてください</p>');
} else if (box <= 30 && weight > 2000) {
  document.write('<p style="color: red">重量を減らしてください</p>');
} else {
  document.write('<p style="color: red">箱の数と重量を減らしてください</p>');
}
