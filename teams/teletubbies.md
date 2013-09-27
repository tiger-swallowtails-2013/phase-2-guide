# Teletubbies!

![Alt text](http://adambeer.co.uk/wp-content/uploads/Teletubbies.jpg)

## Project:
Typeracer

## Members
* Tyler Waneka
* Nick Scricco
* Max Davila
* Nishant Chandra

## Lightning Talks

### OOP Basics in JS - Nick
* Two ways to make objects: `function myObject() {}`,
  `var myObject = {}`
* Object Literals and Constructors

### JS Selectors - Max
* `getElementById` - ID's are stored in a reference table
* `getElementByTag` - Returns a collection of tags
* `querySelector` - can take an '#id'. Returns first that matches
* `getElementByClassName` - DEPRECATED

### Jasmine Matchers - Tyler
* expect(x) === (y)    // NOT A MATCHER. Won't ever error
* expect(x).toEqual(y) // x and y must be equivalent (ala ==)
* expect(x).toBe(y)            // X and Y must be the exact same object
* expect(x).toMatch(pattern)   // pattern may be regex or string
* expect(x).toBeDefined()
* expect(x).toBeUndefined()
* expect(x).toBeNull()
* expect(x).toBeTruthy/Falsy()
* expect(x).toContain(y)       // x (an array or string) must contain y
* expect(x).toBeGreater/LessThan(y)
* expect(func).toThrow(e)      // e is an error message or Error object
* expect(true).not.toBeFalsy() // inverts expectation

Writing your own matchers!

```
beforeEach(function() {
  this.addMatcher({
    toBeDivisibleByTwo: function() {
      // this.actual references the argument passed to expect
      return (this.actual % 2) === 0
    }
  });
});

expect(4).toBeDivisibleByTwo(); // Passes!
expect(3).toBeDivisibleByTwo(); // Fails!
```

And you can give them arguments!

```
beforeEach(function() {
  this.addMatcher({
    toBeDivisibleBy: function(divisor) {
      // this.actual references the argument passed to expect
      return (this.actual % divisor) === 0
    }
  });
});

expect(4).toBeDivisibleBy(2); // Passes!
expect(4).toBeDivisibleBy(3); // Fails!
```

### CSS Positioning - Sunny
- css attributes - top: 20; left: 20
* position: absolute
- Physically place a box in a specific location in your document
- Specify the location either as a percent or pixels.
* position: fixed
- Places a box at a specific location in your window
* position: relative
- Moves relative to it's natural position

