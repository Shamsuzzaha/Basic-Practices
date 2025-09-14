document.write("<br><br><u> summation math </u><br>")
let x = 10;
let y = 2;
let z = x + y;
document.write(`<br> ${z}`);


document.write("<br><br><u> Object </u><br>")
let myObj = {
name: "Zoha",
age: 28,
city: "Rangpur",
country: "Bangladesh"
}
document.write('<br>' + myObj);



document.write("<br><br><u> if condition </u><br>")
if(x%2 ===0){
 document.write("<br> X is an Even Number")

}else{
    document.write("<br> X is an Odd number")
}



document.write("<br><br><u> if else condition </u><br>")
// marks 
if(x <= 33){
    document.write("<br> F");
}else if(x <= 50){
    document.write("<br> You Passed");
}else{
    document.write("<br> Invalid marks");
}


document.write("<br><br><u> while loop </u><br>")
 // while loop
let i=0;
while(i<5){
    let btn = `<button>btn</button><br>`;
    document.write(btn);
    i++;
}


document.write("<br><br><u> Do while loop </u><br>")
// do while loop
let count = 0;
do{
    let btn = `<button>do while</button><br>`;
    document.write(btn);
    count++;
}while(count<4);




// Function
document.write("<br><br><u> Function </u><br>")
function addNumber(){
    let a=10;
    let b=1;
    let sum=a+b;
    document.write(sum + `<br>`);
}
addNumber();