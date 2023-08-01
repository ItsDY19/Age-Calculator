var submitButton = document.getElementsByClassName("submit-button");
var yy = document.getElementById("YY");
var mm = document.getElementById("MM");
var dd = document.getElementById("DD");
var dayInput = document.getElementById("day");
var monthInput = document.getElementById("month");
var yearInput = document.getElementById("year");

var errorDay = document.querySelector(".day p");
var errorDayHead = document.querySelector(".day h4");

var errorMonth = document.querySelector(".month p");
var errorMonthHead = document.querySelector(".month h4");

var errorYear = document.querySelector(".year p");
var errorYearHead = document.querySelector(".year h4");


const date = new Date();
currentYear = date.getFullYear();
currentMonth =date.getMonth() + 1;
currentDay = date.getDate();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];




function errorMessage() {


    if (dayInput.value == '') {
        errorDay.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        errorDayHead.style.color = "hsl(0, 100%, 67%)";
        errorDay.innerHTML = "This field is required";
    }
    else if (dayInput.value > 31 || dayInput.value < 1) {
        errorDay.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        errorDayHead.style.color = "hsl(0, 100%, 67%)";
        errorDay.innerHTML = "Must be a valid number";
    }
    else {
        errorDay.innerHTML = "";
        dayInput.style.borderColor ="hsl(0, 0%, 86%)";
        errorDayHead.style.color = "hsl(0, 1%, 44%)";
    }



    if (monthInput.value == '') {
        errorMonth.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        errorMonthHead.style.color = "hsl(0, 100%, 67%)";
        errorMonth.innerHTML = "This field is required";
    }
    else if (monthInput.value > 12 || monthInput.value < 1) {
        errorMonth.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        errorMonthHead.style.color = "hsl(0, 100%, 67%)";
        errorMonth.innerHTML = "Must be a valid number";
    }
    else {
        errorMonth.innerHTML = "";
        monthInput.style.borderColor ="hsl(0, 0%, 86%)";
        errorMonthHead.style.color = "hsl(0, 1%, 44%)";
    }



    if (yearInput.value == '') {
        errorYear.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        errorYearHead.style.color = "hsl(0, 100%, 67%)";
        errorYear.innerHTML = "This field is required";
    }
    else if (yearInput.value.length < 4 || yearInput.value.length > 4) {
        errorYear.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        errorYearHead.style.color = "hsl(0, 100%, 67%)";
        errorYear.innerHTML = "Must be a valid number";
    }
    else {
        errorYear.innerHTML = "";
        yearInput.style.borderColor ="hsl(0, 0%, 86%)";
        errorYearHead.style.color = "hsl(0, 1%, 44%)";
    }



}

function ageCalculation() {

    var ageDay;
    var ageMonth;
    var ageYear;

    if (!errorMessage()) {
        if (dayInput.value > currentDay) {
            currentDay = currentDay + months[currentMonth - 1];
            currentMonth = currentMonth - 1;
            // currentDay = currentDay + 31;
        }

        if (monthInput.value > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }
    
        ageDay = currentDay - dayInput.value;
        ageMonth = currentMonth - monthInput.value;
        ageYear = currentYear - yearInput.value;

        if (dayInput.value != '' && monthInput.value != '' && yearInput.value != '') {
            dd.innerHTML = ageDay;
            mm.innerHTML = ageMonth;
            yy.innerHTML = ageYear;
        }   
    
    }

}




submitButton[0].addEventListener("click", ageCalculation);