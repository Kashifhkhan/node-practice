var promise = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve('done');
    }, 5000);
});
promise.then((msg)=>{
console.log(msg);
}, ()=>{

});

