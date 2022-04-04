import React from 'react'
import styled from 'styled-components'

const diffbar = () => {
  return (
    <Bar>
    </Bar>
  )
}

export default diffbar
const Bar = styled.div`
width: 30vw;
border: 0.1px solid black;
border-radius: 20px;
height: 5vh;
display:flex;
flex-direction:row;
`
const left = styled.div`
width: 6vw;
height: 5vh;
border: 0.1px solid black;
border-radius: 20px;
`
const right = styled.div`
  width: 6vw;
  height: 5vh;
`;
const middle = styled.div`
`