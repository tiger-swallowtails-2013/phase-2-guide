# Capybara with Lionel

1. Capybara is ran in rspec
2. Use feature instead of description
3. Use scenario instead of it
4. scenario's that test javascript should be:

```
scenario "test some javascripts", js: :true do
  visit "a page"
  click_on 'a button'
  expect("a result").to eql "the thing"
end
```

5. Use `Omniauth.config.add_mock` to test logins
