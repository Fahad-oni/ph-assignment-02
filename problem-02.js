function isElevatorSafe(weights) {
  if (Array.isArray(weights) === false || weights.length === 0) {
    return 'Invalid';
  }

  let total = 0;

  for (let i = 0; i < weights.length; i++) {
    console.log(weights.length);

    if (typeof weights[i] !== 'number' || weights[i] === NaN) {
      return 'Invalid';
    }

    total += weights[i];
  }

  if (total <= 400) {
    return true;
  }
  return false;
}
