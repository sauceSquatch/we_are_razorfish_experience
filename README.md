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

- √ clean out sample code [instructions here](https://github.com/coryhouse/react-slingshot/blob/master/docs/FAQ.md#i-just-want-an-empty-starter-kit)
- write some sample components
- √ add functionality to allow sass to import json
- update dev webpack config to recompile sass when `variables.json` changes
- research architectural patterns for including modules based on the data that's sent (likely not atypical—perhaps this is just a matter of state?)
- reconfigure production output to inlude styles within the javascript, then injecting into a single style tag rather than outputting a separate `style.css` file
- turn it into a node service that takes a json file it's sent and runs production dist commands, then sends the output back
- to support information generated on the client's vendor's server, create a PoC API for a component type (product image/link/name/description?) and ensure that the vendor's server can configure these things from outside of our generated file

- clean out prvious project assets
- need to update the peopleView so it holds the data, but only builds out two person elements to reduce memory usage
- set up architecture 
  -- main - initialize - load data - pass data to people view
  -- people view - handle radomizing and displaying active person - transitions between person views
  -- person view - plays video - handles transition on and off animations - dispatches event when video is complete
