function MessageBoard(boardId)
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
    
    var main = document.getElementById("main");
    
    // Laddar MessageBoard
    this.renderMessageBoard(main, boardId);
    
    // Laddar antal meddelanden                <---------- funkar ej?
    //this.updateNumberofMessages();
    
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
    submitButton.setAttribute("type", "submit");
    submitButton.className = "messageButton";
    submitButton.innerHTML = "Many Mezzage";
    submitButton.onclick = function(e)
    {
        alert("nu borde det skapas en textruta som säger: " + textArea.value);
        that.submitButtonOnClick(textArea); 
        return false;
    };
    
    // Lägger till noder till DOMen
    main.appendChild(boardNode);
    boardNode.appendChild(messageContainerNode);
    boardNode.appendChild(numberOfMessages);
    boardNode.appendChild(textArea);
    boardNode.appendChild(submitButton);
};

// Funktionalitet för knappen  ----- kommer inte åt Message() ??
MessageBoard.prototype.submitButtonOnClick = function(textArea)
{
    // Hämtar texten för meddelandet
    var text = textArea.value;
    
    // Om något är skrivet, så ... ----------- new Message(text, date) funkar inte?
    if (text.length > 0)
    {
        // Skapa ett nytt meddelande --- Varför vill den inte?   <------------
        var newMessage = new window.Message(text, new Date());
        alert(newMessage);

        // Lägger till meddelande till array
        this.addMessage(newMessage);
        
        // Laddar det nya meddelandet
        this.renderMessage(this.getMessages().length-1);
        
        // Uppdaterar antal meddelanden
        this.updateNumberOfMessages();
    }
    textArea.value = "";
};

// Funktionalitet för knappen - Enter key
MessageBoard.prototype.textAreaEventHandler = function(e)
{
    // Det här lirar ej
    if(!e) e = window.event;
    if (e.keyCode == 13)
    {
        MessageBoard.submitButtonOnClick();
    }
};

// Funktionalitet för att skriva ut meddelande
MessageBoard.prototype.renderMessage = function(messageId)
{
    var that = this;
    
    // Skapar nod för meddelande
    var newMessageNode = document.createElement("div");
    newMessageNode.className = "message";
    
    // Skapar sträng för innehåll och lägger till innehåll till sidan
    var htmlString =    "<div>" + this.getMessages()[messageId].getHTMLText() + "</div>" +
                        "<div class=\"timeStamp\">" + this.getMessages()[messageId].getTimeStamp() + "</div>";  // <---------------
    newMessageNode.innerHTML = htmlString;
                        
    // Skapar element för stängning av meddelande
    var closeNode = document.createElement("div");
    closeNode.className = "close";
    
    // Skapar element för att visa datum och tid
    var dateAlertNode = document.createElement("div");
    dateAlertNode.className = "dateAlert";
    
    // Lägger till elementen till meddelandet
    newMessageNode.appendChild(closeNode);
    newMessageNode.appendChild(dateAlertNode);
    
    // Skapar onclick event
    closeNode.onclick = function(){that.removeMessage(messageId)};
    dateAlertNode.onclick = function(){that.showDateTimeAlert(messageId)};
    
    // Lägger till det nya meddelandet till en behållare
    var messageElements = document.getElementsByClassName("messageContainer");
    for (var elementId = 0; elementId < messageElements.length; elementId++)
    {
        messageElements[elementId].appendChild(newMessageNode);
    }
};

// Funktionalitet för att rensa och skriva ut meddelanden
MessageBoard.prototype.renderMessages = function()
{
    document.getElementsByClassName("messageContainer").innerHTML = "";
    for (var i = 0; i < this.getMessages().length; i++)
    {
        this.renderMessage(i);
    }
};

// Funktionalitet för att uppdatera antal meddelanden
MessageBoard.prototype.updateNumberOfMessages = function()
{
    var elements = document.getElementsByClassName("numberOfMessages");
    var numberString = "How many wow: " + this.getMessages().length;
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].innerHTML = numberString;
    }
};

// Funktionalitet för att skrika ut när ett meddelande skrivits
MessageBoard.prototype.showDateTimeAlert = function(messageId)
{
    var that = this;
    var alertMessage = "When wow: " + that.getMessages()[messageId].getFormatedDateTime();
    alert(alertMessage);
};

// Funktionalitet för att radera meddelanden
MessageBoard.prototype.removeMessage = function(messageId)
{
    var that = this;
    // Varför inte fungera ?? Syns ju bara när det finns meddelanden kanske!!
    var removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.className = "removeButton";
    removeButton.innerHTML = "Remove Wow";
    removeButton.onclick = function(e)
    {
        that.removeMessage(messageId);
        this.renderMessages();
        this.updateNumberOfMessages();
    };
};

window.onload = function()
{
    new MessageBoard("board1");
    //new MessageBoard("board2");    
};


