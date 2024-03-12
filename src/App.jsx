import { useState } from 'react'

const Statistics =({good, neutral, bad}) =>{
  if (good === 0 && neutral === 0 && bad === 0) {
    return <h3>No feedback given</h3>
}
  const all = good + neutral + bad

  const averageScore = (good * 1 +neutral *0 + bad * -1) / all
    
  const positivePercentage = (good / all) * 100
  return (
    <div>
        <p>all  {all}</p>
        <p>average {averageScore}</p>
        <p>positive {positivePercentage} %</p>
        
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
        <button onClick= {handleGood}>good</button>
        <button onClick= {handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
       <h2>Statistics</h2>
        {/* <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>  */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App