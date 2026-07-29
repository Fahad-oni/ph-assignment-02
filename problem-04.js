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