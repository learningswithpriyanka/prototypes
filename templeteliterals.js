const message = `This is a 
long message
to demonstrate templete literals`


const name  = "Priyanka"
const age = 10
const greet = `Hello my ${name} is name and age is ${age}`
console.log(greet)

console.log("p1: ",name," ",age);
console.log(`Hello my ${name} is name and age is ${age}`);


function yourName (strings,firstname,lastname){
    return `${strings} ${firstname} ${lastname}`
}
console.log(yourName('a','b','c'))

const completeNameWithIntro = yourName( `Hello, hi` ,"Priyanka","M")
console.log(completeNameWithIntro);