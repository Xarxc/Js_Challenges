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