Component = require 'components/base/component'
Vue.component 'foo', module.exports = Component.extend
  template: (require './template')()