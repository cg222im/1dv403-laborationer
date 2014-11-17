"use strict";

var makePerson = function(persArr){

    // Skapar en array med namn
    var names = persArr.map(function(pers){
        return pers.name;
    });    
    
    // Felhantering av namn
    var i = 0;
    do {
        try {
            if (typeof names[i] !== 'string') throw "is not a string";
            if (names[i] === undefined || persArr.name === null) throw "is empty or undefined";
            i++;
        }
        catch (error){
            alert("Name " + error);
    }}while (names[i]);
    
    // Sorterar array med namn
    names.sort(function(a,b) {
        return a.localeCompare(b);
    }); 
    
    // Skapar en array med ålder
    var ageArr = persArr.map(function(pers){
        return pers.age;
    }); 

    // Felhantering av ålder
    var y = 0;
    do {
        try {
            if (ageArr[y] === isNaN) throw "is not a number";
            y++;
        }
        catch (error){
            alert("Age " + error);
    }}while (ageArr[y]);

    // Uträkningar med ålder
    var minAge = Math.min.apply(Math, ageArr);
    var maxAge = Math.max.apply(Math, ageArr);  
    var averageAge = Math.round(((ageArr[0] + ageArr[1] + ageArr[2])/3)); 

    // Formaterar sträng med namn
    names = names.join(", "); 

    // Sätter result-objekt och returnerar                                                       
    var result = {averageAge: averageAge,
	     maxAge: maxAge,
	     minAge: minAge,
	     names: names};

    return result;

};