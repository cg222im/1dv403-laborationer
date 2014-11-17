"use strict";

var makePerson = function(persArr){

    // Skapar en array med namn
    var names = persArr.map(function(pers){
        return pers.name;
    });    

    // Sorterar array med namn
    names.sort(function(a,b) {
        return a.localeCompare(b);
    }); 
    
    // Skapar en array med ålder
    var ageArr = persArr.map(function(pers){
        return pers.age;
    }); 

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
    
   

 

    /*
    * = utan loopar (for, while, do...while), if, switch
        felhantering: saker innehåller det de ska (här fås if/switch osv användas)
    */
};

