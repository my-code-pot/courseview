import React from 'react'
import { BlackText } from '../../../styles/text.style'
const Difficulty = () => {
  const scoreStyle={
    position:'relative',
    left:'5%',
    fontSize:"20px"
}
  return (
    <div className='my-5'>
         <BlackText style={{fontSize:"20px"}}>Difficulty</BlackText>
         <BlackText style={scoreStyle}>2.4/5</BlackText>
    </div>
  )
}

export default Difficulty