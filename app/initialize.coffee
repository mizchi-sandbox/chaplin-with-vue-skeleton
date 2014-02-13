require 'components/foo'
require 'components/bar'

Layout = require 'components/layout'

$ ->
  layout = new Layout
  $('body').append layout.$el
