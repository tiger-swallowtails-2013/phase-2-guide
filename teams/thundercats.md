# Thundercats

## Members
* Lionel (Lion-RaO)
* RaoRao (CheetaRao)
* Daniel(Mumm-Rao)
* Bruno (SnarfRao)

## Project
* Type Racer

![Thundercats](./images/Weird-Thundercats.jpg)

## Lightning Talks

### Events - Rao Rao

* There are [tons of
  events](https://developer.mozilla.org/en-US/docs/Web/Reference/Events?redirectlocale=en-US&redirectslug=DOM%2FMozilla_event_reference)
  for all kinds of things
* You can bind events with an attribute in the HTML - DO NOT USE
* You can use [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

### Postgres - Lionel
* psql - gets you to the postgres database
* \? - help command
* \l - list database
* \c - connect to the database
* \d - describe the schema
* Tux - Gem that gives you a command line for sinatra
* activerecord-sinatra - Gem that makes it easy to integrate AR/Sinatra
* set :database, ENV['DATABASE\_URL'] - how you connect to the database in 
  sinatra
* has nice rake tasks as well

### Javascript Memoization - Snarf-Rao (AKA Bruno)
* Memoization is a technique to cache data for later reference
* [Self executing anonymous
  functions](http://markdalgleish.com/2011/03/self-executing-anonymous-functions/) (aka [module
  pattern](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html))


before:
```
var fib = function(n) {
  if (n <= 1) { return n; }
  return fib(n-1) + fib(n-2)
}

fib(10);

```

After
```
var fib = (function() {
  var memo = [0, 1];
  return function(n) {
    if(typeof memo[n] !== 'Number') {
      memo[n] = fib(n-1) + fib(n-2)
    }
    return memo[n];
  }
})();

fib(100);
```

### CSS Transitions - MumRao, aka, Daniel

* Allow you to go from one CSS state to another seamlessly
* Awesome for animations

```
<div class="box">

</div>
<style>
.box {
  width: 100;
  height: 100;
  background-color: red;
}

.box:hover {
  width: 200;
}
</style>
```

Using JS to change the color:
```
var box = document.querySelector('.box');
box.style.width  = 200;
```

This will cause the box to switch width in a single motion. This is kinda
jarring.

Instead, you can use css transitions:

```
.box {
  width: 100;
  height: 100;
  background-color: red;
  transitions: width 25, height 25;
  -moz-transitions: width 25, height 25; // This makes transitions work in firefox
  -webkit-transitions: width 25; height 25; //this makes transitions work for chrome
}
```
This lets you animate the changes! 

[MDN using CSS
transitions](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions?redirectlocale=en-US&redirectslug=CSS%2FTutorials%2FUsing_CSS_transitions)

### Inheritance in Javascript - Nishant AKA Pant-Rao
* Javascript is a class free language.
* So it uses prototypes

```
function MyObject() {
}
MyObject.dosomething = function() {
  alert("I'm doing something");
}
var newThing = new myObject();
newThing.doSomething(); // This fails, beacause we're only adding it to MyObject

MyObject.prototype.doSomething = function() {
  alert("I'm doing something");
}

newThing.doSomething(); // Now it alerts!
```

