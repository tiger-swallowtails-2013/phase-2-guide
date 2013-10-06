# ENV with David

1. It's a global. It's everywhere
2. It behaves like a hash
3. It's a way of accessing environment variables and pulling them into your file.
4. You can load ENV variables with `dotenv`
5. You can set ENV variables with `heroku config:set`

dotenv has key value pairs in your .env file

```
VAR1=hi
```

```
Dotenv.load
p ENV['VAR1']
```

