import React from "react";
import { useState } from "react";
import SelectionBar from "./Selectionbar";
import styled from "styled-components";
import { RedText } from "../../../styles/text.style";
import CheckBox from "./checkBox";
import axios from "axios";
const qualityLevels = ["Awful", "Bad", "Ok", "Good", "Amazing"];
const difficultyLevels = ["Very Easy", "Easy", "Medium", "Hard", "Very Hard"];
const organizationLevels = ["Very disorganized", "disorganized", "normal", "organized", "Very organized"];
const AddForm = ({courseName}) => {
  const [inputs, setInputs] = useState({
    name: "",
    semester: "",
    recommendation: "",
    professor: "",
    review: "",
    organization: "",
    difficulty: "",
    quality:"",
  });
  const setQuality = (quality) =>{
    setInputs((values) => ({ ...values, quality: quality }));
  } 
  const setRecommendation = (recommendation) =>{
    setInputs((values) => ({ ...values, recommendation: recommendation }));
  }
  const setDifficulty = (difficulty)=>{
    setInputs((values) => ({ ...values, difficulty: difficulty }));
  }
  const setOrganization = (organization)=>{
    setInputs((values) => ({ ...values, organization: organization }));
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  console.log(inputs.quality)
  const handleSubmit = (event) => {
    if (inputs.organization==="" || inputs.difficulty==="" ||inputs.recommendation==""){
      alert("please fill all fields");
      return;
    }
    axios.post("http://localhost:3000/api/courses/"+courseName,inputs)
    .then (response =>  {
      console.log(response)
    })
    .catch (error => {
      console.log(error);
    })
  };
  return (
    <>
    <RedText>Add your Review:</RedText>
    <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Name:</label>
          <Input
            required
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          >
          </Input>
        </InputWrapper>
        <InputWrapper>
          <label>Semester:</label>
          <Input
            required
            type="text"
            name="semester"
            value={inputs.semester}
            onChange={handleChange}
          >
          </Input>
        </InputWrapper>
        <InputWrapper>
          <label>Overall Quality:</label>
          <SelectionBar levels={qualityLevels} setRate={setQuality}></SelectionBar>
        </InputWrapper>
        <InputWrapper>
          <label>Difficulty:</label>
          <SelectionBar levels={difficultyLevels} setRate={setDifficulty}></SelectionBar>
        </InputWrapper>
        <InputWrapper>
          <label>Organization:</label>
          <SelectionBar levels={organizationLevels} setRate={setOrganization}></SelectionBar>
        </InputWrapper>
        <InputWrapper>
          <label>Will you take this course again?</label> 
          <CheckBox  setRecommendation={setRecommendation}></CheckBox>
        </InputWrapper>
        <InputWrapper>
          <label>Professor:</label>
          <Input
            required
            type="text"
            name="professor"
            value={inputs.professor}
            onChange={handleChange}
          >
          </Input>
        </InputWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <label> Your review:</label>
        <TextArea
          required
          type="text"
          name="review"
          value={inputs.review}
          onChange={handleChange}
        />
        <input style={submitButtonStyle} type="submit" />
      </div>
    </Form>
    </>
  );
};
const submitButtonStyle = {
  marginLeft:"40%",
  marginTop:"5%",
  backgroundColor: "rgba(180,49,53,var(--tw-bg-opacity))",
  borderRadius:"10px",
  width:"20%",
  color: "white",
  cursor: "pointer",
}
const Form  = styled.form.attrs({
  className: "font-bold bg-slate-50 p-5 text-2xl rounded-lg",
})`
  margin-top: 5%;
  border: 1px solid black;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 4%;
`;
const InputWrapper = styled.div.attrs({
  className: "",
})`
  margin-right: 30%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input.attrs({
  className: "",
})`
  margin-left: 20%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
`;
const TextArea = styled.textarea.attrs({
})`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 20px;
  resize: none;
`;

export default AddForm;

