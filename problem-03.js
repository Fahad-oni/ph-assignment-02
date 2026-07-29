function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== 'number' || tokensUsed < 0 || Number.isNaN(tokensUsed)) {
    return 'Invalid';
  }

  let rate = 5;
  if (tokensUsed <= 500) {
    return 0;
  }

  let premiumToken = tokensUsed - 500;
  let priceOfPremiumToken = Math.floor(premiumToken / 100) * rate;
  return priceOfPremiumToken;
}


