# G++

## Members

David Reiman
Doug Mill
Robert Taraya
Sunny Israni
Tom Allnutt

## Lightning Talks

### POST and GET in Javascript w/o JQuery - Tom Allnutt

* create a new [XmlHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest?redirectlocale=en-US&redirectslug=DOM%2FXMLHttpRequest)
* Define a url that references your sinatra route
* Define params you want to send to that url
* Call request.open, pass it the method (GET or POST), and the URL
* Call request.send to kick off the request

### - David
* h = {}  # h is a hash
* h {}    # h is method which takes a block
* var a = function() { } // a is a function
* var b = { } // b is an object
```
function a() {
  function cheese() {
  }
}

cheese(); // NO CHEESE FOR YOU :(
```


```
function a() {
  var output = {}

  var cheese = 'swiss';
  output.cheese = cheese;

  return output;
}

var output = a();

output.cheese();
```
