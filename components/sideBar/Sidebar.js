import styled from "styled-components";
import { Header } from "../../styles/header.style";
import SideBarListItem from "./SideBarListItem";
const SideBar = ({departments}) => {
    let list=[]
    for (let i=0;i<departments.length;i++){
        list.push(<SideBarListItem department={departments[i]}></SideBarListItem>)
    }
    return (
      <div className="ml-10 mt-6">
        <Header className="ml-2 text-4xl mb-7">Departments</Header>
        {list}
      </div>
    )
  };
  export default SideBar;
