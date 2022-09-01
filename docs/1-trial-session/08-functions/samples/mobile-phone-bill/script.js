function calculateCost(monthlyBandwidth) {
    if (monthlyBandwidth < 5.0) {
        return monthlyBandwidth * 600;
    } else {
        return 3000;
    }
}

document.write(calculateCost(3.5));
