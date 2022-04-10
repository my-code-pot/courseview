import React from 'react'
import { BlackText } from '../../../styles/text.style'
const Difficulty = ({difficulty}) => {
  const scoreStyle={
    position:'relative',
    left:'5%',
    fontSize:"20px"
}
  return (
    <div className='my-5'>
         <BlackText style={{fontSize:"20px"}}>Difficulty</BlackText>
         <BlackText style={scoreStyle}>{difficulty}%</BlackText>
    </div>
  )
}

export default Difficulty