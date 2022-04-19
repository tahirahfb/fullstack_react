import { useState } from 'react'
import Header from './Header'
import Feedback from './Feedback'
import Statistics from './Statistics'
import Results from './Results'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = 'Give Feedback'
  const goodOne = () => setGood(good + 1)
  const neutralOne = () => setNeutral(neutral + 1)
  const badOne = () => setBad(bad + 1)

  return (
    <div className="apps">
      <Header title={title} />
      <Feedback goodOne={goodOne} neutralOne={neutralOne} badOne={badOne}/>
      <Statistics />
      <Results  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
