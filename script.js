promise1 = new Promise (resolve =>setTimeout(() => resolve(42),50))
promise2 = new Promise (resolve =>setTimeout(() => resolve(46),50))
Promise.all([promise1, promise2])
.then((values) => {
    let sum = values.reduce((sum1, sum2) => sum1 + sum2);
    console.log(sum);
});