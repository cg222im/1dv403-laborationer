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

MessageBoard.prototype.renderMessageBoard = function(main, _boardId)
{
    var that = this;
    
    // Skapar meddelandetavla
    var boardNode = document.createElement("div");
    boardNode.id = _boardId;
    boardNode.className = "messageBoard";
    
    var messageContainerNode = document.createElement("div");
    messageContainerNode.className="messageContainer";
    
    var numberOfMessages = document.createElement("div");
    numberOfMessages.className = "numberOfMessages";
    
    var textArea = document.createElement("textArea");
    textArea.className = "textAreaInput";
    
    
}

window.onload = function(){
  
    new MessageBoard("board1");
    

};


