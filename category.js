//fetch the content
fetch("https://kea-alt-del.dk/t7/api/brands")
.then((res) => res.json())
then(goThroughEach);
//foreach
function goThroughEach(data) {
    data.forEach(showBrand);
}
//that function
function showBrand(oneBrand){
    console.log(oneBrand);
}
const tempalte = document.querySelector("template").content;

const myCopy = template.cloneNode(true);

myCopy.querySelector("a").textContent = onebrand.brandname;
myCopy.querySelector("a").href = `productlist.html?brandname=$