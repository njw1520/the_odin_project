function Food() {
  const name = "Nate";
  return (
    <>
      <h1>{name}</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" placeholder="Insert Text Here" />
      </form>
    </>
  );
}

export default Food;
