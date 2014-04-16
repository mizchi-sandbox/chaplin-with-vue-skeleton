Component = require 'components/base/component'
Foo = require 'components/foo'
Bar = require 'components/bar'
Vue.component 'layout', module.exports = Component.extend
  components:
    foo: Foo
    bar: Bar
  template: (require './template')()