var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Props are cool', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
