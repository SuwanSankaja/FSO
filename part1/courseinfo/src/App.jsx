const Header = (props) => {
  return(
    <h1>{props.course_name}</h1>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  
  )
}
const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} exercise= {props.ex1} /> 
      <Part part={props.part2} exercise={props.ex2} />
      <Part part={props.part3} exercise={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p> Number of exercises {props.num1+props.num2+props.num3} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  
  const part1  = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course_name={course}/>
      <Content part1={part1.name} ex1={part1.exercises} part2={part2.name} ex2={part2.exercises} part3={part3.name} ex3={part3.exercises} />
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises}/>
    </>
  )
}

export default App