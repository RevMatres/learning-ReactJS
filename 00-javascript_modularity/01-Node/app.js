
//
//
//    THIS IS THE MAIN APP FILE, THAT USES THE OTHER MODULES
//    Execute this file with NodeJS to see fun results!
//
//

// =============================================================================

//
//  Imports from other modules
//

// import all exports from data.js
const data = require("./data.js")

// import the log object from the exports of helpers.js
const { log } = require("./helpers.js")

// import the class Person from classes.js
const { Person, Cat } = require("./classes.js")

// import setPref function from functions.js
let { setPref } = require("./functions.js")
// Note: one doesn't have to use consts to import

// =============================================================================

//
//  TESTS
//

// check the import from helpers.js
log("Hello World!")

// check the import from data.js
log(data)

// try out the class from classes.js
log(new Person("Hans", 3, "purple") )

let Tipsi = new Cat("Tipsi", "orange")
log(Tipsi.name, Tipsi.furrColor)
Tipsi.purr(3)

// try out setPref from functions.js
// setPref assigns a random Fruit to each Person from People
setPref(data.People, data.Fruit)
log(data.People)
