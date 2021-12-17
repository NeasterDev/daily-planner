// Luxon variables
const dateTime = luxon.DateTime.local();
var readableDate = dateTime.toLocaleString(luxon.DateTime.DATE_HUGE); // Entire date with name [change DATA_HUGE for different format]
var day = dateTime.toFormat('EEEE'); // Gets the current day
var hour = dateTime.hour;
console.log(hour);
// JQuery variables
var readableDateEl = $('#currentDay');
var containerEl = $('.container');

// Set date element to the current date
readableDateEl.text(readableDate);

$('.description').on("click", "p", function() {
    var textInput = $('<textarea>');
    textInput.addClass("description");
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

$('.description').on("blur", "textarea", function() {
    var text = this.val();
    var descriptionBox = $("<p>");
    descriptionBox.text(text);
    //descriptionBox.addClass("col-10 description past");
    $(this).replaceWith(descriptionBox);
});

var pastPresentFuture = function(id) {
    var timeBlock = $('#' + id);

    if(id === hour){
        timeBlock.addClass("present");
    } else if(id < hour) {
        timeBlock.addClass("past")
    } else {
        timeBlock.addClass("future");
    }
}

var checkTime = setTimeout(function(){
    for (var i = 9; i < 18; i++) {
        pastPresentFuture(i);
    }
});

var checkTime = setInterval(function(){
    for (var i = 9; i < 18; i++) {
        pastPresentFuture(i);
    }
}, (60 * 1000) * 30);
