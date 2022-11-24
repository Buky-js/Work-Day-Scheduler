
//Displays current date at top of calendar
var currentDayEl = $('#currentDay');
var currentDate = dayjs().format('dddd MMMM D, YYYY h:mm A');
currentDayEl.text(currentDate);

// declaring variables
var saveButton = $('.saveBtn');
var textArea = $('.description');
var timeBlock = $(".time-block");

// saving input in localStorage
function saveInLocalStorage(event) {
  event.preventDefault();
var input = $(this).siblings(".description").val();
  var key = $(this).parent().attr("id");
localStorage.setItem(key, input);
}

// input persists when page is refreshed
$('#hour-9').children('.description').val(localStorage.getItem('hour-9'));
$('#hour-10').children('.description').val(localStorage.getItem('hour-10'));
$('#hour-11').children('.description').val(localStorage.getItem('hour-11'));
$('#hour-12').children('.description').val(localStorage.getItem('hour-12'));
$('#hour-13').children('.description').val(localStorage.getItem('hour-13'));
$('#hour-14').children('.description').val(localStorage.getItem('hour-14'));
$('#hour-15').children('.description').val(localStorage.getItem('hour-15'));
$('#hour-16').children('.description').val(localStorage.getItem('hour-16'));
$('#hour-17').children('.description').val(localStorage.getItem('hour-17'));


// allows timeblocks to change colors if its a present, past or future time
function colorCode() {
  var currentHour = dayjs().hour();

  $.each(timeBlock, function () {
    var timeBlockNum = $(this).attr("id").slice(5);
    // console.log(timeBlockNum);
    if (timeBlockNum < currentHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (timeBlockNum == currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })

}

colorCode();
saveButton.on('click', saveInLocalStorage);

