import { useState } from 'react'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

function App() {

  function handleClick() {
    alert('button click')
  }

  const clickHere = () => {
    prompt('Hello')
  }

  // const getPoint = () => {
  //   alert('Congratulation You Get point')
  // }

  const calculateOnPrompt = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <div>
        <h1>React Core concepts</h1>
        <Posts></Posts>

        <hr />

        <Friends></Friends>
        <hr />

        <Users></Users>
        <hr />

        <Team></Team>
        <hr />

        <Counter></Counter>
        <hr />

        <div>
          <button onClick={handleClick}>Click Me</button>
          <button onClick={clickHere}>Click Here</button>
          <button onClick={() => alert("Congratulation You Get point")}>Get Point</button>

          {/* hard  */}
          <button onClick={() => calculateOnPrompt(10)}>Click</button>
        </div>
      </div>

    </>
  )
}

export default App
