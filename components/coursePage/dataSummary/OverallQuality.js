import React from 'react'
import { BlackText } from '../../../styles/text.style'
const OverallQuality = ({overallQuality}) => {
    const scoreStyle={
        position:'relative',
        left:'5%',
        fontSize:"20px"
    }
  return (
    <div className='my-5'>
         <BlackText style={{fontSize:"20px"}}> Overall quality</BlackText>
         <BlackText style={scoreStyle}>{overallQuality}%</BlackText>
    </div>
  )
}

export default OverallQuality