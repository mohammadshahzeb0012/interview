function deepclone(obj){
    const type = typeof obj
   if(type === null || type !== 'object') return obj;

   const newObj = Array.isArray(obj) ? [] : {}
   for(let i in obj){
    if(obj.hasOwnProperty(i)){
        newObj[i] = deepclone(obj[i])
    }
   }
   return newObj
}

let obj = {
    name: 'mohammad shahzeb',
    id: 56454
}

console.log(deepclone(obj))