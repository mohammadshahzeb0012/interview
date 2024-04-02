// fetch is a function
// which takes URL
// and return us a promise

// this promise gives us a
// response object which gives us
// meta information of that API call
const productsDiv = document.getElementById("products");

// const fetchReturnedValue = fetch("https://dummyjson.com/products");
// fetchReturnedValue
//   .then((responseObject) => {
//     const dataPromise = responseObject.json();
//     return dataPromise;
//   })
//   .then((data) => {
//     for(let i=0;i<data.products.length;i++){
//         const productDiv = document.createElement('div');
//         const heading = document.createElement('h1');
//         heading.innerText = data.products[i].title;
//         productDiv.appendChild(heading);
//         productsDiv.appendChild(productDiv);
//         productsDiv.appendChild(document.createElement('hr'));
//     }
//   })
//   .catch((err) => console.log(err));

async function render(param) {
    try{
        const responseObject = await fetch(`https://dummyjson.com/${param}`);
        const data = await responseObject.json();
        // console.log(data.todos);
        for(let i=0;i<data[param].length;i++){
            const product = document.createElement('div');
            const title = document.createElement('h1');
            if(param === 'todos'){
                title.innerText = data[param][i].todo;
            }
            else{
                title.innerText = data[param][i].title;
            }
            product.appendChild(title);
            product.appendChild(document.createElement('hr'));
            productsDiv.appendChild(product);
        }
    }
    catch(e){
        productsDiv.innerText = 'no products found';
    }
}

render('produ');
