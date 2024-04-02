const arr = [1,[2,[,[3,[4,[5]]]]]]

function flattenArray(arr){
  const result = [];
   arr.forEach(element => {
    if(Array.isArray(element)){
     const miniFlat = flattenArray(element)
     result.push(...miniFlat)
    }else{
        result.push(element)
    }
   });
  return result
;}
console.log(flattenArray(arr))