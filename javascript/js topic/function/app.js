// function  foo(){
//  console.log("hello ");
// }
// foo()
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// let num1=12
// let num2=13
// console.log(num1+num2);let num1=12
// let num2=13
// console.log(num1+num2);let num1=12
// let num2=13
// console.log(num1+num2);let num1=12
// let num2=13
// console.log(num1+num2);let num1=12
// let num2=13
// console.log(num1+num2);let num1=12
// let num2=13
// console.log(num1+num2);let num1=12
// let num2=13
// console.log(num1+num2);

// function sum(a,b){
// //  let a,b
//   return  console.log( a+b)
// }
// sum(12,12)

// function foo(){
//     sum(1,2)
// }

// function num(){
//     console.log("hello");
//     return
//     console.log("hello");
//     console.log("hello");
// }
// num()
// // console.log(a);
// let val=12
// function num(){
//   val=90
// console.log(val)
// }
// num()
// console.log(val);
// let str= "    nothing      jdfk    ";
// // console.log();

// let str1= "123456789";
// // console.log(str1.slice(1,7));
// console.log(str.trim(), str.concat(str1));

// let who= "hasii"
// console.log(who.replaceAll("i","j"));

// let fullName=prompt("enter your name")
// let username="@" + fullName + fullName.length;
// console.log(username);

// let array = [42,52,56,25,25,52];
// console.log(array);

// let array=prompt("enter data");
// console.log(ar);

//fing averge marks
// let marks=[ 23,34,23,62,72,82,17,82,17];
// let sum= 0;
// for(let el of marks){
//     sum= sum+ el;
// }
// console.log(sum);
// let avg= sum/marks.length;
// console.log(avg);

// let itemsPrice=[33,45,62,71,71,]

// for(let i= 0; i<itemsPrice.length; i++){
//     let offer= itemsPrice[i]/10;
// itemsPrice[i]= offer;
// }
// console.log(itemsPrice);

// let comp=["bloomber","microsoft","uber","google","ibm","netflix"];

// // console.log(comp);
// // console.log(comp.shift());

// // console.log(comp.push(""));;
// comp.splice(2,1,"olax");
// comp.push("fjkf")
// /

//if you want to use variable and then you want to store data in variable

// function fun2(haa, re){
//     console.log(haa);

// }
// fun2("hello buddy", "38")

// function sum(x,y){
//    console.log(x+y);

//  }

// const arrrowMul =(a,b)=>{
//     return (a*b);

// }
// let countVowel=(str)=>  {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     )
//       count++;
//   }
//  return count;
// }

// array = [1, 2, 4, 5, 6];
// array.forEach(function printArray(calvar) {
//   console.log(calvar);
// });

// anotherAyyay=["stirng","fjkea","kjhfjhdf","ksafkhsf"];

// anotherAyyay.forEach(function printArray(calvar){
//   console.log(calvar.toUpperCase())

// });

// let names=["ww","kdfj","hfa","kas","hfs"]

// names.forEach((inpvar, k,vak,)=>{
//   console.log(inpvar.toUpperCase(),k,vak,)
// })

// let numArray=[2,3,4,5,6]
// let newnumArray =numArray.map((inputvar)=>{
// return inputvar;
// });
// console.log(newnumArray);

// let naArray=[2,4,5,6,7,8,81,2,7,432,35];
// let even=naArray.filter((val)=>{
//   return val %2===0;
// })
// console.log("the even numbers in array are: ",even);
// let odd=naArray.filter((val)=>{
//   return val %2===1;
// })
// console.log("the odd numbers in array are: ",odd);

// let asdf=[1,3,4,5,5]
// let newAsdf=asdf.reduce((pre,cur)=>{
//   return pre>cur ? pre:cur;
// })
// console.log(newAsdf);

// let stdMarks=[90,82,92,99,69,93];
// let higherMarks=stdMarks.filter((val)=>{
//   console.log(val);
//   return val>=90;

// })
// console.log(higherMarks);

// let n = prompt("enter a number :");
// let array=[];
// for (i=1 ; i<=n ; i++){
//   array[i-1]=i;
// }
// console.log(array);
// let sum= array.reduce((reu,cal)=>{
//   return reu+cal;
// })
// console.log("sum",sum);
// let factorial= array.reduce((reu,cal)=>{
//   return reu*cal;
// })
// console.log("factorial:", factorial);

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",() => {
//     console.log("h");
// });
// btn1.addEventListener("click",() => {
//     console.log("a");
// });

// const adaha=() => {

//     console.log("s");
// };

// removeEventListener("click",adaha)

// btn1.addEventListener("click",() => {
//     console.log("eeb");
// });

// let btn2 = document.querySelector("#btn2");
// btn2.addEventListener("dblclick",() => {
//     console.log("hello");
// });

// let modeButton = document.querySelectorAll("button");

// let modeButton=document.querySelector("button")
// let body = document.querySelector("body");
// let currentMode = "light";
// modeButton.addEventListener("click", function(){
//   if (currentMode === "light") {
//     currentMode = "dark";
//     // document.querySelector("body").style.backgroundColor = "black";
//     body.classList.add("light");
//     body.classList.remove("dark");

//   } else {
//     currentMode = "light";
//     // document.querySelector("body").style.backgroundColor = "white";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   }
// });

