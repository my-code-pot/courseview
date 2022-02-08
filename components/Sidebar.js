import styled from "styled-components";
import SideBarListItem from "./SideBarListItem";
const SideBar = () => {
    const departments=["Chemistry","Physics", "Math","Art History","Arabic", "Art and Art History",
    "Asian Studies","Biology","Black Studies","Chemistry and Biochemistry", "Classics","Cognitive Science",
    "Comparative Literature","Computer Science", "Economics", "Educational Studies", "Engineering",
     "English Literature", "Environmental Studies","Film and Media Studies","Gender and Sexuality Studies",
     "Global Studies","History", "Latino Studies", "Linguistics", "Mathematics and Statistics","Arabic",
     "Chinese", "French","German Studies","Japanese","Russian","Dance","Music","Peace and Conflict Studies",
     "Philosophy","Physical Education","Physics and Astronomy","Political Science","Psychology","Religion",
     "Sociology and Anthropology", "Spanish", "Theater"]
    let list=[]
    for (let i=0;i<departments.length;i++){
        list.push(<SideBarListItem department={departments[i]}></SideBarListItem>)
    }
    return (
      <div className="float-left">
      <h1 className=" ml-8 font-bold text-4xl px-3 py-2 text-slate-700 rounded-lg">Departments</h1>
      <SideBarList>
      {list}
      </SideBarList>
      </div>
    )
  };
  const SideBarList=styled.div`
    width:290px;
    margin:30px;
    align:center;
    overflow-y: scroll;
    height:580px;
  `
  export default SideBar;