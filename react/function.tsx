import React from 'react';

interface People{
  name?: string,
  age?: number
}

//函数组件第一种方式
const App1 = (props:People) => (
  <div>
    <span>{props.name}</span>
    <span>{props.age}</span>
  </div>
)

//函数组件第二种方式
const App2:React.FC<People> = ({
  name,
  age,
  children
}) => (
  <div>
    <span>{name}</span>
    <span>{age}</span>
    {children}
  </div>
)

//默认值
App2.defaultProps = {
  name: 'vector',
  age: 27
}

export default App2;