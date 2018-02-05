window.onload = function(){
    //Creating containers to put stats into them 
    let dmg_container = document.querySelector('.dmg');   
    let armor_container = document.querySelector('.armor'); 
    let ms_container = document.querySelector('.movement-speed'); //movement speed
    let str_container = document.querySelector('.str'); 
    let agi_container = document.querySelector('.agi'); 
    let int_container = document.querySelector('.int'); 
    let hp_regen_container = document.querySelector('.hp-bar');


let level = document.querySelector('#level').innerHTML; // 1 lvl

let str = 16; // Base strength
let agi = 14; // Base agility
let int = 16 // Base intelligence
let base_dmg = 38; // every lvl gives him +4 dmg
let bonus_dmg = 0;
let bonus_str = 0;
let bonus_agi = 0;
let bonus_int = 0;
let bonus_armor = 0;
let movement_speed = 280;
let hp_regen = 1.5;
let mana_regen = 0.9;
let armor = 1.33;
let health = 520;
let mana = 267;

//Putting stats into containers

dmg_container.innerHTML =  base_dmg  + '<span style="color:green">' + "+" +  bonus_dmg + '</span>' + '&nbsp<img src="css/img/dmg.png" style="width:30%;">';
armor = Math.floor(armor);
armor_container.innerHTML = '&nbsp'+armor + '<span style="color:green">' + "+" +  bonus_armor + '</span>' +'&nbsp&nbsp<img src="css/img/armor.png" style="width: 25%">';; 
ms_container.innerHTML = '&nbsp'+movement_speed + '&nbsp<img src="css/img/western.png" style="width: 35%">';
str_container.innerHTML = str + '<span style="color:green">' + "+" +  bonus_str + '</span>' +'&nbsp<img src="css/img/str.png" style="width: 30%">';
agi_container.innerHTML = agi + '<span style="color:green">' + "+" +  bonus_agi + '</span>' +'&nbsp<img src="css/img/agi.png" style="width: 30%">';
int_container.innerHTML = int + '<span style="color:green">' + "+" +  bonus_int + '</span>' +'&nbsp<img src="css/img/int.png" style="width: 30%">';
}
lvlup_button.addEventListener('click',function(){









}