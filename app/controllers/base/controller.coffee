Layout = require 'components/layout'
module.exports = class Controller extends Chaplin.Controller
  beforeAction: ->
    layout = new Layout
    layout.$appendTo 'body'

