import Item from "./Item.tsx";

const List = () => {
  return (
    <div>
      <h1>List</h1>
      <ul>
        <Item name={"Item 1"} isComplete={false}  />
        <Item name={"Item 2"} isComplete={false}  />
        <Item name={"Item 3"} isComplete={true}  />
      </ul>
    </div>
  )
}

export default List;