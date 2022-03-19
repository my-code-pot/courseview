import React from 'react'
import Bar from './Bar'
import {BlackText, RedText } from '../../../styles/text.style'
import OverallQuality from './OverallQuality'
import WillTakeAgain from './BarData'
import BarData from './BarData'
import Difficulty from './Difficulty'
const DataSummary = () => {
  return (
    <div>
      <RedText className='mb-3'>Reviews Summary:</RedText>
      <div className='flex'>
        <div className='mx-4'>
          <OverallQuality></OverallQuality>
          <BarData percentage="90%"  name="Will take again"></BarData>
        </div>
        <div className='ml-8'>
          <Difficulty></Difficulty>
          <BarData percentage="30%" name="Organization"></BarData>
        </div>
      </div>
    </div>
  )
}

export default DataSummary