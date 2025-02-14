let day = prompt("Enter the day of the week:").toLowerCase(); 

switch (day) {
    case "monday":
        alert("Start of the week!");
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
        alert("Mid of the week!");
        break;
    case "friday":
        alert("Last working day of the week!");
        break;
    case "saturday":
        alert("WeekEnd - Saturday!");
        break;
    case "sunday":
        alert("WeekEnd - Sunday!");
        break;
    default:
        alert("Invalid input!");
}
