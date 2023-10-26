'use strict';
let permis=false;
const test=true;
if (test)
    permis=true;
if (permis)
console.log("i can drive")
/* fonction*/
function tst(){
console.log('my name is adnan');
}
tst();
function fruit(apple, banana){
//  console.log(apple,banana);
 
 const juice = `juice with ${apple} apple  and ${banana} banana `; 
 return juice;
}
 const tstjuice=fruit('adnan',4);
 console.log(tstjuice);
 console.log(fruit(2,2));
function calculage(birtdayear,actualyear){
  var age = actualyear-birtdayear;
  console.log(`l'age est ${age} ans`);
  
}
calculage(2001,2023);
/*expression function*/
const calculage2 = function(birthYear){
    return 2023-birthYear
}
console.log('test ' +calculage2(2001)+' years')
/*Arrow function*/
const calculage3 = birth =>2023-birth;
const age3= calculage3(2001);
console.log(age3);
// test exercice pour moi creer une fonction arrow avec 2 parametre 
const test2 = (fonction,year) =>
{ 
    const age =year-2001;
    const retirement =65-age;
    return `my fonction is ${fonction} and i was retire in ${retirement} year`;

}
console.log(test2('developer',2023))
// /*calling function inside function
function doublejuice (fruit){
    return fruit*3;
}
function myjuice(avocat,banana){
    const nbavocado = doublejuice(avocat);
    const nbbanana = doublejuice(banana);
    console.log(` my prefere juice is avocado and juice i preapre this juice with ${nbavocado} avocado and ${nbbanana} banana`)
}
myjuice(2,1);
const calculage4 = function(annee){
    return 2023-annee
}
function retirement(name,anne){
const age = calculage4(anne);
const annretire = 65 - age;
if (annretire>0){
    return console.log(`${name} have ${annretire} for retirement`);
}
else{
    return console.log(`${name } has already retired`);
}
}
retirement('adnan',2001);
retirement('hamid',1956);
//challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// creer une arrow function for determiner avg de 3 score
const avgscore = (s1,s2,s3)=>{
  const avgs = (s1+s2+s3)/3;
  return avgs;
}
avgscore(3,4,6)
const pointwac = avgscore(2,4,8);
const pointrca =avgscore(3,2,1);
function teamwinner ( pointwacc,pointrcaa){
    
    if (pointrcaa>pointwacc){
        console.log('rca winner')

    }
    else if (pointwacc>pointrcaa){
        console.log('wac winner yesss');
    }
    else {
        console.log('nothing win')
    }
}
teamwinner(pointwac,pointrca)
/*Arraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay*/
const friends =['ahmed','soumia','ilyass',8];
console.log(friends[3]);
//or
const friend =new Array('ahmed','ali','adnan')
console.log(friend.length)
//pour ajouter voir file function.js et .
friend[2]='moi';
console.log(friend)
//exercice 
const years=[2001,2004,2000];
function myage(years){
    return 2023-years;
}
console.log(myage(years[0]),myage(years[1]),myage(years[2]));
/////////////////////pour ajouter a la fin 
friend.push('soumia');
friend.unshift('mr');//pour ajouter dans debut
console.log(friend)
friend.pop();//pour supprimer dans fin
friend.shift();//dans debut
console.log(friend)
var montest = friend.indexOf('adnan')? 'adnan nest pas dans la liste': 'adnan dans la liste ';
console.log(montest)

//basic array vd 10
const job = ['teacher','developer','enginner'];
job.push('driver');
job.unshift('policier');
console.log(job);
console.log(job.includes('teacher'));
/*create object */
const calctip = function(bill) {
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;

}
const bills = [100,13,455];
const tip = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])];
console.log(bills,tip);
//exercice creer moi la note avec le coefficient des eleves 
const coefficient = function(matiere,note){
    if (matiere==='math'){
        return note*5;
    }
    else if(matiere === 'pc'){
       return note*4;

    }
    else {
         return note;
    }
    
}
const matie = ['math','pc','frc'];
const note = [10,15,14];
const co = [coefficient(matie[0],note[0]),coefficient(matie[1],note[1]),coefficient(matie[2],note[2])];
console.log(`${friend[0]} a obtenue dans les matiere:${co}`);
/* dot bracket notation*/