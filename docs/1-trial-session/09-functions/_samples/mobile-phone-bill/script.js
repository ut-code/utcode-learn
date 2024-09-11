function calculateCost(monthlyDataUsage) {
  if (monthlyDataUsage < 5.0) {
    return monthlyDataUsage * 600;
  }
  return 3000;
}

document.write(calculateCost(3.5));
