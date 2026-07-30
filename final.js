
function matchWinner(teamAGoals, teamBGoals) {
  if (
    typeof teamAGoals !== 'number' ||
    typeof teamBGoals !== 'number' ||
    Number.isNaN(teamAGoals) ||
    Number.isNaN(teamBGoals)
  ) {
    return 'Invalid';
  } else if (teamAGoals > teamBGoals) {
    return 'Team A Won';
  } else if (teamAGoals < teamBGoals) {
    return 'Team B Won';
  }

  return 'Draw';
}


function isElevatorSafe(weights) {
  if (Array.isArray(weights) === false) {
    return 'Invalid';
  }

  let total = 0;

  for (let i = 0; i < weights.length; i++) {
    if (typeof weights[i] !== 'number' || Number.isNaN(weights[i])) {
      return 'Invalid';
    }

    total += weights[i];
  }

  if (total <= 400) {
    return true;
  }
  return false;
}


function calculateAiCost(tokensUsed) {
  if (
    typeof tokensUsed !== 'number' ||
    tokensUsed < 0 ||
    Number.isNaN(tokensUsed)
  ) {
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


function topRatedRestaurant(restaurants) {
  if (Array.isArray(restaurants) === false || restaurants.length === 0) {
    return 'Invalid';
  }

  let bestRestaurant = restaurants[0];
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].rating > bestRestaurant.rating) {
      bestRestaurant = restaurants[i];
    }
  }
  return bestRestaurant.name.toUpperCase();
}


function averageResponseTime(times) {
  if (Array.isArray(times) === false || times.length === 0) {
    return 'Invalid';
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== 'number' || Number.isNaN(times[i])) {
      return 'Invalid';
    }
    total += times[i];
  }

  return total / times.length;
}
