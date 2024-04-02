function promiseCreator(data, delay) {
  return new Promise(function promiseCallback(res, rej){
    setTimeout(() => {
      res(data);
    }, delay);
  });
}

const delayArray = [2000,1000];

// async function test(){
//     for(let i=0;i<2;i++){
//         const result = await promiseCreator(`this is ${i+1}th promise`,delayArray[i]);
//         console.log(result);
//     }
// }

console.log('before forEach');
delayArray.forEach(async function foreachCallback (item,index){
    const result = await promiseCreator(`this is ${index+1}th promise`,item);
    console.log(result);
})
console.log('after forEach');

// test();
