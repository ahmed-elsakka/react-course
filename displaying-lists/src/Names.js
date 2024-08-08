function Names() {
  const names = ["Name1", "Name2", "Name3"];

  return (
    <ul>
      {names.map(name => {
        return <li>{name}</li>;
      })}
    </ul>
  );
}

export default Names;
