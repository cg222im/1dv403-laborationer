"use strict";

window.onload = function(){
	
	// Slumpar fram tal mellan 0-100
	var secret = Math.floor( Math.random() * 101);
	
	var guessCount = 0;
	
	var guess = function(number){
		
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		
		// Felhantering av icke-numeriska värden
		if (isNaN(number) === true || number === ""){
			return [false, "Endast siffror, tack!"];
		}
		// Felhantering av för stora eller små värden
		else if (number < 0 || number > 100){
			return [false, "Talet är utanför intervallet 0 - 100"];
		}
		
		else if (number == secret){
			guessCount += 1;
			return [true, "Grattis du vann! Det hemliga talet var "+secret+" och du behövde "+guessCount+" gissningar för att hitta det."];
		}
		
		else if (number > secret){
			guessCount += 1;
			return [false, "Det hemliga talet är lägre!"];
		}
		else if (number < secret){
			guessCount += 1;
			return [false, "Det hemliga talet är högre!"];
		}
	
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};