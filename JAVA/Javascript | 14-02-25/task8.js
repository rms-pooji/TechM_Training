let m=parseInt(prompt("enter price on Monday:"));
let t=parseInt(prompt("enter price on tuesday:"));
let w=parseInt(prompt("enter price on wednesday:"));
let th=parseInt(prompt("enter price on thursday:"));
let f=parseInt(prompt("enter price on friday:"));
let sa=parseInt(prompt("enter price on saturday:"));
let sn=parseInt(prompt("enter price on sunday:"));
let sum = m  + t+ w + th + f + sa + sn ;
let avg = sum/7 ;
if ( avg > 50){
    console.log(" tomato gave a good profit");
}
else{
    console.log("no profit from tomato");
}
