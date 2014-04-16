# Brunch with chaplin and vue

This is a brunch - chaplin(controller) - vue.js(view) project.

- coffee-script
- chaplin
- vue
- sass
- jade

## How to run

```
$ mkdir test-vue
$ cd test-vue
$ brunch new git@github.com:mizchi-sandbox/chaplin-with-vue-skeleton
$ npm install
$ bower install
$ brunch watch -s
```

open http://localhost:3333

## Generators

Install `scaffolt` at first(`npm install -g scaffolt`)

### component
```
$ scaffolt component foo
14 Feb 04:06:18 - info: create app/components/foo/index.coffee
14 Feb 04:06:18 - info: create app/components/foo/style.sass
14 Feb 04:06:18 - info: create app/components/foo/template.jade
```

### scaffold
```
$ scaffolt scaffold foo
17 Apr 03:56:49 - info: create app/controllers/foo-controller.coffee
17 Apr 03:56:49 - info: create app/components/foo/index.coffee
17 Apr 03:56:49 - info: create app/components/foo/template.jade
17 Apr 03:56:49 - info: create app/components/foo/style.sass
```

## Test

```
npm install -g mocha-phantomjs
npm test
```
