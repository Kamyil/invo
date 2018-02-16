let start_btn = document.querySelector('.start-challenge');
let spell_container = document.querySelector('.spell-to-invoke');

let time_container = document.querySelector('.time');
let rank_container = document.querySelector('.rank');
let spell_to_invoke;
let points = 0;
let spells = ['Alacrity','Chaos Meteor','Cold Snap','Deafening Blast','EMP','Forge Spirit','Ghost Walk','Ice Wall','Sun Strike','Tornado'];
let k;
let challenge_time = 5; // - 1 minute, 30 seconds
let time_left = 9;
let rank;
let invoke_challenge = document.querySelector('.invoke-challenge-hide');
let invoke_challenge_btn = document.querySelector('.invoke-challenge-button');

invoke_challenge_btn.addEventListener('click',function(){
invoke_challenge.classList.toggle('invoke-challenge');
invoke_challenge.classList.toggle('invoke-challenge-hide');
});


function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear');
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};






//COUNTDOWN BAR


  //adjust these numbers to match time set
  //must be in seconds

  
  

    

  start_btn.addEventListener('click',function(){
   
//Initiate game

k = Math.random()*10;
k = Math.floor(k);
spell_container.textContent= spells[k];
spell_to_invoke = spells[k];
progress(5, 5, $('#progressBar'));
  let interval =  window.setInterval(
        function(){
        
          
         








            time_left = time_left - 1;
            time_container.innerHTML = "Time left: " + time_left + " seconds";
            challenge_time = challenge_time - 1;
            
            if(time_left <= 0) {
                k = Math.random()*10;
                k = Math.floor(k);
                spell_to_invoke = spells[k];
                spell_container.innerHTML= spells[k];
               time_left = 9;
            //    progress(9, 9, $('#progressBar'));
                points = points - 100;
               rank_container.innerHTML= points+" points";
              
            }
           
         
            if(challenge_time==0){
                clearInterval(interval);
                time_left = 0;
                if(points<3000){
                    rank = 'c1';
                }   
                if(points >3000){
                    rank='l5';
                }
              
                spell_container.innerHTML= 'Challenge Finished';
                time_container.innerHTML = 'Youre invoking like: ';
                rank_container.innerHTML = '<img src="css/img/ranks/'+ rank + '.png" alt="" ';
               }
        }, 1000);
        document.addEventListener('keypress',function(e){
            if (e.keyCode == 102) {
                if(spell == spell_to_invoke){
                    // progress(9, 9, $('#progressBar'));

                    points = points + (100 * time_left);
                    k = Math.random()*10;
                    k = Math.floor(k);
                    spell_to_invoke = spells[k];
                    spell_container.innerHTML= spells[k];
                   
                   time_left = 9;
                
                    
                   rank_container.innerHTML= points+" points";
                }
                if(spell != spell_to_invoke){
                    // progress(9, 9, $('#progressBar'));
                    k = Math.random()*10;
                    k = Math.floor(k);
                    spell_to_invoke = spells[k];
                    points = points - 200;
                   
                    spell_container.innerHTML= spells[k];
                    
                   time_left = 9;
                  
                    
                   rank_container.innerHTML= points+" points";
                   
                }
               



            }


           
          
        });
        
        start_btn.classList.remove('start-challenge');
        start_btn.classList.add('start-challenge-hide');
 
        rank_container.innerHTML= points+" points";
     

  });


