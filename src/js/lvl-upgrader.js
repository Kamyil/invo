let level_container = document.querySelector('#level'); // 1 lvl
//Buttons
let lvlup_button = document.querySelector('.level-up');
let refresh_level_btn = document.querySelector('.refresh-lvl');
let level = 1;

level_container.innerHTML = level;
let talent_sound = new Audio('sounds/Talent.mp3');

lvlup_button.addEventListener('click',function(){


    
    if(level == 9){

        talent_sound.volume = 0.06;
        talent_sound.play();

    }
    if(level == 14){
        talent_sound.volume = 0.06;
        talent_sound.play();
    }
    if(level == 19){
        talent_sound.volume = 0.06;
        talent_sound.play();

    }
    if(level == 24){
        lvlup_button.disabled = true;
        lvlup_button.innerHTML = "Max level!";
        level_container.style.border = '3px solid #d5aa77';
        talent_sound.volume = 0.06;
        talent_sound.play();

    }
level++;
level_container.innerHTML = level;
    

});

refresh_level_btn.addEventListener('click',function(){

level = 1;
level_container.innerHTML = level;
level_container.style.border = '3px solid #202020';
lvlup_button.innerHTML = "Level Up";



str = 16; // Base strength
agi = 14; // Base agility
int = 16 // Base intelligence
base_dmg = 38; // every lvl gives him +4 dmg


 hp_regen = 1.5;
 mana_regen = 0.9;
 armor = 1;
health = 520;
 mana = 267;
 str_container.innerHTML = str + '<span style="color:green">' + "+" +  bonus_str + '</span>' +'&nbsp<img src="css/img/str.png" style="width: 30%">';
agi_container.innerHTML = agi + '<span style="color:green">' + "+" +  bonus_agi + '</span>' +'&nbsp<img src="css/img/agi.png" style="width: 30%">';
int_container.innerHTML = int + '<span style="color:green">' + "+" +  bonus_int + '</span>' +'&nbsp<img src="css/img/int.png" style="width: 30%">';
dmg_container.innerHTML =  base_dmg  + '<span style="color:green">' + "+" +  bonus_dmg + '</span>' + '&nbsp<img src="css/img/dmg.png" style="width:25%;">';
armor_container.innerHTML = '&nbsp'+armor + '<span style="color:green">' + "+" +  bonus_armor + '</span>' +'&nbsp&nbsp<img src="css/img/armor.png" style="width: 25%">';
hp_container.innerHTML = health + "&nbsp/&nbsp" + health;
mana_container.innerHTML = mana+ "&nbsp/&nbsp" + mana; 
});