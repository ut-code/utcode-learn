let tanakaHandTotal = 19;
let satoHandTotal = 22;

// 21 を超えていた場合は 0 (最弱) として扱う
if (tanakaHandTotal > 21) tanakaHandTotal = 0;
if (satoHandTotal > 21) satoHandTotal = 0;

if (tanakaHandTotal > satoHandTotal) {
  document.write("田中さんの勝ち");
} else if (tanakaHandTotal < satoHandTotal) {
  document.write("佐藤さんの勝ち");
} else {
  document.write("引き分け");
}
