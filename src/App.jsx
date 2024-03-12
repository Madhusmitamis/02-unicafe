import { useState } from 'react'

const Button = ({text, handleClick})=>{
  return(
    <button onClick = {handleClick}>{text}</button>
  )
}
const StatisticLine = ({text,value})=>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics =({good, neutral, bad}) =>{
 if (good === 0 && neutral === 0 && bad === 0) {
    return <h3>No feedback given</h3> }
  const all = good + neutral + bad

  const averageScore = (good * 1 +neutral *0 + bad * -1) / all
    
  const positivePercentage = (good / all) * 100
  return (
    <div>
       <h2>Statistics</h2>
       <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={all} />
                    <StatisticLine text="average" value={averageScore.toFixed(1)} />
                    <StatisticLine text="positive " value={positivePercentage.toFixed(1) + " %"} />
                </tbody>
            </table>
        
      </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  const handleGood = ()=> {
    setGood(good + 1)
    
  }
  const handleNeutral=()=>{
    setNeutral(neutral+1)
    
  }
  const handleBad = ()=>{
    setBad(bad + 1)
    
  }
  
    return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />
      </div>
       
        {/* <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>  */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App