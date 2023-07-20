
 // standard function
function sum(a, b) {
//     return a + b;
// }

 // function expression
const sum1 = function(a,b){
    return a + b;
}
sum(1,2) // 3
//arrow function
sum1(1,2) // 3
 const sum2 = (a,b) =>{
    const log = a+b
const result = log*5;
return result;
 }
sum2(1,2) // 15

//omit the return keyword
const sum3 = (a,b) => (a + b)*5;
sum3(1,2) // 15

 // immidiatly invoked function expression
(function(a,b){
    console.log((a+b)*5);
}   )(1,2) // 15

// hoisting in function
sum4(1,2) // 3
function sum4(a,b){
    return a + b;
}

// 1. Write a function that takes in a callback and calls the callback

// function within function
function sum(a, b=2){
    function sum2(){
        return a+b;
    }
    return sum2(); 
}
console.log(sum(1,2)) // 3

// closure function
function sum8(a, b){
    return function(){
        console.log(a+b);
    }

}
sum8(1,2)() // 3 

// higher order function
function sum(a, b){ 
    return a+b;
}   
function higherOrderFunction(callback){ // outer function parameter value callback ==== sum(a,b)
    console.log(callback(1,12)); // inner function callback(1,2) ==== sum(1,2)
}
higherOrderFunction(sum) // 3
// control flow statement
let age = 14;
if(age>=21){
    console.log('true');
}
else if(age>=18){
    console.log('are bhakudda');
}
else{
    console.log("are bhakuda tu kuade asichu")
}

// for loop
for(let i=0; i<11; i++){
    console.log(i);
}
// while loop
let a = 12;
while(a<11){
    console.log(a);
    a++;
}
// do while loop
let b = 12;
do{
    console.log(b);
    b++;    
}
while(b<11)
//for in loop
const person = {

    person1:
    {
        name: 'chepichepa',
        age: 21
    },
    person2: {
        name: 'sameersweety',
        age: 22
    },
    person3: {
        name: 'sweetysameer',
        age: 15
    }
}
for (let key in person) {
    console.log(person[key].name)
    console.log(person[key].age)
    console.log(`Your Name Is ${person[key].name} and Your Age Is ${person[key].age}`)

}
// for of loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let value of arr) {
    console.log(value);
}
//login system using if else
//User Site
let username = 'chepichepa';
let password = "SameerSweety@1";
// DB Site 
let dbusername = 'chepichepa';
let dbpassword = "SameerSweety@17";
if (username === dbusername && password === dbpassword) {
    console.log('You Are Logged In');
}
else if(username != dbusername){
    console.log('Your UserName Is InValid ');
}
else if(password != dbpassword){
    console.log('Your Password Is InValid ');
}

else {
    console.log('You Are Not A Valid User');
}




if(1==2){
    console.log('true1');
}
else if(1>0){
    console.log('true2'); // flow
}
else{
    console.log('false');
}
// Sign-in System Using If Else
// This Below Mentioned data Coming From  Client Side
const fName = "ChepiChepa17";
const lName = 'Swain';
const email = "st.sameer.builder.24@gmail.com"
const mobileNo = "9583636596";
const password2 = "SameerSweety@17";

// This Below Mentioned Data Has At  DATABASE Side
const dbfName = 'ChepiChepa';
const dblName = 'Swain';
const dbemail = "st.sameer.builder.24@gmail.com"
const dbMobileNo = 9583636596;
const dbPassword = "SameerSweety@17";

// TESTCASE-1 JADI  CLIENT SIDE ASUTHIBA sabu jaka DATA JADI DATABASE SIDE THIBA DATA SAHITA MATCH KARU NAHI ("YOU ARE NOT A VALID USER")
// TESTCASE-2 JADI  CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA DATA SAHITA MATCH KARIBA ("YOU ARE LOGGED IN")//statusCode 200
// TESTCASE-3 JADI FIRSTNAME  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA FIRSTNAME DATA SAHITA MATCH KARU NAHI ("YOUR FIRSTNAME IS INVALID")
// TESTCASE-4 JADI LASTNAME  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA LASTNAME DATA SAHITA MATCH KARU NAHI ("YOUR LASTNAME IS INVALID")
// TESTCASE-5 JADI EMAIL  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA EMAIL DATA SAHITA MATCH KARU NAHI ("YOUR EMAIL IS INVALID")
// TESTCASE-6 JADI MOBILENO  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA MOBILENO DATA SAHITA MATCH KARU NAHI ("YOUR MOBILENO IS INVALID")
// TESTCASE-7 JADI PASSWORD  JOTAKI CLIENT SIDE ASUTHIBA DATA JADI DATABASE SIDE THIBA PASSWORD DATA SAHITA MATCH KARU NAHI ("YOUR PASSWORD IS INVALID") 

if(fName===dbfName && lName === dblName && email === dbemail && mobileNo === dbMobileNo && password2 === dbPassword){
console.log("YOU ARE LOGGED IN")

}
else if(fName !== dbfName  ){
    console.log("YOUR FIRSTNAME IS INVALID")
}
else if(lName !== dblName){
    console.log("YOUR LASTNAME IS INVALID")
}
else if(email !== dbemail){
    console.log("YOUR EMAIL IS INVALID")
}
else if( mobileNo !== dbMobileNo){
    console.log("YOUR MOBILE NO IS INVALID")
}
else if(password2 !== dbPassword){
    console.log("YOUR PASSWORD IS INVALID")
}
else{
    console.log("YOU ARE NOT A VAILD USER")
}








