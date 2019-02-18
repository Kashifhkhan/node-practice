var asyncAdd = (a, b) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number') {
                resolve (a+b);
            } else {
                reject ('arguments must be numbers');
            }
        },1500);
    });
};

asyncAdd(5, 7).then((sum)=>{
    console.log('Result: ', sum);
}, (errorMessage)=>{
    console.log(errorMessage);
});

// asyncAdd(5, '7').then((sum)=>{
//     console.log('Result: ', sum);
//     return asyncAdd(sum, 33);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// }).then((sum)=>{
//     console.log('Result: ', sum);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// });