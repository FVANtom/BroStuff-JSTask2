var givenDate = new Date(2047, 6, 1);
var dayName = getDayName(givenDate);
console.log(dayName);

function getDayName(date){
    var day = date.getDay();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day];
}

