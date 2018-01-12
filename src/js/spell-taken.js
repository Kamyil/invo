	
	
	let container = document.getElementById("elements-taken");
	let spell_container = document.getElementById("spell-invoked");
	let update = [];
	let spell; 
	let empty = document.querySelector('.empty');
	
	
	
	
	document.addEventListener("keypress", function (e) {

		let element = document.createElement('div');
		//A - Quas
		if (e.keyCode == 97) {


			element.className = "quas";
			update.push('quas');
			container.appendChild(element);
		}
		//S - Wex
		if (e.keyCode == 115) {

			element.className = "wex";
			update.push('wex');
			container.appendChild(element);
		}
		//D - Exort
		if (e.keyCode == 100) {

			element.className = "exort";
			update.push('exort');
			container.appendChild(element);

		}

		







		//F - Invoke
		if (e.keyCode == 102) {
			console.log(update);
			//BEGINNING WITH QUAS
			if(update=="quas,quas,quas"){
				spell="Cold Snap";
				console.log(spell);
				
			}
			else if(update=="quas,quas,wex"){
				spell="Ghost Walk";
				console.log(spell);
			}
			else if(update=="quas,wex,wex"){
				spell="Tornado";
				console.log(spell);
			}
			else if(update=="quas,quas,exort"){
				spell="Ice Wall";
				console.log(spell);
			}
			else if(update=="quas,exort,exort"){
				spell="Forge Spirit";
				console.log(spell);
			}
			else if(update=="quas,wex,exort"){
				spell="Deafening Blast";
				console.log(spell);
			}
			else if(update=="quas,exort,wex"){
				spell="Deafening Blast";
				console.log(spell);
			}
			else if(update=="quas,exort,quas"){
				spell="Ice Wall";
				console.log(spell);
			}
			else if(update=="quas,wex,quas"){
				spell="Ghost Walk";
				console.log(spell);
			}


			//BEGINNING WITH WEX
			else if(update=="wex,wex,wex"){
				spell="E.M.P";
				console.log(spell);
			}
			else if(update=="wex,wex,quas"){
				spell="Tornado";
				console.log(spell);
			}
			else if(update=="wex,quas,quas"){
				spell="Ghost Walk";
				console.log(spell);
			}
			else if(update=="wex,wex,exort"){
				spell="Alacrity";
				console.log(spell);
			}
			else if(update=="wex,exort,exort"){
				spell="Chaos Meteor";
				console.log(spell);
			}
			else if(update=="wex,quas,exort"){
				spell="Deafening Blast";
				console.log(spell);
			}
			else if(update=="wex,exort,quas"){
				spell="Deafening Blast";
				console.log(spell);
			}
			else if(update=="wex,exort,wex"){
				spell="Alacrity";
				console.log(spell);
			}
			else if(update=="wex,quas,wex"){
				spell="Tornado";
				console.log(spell);
			}

			//BEGGINING WITH EXORT

			else if(update=="exort,exort,exort"){
				spell="Sun Strike";
				console.log(spell);
			}
			else if(update=="exort,exort,quas"){
				spell="Forge Spirit";
				console.log(spell);
			}
			else if(update=="exort,quas,quas"){
				spell="Ice Wall";
				console.log(spell);
			}
			else if(update=="exort,exort,wex"){
				spell="Chaos Meteor";
				console.log(spell);
			}
			else if(update=="exort,wex,wex"){
				spell="Alacrity";
				console.log(spell);
			}
			else if(update=="exort,quas,wex"){
				spell="Deafening Blast";
				console.log(spell);
			}
			else if(update=="exort,wex,quas"){
				spell="Deafening Blast";
				console.log(spell);
			}
			else if(update=="exort,wex,exort"){
				spell="Chaos Meteor";
				console.log(spell);
			}
			else if(update=="exort,quas,exort"){
				spell="Forge Spirit";
				console.log(spell);
			}

		}

		

		
		if (update.length == 4) {
			update.shift();
			container.removeChild(container.childNodes[0,1]);

		}
		


	}, false);


