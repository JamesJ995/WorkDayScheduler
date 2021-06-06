var currentDate = moment().format("Do of MMMM, YYYY");
var hour9 = $("#time9am");
var hour10 = $("#time10am");
var hour11 = $("#time11am");
var hour12 = $("#time12pm");
var hour1 = $("#time1pm");
var hour2 = $("#time2pm");
var hour3 = $("#time3pm");
var hour4 = $("#time4pm");
var hour5 = $("#time5pm");
var timeBlocks = [
  hour9,
  hour10,
  hour11,
  hour12,
  hour1,
  hour2,
  hour3,
  hour4,
  hour5,
];

function populateLocalStorage() {
  $("#time9am .description").val(localStorage.getItem("time9am"));
  $("#time10am .description").val(localStorage.getItem("time10am"));
  $("#time11am .description").val(localStorage.getItem("time11am"));
  $("#time12pm .description").val(localStorage.getItem("time12pm"));
  $("#time1pm .description").val(localStorage.getItem("time1pm"));
  $("#time2pm .description").val(localStorage.getItem("time2pm"));
  $("#time3pm .description").val(localStorage.getItem("time3pm"));
  $("#time4pm .description").val(localStorage.getItem("time4pm"));
  $("#time5pm .description").val(localStorage.getItem("time5pm"));
}

function renderTime() {
  var currentHour = moment().format("ka");
  console.log(currentHour);

  for (var i = 0; i < timeBlocks.length; i++) {
    var loopBlock = timeBlocks[i].attr("id");
    loopBlock = loopBlock.slice(4);

    if (currentHour === "9am") {
      timeBlocks[0].removeClass("future");
      timeBlocks[0].removeClass("past");
      timeBlocks[0].addClass("present");
      for (var i = 1; i < timeBlocks.length; i++){
        timeBlocks[i].removeClass("past");
        timeBlocks[i].removeClass("present");
        timeBlocks[i].addClass("future");
      }
      return;
    }
    if (loopBlock < currentHour) {
      timeBlocks[i].removeClass("future");
      timeBlocks[i].removeClass("present");
      timeBlocks[i].addClass("past");
      timeBlocks[0].removeClass("future");
      timeBlocks[0].removeClass("present");
      timeBlocks[0].addClass("past");
    }
    if (loopBlock > currentHour) {
      timeBlocks[i].removeClass("past");
      timeBlocks[i].removeClass("present");
      timeBlocks[i].addClass("future");
      timeBlocks[0].removeClass("future");
      timeBlocks[0].removeClass("present");
      timeBlocks[0].addClass("past");
    }
    if (loopBlock === currentHour) {
      timeBlocks[i].removeClass("future");
      timeBlocks[i].removeClass("present");
      timeBlocks[i].addClass("present");
      timeBlocks[0].removeClass("future");
      timeBlocks[0].removeClass("present");
      timeBlocks[0].addClass("past");
    }
  }
}

$(".saveBtn").on("click", function () {
  var userEntry = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, userEntry);
});

$("#currentDay").html(currentDate);
populateLocalStorage();
renderTime();
