console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
},2000);
//we are just registering a callback here
//this is non-blocking. we are not waiting for timeout to complete execute the rest of the program.
// this is what happens when we call API to get things from other systems.


console.log('Finishing app');