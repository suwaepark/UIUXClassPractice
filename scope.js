// 1.Local Scop
// 2.Global Scop
// 3.Block Scop

// 1. Local Scop
// const local = () =>{
//     const b = "Name";
//     let a = 35;
//     console.log("The variable value",a);
//     console.log("The name of the person",b);
// }
// local()
// console.log("The variable value",a);
// console.log("The name of the person",b);
 
// 2. Global Scop
// let c = "74";
// const d = "Suwani"
// const local = () =>{
//     const b = "Name";
//     let a = 35;
//     console.log("The variable value",c);
//     console.log("The name of the person",d);
// }
// local()
// console.log("The variable value",c);
// console.log("The name of the person",d);

//3. Block Scop
// const blockscop = () =>{
//     if(false){
//         var a = 25;
//         console.log("This is Blockscop",a);//it prints when it is true.
//     }
//     else{
//         var b = 38;
//         console.log("Blockscop",a);//when false.
//     }
// }
// blockscop()
// or  
// const blockscop = () =>{
//     {
//       let an = "Somi";
//       console.log(an);
//     }
//     {
//       let b = 26;
//       console.log(b);
//     }
// }
// blockscop()