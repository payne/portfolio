# bummer

using ember 2.8 the command `npm install && bower install && ember s` gives me this error (happens in ember s):
```
(node:58115) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.
(node:58115) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.
`libsass` bindings not found. Try reinstalling `node-sass`?
Error: `libsass` bindings not found. Try reinstalling `node-sass`?
    at getBinding (/Users/mpayne/Study/JavaScript/Ember/CodeOne/2015/portfolio/node_modules/node-sass/lib/index.js:22:11)
    at Object.<anonymous> (/Users/mpayne/Study/JavaScript/Ember/CodeOne/2015/portfolio/node_modules/node-sass/lib/index.js:188:23)
    at Module._compile (module.js:556:32)
    at Object.Module._extensions..js (module.js:565:10)
    at Module.load (module.js:473:32)
    at tryModuleLoad (module.js:432:12)
    at Function.Module._load (module.js:424:3)
    at Module.require (module.js:483:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/mpayne/Study/JavaScript/Ember/CodeOne/2015/portfolio/node_modules/broccoli-sass-source-maps/index.js:5:12)
```

Doing a blind `npm install -g node-sass` did not help.   How to fix this, please?

# Portfolio

This is an Ember.js application that I'm building to help manage financial
portfolios. I intend for it to:

* track multiple portfolio allocations
* track current holdings in each portfolio, including cost basis info
* make recommendations for periodic rebalancing
* make recommendations for tax loss harvesting opportunities

A lot of this will be modeled after Betterment. I like their service, but can't
take advantage of their tax loss harvesting without transferring all assets into
their system.

This is my first real Ember.js project. I've opted for ember-cli and ember-data
as well. There's a real shortage of material describing best practices for
simple CRUD apps with ember-data, but I've done my best to synthesize what I
could find. Feedback welcome :)

As of now, the app's backend is just a mock server. At some point, I'll switch
that out for an actual API server in Rails, Go, or Node.

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TODO
