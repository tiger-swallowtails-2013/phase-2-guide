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

### Networking! - Doug
* What is `localhost:8888`
* `localhost` is being translated as the IP of your own computer,
  standardized as 127.0.0.1
* `8888` is the port number on your computer.
* Ports can be anywhere from 0 to 65,535
* 22 is SS
* 80 is HTTPH
* 143 iMAP (email)
* 53 DNS
* `cheese.herokuapp.com`
* DNS looks up what cheese.herokuapp.com's IP address is
* This allows people to type english and computers to type numbers
* Each app listens on a port, but the ports are different all the time
