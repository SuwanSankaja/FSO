import { useState } from "react"

const App = () => {
  const [goodCounter,goodSetter] = useState(0);
  const [neutralCounter,neutralSetter] = useState(0)
  const [badCounter,badSetter] = useState(0)
  const [totalCounter,totalSetter] = useState(0)


  const goodclicker = () => {
    goodSetter(goodCounter+1);
    totalSetter(totalCounter+1);

  }

  const neutralclicker = () => {
    neutralSetter(neutralCounter+1);
    totalSetter(totalCounter+1);

  }

  const badclicker = () => {
    badSetter(badCounter+1);
    totalSetter(totalCounter+1);
  }

  return(
    <div>
    <h1> give feedback </h1>
    <button onClick={goodclicker}> good </button>
    <button onClick={neutralclicker}> neutral </button>
    <button onClick={badclicker}> bad </button>
    <StatsOutput text="statistics" goodCounter={goodCounter} neutralCounter={neutralCounter} badCounter={badCounter} totalCounter={totalCounter}/>

    </div>)
}


const StatsOutput = ({text,goodCounter,neutralCounter,badCounter,totalCounter}) =>{
    if (totalCounter===0){
      return(
       <div>
      <h1> {text} </h1>
      <p> No feedback given</p>
      </div>
      )
    }
    else{
      return(
      <Statistics text="statistics" goodCounter={goodCounter} neutralCounter={neutralCounter} badCounter={badCounter} totalCounter={totalCounter}/>
      )
    }
    }

const Statistics = ({text,goodCounter,neutralCounter,badCounter,totalCounter}) => {
  console.log(text);
  const calculateAverage = () => {
    return totalCounter === 0 ? 0 : (goodCounter - badCounter) / totalCounter;
  };

  const calculatePositivePercentage = () => {
    return totalCounter === 0 ? '0%' : ((goodCounter / totalCounter) * 100)+'%';
  };
  

  return(
  <div>
  <h1> {text} </h1>

  <StatisticLine counterName={goodCounter} text ='good'/>
  <StatisticLine counterName={neutralCounter} text ='neutral'/>
  <StatisticLine counterName={badCounter} text ='bad'/>
  <StatisticLine counterName={totalCounter} text ='all'/>
  <StatisticLine counterName={calculateAverage()} text ='average'/>
  <StatisticLine counterName={calculatePositivePercentage()} text ='positive'/>
  {/* <p style={{ margin: 0 }}> good {goodCounter} </p> */}
  {/* <p style={{ margin: 0 }}> neutral {neutralCounter} </p>
  <p style={{ margin: 0 }}> bad {badCounter}</p>
  <p style={{ margin: 0 }}> all {totalCounter}</p>
  <p style={{ margin: 0 }}> average {calculateAverage()}</p>
  <p style={{ margin: 0 }}> positive {calculatePositivePercentage()}%</p> */}
</div>
  )

}

const StatisticLine = ({counterName,text}) => {
  console.log(counterName);
  return (
    <p style={{ margin: 0 }}> {text} {counterName} </p>
  )
}
export default App