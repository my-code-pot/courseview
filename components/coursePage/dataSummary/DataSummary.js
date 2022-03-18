import React from 'react'
import Bar from './Bar'
import {BlackText, RedText } from '../../../styles/text.style'
import OverallQuality from './OverallQuality'
import WillTakeAgain from './WillTakeAgain'
const DataSummary = () => {
  return (
    <div>
      <RedText className='mb-3'>Reviews Summary:</RedText>
      <div className='flex'>
        <div className='mx-4'>
          <OverallQuality></OverallQuality>
          <WillTakeAgain></WillTakeAgain>
        </div>
        <div className='ml-8'>
          <WillTakeAgain></WillTakeAgain>
        </div>
      </div>
    </div>
  )
}

export default DataSummary