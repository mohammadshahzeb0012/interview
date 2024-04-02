function curry(){
  let sum = 0;
  return function(num)
{
 return sum+=num
}
}

let sum = curry()

console.log(sum(5))
console.log(sum(5))
console.log(sum(5))