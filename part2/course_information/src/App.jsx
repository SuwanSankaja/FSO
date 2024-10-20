const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App

const Course = (props) => {
  return (
    <div>
    <Header header={props.course.name} />
    <Content props={props} />
    </div>
  );
}

const Header = (props) => {
  // console.log(props);
  return (
    <h1>{props.header}</h1>
  )
}

const Content = (props) => {
  console.log(props.props.course.parts[0]);
  return(
    <>
    <Part name={props.props.course.parts[0].name} exercise= {props.props.course.parts[0].exercises} />
    <Part name={props.props.course.parts[1].name} exercise= {props.props.course.parts[1].exercises} />
    <Part name={props.props.course.parts[2].name} exercise= {props.props.course.parts[2].exercises} />
    </>
  )
}

const Part = (props) => {
  console.log(props.name,props.exercise);
  return(
    <p> {props.name} {props.exercise} </p>
  )
 
}