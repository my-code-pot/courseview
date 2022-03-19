import React from 'react'
import Bar from './Bar'
import { BlackText } from '../../../styles/text.style'
const BarData = (props) => {
  return (
    <div className='my-5'>
       <BlackText className='mb-4' style={{fontSize:"20px"}}>{props.name}</BlackText>
       <Bar percentage={props.percentage}></Bar>
    </div>
  )
}

export default BarData