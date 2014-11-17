"use strict";

var makePerson = function(persArr){


    var names = persArr.map(function(pers){
        return pers.name;
    });    
      
    //var names= persArr[0].name + ", " + persArr[1].name + ", " + persArr[2].name;

    // Sorterar array med namn <--- ÅÄÖ??
    names.sort(function(a,b) {
        return a.localeCompare(b);
    }); 
    
    /*
    //Array med endast ålder        
    console.log(persArr[0].age + ", " + persArr[1].age + ", "+  persArr[2].age);        
    var ageArr = persArr[0].age + ", " + persArr[1].age + ", "+  persArr[2].age;    */

    var ageArr = persArr.map(function(age){
    console.log(persArr[0].age + ", " +  persArr[1].age + ", " + persArr[2].age);
    return persArr[0].age + ", " +  persArr[1].age + ", " + persArr[2].age;
    }); 

    // Uträkningar med ålder
    var minAge = Math.min.apply(Math, ageArr);
    var maxAge = Math.max.apply(Math, ageArr);  
    var averageAge = Math.round(((ageArr[0] + ageArr[1] + ageArr[2])/3)); 

    // Formaterar sträng med namn
    names = names.join(", "); 

    // Sätter result objekt och returnerar                                                       
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

