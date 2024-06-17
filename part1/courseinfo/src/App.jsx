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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course_name={course}/>
      <Content part1={part1} ex1={exercises1} part2={part2} ex2={exercises2} part3={part3} ex3={exercises3} />
      <Total num1={exercises1} num2={exercises2} num3={exercises3}/>
    </>
  )
}

export default App