Controller = require 'controllers/base/controller'
Baz = require 'components/baz'
module.exports = class BazController extends Controller
  index: ->
    baz = @reuse 'baz', Baz
    baz.$appendTo '#scene-root'
