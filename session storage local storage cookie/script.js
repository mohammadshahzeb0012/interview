// limit is 5 mb
// thing1 is key

// to SAVE or to UPDATE
// localStorage.setItem('thing1','rahul');

// // it stores strings
// // if you want to non primitive data
// // like arrays or objects
// // use JSON.stringify

// to GET
// console.log(localStorage.getItem('thing1'));

// to delete
// localStorage.removeItem('thing1');

// sessionStorage is same as localStorage
// it will go away if you close the tab and reopen it

// 5kb
// same delete and update rules
const btn = document.getElementById("localstorage");
btn.addEventListener("click", () => {
  sessionStorage.setItem("thing1", "rahul");
});


// base_url
// base_url/video
// base_url/video/123

function setCookie(){
    document.cookie = name +'='+ value +'; Path=/; Expires=Thu, 02 Mar 2024 00:00:01 GMT;';
}

