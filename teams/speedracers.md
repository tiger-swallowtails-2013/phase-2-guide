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

### Normal Document Flow
* Not knowing what CSS does by default makes it hard to know what will happen
  when you change it
* Two kind of elements: Block levels and Inline elements
* Block(h1, p, ul, div) are often structural
* Inline(span, em, img) are more for imformation
* Block are 100% wide by default
* Inline will only be as wide as the thing
* Not prudent to make inline elements block level
* Block elements can't go inside inline elements
* Except for a tags. Those can hold block elements
* Float + Position are how to move things around
