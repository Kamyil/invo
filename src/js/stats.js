window.onload = function(){
    //Creating containers to put stats into them 
    let dmg_container = document.querySelector('.dmg');   
    let armor_container = document.querySelector('.armor'); 
    let ms_container = document.querySelector('.movement-speed'); //movement speed
    let str_container = document.querySelector('.str'); 
    let agi_container = document.querySelector('.agi'); 
    let int_container = document.querySelector('.int'); 


let level = document.querySelector('#level').innerHTML; // 1 lvl

let str = 16; // Base strength
let agi = 14; // Base agility
let int = 16 // Base intelligence
let base_dmg = 38; // every lvl gives him +4 dmg
let bonus_dmg = 0;
let movement_speed = 280;
let hp_regen = 1.5;
let mana_regen = 0.9;
let armor = 1.33;
let health = 520;
let mana = 267;

//Putting stats into containers

dmg_container.innerHTML = base_dmg + "+" + bonus_dmg;
armor = Math.floor(armor);
armor_container.innerHTML = armor; 
ms_container.innerHTML = movement_speed;
str_container.innerHTML = str;
agi_container.innerHTML = agi;
int_container.innerHTML = int;
}
