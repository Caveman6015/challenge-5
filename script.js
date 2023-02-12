
var today = moment().format("dddd, MMMM Do");
var currentTime = moment().hour();
$("#currentDay").html(today);

$(".saveBtn").on("click", function () {
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".text-box").val();
    console.log(text)
    localStorage.setItem(time, text);
  });

  $(".time-block").each(function () {
    let blockTime = ($(this).attr("id")); 
  console.log(currentTime,blockTime)
    if (blockTime == currentTime) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if (blockTime < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });

$("#9.description").val(localStorage.getItem("9am"));
$("#10.description").val(localStorage.getItem("10am"));
$("#11.description").val(localStorage.getItem("11am"));
$("#12.description").val(localStorage.getItem("12pm"));
$("#13.description").val(localStorage.getItem("1pm"));
$("#14.description").val(localStorage.getItem("2pm"));
$("#15.description").val(localStorage.getItem("3pm"));
$("#16.description").val(localStorage.getItem("4pm"));
$("#17.description").val(localStorage.getItem("5pm"));