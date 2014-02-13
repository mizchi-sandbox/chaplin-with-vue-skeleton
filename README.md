# Brunch with vue.js

This is a brunch - vue.js project.

## How to run

```
$ mkdir test-vue
$ cd test-vue
$ brunch new git@github.com:mizchi/brunch-with-vue
$ npm install
$ bower install
$ brunch watch -s
```

open http://localhost:3333

## Generators

Install `scaffolt` at first(`npm install -g scaffolt`)

```
$ scaffolt component foo
14 Feb 04:06:18 - info: create app/components/foo/index.coffee
14 Feb 04:06:18 - info: create app/components/foo/style.sass
14 Feb 04:06:18 - info: create app/components/foo/template.jade
```

`<foo/>` tag will expand by its definition.

## Test

```
$ mocha-phantomjs test/assets/test.html
```
