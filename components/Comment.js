import styled from "styled-components";
import Link from "next/link";
import CommentHead from "./CommentHead";
import CommentText from "./CommentText";
const Comment = () => {
    return (
        <div className="relative w-2/4 ">
            <CommentHead></CommentHead>
            <CommentText text="I don't know what has gotten into him to be acting like this. I was in utter shock upon discovering the things that he had done in such a short period of time. We know he suffered from depression around the time my daughter in law was pregnant. She would call me daily to tell me about how he's doing and we tried to get him to seek help but he pushes back and refused. This was not an acceptable way of living because he mistreated his wife and she was on the recieving end of his issues. I hate ultimatums and am not normally the one to get involved in others relationships but...my daughter in law came to me and my husband for help, then we found out that he has been unfaithful and was having an affair recently"></CommentText>
            <div>tail</div>
        </div>
    )
  };
  
  export default Comment;