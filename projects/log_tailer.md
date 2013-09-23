## Log Tail-er
You know what I hate? typeing `heroku logs --tail --app appname` You know what i would rather do? I would rather have a nifty web service to do it for me. Go check out the [Heroku API](https://devcenter.heroku.com/articles/platform-api-reference#log-session) docs and write me a web service that wraps the log-session api so that you can go to a url something like http://yourapp.herokuapp.com/log/anapp .

This consists of two parts
## Backend
This should provide a nice API with a single endpoint to get the log stream for an app.


### MVP

* you can go to http://yourapp.herokuapp.com/logs/appname and get a nice json stream of logs for what ever app's api key you used
 

### Production

* you can go to http://yourapp.herokuapp.com/logs/appname?last=1m and it gives me the last minute of logs

* Use [heroku-bouncer](https://github.com/heroku/heroku-bouncer) for oauth so that anyone can get to their apps logs


## Front End
This should be a nice little javascript snippet that adds a logs button to the bottom of the page that opens a little modal window that shows the current logs being produceds

### MVP

* A button that links to the logstream from the last minute or so in a nice little window is inserted when I add the script tag to my site.

### Production

* That button opens something that stays open even when I change pages on your site, 
maybe a new window, maybe something in the chrome debugger.

* I can configure that button to either give me a stream or the last minute of logs for that app.
