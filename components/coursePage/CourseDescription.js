import React from 'react'
import { RedText } from '../../styles/text.style'
const CourseDescription = ({description}) => {
  return (
    <div className='mt-12'>
        <RedText>Course Description:</RedText>
        <div className='font-bold text-slate-700 my-7 rounded-lg'>
        {description}
        </div>
    </div>
  )
}

export default CourseDescription