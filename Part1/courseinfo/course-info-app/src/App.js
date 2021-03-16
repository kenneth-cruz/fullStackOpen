import React from 'react'

const Header = (props) => {
// renders the name of the course
  return (
    <div>
      <p> {props.course.name} </p>
    </div>
  )
}

const Content = (props) => {
// renders the parts and their number of exercises
console.log('CONTENT', props)
  return (
    <div>
      <p> <Part part = {props.course.parts[0].name} exercise = {props.course.parts[0].exercises}> </Part> </p>
      <p> <Part part = {props.course.parts[1].name} exercise = {props.course.parts[1].exercises}> </Part> </p>
      <p> <Part part = {props.course.parts[2].name} exercise = {props.course.parts[2].exercises}> </Part> </p>
    </div>
  )  
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}



const Total = (props) => {
// renders the total number of exercises
return (
  <div>
    <p> Number of exercises {props.course.parts[3].total}</p>
  </div>
)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:   [
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
      },
      {
        total: 31
      },
      {
        name: 'Half Stack application development'
      }
    ]
  }

  console.log(course)
// const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  
  return (
    <div>
      <h1> <Header course={course}/> </h1>
      <p> <Content course={course}/></p>
      <p> <Total course={course}></Total></p>
    </div>
  );
}

export default App;
