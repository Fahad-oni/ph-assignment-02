function isElevatorSafe(weights) {
  if (Array.isArray(weights) === false) {
    return 'Invalid';
  };

  let total = 0;

  for (let i = 0; i < weights.length; i++) {
    console.log(weights.length);
    
    if (typeof weights[i] !== 'number') {
      return 'Invalid';
    };

    total += weights[i];
  };

  if (total <= 400) {
    return true;
  };
  return false;
}

console.log(isElevatorSafe([90 , 95, 120]));
