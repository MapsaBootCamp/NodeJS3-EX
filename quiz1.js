function findDistance(length , width , time) {

    let lengthTime = length / 10;
    let widthTime = width / 10;
    let mohitTime = (lengthTime * 2) + (widthTime * 2);

    while (time > mohitTime) {
        time = time - mohitTime;
    }

    if (time === mohitTime) {
        return 0;
    } 
    
    else if (time <= lengthTime) {
        return (10*time);
    }

    else if (time >= (lengthTime * 2) + widthTime) {
        time = time - ((lengthTime * 2) + widthTime);
        return (widthTime - time) * 10 ;
    }

    else if (time <= lengthTime + widthTime && time > lengthTime) {
        time = time - lengthTime;
        return Math.sqrt(Math.pow(length,2) + Math.pow((time * 10),2));
    }

    else if (time > lengthTime + widthTime && time < (lengthTime * 2) + widthTime){
        time = time - (lengthTime + widthTime);
        lengthTime = lengthTime - time;
        return Math.sqrt(Math.pow((lengthTime * 10),2) + Math.pow(width,2));
    }
}
console.log(findDistance(40,30,21));
console.log(findDistance(40,30,3));
console.log(findDistance(40,30,10));
console.log(findDistance(40,30,14));
console.log(findDistance(40,30,12));
console.log(findDistance(40,30,11));