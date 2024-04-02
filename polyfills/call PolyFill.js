delete Function.prototype.call;

Function.prototype.call = function(obj,...restparam){
      obj.tempFn = this;
      const result = obj.tempFn(restparam);
      delete obj.tempFn;
      return result;
}

const obj = {
    name: 'mohamad shahzeb',
    id:88688,
    role: 'sde',
    company: 'wallmart'
}

function intro(city){
    console.log(`hey my name is ${this.name} id ${this.id}
    role ${this.role} and i works at ${this.company} and city = ${city}`)
}

intro.call(obj,'chandausi')