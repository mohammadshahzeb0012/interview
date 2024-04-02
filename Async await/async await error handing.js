function introPromise(){
    return new Promise((res,rej)=>{
        const condition = true;
        setTimeout(()=>{
            if(condition){
                res('intro promise resolved');
            }
            else{
                rej('intro promise failed');
            }
        },1000)
    })
}

function workplacePromiseCreator(){
    return new Promise((res,rej)=>{
        const condition = false;
        setTimeout(()=>{
            if(condition){
                res('workplace promise resolved');
            }
            else{
                rej('workplace promise failed');
            }
        },1000)
    });
}

// async await is able to mimic .then
// but it's not able to handle errors
async function promiseExecutor(){
    try{
        console.log('this will be executed');
        const result1 = await introPromise();
        console.log(result1);
        const result2 = await workplacePromiseCreator();
        console.log(result2);
    }
    catch(err){
        console.log(err);
    }
}

promiseExecutor();