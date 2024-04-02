// output

// if we pass null in call, bind & apply
// it will consider obj as window

function f() {
    console.log(this);
  }
  
  let user = {
    g: f.bind(null),
  };
  
  user.g();