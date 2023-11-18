function calculateDistance(length, width, time) {
  const diagonalDistance = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
  const speed = 10;
  const distance = speed * time;
  const finalDistance = Math.min(distance, diagonalDistance);

  return finalDistance;
}

console.log("The distance from the origin is", calculateDistance(10, 5, 20));
