# Brunch with vue.js

This is a brunch - vue.js project.

## Install

```
npm install
bower install
brunch watch -s
```

and open http://localhost:3333

## Generators

Install `scaffolt` at first(`npm install -g scaffolt`)

```
$ scaffolt component foo
14 Feb 04:06:18 - info: create app/components/foo/index.coffee
14 Feb 04:06:18 - info: create app/components/foo/style.sass
14 Feb 04:06:18 - info: create app/components/foo/template.jade
```

Use custom tag

```
<foo/>
```

`foo` tag  will expand `app/components/foo/template.jade`

## Test

```
$ mocha-phantomjs test/assets/test.html
```
