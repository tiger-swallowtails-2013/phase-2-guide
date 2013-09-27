Week 2 - Type Racer:

Jon,
Juke,
Nathan,
Gary

## Lightning Talks

### Git-Limbo with Git Rebasing - Nathan

* `You are currently rebasing! Fix conflicts then
  git rebase --continue or --skip or --abort`
* Rebase goes back to the root and replays the changes on top of master
* Rebase re-applies the commits one by one, so it may be easier than on big
  merge

### Migrations - Juke

* The migrations filename must match themigration class name
* CreateGamesRatingsTable in db/migrate/1234_create_games_ratings_table.rb
* `create_table :users, :games` automatically creates join tables
* It names the table after tables alphabetically (i.e. games_users)
* You can specify the tables name with the `table_name` option
  `create_table :users, :games, table_name: :game_ratings`

```
class User
  has_many :game_ratings
  has_many :games, through :game_ratings
end

class GameRating
end

class Game
end
```

### UnderscoreJS - Jon and Gary
It gives you enumerable-like functions in JavaScript!
```ruby
[1,4,6,10].select { |v| v > 5 }
```
select Before Underscore
```javascript
var array = [1,4,6,10];
newArray = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] > 5) {
    newArray.push(array[i]);
  }
}
```

After Underscore

```javascript
var array = [1,4,6,10]
var newArray = _.select(array, function(value) {
  return value > 5;
});
newArray;
```

```
