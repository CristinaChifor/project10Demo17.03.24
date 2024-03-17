console.log(`hello`);

// exercitiul 1 -varsta

let age = 30;
console.log (`Varsta mea este ${age}`);
console.log (age);

// exercitiul 2- suma a doua numere.
let numberA= 5;
let numberB = 8;
let sum = numberA + numberB;
console.log (sum);
console.log (`Rezultatul sumei dintre ${numberA} plus ${numberB} este ${sum}`);

//exercitiul 3 conversie din C in Fh

let gradeC = 10;
let gradeF= (gradeC * 9/5) +32;
console.log (`Conversia dintre C si Fh este egala cu ${gradeF}`);
console.log(gradeF);

//exercitiul 4 Atribuire de caracter
let greeting = "Hello"
const myName = "Cristina";
let fullGreeting = greeting + ' ' + myName;
console.log (`${fullGreeting}`);

// Exerctiul 5 Numar par/ impar

let checkedNumber = 24;
let reminder = checkedNumber % 2;
let isEven = reminder == 0;
console.log (`Number ${checkedNumber} is even: ${isEven}`);

checkedNumber = 25;
reminder = checkedNumber % 2;
isEven = reminder == 0;
console.log (`Number ${checkedNumber} is even: ${isEven}`);

// Exercitiul 6 date Boolean

let studentTrue = true;
console.log(`I am a student is ${studentTrue}`);

// Exercitiul 7 Concatenare

let firstName = "Cristina";
let lastName = "Chifor";
let separator = " ";
let fullName = firstName + separator + lastName;
console.log (`Numele meu complet este ${fullName}`);

// Exercitiul 8 Restul impartirii

let numberE = 19;
let numberF = 4;
let moduloResults = numberE % numberF;
console.log(`Restul impartirii lui ${numberE} la ${numberF} este egal cu ${moduloResults}.`);

// Exercitiul 9 Declară o variabilă și atribuie-i valoarea undefined, apoi afișează rezultatul.

let name;
console.log(`Numele variabilei este ${name}`);

// Exercitiul 10 Calculeaza aria unui dreptunghi

let length = 10;
let width = 8;
let area = length * width;
console.log (`Aria dreptunghiului este egala cu ${area}`);

// Pag 2 de exercitii

// Exercitiul 1 Verificați dacă două șiruri de caractere sunt identice și afișați rezultatul.

let number1 = 20;
let number2 = 20;
let number3 = 21;

let firstCompareResult = number1 == number2;
console.log(`${number1} == ${number2} => ${firstCompareResult}`);

let firstCompareResult2 = number1 == number3;
console.log(`${number1} == ${number3} => ${firstCompareResult2}`);

// Exercitiul 2 Declarați două variabile booleane și efectuați operații logice pe acestea.

let student = true;
let absolvent = false;

// si logic &&
let logicalEndResult = student && absolvent;
console.log(`${student} && ${absolvent} => ${logicalEndResult}`);

// sau logic ||
let logicalResult = student || absolvent;
console.log(`${student} || ${absolvent} => ${logicalResult}`);

// not operator

let notStudent = !true;
console.log(`${!true} => ${notStudent}`);

let notAbsolvent = !false;
console.log(`${!false} => ${notAbsolvent}`);

// Exercitiul 3 Declară o variabilă pentru anul de naștere și calculează vârsta.

let birthYear = 1993;
let currentYear = new Date().getFullYear();
let myAge = currentYear - birthYear;
console.log(`My age is ${myAge}`);


// Exercitiul 4 Concatenează două șiruri de caractere și convertește rezultatul în majuscule.

let firstName2 = "Cristina";
let secondName2 = "Chifor";
let separator2 = ' ';
//let fullName = firstName + separator +secondName;
let allName = firstName2 + ' ' +secondName2;
console.log (`My fullname is ${allName}`);

let upperCaseName = allName.toUpperCase();
console.log(`Full name in uppercase is ${upperCaseName}`);

let lowerCaseName = allName.toLowerCase();
console.log(`Full name in lowercase is ${lowerCaseName}`);

// Exercitiul 5 Verifică dacă un număr este mai mare sau egal cu 100 și afișează rezultatul.

let z = 5;
let w = 100;
let q = 105;

let moreThanComparison = z > w;
console.log(`${z} > ${w} => ${moreThanComparison}`);

let moreEqualComparison = z >= w;
console.log(`${z} >= ${w} => ${moreEqualComparison}`);

let moreOrEqualComparison2 = w >= q;
console.log(`${w} >= ${q} => ${moreOrEqualComparison2}`);

let moreOrEqualComparison3 = q >= w;
console.log(`${q} >= ${w} => ${moreOrEqualComparison3}`);

let moreOrEqualComparison4 = q > w;
console.log(`${q} > ${w} => ${moreOrEqualComparison4}`);

// Exercitiul 6 Declarați o variabilă pentru distanța în kilometri și convertește-o în mile distanceInKm * 0.621371

let distanceInKm= 20;
let distanceInMile = 0.621371 * distanceInKm;
console.log(distanceInMile);
console.log(`${distanceInKm} km este echivalentul a ${distanceInMile} mile`);

// Exercitiul 8 Atribuiți unui număr valoarea null și verificați tipul de date.

let nullValue = null;
console.log(`nullValue = ${nullValue}`);

// Exercitiul 9 Declarați două numere și verificați dacă sunt egale.

let value1 = 22;
let value2 = 22;
let value3 = 23;

let firstComparison = value1 == value2;
console.log(`${value1} == ${value2} => ${firstComparison}`);

let secondComparison = value1 == value3;
console.log(`${value1} == ${value3} => ${secondComparison}`);

// Exercitiul 10 Declară o variabilă pentru prețul unui produs și aplică o reducere.

let chocolate = 15;
let discount = 0.2;
let newPrice= chocolate - (0.2* chocolate);
console.log(newPrice);
console.log(`Noul pret dupa aplicarea discount-ului este: ${newPrice}`);