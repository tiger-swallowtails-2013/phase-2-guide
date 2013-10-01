# AJAX - Jon

```javascript
$('a').on('click, function(e) {
  e.preventDefault();
  // This stops the link from actually changing the URL in the browser

  $.get('/route_on_server', function(response) {
    // This sends an HTTP GET request to the route specified in the background
    // The function we are using as a callback will be called once the HTTP
    // request returns from the server.
    $('div#some_div).replaceWith(response);
    // This just looks into the dom for a div with the id of some_div, and
    // replaces it's body with the response
  });
});
```

Now, with more FORMs

```javascript
$('form').on('submit', function(e) {
  e.preventDefault();
  var data = { query: "term" };
  $.post('/search', data, function(response) {
    // Send an HTTP POST request to the /search route, with params as specified
    // in the data hash.
    $('div').append(response);
  });
});
```
