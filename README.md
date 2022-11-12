<img src="https://raw.github.com/leesheppard/stimulus-example/main/docs/images/stimulus-install.png" width="400px" alt="install importmap">

# README

This Stimulus application will show how to install Stimulus into a Rails 7 application implementation with `importmap-rails`. It will also show an example of an accordion used in modern applications.

## Install

This app was generated as a minimal install using:

    $ rails new stimulus-example --minimal

If you are downloading this to run locally clone the repository from here

    $ git clone
    $ cd stimulus-example

Add `importmap-rails` to the Rails application:

    $ ./bin/bundle add importmap-rails
    $ ./bin/rails importmap:install

Rails generates:

```bash
Use vendor/javascript for downloaded pins
create  vendor/javascript
create  vendor/javascript/.keep

Ensure JavaScript files are in the Sprocket manifest
append  app/assets/config/manifest.js

Configure importmap paths in config/importmap.rb
create  config/importmap.rb

Copying binstub
create  bin/importmap
```

Add stimulus-rails to the Rails application:

```bash
$ ./bin/bundle add stimulus-rails
```

Install stimulus

```bash
$ ./bin/rails stimulus:install
```

Generate a new stimulus controller with:

```bash
$ rails g stimulus toggle
```

Rails generates:

```bash
create  app/javascript/controllers/toggle_controller.js
```

Generate a Home page:

```bash
$ rails g controller Home index
```

Rails generates:

```bash
create  app/controllers/home_controller.rb
route   get 'home/index'
invoke  erb
create  app/views/home
create  app/views/home/index.html.erb
invoke  test_unit
create  test/controllers/home_controller_test.rb
invoke  helper
create  app/helpers/home_helper.rb
invoke  test_unit
```
