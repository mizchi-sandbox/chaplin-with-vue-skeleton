Controller = require 'controllers/base/controller'
Foo = require 'components/foo'
module.exports = class FooController extends Controller
  index: ->
    foo = @reuse 'foo', Foo
    foo.$appendTo '#scene-root'
