let player1 ={
    firstName : "Cristiano",
    lastName : "Ronaldo",
    age : 38, 
    isMarried : true,
    hasKids : true
,

 shoot : function (){
    console.log(this.lastName + " shot the ball")
 }
}
console.log(player1.shoot())

// write a simple javascript object for a stadium


let stadium = {
    name: "Mohamed ahmed stadium Stadium",
    location: "City, Country",
    capacity: 50000,
    opened: 2000,
    isRoofed: true,
    getYearsSinceOpening: function() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.opened;
    }
  };
  
  // Accessing the properties
  console.log(`Stadium Name: ${stadium.name}`);
  console.log(`Location: ${stadium.location}`);
  console.log(`Capacity: ${stadium.capacity}`);
  console.log(`Opened: ${stadium.opened}`);
  console.log(`Roofed: ${stadium.isRoofed}`);
  
  // Calculating years since opening
  console.log(`Years Since Opening: ${stadium.getYearsSinceOpening()}`);