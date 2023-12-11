import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>MY</span> World
      </Alert>
    </div>
  );

  // let items = ["New York", "Tokyo", "ShangHai"];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities 1"
  //       onSelectedItem={handleSelectedItem}
  //     />
  //   </div>
  // );
}

export default App;
