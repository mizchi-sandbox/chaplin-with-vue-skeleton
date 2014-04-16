Controller = require 'controllers/base/controller'
Foo = require 'components/foo'

module.exports = class BarController extends Controller
  index: ->
    foo = @reuse 'foo', Foo
    foo.$appendTo 'body'
