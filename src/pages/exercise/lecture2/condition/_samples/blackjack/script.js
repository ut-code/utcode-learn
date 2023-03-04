let numberOfA = 19;
let numberOfB = 22;

// 21を超えていた場合は0(最弱)として扱う
if (numberOfA > 21) numberOfA = 0;
if (numberOfB > 21) numberOfB = 0;

if (numberOfA > numberOfB) {
  document.write("Aさんの勝ち");
} else if (numberOfA < numberOfB) {
  document.write("Bさんの勝ち");
} else {
  document.write("引き分け");
}
