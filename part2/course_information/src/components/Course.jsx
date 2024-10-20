const Course = (props) => {
    console.log(props.course.name);
    // console.log(props)
    const headername =props.course.name;
    const parts = props.course.parts;
  
    return (
      <div>
      <Header header={headername} />
      <Content parts={parts} />
      </div>
    );
  }
export default Course;
  
  const Header = (props) => {
    // console.log(props.header);
    return (
      <h2>{props.header}</h2>
    )
  }
  
  const Content = (props) => {
    // console.log(props.parts);
    // console.log(props.parts[0].id)
    return(
      <>
      {/* <Part name={props.parts[0].name} exercise= {props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise= {props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise= {props.parts[2].exercises} /> */}
  
      {props.parts.map((part) => (
              <Part key={part.id} name={part.name} exercise={part.exercises} />
            ))}
      <Total parts={props.parts}/>
      </>
    )
  }
  
  const Part = (props) => {
    // console.log(props.name,props.exercise);
    return(
      <p> {props.name} {props.exercise} </p>
    )
   
  }
  
  const Total = (props) => {
    // console.log(props.parts[0].exercises);
    // console.log(props[0])
    // (props.parts.map(part) => (part.exercises))
    const exercisesArray = props.parts.map((part) => part.exercises);
    // console.log(exercisesArray);
  
    const total = exercisesArray.reduce((s,p) => s+p);
    // console.log(total);
    return(
      <p><b> total of {total} exercises </b> </p>
    )
  }