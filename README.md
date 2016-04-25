# People of Razorfish

## Goal of project

The goal of this project is to have a self running carousel of full screen (100% of browser). 

## RUN

    npm run start

will start server on http://localhost:3000/

## Stack

The initial commit of the project is a clone of [React Slingshot](https://github.com/coryhouse/react-slingshot).

- React
- Redux
- React Router
- Babel
- Webpack
- npm scripts
- etc

## To do

- need to update the peopleView so it holds the data, but only builds out two person elements to reduce memory usage
- set up architecture 
  -- main - initialize - load data - pass data to people view
  -- people view - handle radomizing and displaying active person - transitions between person views
  -- person view - plays video - handles transition on and off animations - dispatches event when video is complete
