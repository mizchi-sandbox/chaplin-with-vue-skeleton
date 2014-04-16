module.exports = Vue.extend
  methods:
    dispose: ->
      @$destroy()