//Conditional ternary operator
var x = 5
var y = 6
 if (x == y){
     console.log("beraberdir")
 }else if (x > y){
    console.log("x boyukdur")
 }else {
     console.log("x kicikdir")
}

// console.log(x == y ? "beraberdir" : x < y ? "x kicikdir" : "y boyukdur")

//TYPE OF

var name = "Tabriz"
var age = 30

console.log(typeof age)
console.log(typeof name)

if (name !== typeof(String)) { 
    console.log("duzgundur")
}

//STRING OPERATORS
var name = "Tabriz"
var surname = " Kazimov"
console.log(name + surname)

//COMMA OPERATORS

let results = (1,2,3,5,10,"Tabriz",9)
console.log(results)

//SPREAD OPERATORS

let numbers_1 = [1, 2, 3]
let numbers_2 = [...numbers_1, 4,5,6]

console.log (numbers_2)

//Array

let cars = ["Toyota", "Lamborghini"]

console.log(cars[1])
console.log(cars.length)

//Object

let users = [
    {
        fname: "Tabriz",
        Lname: "Kazimov",
        age :  "30"
    }
]

console.log(users[0].Lname)

//function

var xx = 10
let yy = 20
function sum () {
    console.log(xx + yy)
}
sum()

//var xxx = 75.9
//let yyy = 13.5
//function sum () {
//    console.log(xxx + yyy)
//}
//sum()
