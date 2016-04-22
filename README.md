# PoC: Configurable React Template Generator

## Goals

The goal of this Proof of Concept is to see if, given an object of JSON variables, we can compile a set of templates into an easily integrated format. It may be possible to generate a single javascript file that renders the entire page if included.

A sibling project, given that this one is successful, would be to create a customer-facing `form` that generates the JSON this PoC uses and sends it to this PoC (presumably running as a separate container/service) to have this PoC's output sent back.

This ease of integration could benefit our clients by enabling them the ability to provide their desired HTML/CSS/JS to their vendors.

The sibling project's benefit would be in enabling them to create co-branded experiences, so that their templates are not visually out-of-place in the context of other vendor's websites.


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