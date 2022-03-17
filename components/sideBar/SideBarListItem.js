import styled from "styled-components";
import Link from "next/link";
const SideBarListItem = ({department}) => {
    const link='/'+department
    return (
      <Link href={link}>
        <ListItem className="bg-sky-600 hover:bg-sky-700 " >
            {department}
        </ListItem>
      </Link>
    )
  };
  const ListItem = styled.div.attrs({
    className: " hover:bg-red-300 font-bold text-2xl rounded-lg",
  })`

    background-color: rgba(180,49,53,var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgba(255,255,255,var(--tw-text-opacity));
    margin-top:10px;
    text-align:center;
    width:250px;
    border-radius:20px;
    padding:3px;
    cursor: pointer
  `
  export default SideBarListItem;