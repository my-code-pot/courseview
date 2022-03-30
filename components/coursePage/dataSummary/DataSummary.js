import React from 'react'
import Bar from './Bar'
import {BlackText, RedText } from '../../../styles/text.style'
import OverallQuality from './OverallQuality'
import WillTakeAgain from './BarData'
import BarData from './BarData'
import Difficulty from './Difficulty'
const DataSummary = ({dataSummary}) => {
  return (
    <div>
      <RedText className='mb-3'>Reviews Summary:</RedText>
      <div className='flex'>
        <div className='mx-4'>
          <OverallQuality overallQuality={dataSummary.overallQuality}></OverallQuality>
          <BarData percentage={dataSummary.willTakeAgain+"%"}  name="Will take again" ></BarData>
        </div>
        <div className='ml-8'>
          <Difficulty difficulty={dataSummary.difficulty}></Difficulty>
          <BarData percentage={dataSummary.organization+"%"} name="Organization"></BarData>
        </div>
      </div>
    </div>
  )
}

export default DataSummary