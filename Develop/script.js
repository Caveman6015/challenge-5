var today = moment().format("dddd,MMM do YYYY");
var currentTime = moment().hour();
$("#currentDay").html(today);

$(".saveBtn").on("click", function () {
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });



$("#9am.description").val(localStorage.getItem("9am"));
$("#10am.description").val(localStorage.getItem("10am"));
$("#11am.description").val(localStorage.getItem("11am"));
$("#12pm.description").val(localStorage.getItem("12pm"));
$("#1pm.description").val(localStorage.getItem("1pm"));
$("#2pm.description").val(localStorage.getItem("2pm"));
$("#3pm.description").val(localStorage.getItem("3pm"));
$("#4pm.description").val(localStorage.getItem("4pm"));
$("#5pm.description").val(localStorage.getItem("5pm"));