Home = require('components/home')
Controller = require 'controllers/base/controller'

module.exports = class HomeController extends Controller
  index: ->
    home = @reuse 'home', Home
    home.$appendTo '#scene-root'
