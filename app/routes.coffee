module.exports = (match) ->
  match '', 'home#index'
  match 'foo', 'foo#index'
  match 'bar', 'bar#index'
  match 'baz', 'baz#index'
