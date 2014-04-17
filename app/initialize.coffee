Layout = require 'components/layout'
Application = require 'application'
routes = require 'routes'

$ ->
  new Application {
    title: 'app'
    controllerSuffix: '-controller'
    routes
  }
