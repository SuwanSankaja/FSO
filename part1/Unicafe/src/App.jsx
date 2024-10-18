import { useState } from "react"

const App = () => {
  const [goodCounter,goodSetter] = useState(0);
  const [neutralCounter,neutralSetter] = useState(0)
  const [badCounter,badSetter] = useState(0)

  const goodclicker = () => {
    const setter = goodSetter (goodCounter+1);
    return (setter);
  }

  const neutralclicker = () => {
    const setter = neutralSetter (neutralCounter+1);
    return (setter);
  }

  const badclicker = () => {
    const setter = badSetter (badCounter+1);
    return (setter);
  }

  console.log(goodCounter);

  return(
    <div>
    <h1> give feedback </h1>
    <button onClick={goodclicker}> good </button>
    <button onClick={neutralclicker}> neutral </button>
    <button onClick={badclicker}> bad </button>


    <h1> statistics</h1>

  <p style={{ margin: 0 }}> good {goodCounter} </p>
  <p style={{ margin: 0 }}> neutral {neutralCounter} </p>
  <p style={{ margin: 0 }}> bad {badCounter}</p>


    </div>
    
  )
}

export default App