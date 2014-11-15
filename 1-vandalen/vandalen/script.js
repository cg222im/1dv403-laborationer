"use strict";

var makePerson = function(persArr){

    //persArr = ["John Häggerud", 37, "Johan Leitet", 36, "Mats Loock", 46];
  
    
    
    //var indata = [{name: "John Häggerud", born: "1976-02-23"}, {name: "Johan Leitet", born: "1977-12-12"},  {name: "Mats Loock", born: "1967-06-02"}];
    
    // Array med endast ålder        
    // var ageArr = [persArr[1], persArr[3], persArr[5]];
    /*console.log(persArr[0]);
    console.log(persArr[1]);
    console.log(persArr[2]); */
    var ageArr = persArr.map(function(ageArr){
        ageArr = [persArr[0] + persArr[1] + persArr[2]];
        ageArr = ageArr[1] + ageArr[3] + ageArr[5];
    console.log(ageArr);
    });

    // Uträkningar med ålder
    var minAge = Math.min.apply(Math, ageArr);
    var maxAge = Math.max.apply(Math, ageArr);  
    var averageAge = Math.round(((ageArr[0] + ageArr[1] + ageArr[2])/3));   
   
    // Läser in namn till array
    
    
    
    
    
    var names = persArr.map(function(names){
        names = [persArr[0] + persArr[1] + persArr[2]];
        names = names[0] + names[2] + names[4];
        
    });
    
    // Sorterar array med namn <--- ÅÄÖ??
    names.sort(function(a,b) {
        return a.localeCompare(b);
    });
    
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
}

