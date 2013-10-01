# Backbone - Doug

Backbone is a way to organize your front end.
It is set up similar to MVC.
1. Model
2. View
3. Collection
4. Routers

Models are collections of data, similar to ActiveRecord
Views are tied to models. Views represent DOM elements.
Collections are groups of models.
Routers watch for changes to the URL then shows and hides views.


TREAT THIS LIKE PSEUDOCODE
```
var Task = Backbone.Model.extend({
  defaults: {

  }
  toggle: function() {
    // Toggle things.

  }
  // Methods and attributes go here!
});


var TaskView = Backbone.View.extend({
  events: {
    'click' : 'clickHandler'
  }

  clickHandler: function() {
    this.model.toggle();
  }
})
```
