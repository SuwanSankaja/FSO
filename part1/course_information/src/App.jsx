const App = () => {
  const course = "Half Stack application development";
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
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
    <Subject part={props.part1} exercise= {props.exercises1} />
    <Subject part={props.part2} exercise= {props.exercises2} />
    <Subject part={props.part3} exercise= {props.exercises3} />
    </>
  )
}

const Subject = (props) => {
  console.log(props.part,props.exercise);
  return(
    <p> {props.part} {props.exercise} </p>
  )
 
}

const Total = (props) => {
  console.log(props)
  return(
    <p>Number of exercises {props.exercises1+props.exercises2+props.exercises3} </p>
  )
}

export default App;