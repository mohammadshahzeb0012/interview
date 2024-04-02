// once a function is binded, it can't be binded again

// call, bind & apply works only with normal functions
// they won't work with arrow functions

function f(){
    console.log(this.name);
}

f = f.bind({name : 'hdfc'}).bind({name: 'sbi'});

f();