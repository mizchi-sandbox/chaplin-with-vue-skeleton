Component = require 'components/base/component'
Vue.component 'baz', module.exports = Component.extend
  template: (require './template')()