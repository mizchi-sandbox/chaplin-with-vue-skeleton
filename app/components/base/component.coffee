module.exports = Vue.extend
  methods: {}

Vue::dispose = ->
  @$destroy()
  console.info 'dispose'
