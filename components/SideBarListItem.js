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
    className: "bg-gray-200 hover:bg-red-300 font-bold text-2xl text-slate-700 rounded-lg",
  })`
    --tw-bg-opacity: 1;
    background-color: rgba(180,49,53,var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgba(255,255,255,var(--tw-text-opacity));
    margin:10px;
    text-align:center;
    width:250px;
    border-radius:20px;
    padding:3px;
  `
  export default SideBarListItem;