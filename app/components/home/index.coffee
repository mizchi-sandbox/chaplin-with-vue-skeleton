Component = require 'components/base/component'
Vue.component 'home', module.exports = Component.extend
  template: (require './template')()