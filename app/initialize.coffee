Layout = require 'components/layout'

Application = require 'application'
routes = require 'routes'

$ ->
  layout = new Layout
  layout.$appendTo 'body'

  new Application {
    title: 'app'
    controllerSuffix: '-controller'
    routes
  }
