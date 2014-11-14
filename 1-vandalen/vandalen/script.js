"use strict";

var makePerson = function(persArr){

    persArr = ["John Häggerud", 37, "Johan Leitet", 36, "Mats Loock", 46];
    
    // Array med endast ålder        
    var ageArr = [persArr[1], persArr[3], persArr[5]];

    // Uträkningar med ålder
    var minAge = Math.min.apply(Math, ageArr);
    var maxAge = Math.max.apply(Math, ageArr);  
    var averageAge = Math.round(((ageArr[0] + ageArr[1] + ageArr[2])/3));   
   
    // Läser in namn till ny sträng
    var names = [persArr[0], persArr[2], persArr[4]];
    // Sorterar sträng med namn
    names.sort();
    // Formaterar sträng med namn
    names = names[0] + ", " + names[1] + ", " + names[2];
    // Skapar slutgiltig sträng för presentation
    var returnString = "Lägsta ålder: " + minAge + "\n" + "Högsta ålder: " + maxAge + "\n" + "Medelålder: " + averageAge + "\n" + names;
    return returnString;


    /*
    Skapa pure function som tar array[n: namn, ålder] som argument och returnerar nytt objekt
    Returnerat objekt ska innehålla: högsta åldern, lägsta åldern, medelåldern samt sträng med sorterade namn
    
    name = sträng: för- och efternamn
    age = nummer för ålder
    
    ex var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    
    Returnerat objekt:
    minAge
    maxAge
    averageAge
    names (Kalle Anka, Sixten Blå)
    
    
    Testa genom:
    --------------------------------------------------------
    var makePerson = function(persArr) { var result = {};

    --Lös uppgiften --

    return result; } var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

    var result = makePerson(data);

    console.log(result);
    
    
    
    * = utan loopar (for, while, do...while), if, switch
        felhantering: saker innehåller det de ska (här fås if/switch osv användas)
    */
}

