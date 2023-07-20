//Array
// let array = ["Fourth",19,"Gemini",18,"Bright",26,"Win",26]
// console.log(array);
// let s = array.length;
// console.log("length of an array is:", s);

//pop
// let n = array.pop();
// console.log(n);

//push - add element in last
// let m = array.push(26);
// console.log(m);

//join - joining element
// let j = array.join("-");
// console.log(j);

//delete - deleting element
// delete array[2]
// console.log(array);
// let k = array.length;
// console.log("Length of array is:",k)

//Unshift - replacement of 1st element ?????
// let h = array.unshift("Mark")
// console.log(array);

//Shift - Remove 1st element
// let l = ["Fourth",19,"Gemini",18,"Bright",26,"Win",26]
// l.shift()
// console.log(l);

//toString - count string
// let r = array.toString();
// console.log(typeof r, r);

//Concat
// let b = [1,2,3,4,5];
// console.log(b);
// let c = ["Sunoo","Sunghoon"]
// console.log(c);
// let d = ["Black","Purple"]
// console.log(d);
// let newarr = b.concat(c,d);
// console.log(newarr);

//sort
// let x = [2,6,7,9,26,89,60,59];
// let newarray = x.sort();
// console.log(newarray);

//slice 
// let oh = ["Dior","Celine","Chanel","Gucci"];
// let newarray = oh.slice(1,3);
// console.log(newarray);

//splice
// let ha = [2,3,4,5,6,7,8];
// let newarray = ha.splice(1,2, 10,12);
// console.log(ha);

//for each loop in array
//example
// let arra = [45,44,70,13,7,4]
// arra.forEach(element => {
//     console.log(element)
// });

//example
// let ar = [45,44,70,13,7,4]
// ar.forEach(function (element) {
//     console.log(element)
// });

//Map
// let arra = [10,13,7,4]
// arra.map(element=>{
//     console.log(element)
// });

//Filter
// let arra = [10,13,7,4]
// arra.filter(element=>{
//     console.log(element)
// });
//or
// let array = [1,2,3,4,5,6,7,8,9,10,98,767,78,89,67]
// let p=array.filter(element =>{
//     return element<10;
// });
// console.log(p)

//Reduce
// let arra = [10,13,7,4]
// arra.reduce(element=>{
//     console.log(element)
// });

// var details = [
//     {
//         name: "Hunter",
//         birth: "Thailand",
//         Age: 24
//     },
//     {
//         name: "Somi",
//         birth: "Korea",
//         Age: 26
//     },
//     {
//         name: "Rosyzhao",
//         birth: "China",
//         Age: 26
//     },
//     {
//         name: "Nishchay",
//         birth: "India",
//         Age: 26
//     },
//     {
//         name: "Hunter",
//         birth: "Thailand",
//         Age: 24
//     },
//     {
//         name: "Somi",
//         birth: "Korea",
//         Age: 26
//     },
//     {
//         name: "Rosyzhao",
//         birth: "China kl",
//         Age: 20
//     },
//     {
//         name: "Nishchay",
//         birth: "India klh",
//         Age: 28
//     }
// ]
// let arr = details.filter(function(a,index){
// // console.log(a,index) 
//     if (a.name == 'Somi' && a.birth == "Korea"){
//         return a;
//     }
// })
// console.log(arr)

//Duplicate Array
// var color = ["black", "black", "purple", "purple", "white", "white", "mango", "kiwi", "watermelon", "mango"];
// var brand = ["chanel", "chanel", "celine", "celine", "dior", "dior"];
// // console.log(color,brand)
// const unik = (array1) => {
//     var b = [];
//     array1.forEach(function (element, index) {
// console.log(element)
// if (b.indexOf(element) == -1) {
//     b.push(element)
// }
//     if (b.includes(element)) {
//     }
//     else (
//         b.push(element)
//     )
// })
// if (!b.includes(item)){
//     b.push(item)
// }
//     return b;
// }
// let res = unik(color)
// console.log(res)

// let p=unik(color);
// let result = unik(color)
// console.log(result)