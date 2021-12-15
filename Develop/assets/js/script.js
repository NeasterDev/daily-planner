const dateTime = luxon.DateTime.local();
// Entire date with name [change DATA_HUGE for different format]
var readableDate = dateTime.toLocaleString(luxon.DateTime.DATE_HUGE);
var readableDateEl = $('#currentDay');
// Gets the current day
var day = dateTime.toFormat('EEEE');

readableDateEl.text(readableDate) ;