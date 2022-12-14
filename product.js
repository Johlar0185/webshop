const url = "https://kea-alt-del.dk/t7/api/products/1165";
//fetch the data
fetch(url)
.then((res)=>res.json())
.then((data) => showProduct(data));

//populate the page

//breadcrumb info
function showProduct(product) {
    console.log(product);
    // document.querySelector(".breadcrumbs .brand").textContent=product.brandname;
    // document.querySelector(".breadcrumbs .productname").textContent=product.productdisplayname;
//product info
    document.querySelector(".info .productname").textContent=product.productdisplayname;
    document.querySelector(".purchaseBox .productname").textContent=product.productdisplayname;
    document.querySelector(".catAndName .catClass").textContent=product.category;
    document.querySelector(".catAndName .prodClass").textContent=product.productdisplayname;
    document.querySelector(".info .productcolor").textContent=product.colour1;
    document.querySelector(".info .inventorynumber").textContent=product.relid;
//images
    document.querySelector("img.productimage").src= `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
    document.querySelector("img.productimage").alt= `product.productdisplayname`

}
