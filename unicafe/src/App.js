import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  console.log(props.goodClicks)
  console.log(props.neutralClicks)
  console.log(props.badClicks)
  console.log(props.totalNumber)
  console.log(props.averageNumber)
  const goodNumbers = props.goodClicks
  const neutralNumbers = props.neutralClicks
  const badNumbers = props.badClicks
  const total = props.totalNumber
  const average = props.averageNumber
  const positive = props.positiveNumber

  if (total === 0) {
    return(
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }

  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsRow text="good" value={goodNumbers} text2=""/>
          <StatisticsRow text="neutral" value={neutralNumbers} text2=""/>
          <StatisticsRow text="bad" value={badNumbers} text2=""/>
          <StatisticsRow text="all" value={total} text2=""/>
          <StatisticsRow text="average" value={average} text2=""/>
          <StatisticsRow text="positive" value={positive} text2="%"/>
        </tbody>
      </table>
    </div>
  )
}

/*const StatisticsLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.value} {props.text2}</p>
    </div>
  )
}*/

const StatisticsRow = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.text2}</td>
    </tr>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleClickGood} text={'good'} />
        <Button handleClick={handleClickNeutral} text={'neutral'} />
        <Button handleClick={handleClickBad} text={'bad'} />
        <Statistics goodClicks={good} neutralClicks={neutral} badClicks={bad} totalNumber={good + neutral + bad} averageNumber={(good - bad) / (good + neutral + bad)} positiveNumber={good / (good + neutral + bad) * 100} />
      </div>
    </div>
  )
}

export default App
