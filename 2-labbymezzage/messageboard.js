"use strict";


function MessageBoard(boardId) //kan slänga in boardId för flera brädor
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
    
    
    var main = document.getELementById("main");
    
    // Laddar MessageBoard
    this.renderMessageBoard(main, boardId);
    
    // Laddar antal meddelanden
    this.updateNumberofMessages();
    
    // Laddar meddelanden
    this.renderMessages();
}

MessageBoard.prototype.renderMessageBoard = function(main, _boardId)
{
    var that = this;
    
    // Skapar meddelandetavla
    var boardNode = document.createElement("div");
    boardNode.id = _boardId;
    boardNode.className = "messageBoard";
    
    // Skapar behållare för meddelanden
    var messageContainerNode = document.createElement("div");
    messageContainerNode.className="messageContainer";
    
    // Skapar element som räknar antal meddelanden
    var numberOfMessages = document.createElement("div");
    numberOfMessages.className = "numberOfMessages";
    
    // Skapar plats för input
    var textArea = document.createElement("textArea");
    textArea.className = "textAreaInput";
    textArea.keypress = function(e)
    {
        that.textAreaEventHandler();
        return false;
    };
    
    // Skapar knapp för att sända meddelande
    var submitButton = document.createElement("button");
    submitButton.className = "messageButton";
    submitButton.innerHTML = "Many Message";
    submitButton.onclick = function(e)
    {
        that.submitButtonOnClick(textArea); 
        return false;
    };
    
    // Lägger till noder till DOMen
    main.appendChild(boardNode);
    boardNode.appendChild(messageContainerNode);
    boardNode.appendChild(numberOfMessages);
    boardNode.appendChild(textArea);
    boardNode.appendChild(submitButton);
}

window.onload = function(){
  
    new MessageBoard("board1");
    

};


