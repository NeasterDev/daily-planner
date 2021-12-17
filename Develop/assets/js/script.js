// Luxon variables
const dateTime = luxon.DateTime.local();
var readableDate = dateTime.toLocaleString(luxon.DateTime.DATE_HUGE); // Entire date with name [change DATA_HUGE for different format]
var day = dateTime.toFormat('EEEE'); // Gets the current day
var hour = dateTime.hour;
console.log(hour);
// JQuery variables
var readableDateEl = $('#currentDay');
var containerEl = $('.container');
var descriptionEl = $('.description');

// Set date element to the current date
readableDateEl.text(readableDate);

var localTaskBlocks = [];

// when the description area is clicked then create a textarea box
$('.description').on("click", "p", function() {
    var text = $(this).text();
    var textInput = $('<textarea>');

    textInput.val(text);
    textInput.addClass("description");
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

// when the description textarea is blurred then change back to a p element with textarea value inside it
$('.description').on("blur", "textarea", function() {
    var text = $(this).val();
    var descriptionBox = $("<p>");
    descriptionBox.text(text);
    $(this).replaceWith(descriptionBox);
});

$('.saveBtn').on('click', function() {
    // traverse my way from the savebtn div to the p inside of description relative to what savebtn i clicked
    var saveText = $(this).parent('div').children('.description').children('p')[0];
    var idNum = $(this).parent('div').children('.description').attr('id');
    console.log(idNum);

    localStorage.setItem('saveText' + idNum, saveText.textContent);
});

// function to check if timeblock is in the past present or future
var pastPresentFuture = function(id) {
    var timeBlock = $('#' + id);
    timeBlock.children('p').text(localStorage.getItem('saveText' + id));

    if(id === hour){
        timeBlock.addClass("present");
    } else if(id < hour) {
        timeBlock.addClass("past")
    } else {
        timeBlock.addClass("future");
    }
}

// checks time for each time block when page loads
var checkTimeTimeout = setTimeout(function(){
    for (var i = 9; i < 18; i++) {
        pastPresentFuture(i);
    }
});

// checks time for each time block every 30 minutes
var checkTimeInterval = setInterval(function(){
    for (var i = 9; i < 18; i++) {
        pastPresentFuture(i);
    }
}, (60 * 1000) * 30);
