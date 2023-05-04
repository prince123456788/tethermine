function getBonusPercent(referCount) {
    if (referCount === 1) {
      return 0.05;
    } else if (referCount === 2) {
      return 0.15;
    } else if (referCount === 3) {
      return 0.25;
    } else if (referCount === 4) {
      return 0.35;
    } else if (referCount >= 5)  {
      return 0.45;
    }else{
        return 0
    }
  }
  console.log(getBonusPercent(4455))