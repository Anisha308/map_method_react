import React from 'react'
const name=['abhi','Jithi','nandha','gopu','aradhya','dakshu','aru']

function Header() {
  return (
    <div>
      <h1>Family love!!!!</h1>
      {name.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Header