// function toggleInJs(ele ){
//   let body=document.getElementById("body")
//   let btn=document.getElementById("btn")
//   let btnMode="light"
//   if (btnMode==="light") {
//     body.style.backgroundColor="black"
//     body.style.color="white"

//   }
//   else{ btnMode="dark";
//   body.style.backgroundColor="white"}
//     if(btnMode==="dark"){
//    btnMode="dark"

//   }
// console.log(ele);
// }

// const student={
//   fullName:"hasiiMughal",

//   age:21,
//   gender:"male",log
//   skills:["html","css","js"],
//   hobbies:["coding","gaming","reading"]

//   }
// student

// const employee={
//   caltax(){
//   console.log("tax rate is  15%");
//   },
// };

// const lambu={
//   salary:22,

// };
// lambu.__proto__=employee;
// let std1={

// }
// let obj={
//   phoneNo:"02232873817447","38848784784748"
// }

// function Std(fullName,age,gender,id,emial,rollNo){
//   this.fullName ="hasiii";
//   this.age = age;
//   this.gender = gender;
//   this.id = id;
//   this.emial=emial
//   this.rollNo= rollNo;
// }
// let std1 = new Std ("Hasim Mughal",21,"male",101,"hassi@")
// console.log(std1);

// class user{
//   constructor(fulLname,email){
//     this.fulLname=fulLname;
//     this.email=email
//   }

//   viewData=function(){
//     console.log(this.fulLname,this.email)
//   }
// }
// class Admin extends user{
//   constructor(fulLname,email){
//     super(fulLname,email);
//   }
//   editData(){

//   }
// }
// let std1= new user("kjsdfkaj","hkdfha")
// let std2= new user("HASII","NOHING")
// console.log(std1);

// let admin1=new Admin("klfjads","nnnnnn")
// console.log(admin1);

// function add(){

// }
// add(()=>{
// function add()a+b

// ()=>a+b

// // }
// const myPromise= new Promise ((reslove,reject)=>{
//     const data=true
//     if(data){
//         console.log("success");
//     }
//     else{
// console.log("reject");
//     }

// })
// // .then(()=>)

// const myPromise= new  Promise((resolve,reject)=> {
//     const data= fetch("https://fakestoreapi.com/products").then((res)=>res.json())
//     console.log(data);

// })

// const myPromise =new Promise((reslove,reject)=>{
//     const data=false
//     if (data) {
//        reslove("data a gy ");
//     }
//     else{
//         reject("error");
//     }
// })
// .then((reslove)=>console.log(reslove))
// .catch((reject)=>console.log(reject ))

// const myPromise=new Promise((resolve, reject) => {
//     const isCivic=false
//     if (isCivic) {
//         resolve("abu mam gy")
//     }
//     else{
//         reject("topi krwa di")
//     }

// })
// .then((resolve)=>console.log(resolve))
// .catch((reject)=>console.log(reject))
// let body=document.querySelector("body")

// let data= fetch("https://fakestoreapi.com/users").then((respone)=>respone.json())
// .then((reslove)=>console.log(body.innerHTML=reslove[0].email))
// // .catch((reject)=>console.log(reject))

// crads

// let body1=document.getElementById("body1")

// let calApi=fetch("https://fakestoreapi.com/products").then((rep)=>rep.json())
// .then((resolve)=>{
//     for(let  i of resolve){
//         console.log(i.title);
//         body1.innerHTML+= `<div class="ms-4  mt-3 jamil  ">
//         <div class="card" id="card" style="width: 20rem;" height="10hv">
//             <img src=${i.image} class="card-img-top"  width="60px"heigth="50px" id="image" alt="...">
//             <div class="card-body" >
//               <h6 class="card-title " id="title" >${i.title}</h5>
//               <p class="card-text" id="disc">${i.description}.</p>
//             </div>
//           </div>
//     </div> `
//     }

// })
// .catch((reject)=>reject)

// let myPromise=new Promise((resolve, reject)=>{
//   let data = true;
// if(data){
//   console.log("oky i got it");
// }
// else{
//   console.log("i aya");}

// })
// .then ((resolve)=>console.log(res))
// .catch((reject)=>console.log(res))

// const data=fetch("https://fakestoreapi.com/products").then((res)=>res.json())
// .then((reslovw)=>console.log(reslovw))
// .catch((reject)=>console.log(reject))
// async await

// console.log(1);
// console.log(1);
// {
//   console.log(2);
// }
// console.log(1);
// console.log(1);

// setTimeout(()=>{

// console.log(3);
// },4000)

// console.log(4);
// console.log(4);
// console.log(4);
// console.log(4);

//  async function add(){
//   await console.log(2);
// }

//  async function dataApi(){
//   let data= await fetch("https://fakestoreapi.com/products")
//   let resp=data.json()
//   console.log(resp);

// }
// dataApi();

//  async function dataApi(){
//   let data= await fetch("https://fakestoreapi.com/products")
//   console.log(data);
//   let respone=data.json()
//     console.log(respone);
// }
// dataApi()

async function dataApi() {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let respone =  await data.json();
    for (let value  in  respone) {
      console.log(respone[value])
    }
  } catch {
    console.log("error");
  }
}
dataApi();
