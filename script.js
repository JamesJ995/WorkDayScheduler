var currentDate = moment().format('Do of MMMM, YYYY');
$("#currentDay").html(currentDate);

function renderTime() {
    var currentHour = moment().hour();

    for(vari=0; i<=9; i++){

    }
}


$(".saveBtn").on("click", function (event) {
    var userEntry = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, userEntry);
})

