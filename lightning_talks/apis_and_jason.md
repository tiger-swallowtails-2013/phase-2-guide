# APIs and JSON - Nick

Using Sonlight legislature data
1. They has good API Documentation

Two classes:
1. [Net::HTTP](http://ruby-doc.org/stdlib-2.0.0/libdoc/net/http/rdoc/Net/HTTP.html)
   Used to make HTTP requests in ruby
2. [URI](http://ruby-doc.org/stdlib-2.0.0/libdoc/uri/rdoc/URI.html)
   A ruby representation of a URI

Making a request to the Sonlight API wound up returning a string that looks like a hash.
```
{
  "results" : [
    {
      "name" : "Joe Schmoe",
      "age"  : 9000
    }
  ]
}
```
You parse this via the
[JSON](http://www.ruby-doc.org/stdlib-2.0.0/libdoc/json/rdoc/JSON.html) module
using the
[parse](http://www.ruby-doc.org/stdlib-2.0.0/libdoc/json/rdoc/JSON.html#method-i-parse)
method, which turns it into a nested ruby hash.

