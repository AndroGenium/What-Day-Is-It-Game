const day = prompt("What Day Is It")

if (isNaN(day))
{
    const lowday = day.toLowerCase()
    switch (lowday)
    {
        case "monday":
            alert("Monday is the 1st day of the week");
            break;
        case "tuesday":
            alert("Tuesday is the 2nd day of the week");
            break;
        case "wednesday":
            alert("Wednesday is the 3rd day of the week");
            break;
        case "thursday":
            alert("Thursday is the 4th day of the week");
            break;
        case "friday":
            alert("Friday is the 5th day of the week");
            break;
        case "saturday":
            alert("Saturday is the 6th day of the week");
            break;

        case "sunday":
            alert("Sunday is the 7th day of the week");
            break;

        default:
            alert("that is not a day!");
            break;
    }
}
else{
    alert("Input Correct Type Of Information")
}
