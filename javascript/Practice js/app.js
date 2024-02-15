// // // hoisting

// // // var  a;
// // // let a;
// // // function add(){
// // //     console.log(a);
// // // }
// // // add()



// // // a=20
// // // console.log(a);
// // // var a;

// // // let 


// // // let a=20

// // // {
// // //     let  b=10
// // // }
// // // console.log(b);
// // // var c = 'global';
// // // {

// // // }


// // //  let a = 4;
// // //  let b = 2;
// // //   if(a===b){
// // //     console.log("variable are equal");
// // //   }
// // //   else if(a>=b){
// // //     console.log("change your variables value");
// // //   }


// // let arr=[1,2,3,4,5,6,78,9,1]


// // function userApp(userAge, gender, qualiyfiction, status) {
// //      if (gender === "male") {
// //         if (qualiyfiction === "master") {
// //             if (status === "single") {
// //                 if (userAge === 20) {
// //                     console.log("you are hired");

// //                 } else {
// //                     console.log("your age doesn't meet our requirement");
// //                 }

// //             } else {
// //                 console.log("you should be single");
// //             }

// //         } else {
// //             console.log("master degree required");
// //         }

// //     } else {
// //         console.log("not applicable");
// //     }


// // }


// //      userApp(20 ,"male", "master", "single")
// //      userApp(20, "fmale", "master", "married")
// //      userApp(21, "male", "ajja", "single")

// //     //  console.log(app1);
// //     //  console.log(app2);
// //     //  console.log(app3);


// // function add(a,b){
// //     return a+b 
// // }

// //  let sum1=add(23,1)
// //  let sum2=add(23,5)
// //  let sum3=add(23,3)
// //  console.log(sum1)
// //  console.log(sum2)
// //  console.log(sum3)


// // primitive 


// // nn bb ss u 


// // stack memory   
// // let a=12
// // let b=a
// // b=20
// // console.log(b);
// // console.log(a);



// // non primitive

// // array and object 

// // heap memory 



// // let array=[1,23,4,5]
// // let newArr=array
// // newArr[4]=10

// // console.log(array);
// // console.log(newArr);


// let obj1={
//     fName:"haseeb",
//     lastN:"javed"

// }
// let obj3={
//     age:14,
//     kjakj:21,
//     ...obj1
// }
// let obj2=obj1

// obj2.fName="hashim"    
// obj2.age=22
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// array  
// collecton of data  
// unstructure data  
// let arr=[1,23,4,5,6,7,10]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// // arr[]

// array method 

// let arr1=[1,23,4,5,6,45,10]
// 
// pop push 
// let value=arr1.pop()
// console.log(value);



// let val=arr1.push(20)
// console.log(val);
// console.log(arr1);

// let arr1=[13,23,4,5,6,45,10]

// // shift unshift


// let val=arr1.shift()
// console.log(val);

// let arr1=[13,23,4,5,6,45,10]
// let val=arr1.unshift(90)
// console.log(val);




// slice splice  



// let userName = ["jamil", "afzal", "mughal", "afzal"]
// let returnValue = userName.slice(0,2)
//  console.log(returnValue)
// console.log(userName)
// slice is work in string and array  slice is used to value is copy

// slice("index","length")
// let arr2=[1,2,3,4,6,7,8,9,10]
// let val=arr2.slice(0,3 )
// console.log(val);



// Splice("")
// splice(starting , delete_count , "add valiues" )
//   index 
// let arr=["jmail","adeel","hasii","hasim"]
// let val=arr.splice(3,1)
// console.log(val);







// console.log(arr1.pop());

// console.log(arr1);


// console.log(arr1.push(20));
// console.log(arr1);


// array o object 


// let stdArr = [
//     {
//         fName: "jamil",
//         age: 10
//     },
//     {
//         fName: "hasii",
//         age: 19
//     },

// ]

// var std1={
//     age:20
// }


// loop for

// let array=[1,3,5,6,2]
// for(let i=1; i<=10; i++){
//     document.write("3"+"*"+i+"="+i*3+"</br>");
// }
// let i=0
// while (i<array.length) {
//     console.log(i);
//     i++;
// }
// let i=0
// do{
// console.log("hello");
// i++;
// }while(i<=3)

// for (let i = 0; i<2; i++) {
// console.log("hello");    
// }


// // loop in

// let obj = {
//     age: 20,
//     id: 111
// }
// for (let key  in obj ) {

//     console.log(key);
// }

// let arr=[1,23,4,5,6,6]
// for (const i of arr) {
//     console.log(i);
// }


// let arr=[1,23,4,5,6,6]
// arr.forEach((index)=>console.log(index))

// spread  optr

// let arr1=[1,2,34,5,6]
// let aary=["jamil ","hasi"]
// let arr2=[...arr1,...aary]
// console.log("arrr2",arr2);
// console.log("arrr1",arr1);

// function 


// function foo(){
//     console.log("foo");
// }
// foo()


// expresion fun 

// const foo= function (){

//  console.log("foo");  
// }
// foo()


// arrow fn 
//  foo=()=>{

// }


// function add(){
//      return console.log("foo");
// }
// add()


// const sum=()=>{
//     console.log("hasii");
// }

// const add1=()=>console.log("hello");





// let obj1={
//     fN:"hasii",
//    lN:"javed",
//    firstName:function (){
//    console.log("function",this)
//    }
// }
// obj1.firstName()


