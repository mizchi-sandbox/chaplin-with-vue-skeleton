Header = require('components/header')
Footer = require('components/footer')

Component = require 'components/base/component'
Vue.component 'layout', module.exports = Component.extend
  components:
    header: Header
    footer: Footer
  template: (require './template')()