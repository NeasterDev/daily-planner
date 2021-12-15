// Luxon variables
const dateTime = luxon.DateTime.local();
var readableDate = dateTime.toLocaleString(luxon.DateTime.DATE_HUGE); // Entire date with name [change DATA_HUGE for different format]
var day = dateTime.toFormat('EEEE'); // Gets the current day

// JQuery variables
var readableDateEl = $('#currentDay');
var containerEl = $('.container');

// Set date element to the current date
readableDateEl.text(readableDate);

// var containerClickHandler = function (event) {
//     var target = $(event.target);
//     if (target.is(".description")) {
//         target.append("<textarea></textarea>");
//     }
// }

// var containerBlue = function(event) {
//     var target = $(event.target);

// }

// $(containerEl).on('click', containerClickHandler);
// $(containerEl).on('blur', containerBlur);

$('.description').on("click",  function() {
    var textInput = $('<textarea>');
    $(this).append(textInput);

    textInput.trigger("focus");
})