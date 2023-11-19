function distanceFromEachOther(A, B, time){
    if (A <= B) throw new Error('path should be a rectangle!');
    if (time < 0) throw new Error('time can\'t be negative');
  
    const speed = 10;
    const fullDistance = (A + B) * 2;
    let distance = speed * time;
  
    while (distance > fullDistance) distance -= fullDistance;
    while (distance > fullDistance) distance -= fullDistance;
  
    const firstCarCoordinates = [];
    const secondCarCoordinates = [];
  
    if (distance <= A) firstCarCoordinates.push(distance, 0);
    if ((distance > A) && (distance <= (A + B))) firstCarCoordinates.push(A, -(distance - A));
    if ((distance > (A + B)) && distance <= (A + B + A)) firstCarCoordinates.push(A - (distance - (A + B)), -B);
    if ((distance > (A + B + A)) && (distance <= (A + B + A + B))) firstCarCoordinates.push(0, -(fullDistance - distance));
  
    if (distance <= B) secondCarCoordinates.push(0, -distance);
    if ((distance > B) && distance <= (A + B)) secondCarCoordinates.push(distance - B, -B);
    if ((distance > (A + B)) && (distance <= (A + B + B))) secondCarCoordinates.push(A, -((A + B + B) - distance));
    if ((distance > (A + B + B)) && (distance <= (A + B + B + A))) secondCarCoordinates.push(fullDistance - distance, 0);
  
    return Math.hypot((secondCarCoordinates[0] - firstCarCoordinates[0]), (secondCarCoordinates[1] - firstCarCoordinates[1]));
  }
  
  console.log(distanceFromEachOther(40, 30, 4));