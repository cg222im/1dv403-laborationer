"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	

		// Variabel för placering i array
		var n = 0;
		var string = "";
		
		do{
			
			if (str[n] == str[n].toUpperCase()){
				string += str[n].toLowerCase();
			}
			else if (str[n] == str[n].toLowerCase()){
				string += str[n].toUpperCase();
			} 
			n += 1;
		}while (n < str.length);
		
		return string;
	
		/* 
		Ändra alla versaler till gemener
		Ändra alla gemener till versaler
		Ändra alla "aA" till "#"
		Även Svenska tecken

		returnera
		throw-catch om använder klickar på omvandla utan input
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};