let today = "Friday";

if (today == "Saturday"){
    console.log("Come to coding school")
} else if(today == "Sunday"){
    console.log("Sleep")
} else if(today == "Monday"){
    console.log("go to school")
} else {
    console.log("Do whatever you like")
}

switch (today) {
    case "Saturday":
        console.log("Coding time...")
        break;
        
        case "Sunday":
        console.log("Sleep time")
        break;

        case "Monday":
        console.log("Monday")
        break;

    default:
        console.log("Free time")
        break;
}
