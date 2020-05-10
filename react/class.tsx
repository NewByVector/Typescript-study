import React from 'react';

interface People{
  name: string,
  age: number
}
interface State{
  count: number
}

class App extends React.Component<People, State> {
  state:State = {
    count: 0
  }
  static defaultProps = {
    name: 'vector',
    age: 27
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default App