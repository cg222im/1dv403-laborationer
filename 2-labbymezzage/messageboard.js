"use strict";


function MessageBoard()
{
    
}

window.onload = function(){
  
    new MessageBoard("board1");
    
    //tester moment 2
    var mess = new Message("Testmeddelande", new Date());
    alert(mess);
    alert(mess.getText());
    mess.setText("blesk");
    alert(mess);
};


