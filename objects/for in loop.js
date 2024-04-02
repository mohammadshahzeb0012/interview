// let obj2 = {
//   z: "this is obj2 prop",
// };

// let obj1 = Object.create(obj2);

// obj1.a = 10;
// obj1.b = 20;
// obj1.c = 30;

// console.log(obj1);

// for (const key in obj1) {
//   console.log(key + " -> " + obj1[key]);
// }

let obj3 = {
    q: 10,
    s: 20,
}

Object.prototype.test = 'something';

// dot notation will eventually follow proto chain
// we need to figure out a way such that we are able to check
// if any particular property belongs to my object or if it's part
// of proto chain

for(const key in obj3){
    if(obj3.hasOwnProperty(key)){
        console.log(key + " -> " + obj3[key]);
    }
}
// console.log(obj3.hasOwnProperty('q'));
// console.log(obj3.hasOwnProperty('s'));
// console.log(obj3.hasOwnProperty('test'));
// console.log(obj3.hasOwnProperty('__proto__'));
// console.log(obj3.hasOwnProperty('hasOwnProperty'));

// key in loop will run through __proto__ chain

