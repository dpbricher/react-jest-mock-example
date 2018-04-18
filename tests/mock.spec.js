describe('A test with a mocked API', ()=> {
  const React = require('react')
  const ReactDOM  = require('react-dom')

  const TestComponent = require('../src/TestComponent')

  jest.mock('../src/fetch')

  beforeAll(()=> document.body.appendChild(document.createElement('div')))

  test('the test component with a mocked api', done => {
    ReactDOM.render(React.createElement(TestComponent), document.querySelector('body div'))

    setImmediate(()=> {
      let apiData = document.querySelector('.test-component').innerHTML;

      expect(apiData).toBe('fake response!')
      done()
    })
  })
})
