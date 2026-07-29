
function averageResponseTime(times) {
  if (Array.isArray(times) === false || times.length === 0) {
    return 'Invalid';
  }

  let total = 0;
  for (let i = 0; i <= times.length - 1; i++) {
    if (typeof times[i] !== 'number' || Number.isNaN(times[i])) {
      return 'Invalid';
    }
    total += times[i];
  }

  return total / times.length;
}
