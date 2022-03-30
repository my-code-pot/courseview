import styled from "styled-components";
import Link from "next/link";
const CommentHead = ({name,term,professor}) => {
    return (
        <div className="flex">
            <img width="40" height="40"  src="/agree icon.jpeg"></img>
            <Main>{name}</Main>
            <Side>{term}</Side>
            <Side>{professor}</Side>
        </div>
    )
  };
  const Main = styled.div.attrs({
    className: "",
  })`
    font-size: 16px;
    font-weight: 700;
    text-decoration: none solid rgb(40, 40, 41);
    color: rgb(40, 40, 41);
    padding:3px;
  `
  const Side = styled.div.attrs({
    className: "",
  })`
    font-size: 12px;
    font-weight: 600;
    line-height: 18.2px;
    text-decoration: none solid rgb(99, 100, 102);
    padding:6px;
    color:#7c7c7c;
  `
  export default CommentHead;