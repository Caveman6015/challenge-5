var today = moment().format("dddd,MMM do YYYY");
var currentTime = moment().hour();
$("#currentDay").html(today);

$(".saveBtn").on("click", function () {
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });

$("#hour9.description").val(localStorage.getItem("9am"));
$("#hour10.description").val(localStorage.getItem("10am"));
$("#hour11.description").val(localStorage.getItem("11am"));
$("#hour12.description").val(localStorage.getItem("12pm"));
$("#hour13.description").val(localStorage.getItem("1pm"));
$("#hour14.description").val(localStorage.getItem("2pm"));
$("#hour15.description").val(localStorage.getItem("3pm"));
$("#hour16.description").val(localStorage.getItem("4pm"));
$("#hour17.description").val(localStorage.getItem("5pm"));