
//
//
//    DATA.JS
//    This contains objects, that contain Data
//
//

// =============================================================================

//
//  Imports
//

// import Person Class
const { Person } = require("./classes.js")

// =============================================================================

//
//  Data Objects
//

// array
let Fruit = ['banana', 'apple', 'tangerine', 'melon', 'cherry']

// object
let People = {
  p1: new Person("George", 21, "blue"),
  p2: new Person("Dieter", 22, "orange"),
  p3: new Person("Emily", 23, "a very dark bloody red")
}

// =============================================================================

//
//  Exports from DATA.JS
//

export { Fruit, People }
