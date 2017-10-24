
//
//
//    FUNCTIONS.JS
//    This module contains all the cool functions
//
//

// =============================================================================

//
//  Definitions
//

// return a random number
function rand(){
  return Math.random()
}

// return a random Index from an array
function returnRandomIndex(array){
  let length = array.length
  let randomNumber = rand()
  let randomIndex

  // find the index corresponding to the random number
  for(i=1; i<=length; i++){
    if(randomNumber <= (i/length)){
      randomIndex = i-1
      break
    }
  }

  return randomIndex

  /*
    Explanation
      the array's length defines fractions between 0 and 1
      the random number falls into one of the intervals between the fractions
      since the intervals correspond to the fractions, they correspond to the indices in the array
      the interval the rand falls into is found, it's corresponding index is returned

    Example
      length = 3; rand = 0.4

      i=1
      i/length = 1/3
        --> rand > 1/3

      i=2
      i/length = 2/3 = 0.6666
        --> rand < 2/3
        ==> return "second position of Array has been chosen"
  */
}

// get an object's keys
function keys(obj){
  return Object.keys(obj)
}

// set People's fruit preferences
function setPref(peopleObject, fruitObject){
  let people = keys(peopleObject)

  people.forEach( val => {
    let fruitInd = returnRandomIndex(fruitObject)
    peopleObject[val].setFruitPreference(fruitObject, fruitInd)
  })
}

// =============================================================================

//
//  Exports from FUNCTIONS.JS
//

export default function setPref
/* Note:
    setPref requires all the other functions in FUNCTIONS.JS, but those aren't exported
    Those necessary functions are HIDDEN INFORMATION
*/
