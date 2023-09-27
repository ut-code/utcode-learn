function calculateCost(monthlyDataUsage) {
  if (monthlyDataUsage< 5.0) {
    return monthlyDataUsage * 600;
  }
  return 3000;
}

document.write("通信量が3.5GBの場合、通信料金は" + calculateCost(3.5) + "円です。");
