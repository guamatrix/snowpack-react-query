import React from 'react'
import './index.css'

interface ICharacter {
  name: string
  image: string
}

const Character = ({name, image}: ICharacter) => {
  return (
    <div>
      <span>{name}</span>
      <img src={image} />
    </div>
  )
}

export default Character
