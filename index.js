const speed = 10;
function distanceCalculation(a, b, time) {
    let mohit = a + a + b + b;
    let meter = speed * time;
    let meterMode = meter % mohit;

    if (time === 0) {
        return 0;
    }

    if (meterMode === 0) {
        return 0;
    }

    if (b > a || a < 0 || b < 0) {
        return -1;
    }

    if (meter / mohit < 1) {
        if (meter <= a) {
            return meter;
        } else if (meter <= a + b) {
            b = meter - a;
            return Math.sqrt(a ** 2 + b ** 2);
        } else if (meter <= a + a + b) {
            a = a + a + b - meter;
            return Math.sqrt(a ** 2 + b ** 2);
        } else if (meter <= a + a + b + b) {
            return a + a + b + b - meter;
        }
    } else {
        if (meterMode <= a) {
            return meterMode;
        } else if (meterMode <= a + b) {
            b = meterMode - a;
            return Math.sqrt(a ** 2 + b ** 2);
        } else if (meterMode <= a + a + b) {
            a = a + a + b - meterMode;
            return Math.sqrt(a ** 2 + b ** 2);
        } else if (meterMode <= a + a + b + b) {
            return a + a + b + b - meterMode;
        }
    }
}

console.log(distanceCalculation(30, 10, 4.3));
console.log(distanceCalculation(30, 10, 90));
console.log(distanceCalculation(30, 10, 107));
console.log(1070/80);
