import React from 'react'

const NewLearn = (props) => {
  const {name , lastName} = props 
  return (
    <div>{name}{lastName}</div>
  )
}

export default NewLearn