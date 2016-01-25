# Description

Build Manager is a UI prototype of how builds are managed.

# Web Stack

1) AngularJs (1.2.0)
2) Compass (Used to import some crossplatform mixins and compile sass)
3) RequireJs

# App Structure

-- app
-- sass
-- stylesheeets
---- controllers
---- views
---- directives
---- enums
---- assets
------ js (non AMD)
------ images

# Pending Tasks :- (These things are currently not present)

1) Unit Test Cases

2) Services for rendering charts (currently in controller)

3) Esential Grunt Tasks like jshint, minify etc

4) Move sass & stylesheets to assets

# How to Run

1) Install node https://nodejs.org/en/download/

2) Install compass `sudo gem install compass`

3) npm install (sudo if required)

4) bower install

5) npm start (open http://localhost:8080)

6) Change sass files and do `compass compile` to turn them into css
