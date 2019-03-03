//var givenDate = new Date(2047, 6, 1);
//var dayName = getDayName(givenDate);
//console.log(dayName);
//var dayName = getDayName(givenDate);
//console.log(dayName);
//function getDayName(date){
   // var day = date.getDay();
   // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //return dayNames[day];
//}

var birthYear = window.prompt('Enter your year of birth', '');
var birthMonth = window.prompt('Enter your month of birth', '');
var birthDay = window.prompt('Enter your day of birth', '');
var birthDate = [birthYear, birthMonth, birthDay];
var dayName = getDayName(birthDate);
document.write (dayName);

function getDayName(date) {
    var newBirthDate = date.setFullYear();
    var day = newBirthDate.getDay();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day];
}