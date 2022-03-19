import React from 'react'
import styled from 'styled-components'
const Bar = ({percentage}) => {
    const styleParent={
        width:'400px',
        backgroundColor:'rgb(240, 240, 240)',
        borderRadius: '20px',
    }
    const styleChild ={
        borderRadius: '10px',
        width:`${percentage}`,
        backgroundColor:'rgb(0, 170, 0)',
        paddingLeft:`10%`,
        color:"rgb(0, 5, 0)",
    }
  return (
    <div style={styleParent}>
      <div  className="font-bold text-slate-700 rounded-lg " style={styleChild}>{percentage}</div>
    </div>
  )
}
const bar = styled.div.attrs({
    className: "",
  })`
  width:100px;
  background-color: red;
  /* background-color: blue; */
  `
export default Bar