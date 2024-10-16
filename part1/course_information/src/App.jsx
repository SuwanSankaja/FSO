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
  // console.log(parts);
  // console.log(parts[0])
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  // console.log(props.course);
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  // console.log(props);
  return(
    <>
    <Part name={props.parts[0].name} exercise= {props.parts[0].exercises} />
    <Part name={props.parts[1].name} exercise= {props.parts[1].exercises} />
    <Part name={props.parts[2].name} exercise= {props.parts[2].exercises} />
    </>
  )
}

const Part = (props) => {
  console.log(props.name,props.exercise);
  return(
    <p> {props.name} {props.exercise} </p>
  )
 
}

const Total = (props) => {
  console.log(props.parts[0]);
  // console.log(props[0])
  return(
    <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} </p>
  )
}

export default App;