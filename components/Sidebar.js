import styled from "styled-components";
import SideBarListItem from "./SideBarListItem";
const SideBar = () => {
    const departments=["chemistry","physics", "math"]
    let list=[]
    for (let i=0;i<40;i++){
        list.push(<SideBarListItem department={departments[0]}></SideBarListItem>)
    }
    return (
      <>
      <h1 className=" ml-5 font-bold text-4xl px-3 py-2 text-slate-700 rounded-lg">Departments</h1>
      <SideBarList>
      {list}
      </SideBarList>
      </>
    )
  };
  const SideBarList=styled.div`
    width:230px;
    margin:30px;
    align:center;
    overflow-y: scroll;
    height:580px;
  `
  export default SideBar;