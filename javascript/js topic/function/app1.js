let tittle=document.getElementById("tittle")
let image=document.getElementById("image")
let desc=document.getElementById("desc")
console.log(desc);
let userData= fetch("https://fakestoreapi.com/products").then((response)=>response.json())


.then((resolve)=>{
    console.log(resolve);
    image.src=resolve[0].image  
    tittle.innerHTML=resolve[0].title
    desc.innerHTML=resolve[0].description
})
.catch((reject)=>console.log(reject))