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
console.log('CONTENT', props.exercises1)
  return (
    <div>
      <p> <Part part = {props.part1} exercise = {props.exercises1}> </Part> </p>
      <p> <Part part = {props.part2} exercise = {props.exercises2}> </Part> </p>
      <p> <Part part = {props.part3} exercise = {props.exercises3}> </Part> </p>
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
    <p> Number of exercises {props.total}</p>
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
  }
]
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  
  return (
    <div>
      <h1> <Header course={course}/> </h1>
      <p> <Content 
          part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} 
          exercises1={parts[0].exercises} exercises2={parts[1].exercises}
          exercises3={parts[2].exercises} > 
          </Content>
      </p>
      <p> <Total total={total}></Total></p>
    </div>
  );
}

export default App;
