let obj = {
  nam: 'prikshit',
};

// my intro function is binded with window obj
function intro() {
  console.log("my name is " + this.nam);
}

// implicit binding because it's happening it self
window.intro(); /// this is window
intro(); /// this is window

// execute intro function 
// with this keyword updated to obj

// forceful update of this keyword inside
// a function is known as explicit

// map, reduce & filter ?????

// intro.call(obj);
// here I am calling 'call' method
// call method is taking obj which we want to bind
// with intro function & it's executing intro
// function

intro(); // this keyword => window
intro.call(obj); // this key => obj