# Capybara w/Dave

* It tests websites from the users perspective.
* This means you can test against the DOM without dealing with jasmine!
* RackTest is it's default driver, which doesn't work with javascript
* If you want to work with javascript, you have to install capybara-webkit


```ruby
require 'capybara/rspec'

Capybara.app = Sinatra::Application # this can be any RACK application
Capybara.javascript_driver = :webit
```

And a corresponding spec file!

```ruby
describe "Feature", type: :feature do
# Because we're not using rails, we need to tag every test that uses capybara
# with type: :feature
  it "does something" do
    visit '/' # goes to the home page
    fill_in "name", with: "John Doe" # Looks for the field with the name
                                     # attribute of name and sets its value to
                                     # "John Doe"
    click_on "Submit" # this is the value on the screen for the button

    expect(page).to have_content("Hooray! John Doe!")
  end
end
```
