"use strict";

window.onload = function(){

	
	var birthday = function(date){
		

	/*try {
		if (date  === isNaN){
			throw "Du måste fylla i datumet i formen ÅÅÅÅ-MM-DD";
		}
	}
	catch (error){
		return error;
	} */
	
	// Tid sedan Zero
    var today = new Date();
	// Inmatat datum splittas och görs till ett Date()
    var birthday = date.split("-");
	birthday = new Date(birthday);
	
	// Sätter inmatat år till nuvarande för omräkning
    birthday.setFullYear(today.getFullYear());
    // ...om födelsedag infaller nästa år...
    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);}
                                                       
    // Räknar ut tid kvar och konverterar dagar                                                      
    var timeLeft = Math.floor(((birthday - today) / (1000*60*60*24))+1);

	// Returnerar antal dagar kvar tills födelsedag
	return timeLeft;

	


	
	/*
	try-catch, fel format (! ÅÅÅÅ-MM-DD)
	räkna ut hur många dagar till B day
	returnera answer
	http://www.w3schools.com/jsref/jsref_obj_date.asp
	http://stackoverflow.com/questions/21090221/calculate-days-remaining-until-next-birthday-in-javascript
	*/




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