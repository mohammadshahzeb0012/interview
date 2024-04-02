delete Function.prototype.bind;

Function.prototype.bind = function(obj,...fixedArgs){
   const oldFn = this;
   const newFm = function(...nonFixedArgs){
    return oldFn.call(obj,...fixedArgs,...nonFixedArgs)
   } 
  return newFm
}
let obj = {
    name: 'mohammad shahzev',
    id:282221,
    role: 'sde',
}
function intro(city){
  console.log(city)
}
const newIntro =intro.bind(obj)
newIntro('chandausi')