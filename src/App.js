import Content from './content';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 40}}>
      <h1> ReactJS </h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}

    </div>
  )
}

export default App