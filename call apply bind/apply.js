let obj = {
    name: 'mohammad shahzeb',
    id: 7677,
    role: 'sde'
}

function aply (name,id){
    console.log(`my name is ${this.id} my id is ${this.id} and role is ${this.role}`)
}
let arr = [
    'name',
    'id',
    'role'
]
aply.apply(obj,arr)