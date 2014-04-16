Component = require 'components/base/component'
Vue.component 'layout', module.exports = Component.extend
  template: (require './template')()