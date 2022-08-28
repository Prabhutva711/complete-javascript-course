//coding challenge 1
// let markMass = 78;
// let markHieght = 1.69;
// let johnMass = 92;
// let johnHieght = 1.95;

// markMass = 95;
// markHieght = 1.88;
// johnMass = 85
// johnHieght = 1.76;

// let markBMI = markMass / markHieght ** 2;
// let johnBMI = johnMass / johnHieght ** 2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI)
// console.log(markHigherBMI);
//coding challenge 1


//***
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// console.log(`Hi i am ${firstName} and, i am a ${job}. My age is ${year - birthYear}!`);

// console.log("heya \n\what is up"); //multiline old way
// console.log(`String 
// What is up!`) //template literals
// //this is known as template literals..


//coding challenge 2
// let markMass = 78;
// let markHieght = 1.69;
// let johnMass = 92;
// let johnHieght = 1.95;

// markMass = 95;
// markHieght = 1.88;
// johnMass = 85
// johnHieght = 1.76;

// let markBMI = markMass / markHieght ** 2;
// let johnBMI = johnMass / johnHieght ** 2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI)
// console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI is higher than John's, Mark's BMI is${markBMI} and John's is ${johnBMI}`);
// } else {
//     console.log(`Mark's BMI is lesser than John's, Mark's BMI is${markBMI} and John's is ${johnBMI}`);
// }

//coding challenge 3


//Type conversion vs Type coercion

//Type conversion is when we manually convert from one type to another, and type coercion is automatically when js does it for you!

//Type conversion:
const inputYear = '1991';
const year = 1;
console.log(inputYear + year)
console.log(year + inputYear)
console.log(year + Number(inputYear));
console.log(String(year) + Number(inputYear)); //String has higher precedence than no in concatenation! Type coercion exampe
console.log(Number('Jonas')); //gives NaN
console.log(typeof NaN); //gives Number
//Type Conversion


//Type Coercion
console.log('5' + '5'); //concatenation is higher than sum rest math operator in case both are numbers! //55
console.log('5' + 1); //51
console.log('5' - '5'); //::0
console.log('5' / '5'); //::1

console.log('4' + 'a') //'4a'
console.log('4' - 'a') //NaN
console.log('23' - 10); //13
console.log('23' - '10' - 3) //::10
console.log('23' ** 2) //529

let n = '1' + 1;
n -= 1;
console.log(n); //10

n = '1' - 1;
n -= 1;
console.log(n) //-1

console.log('10' - '4' - '3' - 2 + '5'); //15
console.log(10 - 4 - 3 - 2 + 5); //6

//Type coercion

// falsy and truthy values!
//falsy values are NaN, "",null, undefined, 0 rest are all Truthy be it emoty array empty objects etc...
//Type conversion in booleans takes place in if, else and operators!!!


//Equality operators == && ===
console.log(18 == "18"); //type coercion done
console.log(18 === "18"); //no type coercion , strict operator
console.log(0 == false) //true
console.log(0 === false) //false
console.log('0' == false) //true remeber!! ['0',false,0]==dalse; true 
console.log('0' === false) //false
if ('0') {
    console.log("O") //printed
}

//prompt always take string and returns string

//and or not operators!!


let dolphinScoreAvg = (96 + 108 + 89) / 3;
let koalasScoreAvg = (88 + 91 + 110) / 3;


if (dolphinScoreAvg > koalasScoreAvg && dolphinScoreAvg >= 100) {
    console.log(`Dolphins won the match with score ${dolphinScoreAvg}`);
} else if (koalasScoreAvg > dolphinScoreAvg && koalasScoreAvg >= 100) {
    console.log(`Koalas won the math with score ${koalasScoreAvg}`)
} else if (dolphinScoreAvg === koalasScoreAvg && (koalasScoreAvg >= 100 && dolphinScoreAvg >= 100)) {
    console.log(`It is a draw!!`)
} else {
    console.log("It is a no comp!!")
}

let day = "yo";
switch (day) {
    case 1:
        console.log("Heya!!");
        break;
    case 'tuesday':
        console.log("Heya tiesday");
        break;
    case 'thursday':
    case 'friday':
        console.log("It is thursday or friday");
        break;
    default:
        console.log("Lol");
}


//expression vs statement
//expression produced value like operations and regular expressions && string template literal etc
//statement performs an action like if else else if etc!!


//ternary Operators

const age = 16556;
let val;
const drink = age >= 18 ? val = "get a wine" : val = "get him some pepsi";
console.log(val);
console.log(`lets drink some ${age >= 18 ? "wine" : "water"}`); //can be used in conjuction with consoles and expression


let tip;
let bill = 40;
console.log(`The bill was ${bill} and tip is ${bill > 50 && bill < 300 ? tip = 15 / 100 * bill : tip = bill * 20 / 100} ${tip} and total is ${bill+ tip}`)