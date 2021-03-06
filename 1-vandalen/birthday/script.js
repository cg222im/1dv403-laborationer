"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
	// Tid sedan Zero
    var today = new Date();
    
	// Inmatat datum splittas och görs om till ett Date()
    var birthday = date.split("-");

	// Felhantering av inmatning -- skriver alltid ut default switch: message + err
	try {
		
		if (birthday[0] === undefined){
			throw "Du måste fylla i datumet i formatet ÅÅÅÅ-MM-DD";
		}
		else if (birthday[1] === undefined){
			throw "Du måste fylla i datumet i formatet ÅÅÅÅ-MM-DD";
		}
		else if (birthday[2] === undefined){
			throw "Du måste fylla i datumet i formatet ÅÅÅÅ-MM-DD";
		}
		else if (birthday[0].length > 4){
			throw "Du måste fylla i datumet i formatet ÅÅÅÅ-MM-DD";
		}
		else if (birthday[1].length > 2) {
			throw "Du måste fylla i datumet i formatet ÅÅÅÅ-MM-DD";
		}
		else if (birthday[2].length > 2) {
			throw "Du måste fylla i datumet i formatet ÅÅÅÅ-MM-DD";
		}
		
		else {
			// Om inmatning är korrekt, räkna ut hur lång tid det är kvar
			birthday = new Date(birthday);
			
			// Sätter inmatat år till nuvarande för omräkning
		    birthday.setFullYear(today.getFullYear());
		    // ...om födelsedag redan infallt i år...
		    if (today > birthday) {
		        birthday.setFullYear(today.getFullYear() + 1);} 
		                                                       
		    // Räknar ut tid kvar och konverterar till dagar                                                      
		    var timeLeft = Math.ceil((birthday - today) / (1000*60*60*24));
		    
			// Om födelsedag infaller idag om 365 dagar...
			if (timeLeft >= 365) {
				timeLeft = (timeLeft - 365);
			} 
		
			// Returnerar antal dagar kvar tills födelsedag
			return timeLeft;	
		}
	
	}
	catch(err){
		throw new Error(err);
	}
	
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};