// Written during Myles' Object-Oriented JavaScript lecture.

// Object-Orientation.
var strand = {
  name: "strand",
  introduce: function() {
    console.log("hello, I'm " + this.name)
  }
}

// Prototype Object-Orientation!!!
var myles = { __proto__: strand }

myles.name = "myles"

// myles.introduce()

// Class based Object-Orientation.
function Person(name, style, company) {
  this.name = name
  this.style = style
  this.company = company
}

Person.prototype.introduce = function() {
  console.log("hello, I'm " + this.name)
}

function newNew() {
  var constructorFn = arguments[0]
  // The line below "slices" the arguments, which aren't an array
  // for some reason. :( It takes all elements but the first.
  var args = Array.prototype.slice.call(arguments, 1)
  var newObject = {}
  newObject.__proto__ = constructorFn.prototype
  newObject.constructor = constructorFn
  constructorFn.apply(newObject, args)
  return newObject
}

var mylesPerson = newNew(Person, "myles", "hoopy frood", "DBC")
mylesPerson.introduce()
console.log(mylesPerson)

// Data types or objects...?