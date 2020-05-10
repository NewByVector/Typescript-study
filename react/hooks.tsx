import React, { useState, useEffect } from 'react';

interface Peopple {
  name?: string,
  age?: number
}
const App = (props: Peopple) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    if (count > 5) {
      setText('more than 5!')
    }
  }, [count])

  return (
    <div>
      <p>count: {count}</p>
      <p>text: {text}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default App