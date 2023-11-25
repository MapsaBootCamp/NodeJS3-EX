const mainFunction = (width, height, time) => {
    const speed = 10;
    let distance = speed * time;
    let validDistance = distance % ((2 * width) + (2 * height));
    console.log(calculateMovementRoundClock(width, height, validDistance));
}

const calculateMovementRoundClock = (width, height, distance) => {
    const handleMessage = (distance) => `The distance is ${distance}.`;
    const totalWidth = 2 * width;
    const totalHeight = 2 * height;
    if (distance <= width) {
        return handleMessage(distance);
    }
    if (width < distance && distance <= width + height) {
        let newHeight = distance - width;
        let movement = Math.sqrt(Math.pow(width, 2) + Math.pow(newHeight, 2));
        return handleMessage(movement);
    }
    if (width + height < distance && distance < totalWidth + height) {
        let newWidth = width - (distance - (width + height));
        let movement = Math.sqrt(Math.pow(newWidth, 2) + Math.pow(height, 2));
        return handleMessage(movement);
    }
    if (distance == totalWidth + height) {
        return handleMessage(height);
    }
    if (totalWidth + height < distance && distance < totalWidth + totalHeight) {
        let newHeight = height - (distance - (totalWidth + height));
        return handleMessage(newHeight);
    }
    return 'An error has occurred.'
}

mainFunction(10, 5, 8);