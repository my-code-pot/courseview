import styled from "styled-components";

const SideBarListItem = ({department}) => {
    return (
      <ListItem className="bg-sky-600 hover:bg-sky-700 " >
          {department}
      </ListItem>
    )
  };
  const ListItem = styled.div.attrs({
    className: "bg-gray-200 hover:bg-red-300 ",
  })`
    color:black;
    margin:10px;
    text-align:center;
    width:200px;
    border-color:red;
    border: 1px solid red; 
    border-radius:10px;
    font:Verdana,Tahoma,"DejaVu Sans",sans-serif;
    font-size: 20px;
  `
  export default SideBarListItem;