import React from 'react'
import { useState } from 'react';
import difficulty_bar from './difficulty_bar.js'';
import styled from 'styled-components';
import Rate from './rate';
const AddForm = () => {
  const [inputs, setInputs] = useState({
     name:"",
     semester:"",
     recommend:"",
     professor:"",
     review:"",
     organization:"",
     difficulty:"",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.organization);
  }

  return (
    <form  className="font-bold bg-slate-50 p-5 text-2xl rounded-lg" onSubmit={handleSubmit}>
      <div className='flex'>
      <Input>
      <label>Name:</label>
      <input 
        type="text" 
        name="name" 
        value={inputs.name} 
        onChange={handleChange}
      />
      </Input>
      <Input>
      <label>Semester:</label>
        <input 
          type="text" 
          name="semester" 
          value={inputs.semester} 
          onChange={handleChange}
        />
      </Input>
      </div>
      <div className='flex'>
      <Input>
      <label>Difficulty:</label>
        <input 
          type="text" 
          name="difficulty" 
          value={inputs.difficulty} 
          onChange={handleChange}
        />
      </Input>
      <Input>
      <label>Organization:</label>
        <input 
          type="text" 
          name="organization" 
          value={inputs.organization} 
          onChange={handleChange}
        />
      </Input>
      </div> 
      <div className='flex'>
      <Input>
      <label>Do you recommend:</label>
        <input 
          type="text" 
          name="recommend" 
          value={inputs.recommend} 
          onChange={handleChange}
        />
      </Input>
      <Input>
      <label>Professor:</label>
        <input 
          type="text" 
          name="professor" 
          value={inputs.professor} 
          onChange={handleChange}
        />
      </Input>
      </div>
      <div style={{display:"flex", justifyContent:"center",flexDirection: "column"}}>
        <label> Your review:</label>
        <input 
          type="text" 
          name="review" 
          value={inputs.review} 
          onChange={handleChange}
        />
        <input className="my-6" type="submit" />
      </div>
      <Rate></Rate>
    </form>
  )
}
const Input = styled.div.attrs({
  className: "",
})` 
      margin-right: 30%;
      margin-bottom: 5%;
`
export default AddForm