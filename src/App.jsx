import React from 'react'
import './App.css'
import Users from '../components/Users'

function App() {
  
  const usersPromise = fetch('http://localhost:3000/users').then(res => res.json())

  return (
    <>
      <Users usersPromise={usersPromise}/>
    </>
  )
}

export default App
