console.log("%c  Mohamed HaMiiD    %c  Console  ","background-color:gold;color:red;font-size:14px;border:2px solid red;border-right:none","color:gold;font-size:14px;background:red;border:2px solid gold;border-left:none;")

let a = 10;
if(a < 10) {
  console.log(10);
}else if(a >= 10 && a<= 40){
console.log("10 To 40")

}else if(a > 40){
 console.log("> 40")
}else{
  console.log("Unknown")

}
// Write With Ternary if Syntax

a < 10 ?console.log(10) 
:a >= 10 && a <= 40 ? console.log("10 To 40")
:a > 40 ? console.log("40") 
:  console.log("Unknown");

// 8888888888888888888888

let st = "Elzero Web School"

if(st.repeat(2).split('').length.toString() === "34"){
  console.log("Good")

}
// w position may change
if(st[st.indexOf("W")].toLowerCase() === "w"){
  console.log("Good")

}
if(typeof +st !== "string"){
  console.log("Good")

}
if(typeof st !== "number"){
  console.log("Good")

}
if(st.slice(0,6).repeat(2) === "ElzeroElzero"){
  console.log("Good")

}
console.log()