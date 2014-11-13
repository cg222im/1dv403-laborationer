"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){

		// Variabel för placering i array
		var n = 0;
		var string = "";
		
		// Felhantering av tomt input	
		try {
			if (str === ""){
				document.getElementById("value").style.backgroundColor = "red";
                document.getElementById("value").style.display = "block"; 
                document.getElementById("value").style.width = "260px"; 

				throw "FEL! Du måste ange något att invertera.";
			}
			}
		catch(err){
			return err;
		}
		
		// Gå igenom sträng och konvertera tecken
		do{
			if (str[n] === "a" || str[n] === "A"){
				string += '#';
			}
			else if (str[n] == str[n].toUpperCase()){
				string += str[n].toLowerCase();
			}
			else if (str[n] == str[n].toLowerCase()){
				string += str[n].toUpperCase();
			}
			n += 1;
		}while (n < str.length);
		
		document.getElementById("value").style.backgroundColor = "white";
		return string;
	
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