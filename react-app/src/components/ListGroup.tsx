import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // default value is -1, -1 is no selection
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updated function

  const getEmptyListMessage = () => {
    return items.length === 0 && <p>No item found.</p>;
  };

  // Event handler
  const handleClick = (event: MouseEvent, item: string, index: number) => {
    console.log(item, index, event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {getEmptyListMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            // onClick={(e) => handleClick(e, item, index)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
