let params = new URLSearchParams(document.location.search);
let id = params.get("id"); // get id from the queries from url for product id to get only single product data

console.log(id);

const container = document.getElementById('single-product')

container.innerHTML = `
<div class="d-flex justify-content-center">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
`
const getSingleData = async()=>{
    await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())//pending state
    .then((responce)=>{
        // success state 
        console.log(responce);
        console.log(responce.image);
        container.innerHTML = ""
        container.innerHTML+= `
            <div class="col-md-6">
                <img src=${responce.image} class="w-100">
            </div>

             <div class="col-md-6 mt-3">
            <h1 class="fs-1 fw-bold">${responce.title}</h1>
            <p class="fs-5">${responce.description}</p>
            <h3 class="fs-4">Price: $${responce.price}</h3>
                <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-outline-dark mt-2">Add to cart</button>
                <button class="btn btn-warning mt-2">Buy Now</button>
                </div>
            </div>
        
        `
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

getSingleData(); //calling function to execute that function
