import SideBarListItem from "./SideBarListItem";
const SideBar = () => {
    const departments=["chemistry","physics", "math"]
    let list=[]
    for (let department of departments){
        list.push(<SideBarListItem department={department}></SideBarListItem>)
    }
    return (
      <div>
      {list}
      </div>
    )
  };
  
  export default SideBar;