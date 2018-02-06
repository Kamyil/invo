
let key_settings = document.querySelector('.keys-settings-off');
let show_settings_btn = document.querySelector('.keys-settings');
let close_btn = document.querySelector('.close');
show_settings_btn.addEventListener('click',function(){


	key_settings.classList.toggle('keys-settings-on');
	key_settings.classList.toggle('keys-settings-off');
	
    });
    close_btn.addEventListener('click',function(){
        key_settings.classList.remove('keys-settings-on');
        key_settings.classList.add('keys-settings-off');
    })