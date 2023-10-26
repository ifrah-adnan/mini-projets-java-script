var job ='teacher';
const name= 'adnan';
const birthYear= '2001';
const year= 2023;
console.log(`mY NAme is ${name} ,i have  ${year - birthYear} years old , my job is ${job}`);
console.log(`mY NAme is ${name} \n\,i have  ${year - birthYear} years old , my job is ${job}`);
 

const age = 2;
const old = age >=20;
if (old){
    console.log('im old ')
}
else{
    console.log(`i m not old because i have ${age} years old`)
}

/** convertit in number``~~~~~~~~~~~~~~~~~~~ */
const anne = '2001';
console.log(typeof anne);
console.log(Number(anne)+20);
console.log('i have '+(20+2))
/*boolen*/
var money =10;
if (money){
    console.log('i have money')

}
else{
    console.log('i dont have')
}
/***  */
// let qst =  (prompt("Quel est votre nombre préféré ?"));
// console.log(qst);
// console.log(typeof qst);

// if (qst === 1) { // Utilisez '==' pour la comparaison
//     console.log('Incroyable, 1 est un super choix !');
// } else {
//     console.log("C'est un autre choix génial !");
// }

let finkynaana= 0;
if (finkynaana ){
    console.log('ana f dar ');
}else {
    console.log('ana f cafe');
}
/****logic noolean */
var mon_age= 13;
if (age >18){
    console.log("im a young man");

}else if(age<18 || age >12){
console.log('studenet in school');}
else{
    console.log('bebe');
}
/*challenge 21*/

const operation1 = (10*2+3)/3;
const operation2 = (10*3)/3;
console.log(operation1 , operation2);
if (operation1>operation2){
    console.log("operation est grand");

} else if (operation2>operation1){
    console.log("operation2 est grand 🏆");
}
else {
    console.log('sont egale');
}
/*switch  and statement */
const day = 'wednsday';
switch (day) {
    case 'monday':
        console.log('today is monday');        
        break;
    case 'thuesday':
        console.log('today is thuesday');  
        break;
    case 'wednsday':
        console.log('today is wednsday');  
         break;
    case 'thurssday':
        console.log('today is thursday');  
          break;
    case 'friday':
        console.log('today is friday');  
        break;
    case 'sunday':
        console.log('today is sunday');  
        break;      



    default:
        console.log('weenkend')
        break;
}
/* statement and expression */
const me = "adnan";
console.log(`my name is ${me} and i have ${2023 - 2001} years old`);
/*consition operator */
console.log(age)
age >=18 ? console.log('i drink coca'): console.log("drink water")
/*second method*/
const drink = age>=18 ? 'coca and wine ': 'water and milk ';
console.log (`i like drink ${age>=18 ? 'coca and wine ': 'water and milk '}`);
/* challenge 4*/
/*last video */