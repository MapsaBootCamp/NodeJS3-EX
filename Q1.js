function distanceFromStart(A, B, time){
    if (A <= B) throw new Error('path should be rectangle!');

    const speed = 10;
    let lengthTime = A / speed;
    let widthTime = B / speed;
    let fullTime = (2 * (A + B)) / speed;

    while (time > fullTime){
        time -= fullTime;
    }

    if (time <= lengthTime){
        return (speed * time);
    } else if ((time > lengthTime) && (time <= (lengthTime + widthTime))){
        return (Math.hypot(A, (speed * (time - lengthTime))));
    } else if ((time > lengthTime + widthTime) && (time < ((lengthTime * 2) + widthTime))){
        return (Math.hypot(B, (A - (speed * (time - lengthTime - widthTime)))));
    } else if (time > ((lengthTime * 2) + widthTime) && (time <= (2 * (lengthTime + widthTime)))){
        return (B - (speed * (time - lengthTime - lengthTime - widthTime)));
    }
}

console.log(distanceFromStart(40, 30, 12));