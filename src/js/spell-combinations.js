	/*
	Invoker's spell combinations

	1.QQQ - Cold Snap
	2.QQW - Ghost Walk
	3.QWW - Tornado
	4.QQE - Ice Wall
	5.QEE - Forge Spirit
	6.QWQ - Ghost Walk
	7.QEQ - Ice Wall
	8.QWE - Deafening Blast
	9.QEW - Deafening Blast
	
	1.WWW - E.M.P
	2.WWQ - Tornado
	3.WQQ - Ghost Walk
	4.WWE - Alacrity
	5.WEE - Chaos Meteor
	6.WEW - Alacrity
	7.WQW - Tornado
	8.WQE - Deafening Blast
	9.WEQ - Deafening Blast

	1.EEE - Sun Strike
	2.EEQ - Forge Spirit
	3.EQQ - Ice Wall 
	4.EEW - Chaos Meteor
	5.EWW - Alacrity
	6.EWE - Chaos Meteor
	7.EQE - Forge Spirit
	8.EQW - Deafening Blast
	9.EWQ - Deafening Blast
	*/
	
	let show_combos_btn = document.querySelector('.show-spell-combos');
	let combos = document.querySelector('.spell-combos-hide');

	
	

	show_combos_btn.addEventListener('click',function(){


	combos.classList.toggle('spell-combos-show');
	combos.classList.toggle('spell-combos-hide');
	
	});





	