Week 2 - Type Racer

Team - Speedracers

Kiera, Morgan, Elmer, and Dave(M)

## Lightning Talks

### Keyboard Events - Dave
* There are several keyboard events, keydown, keypress, keyup
* keydown/keypress are doubled
* keypress is for getting which characters were pressed
* keydown/keyup is for which *key* was pressed
* keydown/keyup return different keycodes/charcodes than keypress
* [input](https://developer.mozilla.org/en-US/docs/Web/Reference/Events/input)
  seems better for getting spans of text, such as from forms

### Constructors and Prototypes - Kiera + Nick
* Use new to call constructor functions
* var myCar = new Car();
* myCar.constructor would reference Car
* In the Car constructor you can set attributes for specific cars
* You can add methods by defining them on the Car.prototype
* One you put a method on a prototype you can use it on any object constructed
  with the Car constructor.

