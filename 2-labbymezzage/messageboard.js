"use strict";


function MessageBoard() //kan slänga in boardId för flera brädor
{
    // Skapar array för meddelanden
    var messages = [];
    
    this.getMessages = function()
    {
        return messages;
    };
    
    this.addMessage = function(message)
    {
        messages.push(message);
    };
    
    this.removeMessage = function (messageId)
    {
        messages.splice(messageId, 1);
    };
}

window.onload = function(){
  
    new MessageBoard("board1");
    
    //tester moment 2
    /*
    var mess = new Message("Testmeddelande", new Date());
    alert(mess);
    alert(mess.getText());
    mess.setText("blesk");
    alert(mess);
    */
};


