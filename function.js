//Function Declaration
// var a = 25;
// var b = 50;
// function Sum(a,b){//function declaration
// var sum = a + b;
// document.write(sum);
// }
// Sum(12, 58);//function call
// document.write("<br>");
// document.write("ON")
// document.write("ON")
// document.write("ON")
// document.write("ON")
// document.write("ON")
// document.write("<br>");
// Sum(89, 75)
// document.write("<br>");
// Sum(25, 89);

//1.in-built function
//a.Alert
// let n=alert("welcome")
// document.write(n)

//b.Prompt
// alert("!Wake up to the reality!")
// let n=prompt("Enter your name.")
// alert(n)
// document.write(n)

//c.Confirm
// let k=confirm("You want to delete pernamently?")
// if(k){
//     document.write("deleted")
// }
// else{
//     document.write("Not deleted.")
// }

//d.Eval
// var total=eval("2+5*5")
// document.write(total
//     )
// //result:27

//e.parseInt-converts string to integer
// var nw= parseInt("I'm 18 years old.")
// document.write(nw)
// //result:NAN

// var nw= parseInt("18 years old.")
// document.write(nw)
// //result:18

//f.parsefloat
// var weight = parseFloat("200kg weight")
// alert (weight)

//2.Argument Function
// consat=multiply=(num)=>{
//     for(i=1; i<=10; i++)
// {
//     document.write(`${num}x${i}=${num*i}`)
//     document.write("<br>")
// }
// }
// multiply(1);
// document.write("<br>")
// multiply(2);
// document.write("<br>")
// multiply(3);
// document.write("<br>")
// multiply(4);
// document.write("<br>")
// multiply(5);
// document.write("<br>")
// multiply(6);
// document.write("<br>")
// multiply(7);
// document.write("<br>")
// multiply(8);
// document.write("<br>")
// multiply(9);
// document.write("<br>")
// multiply(10);

//literal temporal method
// let percentage = function (Name, math, nep, soc, sci, eng) {
//     let sum = (math + nep + soc + sci + eng)
//     document.write(`Total percentage of ${Name}`, sum / 500 * 100, "%");
// }
// percentage("Saloni Tamang", 96, 67, 50, 54, 87);
// document.write("<br>")
// percentage("Suwani Tamang", 86, 67, 60, 54, 47);
// document.write("<br>")
// percentage("Janessa Tamang", 86, 77, 60, 54, 87);
// document.write("<br>")
// percentage("Abisek insane", 46, 67, 60, 54, 27);
// document.write("<br>")
// percentage("Fukra Insane", 96, 47, 60, 94, 87);
// document.write("<br>")
// percentage("Mark Rajawal", 36, 67, 80, 54, 47);
// document.write("<br>")
// percentage("Nanon Mishra", 96, 67, 60, 54, 87);
// document.write("<br>")
// percentage("Rita Dhimal", 35, 97, 80, 54, 97);
// document.write("<br>")
// percentage("Puspa Raj Kanna", 46, 67, 60, 54, 67);

//3.Return function - it write how to handle result
// const multiply=(a,s,d,f)=>{
// let total_value = a*s*d*f;
// console.log("multilpy first four odd number",total_value)
// }
// multiply(22,67,89,90)
// multiply(3,5,7,9)
//or
// const multiply=(a,s,d,f)=>{
//     let total_value = a*s*d*f;
//     return total_value;
// }
// let B = multiply(3,5,7,9)
// console.log("Four odd number multiply",B)
// let E = multiply(2,4,6,8)
// console.log("Four even number", E)
//or
// function multilpy(num1, num2) {
//     var value = num1 * num2;
//     return value;
// }
// let mul = multiply(12, 26)
// console.log("result of two multiplication is:", mul);
// let res = multiply (25, 37)
// console.log("result of multiplication is:", res)
//or
// function multilpy(num1, num2){
//     var friuts = ["Apple","Kiwi","Cherry","Grape"]
//     var response = {
//         Niki: "Enhypen",
//         Felix: "Skz",
//         Lisa: "BP",
//         JK: "BTS"
//     }
//     var bye = "Army"
//     return{
//         Fruits: friuts, //Object shorthand Properties
//         Response: response,
//         Bye: bye
//     }
// }
// var res = multilpy()
// console.log("the multiplication is: ", res)

//4.Anyanomous Function
// let detail = function Myfunction(){
// console.log("Welcome to Anyamous Function");
// }
// detail()

//unnamed function
//let detail = function(){
// console.log("Welcome to Anyamous Function");
// }
// detail()

//setTimeout
// function Myfunction(){
// console.log("Welcome to Anyamous Function");
// }
// setTimeout(Myfunction,3000);
// or
// setTimeout(function(){
// console.log("Ohayo!");
// },3000)

//setInterval
// setInterval (function(){
//     document.write("Wae")
// },3000)

// (function(){
    // console.log("Dude");
    // console.log("Dude");
    // console.log("Dude");
// console.log("Dude");
// document.write("Chacoone")
// document.write("Chacoone")
// })()

//5.IIFE - Immediately Invoke Functional.Expression
// (function () {
//     let sum = 20+20;
//     console.log(sum);
// })()

// (function () {
//     let s = 25;
//     let u = 10;
//     if(s>u){
//         console.log("S is greater than U");
//     }
//     else{
//         console.log("S is not greater than U");
//     }
// })()

// setTimeout(function () {
// let s = 25;
// let u = 10;
// if (s > u) {
//     console.log("S is greater than U");
// }
// else {
//     console.log("S is not greater than U");
// }
//             }, 3000);
            
//
// var info = {
// Name: "Hunter",
// Nationality: "Thailand",
// Phone: "9802343247",
// Age: "21",
// Group: "Xikers"
// }
// console.log(info);
// console.log(info.Group);

// const woah = (los)=>{
//     let s = "Sawadi-Khrap" + " " +los.name + " " + "My Nationality is " + " " + "My Age is " + "My Place Name " + " " + "Message from Xikers " + " " + "los message"
//     console.log(s);
// }
// woah(info);

//closer function
// function outerfun(){
//     var b = "This is outer function";
//     console.log(b);
// function innerfun(){
//     var c = "This is inner function";
//     console.log(c);
// }    
// }
// outerfun()
// innerfun()