import React from 'react'
import styled from 'styled-components'
const Bar = () => {
    const styleParent={
        width:'400px',
        backgroundColor:'rgb(240, 240, 240)',
        borderRadius: '20px',
    }
    const styleChild ={
        borderRadius: '10px',
        width:'60%',
        backgroundColor:'rgb(0, 170, 0)',
        paddingLeft:"5%"
    }
  return (
    <div    style={styleParent}>
      <div style={styleChild}>50%</div>
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