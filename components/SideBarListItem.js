import styled from "styled-components";

const SideBarListItem = ({department}) => {
    return (
      <ListItem className="bg-sky-600 hover:bg-sky-700 " >
          {department}
      </ListItem>
    )
  };
  const ListItem = styled.div.attrs({
    className: "bg-gray-200 hover:bg-red-300 font-bold text-2xl text-slate-700 rounded-lg",
  })`
    margin:10px;
    text-align:center;
    width:250px;
    border-color:red;
    border: 1px solid red; 
    border-radius:20px;
    padding:3px;
  `
  export default SideBarListItem;