// let obj={
//     fN:"hasii",
//    lN:"javed",
//  firstName:()=>{
//     console.log("arrow function",this);
//    }
// }
// obj.firstName()



// obj.fN   prop                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
// obj.fN()  method 

// location.replace()
// location.href=""



// function foo(ele){
//     ele.id="101"
// console.log(ele.id);
// }


// local scope 
// gobal scope 

//  let a=12; global scope 

// function add(){
//     let a=10
// console.log("local ",a);
// }
// add()
// console.log(a);


// function add(a,b){

// }
// add(1,2)


// function stdPer(sub1, sub2, sub3) {
//     let totalMark = 300;
//     let obtained = sub1 + sub2 + sub3
//     let per = obtained / totalMark * 100

//     if (per >= 90 && per >= 100) {
//         console.log("grade A")
//     }
//     else if (per >= 80 && per <= 89) {
//         console.log("grade B")
//     }
//     else if (per >= 70 && per <= 79) {
//         console.log("grade c")
//     }
//     else if (per >= 60 && per <= 69) {
//         console.log("grade D")
//     }
//     return per
// }
// let std1 = stdPer(160, 160, 170)
// console.log(std1);


// // string method 
// let a = "jamilafzal"
// let strSplit = a.split("")
// console.log(strSplit);
// Jamil Afzal
// jAmil afZal 


// let userName = prompt("enter yourn name")
// // console.log(userName.slice(0));

// let StrSplit = userName.split(" ")
// let tempArr = []
// for (let i = 0; i < StrSplit.length; i++) {
//     let word = StrSplit[i]
//     let cap = word[0].toUpperCase()+word.slice(1).toLowerCase()
//     tempArr.push(cap)


// }
// let finalStr = tempArr.join(" ")

// console.log(finalStr);


// let nameH = prompt("number eneter kar");
// console.log(nameH);
// let namToAry = nameH.split(" ")
// // console.log(namToAry);
// let empArry = []
// for (let i in namToAry) {
//     // console.log(namToAry[i]);
//     let word = namToAry[i]
//     // console.log(word);
//     let baraNaka = word[0].toUpperCase() + word.slice(1).toUpperCase()
//     // console.log(baraNaka);
//     empArry.push(baraNaka)
//     // console.log(empArry);
// }


// let userBame=empArry.join(" ")
// console.log(userBame);




// let uname= "haseeb"
// let unametoArray=uname.split(" ")
// let tempArr=[]
// for(let i in unametoArray){
//     unametoArray[i]
//     console.log( unametoArray[i]);
//     let strbig= unametoArray[i]
//     let big=strbig[0].toUpperCase() + strbig.slice(1).toLowerCase()
//     tempArr.push(big)
    
// }

//  let hh=tempArr.join(" ")
//  console.log(hh);




// toggle 

// function foo(ele){
// let para=document.getElementById("para")
// let btn=document.getElementById("btn")
// if (btn.innerHTML==="See More") {
//     para.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt a praesentium corporis, ex libero sed. Similique ea sed vel a suscipit tenetur ex. Minima aspernatur quasi corrupti quidem unde?
//     Mollitia odio accusamus, beatae molestias illo culpa tempora veritatis libero reiciendis consequuntur repellendus similique, eligendi sequi dignissimos explicabo in aut soluta, fugiat assumenda eius iste ipsa? Adipisci, quam! Atque, est!
//     Cumque nisi fugit ullam quo cum quae temporibus magni, facilis tempore alias a maxime non magnam voluptatibus, cupiditate repellat accusantium at blanditiis reprehenderit consectetur rem! Aliquam nesciunt aperiam quam totam.
//     Modi molestiae excepturi reiciendis facere ipsam pariatur iusto optio cumque nisi autem, sunt delectus doloremque rerum sequi sed distinctio corrupti ad tempore consectetur eligendi tenetur? Labore quia possimus officia doloribus`
//     btn.innerHTML="Less Then"
// }
// else{
//     para.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nam molestiae commodi nobis in sed, pariatur sapiente aut reiciendis officia deleniti a, non suscipit blanditiis quis deserunt natus ut. A"
//     btn.innerHTML="See More"
// }

// }

// let paragraph=document.getElementById("paragraph")
// let ankertag=document.getElementById("ankertag")

//  function toogle(){
//     if(ankertag.innerHTML==="see more"){
//         paragraph.innerHTML=` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus harum maxime provident totam sunt delectus iste laborum aliquam. Non perspiciatis odio ad aliquam, sed numquam. Doloribus iusto labore mollitia nisi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus harum maxime provident totam sunt delectus iste laborum aliquam. Non perspiciatis odio ad aliquam, sed numquam. Doloribus iusto labore mollitia nisi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus harum maxime provident totam sunt delectus iste laborum aliquam. Non perspiciatis odio ad aliquam, sed numquam. Doloribus iusto labore mollitia nisi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus harum maxime provident totam sunt delectus iste laborum aliquam. Non perspiciatis odio ad aliquam, sed numquam. Doloribus iusto labore mollitia nisi.`
//         ankertag.innerHTML="see less"
//     }
//     else{
//         paragraph.innerHTML=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus harum maxime provident totam sunt delectus iste laborum aliquam. Non perspiciatis odio ad aliquam, sed numquam. Doloribus iusto labore mollitia nisi`
//         ankertag.innerHTML= "see more"
//     }
//  }










































