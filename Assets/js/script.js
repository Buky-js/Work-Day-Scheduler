
//Displays current date at top of calendar
var currentDayEl = $('#currentDay');
var currentDate = dayjs().format('dddd MMMM D, YYYY h:mm A');
currentDayEl.text(currentDate);


var saveButton = $('.saveBtn');
var textArea = $('.description');
var timeBlock = $(".time-block");
// console.log(hour);
// save input in local storage
// console.log(timeBlock);
function saveInLocalStorage(event){
  event.preventDefault();

  var input = $(this).siblings(".description").val();
  var key = $(this).parent().attr("id");

  localStorage.setItem(key, input);
  // console.log(input);
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

saveButton.on('click', saveInLocalStorage);

function colorCode(){
  var currentHour = dayjs().hour();

 $.each(timeBlock, function (){
  var timeBlockNum = $(this).attr("id").slice(5);
  // console.log(timeBlockNum);
   if (timeBlockNum < currentHour){
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");
   }else if (timeBlockNum == currentHour){
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
   } else{
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
   }
 })


    // var timeBlockNum = timeBlock[i].id;
    // console.log(timeBlockNum);
    // timeBlockNum = timeBlockNum.slice(5);
    // if (timeBlockNum==currentHour){
    //   $(".time-block")[i].removeClass("past");
    //   $(".time-block")[i].removeClass("future");
    //   $(".time-block")[i].addClass("present");

    // }
    // console.log(timeBlockNum);

    
  }
  // if (currentHour > 12){
  //   currentHour-=12;
    // console.log(currentHour);
//   // }
// for(var i=0; i<hour.length; i++){
//   var timeBlockIndex = timeBlock[i];
// var timeBlockNum = parseInt((timeBlock[i].innerHTML));
// // console.log(timeBlock);
// if (timeBlockNum == currentHour){
//   $(timeBlockIndex).parent(".time-block").removeClass("past");
//   $(timeBlockIndex).parent(".time-block").removeClass("future");
//   $(timeBlockIndex).parent(".time-block").addClass("present");
// }
// else if(timeBlockNum<currentHour)
// {
//   $(timeBlockIndex).parent(".time-block").removeClass("present");
//   $(timeBlockIndex).parent(".time-block").removeClass("future");
//   $(timeBlockIndex).parent(".time-block").addClass("past");
// }
// }
  // var timeblockHour = $('.hour').text();
  // console.log(timeblockHour);
//   $(".hour").each(function(){
//     var timeblockHour = parseInt($('.hour').text());
//     console.log(timeblockHour);
//     if(timeblockHour==currentHour){
//   //  console.log($(this));
// }
//  })
  
  // var test = $(".hour").text();
  // console.log(test);
//  $(".hour").each(function(){
  // var timeblockHour = parseInt($('.hour').val());
  // console.log($('.hour').val());
  // if(timeblockHour==currentHour){
    
 
 
 


colorCode();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
