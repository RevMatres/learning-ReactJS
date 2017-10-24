
//
//
//    CLASSES.JS
//    This contains classes
//
//

// =============================================================================

//
//  Classes
//

class Person {
  constructor(name, age, color){
    this.name = name
    this.age = age
    this.color = color
  }
  setFruitPreference(arr, ind){
    this.fruitPreference = arr[ind]
  }
}

class Cat {
  constructor(name, furrColor) {
    this.name = name
    this.furrColor = furrColor
  }
  purr(n){
    for(var i=0;i<n;i++){
      console.log("purrrrrrrrrrrrrrrrrrrrr")
    }
  }
}

// =============================================================================

//
//  Exports from CLASSES.JS
//

module.exports.Person = Person

module.exports.Cat = Cat
