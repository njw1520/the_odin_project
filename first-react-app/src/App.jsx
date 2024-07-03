import "./App.css";

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Shark", "Bird", "Zebra"];

  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
    </>
  );
}

export default App;
