let level_container = document.querySelector('#level'); // 1 lvl
let lvlup_button = document.querySelector('.level-up');
let level = 1;

level_container.innerHTML = level;


lvlup_button.addEventListener('click',function(){
    if(level == 24){
        lvlup_button.disabled = true;
        lvlup_button.innerHTML = "Max level!";
        level_container.style.border = '3px solid #d5aa77';
    }
level++;
level_container.innerHTML = level;
    

});