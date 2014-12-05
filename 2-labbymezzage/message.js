
var Message = function() {};
window.Message = function(message, date)
{
    this.getText = function(){
        return message;
    };  
    
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function(_date){
        date = _date;
    };
};

// Lägga till formatering för datum!
Message.prototype.toString = function(){
    return this.getText() +" ("+this.getDate()+")";
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g, "<br />");
};

Message.prototype.getDateText = function(){
    return this.getDate().toLocaleTimeString();
};

Message.prototype.getFormatedDateText = function(){
    var date = this.getDate();
    
    var formatedDate = date.getDate() + " " + date.getMonth() + " " + date.getFullYear() + " " + date.toLocaleTimeString();
    
    return formatedDate;
};