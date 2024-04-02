delete Function.prototype.apply;

Function.prototype.apply = function (obj, arrayOfArgs) {
    obj.tempFn = this;
    if (arrayOfArgs) {
        const result = obj.tempFn(...arrayOfArgs);
    }
    else {
        const result = obj.tempFn();
    }
    delete obj.tempFn;
    return result
}
const obj = {
    name: 'mohamad shahzeb',
    id: 88688,
    role: 'sde',
    company: 'wallmart',
    city: 'chd'
}

function intro(city, pin, state) {
    console.log(`hey my name is ${this.name} id ${this.id}
    role ${this.role} and i works at ${this.company} and city = ${city}
    ${pin} state ${state}`)
}
let arr = [
    'chandausi',
    5555,
    'up'
]
intro.apply(obj,arr)