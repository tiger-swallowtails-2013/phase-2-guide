# Complex Data Objects in databases with Thomas

1. Blobs     - Stores data in the database
2. Serialize - Translates your array to yaml and then writes the text to the regular text field

In your migration
```
def up
  add_column :users, :serialized_field, :string
end
```

In your model
```
class User
  serialize :serialized_field
end
```

In anything accessing this field

```
user.serialized_field << "foo"
```


