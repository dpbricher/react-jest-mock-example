const React = require('react')
const ReactDOM  = require('react-dom')

const fetch = require('./fetch')

class TestComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      apiData:null
    }
  }

  componentDidMount() {
    fetch('data-url').then(res => this.setState({ apiData:res }))
  }

  render() {
    return React.createElement('div', { className:'test-component' }, `${this.state.apiData}`)
  }
}

module.exports  = TestComponent
