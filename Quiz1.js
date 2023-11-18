function car(a, b, t) {
  const resT = t * 10;
  let resT2;

  if (resT <= a) {
    return resT;
  }

  if (resT <= a + b && resT > a) {
    const h = resT - a;
    const f = h ** 2 + a ** 2;
    return Math.sqrt(f);
  } else if (resT > a + b && resT < a + b + a) {
    const h = a + b + a - resT;
    const f = h ** 2 + b ** 2;
    return Math.sqrt(f);
  } else if (resT >= a + b + a && resT < a + b + a + b) {
    const h = a + b + a + b - resT;
    return h;
  } else if (resT === a + b + a + b) {
    return 0;
  }

  if (resT > a + b + a + b) {
    resT2 = resT % (a + b + a + b);

    if (resT2 <= a) {
      return resT2;
    }
    if (resT2 <= a + b && resT2 > a) {
      const h = resT2 - a;
      const f = h ** 2 + a ** 2;
      return Math.sqrt(f);
    } else if (resT2 > a + b && resT2 < a + b + a) {
      const h = a + b + a - resT2;
      const f = h ** 2 + b ** 2;
      return Math.sqrt(f);
    } else if (resT2 >= a + b + a && resT2 < a + b + a + b) {
      const h = a + b + a + b - resT2;
      return h;
    } else if (resT2 === a + b + a + b) {
      return 0;
    }
  }
}


console.log(car(40, 20, 5));
