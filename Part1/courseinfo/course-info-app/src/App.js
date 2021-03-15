import React from 'react'

const Header = (props) => {
// renders the name of the course
  return (
    <div>
      <p> {props.course} </p>
    </div>
  )
}

const Content = (props) => {
// renders the parts and their number of exercises
  return (
    <div>
      <p> <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises}> </Part> </p>
      <p> <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises}> </Part> </p>
      <p> <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises}> </Part> </p>
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
    <p> Number of exercises {props.parts[3].total}</p>
  </div>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  }
]
  

// const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  
  return (
    <div>
      <h1> <Header course={course}/> </h1>
      <p> <Content parts={parts}/></p>
      <p> <Total parts={parts}></Total></p>
    </div>
  );
}

export default App;
