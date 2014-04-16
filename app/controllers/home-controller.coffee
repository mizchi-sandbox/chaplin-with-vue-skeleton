Controller = require 'controllers/base/controller'
module.exports = class HomeController extends Controller
  index: ->
    console.log 'home'
