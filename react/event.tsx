import React from 'react';

class App extends React.Component {
  state = {
    text: ''
  }

  handleChange = (e:React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <input value={this.state.text} onChange={this.handleChange} />
    )
  }
}

export default App