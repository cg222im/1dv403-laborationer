
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

Message.prototype.toString = function(){
    return this.getText() +" ("+this.getDate()+")";
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g, "<br />");
};

// Formatting of dates follows here
Message.prototype.getDateText = function(){
    return this.getDate().toLocaleTimeString();
};

var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

Message.prototype.getFormatedDateText = function(){
    var date = this.getDate();
    
    var formatedDate = date.getDate() + " " + numericMonth(date.getMonth()) + " " + date.getFullYear() + " -- " + date.toLocaleTimeString();
    
    return formatedDate;
};
function numericMonth(month)
{
    return months[month];
}