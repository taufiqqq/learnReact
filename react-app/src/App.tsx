import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Johor Bahru", "Mersing", "Paris", "Singapore"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Alert>Hello <br></br>World</Alert>
    </div>
  );
}

export default App;
