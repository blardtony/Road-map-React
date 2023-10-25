
type ItemProps = {
  name: string;
  isComplete: boolean;
}
const Item = ({name, isComplete}: ItemProps) => {
  return (
    <div>
      <li>
        {isComplete ? name + ' ✔' : name}
      </li>
    </div>
  );
}

export default Item;