const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.header.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.courseParts.parts[0].name} exercises={props.courseParts.parts[0].exercises}/>
      <Part part={props.courseParts.parts[1].name} exercises={props.courseParts.parts[1].exercises}/>
      <Part part={props.courseParts.parts[2].name} exercises={props.courseParts.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.exercisesTotal.parts[0].exercises + props.exercisesTotal.parts[1].exercises + props.exercisesTotal.parts[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header header={course}/>
      <Content courseParts={course}/>
      <Total exercisesTotal={course}/>
    </div>
  )
}

export default App
