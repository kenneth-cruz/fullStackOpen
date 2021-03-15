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
  const part1 = {
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
  const total = part1.exercises + part2.exercises + part3.exercises
  
  return (
    <div>
      <h1> <Header course={course}/> </h1>
      <p> <Content 
          part1={part1.name} part2={part2.name} part3={part3.name} 
          exercises1={part1.exercises} exercises2={part2.exercises}
          exercises3={part3.exercises} > 
          </Content>
      </p>
      <p> <Total total={total}></Total></p>
    </div>
  );
}

export default App;
