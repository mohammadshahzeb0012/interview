function promise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           res("meri taraf se haa")
        },2000)
    })
}
// const p1 = promise()

function promiseTimeout(promise,duration){
 return new Promise((res,rej)=>{
    const helperPromise = new Promise((res,rej)=>{
        setTimeout(()=>{
        rej("maanja ab na hmm kregi wo")
        },duration)
    })

    const arr = [promise(),helperPromise];
    arr.forEach(async prom=>{
      try{
        const resp = await prom
         res(resp)
      }catch(e){
        rej(e)
      }
    })
 })
}
promiseTimeout(promise,1000)
.then(data=>console.log(data))
.catch(e=>console.log(e))