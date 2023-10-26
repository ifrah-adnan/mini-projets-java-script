function calculateAge(birthYear){
    return 2023 -birthYear;
}
var age = calculateAge(2001);
console.log(age);

/**** 2 variable */
function YearRetirement(name,year){
    var age1=calculateAge(year);
    var retirement = 65-age; 
    console.log(name + 'have ' + retirement + 'for retirement');
}
YearRetirement('adnan',2001)
/****** MY BIG CHALLENGE */
function CalculerAge(age){
    return 2023 -age;
}
function CalculerDateRetraite(nom,annee,ville){
    var age = CalculerAge(2001);
    var dateretraite = 65 - age;
    console.log(nom + 'lui rester ' + dateretraite + ' ans pour la retraite dans '+ ville);
}
CalculerDateRetraite('adnan',2001,'casa');
/**** */
function WhatIDo(prenom, job) {
    switch (job) {
        case 'teacher':
            return prenom + ' enseigne';
        case 'engineer':
            return prenom + ' enginer';
        case 'driver':
            return prenom + ' conduit';
        default:
            return prenom + ' fait quelque chose';
    }
}

var what = WhatIDo('adnan', 'engineer');
console.log(what);
console.log(WhatIDo('test','driver'));
/**array *
 * -------------------*/
var names =['adnan','test','taha'];
var namess = new Array('adnan','test','taha');
console.log(names[0]);
console.log(names.length)
names[names.length]='marry';
console.log(names);
console.log (namess[1]);
/* on peux ajouter un element dans un tableau dapres une fonction push*/
names.push('yellow');
names.unshift('Mr');
console.log(names);
/*et pour delete*/
names.pop();//for last element
names.shift();// for first elemment
console.log(names);
// and for return position
console.log(names.indexOf('test'));
console.log(names.indexOf('eeest'))// non trouvable
var test =names.indexOf('akram') ===-1 ? 'akram nest pas dans la liste or in english akram doesnt in the liste' : 'est dans la liste';
console.log(test) 



function Age(annenai){
    return 2023 -annenai;
}
function Prix(monnom){
 var aage = Age(2019);
 if (aage <8){
    return 'il ne faut pas rien '+monnom;
}else{
    return 'il faut yer payer 6 dh';
}
}
console.log(Prix('adnan'))

var prix = Age(2001) < 8 ? 'gratuit' : '6 dh';
console.log(prix);





