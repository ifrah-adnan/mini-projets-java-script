var name = "Adnan";
/*console.log(name);
var lastname = "ifrah";
var age = 21;
var fullAge = true;
console.log(lastname);
//my comments

/*
we don't should create a variable with number in first word
*/
/*console.log(lastname + ' ' + age);

var job,isMarried;
job= "developer";
isMarried=false;
console.log(name + ' is ' +job + ' is he married ? '+ isMarried);
alert(name + ' is ' +job + ' is he married ? '+ isMarried);
/**stocker variavle */
/*var lastname =prompt('What is your name?');
alert(lastname)*/
/******************************************
 * 
 * operation
 */
var myold =2023 - 2001;
console.log(myold -3);
 
// logical operator
var a = 10;
var b = 4;
var c = a < b;
console.log(typeof c);
console.log( typeof a);
var d = 11;
var e = d -2 > b;
console.log(a+b)
var ab = 3+5*4+2;
console.log(ab)
ab-=2;
console.log(ab)
 
/**challenge  v8 */
var massA =84; 
var heightA =174;
var BMI = massA / (heightA*heightA);
console.log("my BMI adnan is " + BMI);
var massb = 90;
var heightb = 199;
var BMIB = massb / (heightb*heightb);
console.log( "my bmi bb is " +BMIB);
if (BMIB> BMI) {
    console.log('hhhhh');
}else  {
    console.log('aaaaa');
}
/**exercice about age  */
var mon_age = 22;
if (mon_age > 30){
    console.log('im a man');
}
else if (mon_age >20 && mon_age<=30){
    console.log('im a young man');
}
else if (mon_age >12 && mon_age<=20){
    console.log('im a adolllesecnt');
}
else {
    console.log('im a boy');
}


mon_age > 18 ? console.log(name + " drinks beer") : console.log(name + " drinks juice");
var drink = mon_age> 18 ? 'coca' : 'jus';
if (mon_age >= 18) {
    console.log ('adnan drink ' +drink);
    
} else {
    console.log('adnan drink ' +drink);
}
var job= 'developer';
switch (job) {
    case 'developer':
        console.log(name  + ' developer hhh');
        
        break;
    case 'driver':
        console.log(name +' driver iiii');

    default:
        console.log(name + ' student');
        break;
}
var x = 5;
var y = "5";

// Utilisation de l'opérateur d'égalité non strict (==)
if (x == y) {
    console.log("x est égal à y en utilisant ==");
} else {
    console.log("x n'est pas égal à y en utilisant ==");
}

// Utilisation de l'opérateur d'égalité stricte (===)
if (x === y) {
    console.log("x est égal à y en utilisant ===");
} else {
    console.log("x n'est pas égal à y en utilisant ===");
}
var food = "i want eat chiken with fries";
console.log(food);
