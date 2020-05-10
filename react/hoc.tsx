import React from 'react';

const App = () => {
  return (
    <div>app</div>
  )
}

interface Loading {
  loading?:boolean
}

function HocApp<P>(WrapComponent:React.ComponentType<P>) {
  return class extends React.Component<P & Loading> {
    render() {
      const { loading, ...rest } = this.props;
      return loading ? <div>loading...</div> : <WrapComponent {...rest as P}/>
    }
  }
}

export default HocApp(App)