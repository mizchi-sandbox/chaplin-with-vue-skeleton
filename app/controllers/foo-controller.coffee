Controller = require 'controllers/base/controller'
Foo = require 'components/foo'

module.exports = class FooController extends Controller
  index: ->
    console.log 'foo'
    foo = @reuse 'foo', Foo
    foo.$appendTo 'body'