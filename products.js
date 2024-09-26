const productsContainer = document.getElementById('products');


productsContainer.innerHTML = `
<div class="d-flex justify-content-center">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`


const fetchData = async()=>{ //function declation
    await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json()) //pending state
    .then(responce=>{
        //success state handling
        console.log(responce);
        productsContainer.innerHTML = ""
        responce.map((item, index)=>{
            console.log(item.image);
            
            productsContainer.innerHTML +=`
            <div class="col-md-4 mb-3">
                <div class="card h-100 p-2 p-md-4 border-0">
                <img src=${item.image} class="w-100">
                <h1 class="fs-6">${item.title}</h1>
                <h2 class="fs-5">Start from $${item.price}</h2>
                <a href='./view.html?id=${item.id}' class="btn btn-warning">Buy Now</a>
                <button class="btn btn-outline-dark mt-2">remove from cart</button>
                </div>
            </div>
            `
        })
        
    })
    .catch((err)=>{
        //handling error state if data not loaded
        console.log(err);
        
    })
}

fetchData(); //calling function to get data from api (fake store api)