import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-12345" },
  ]);
  const [state, setState] = useState({
    name: "",
    number: "",
  });
  const [search, handleSearch] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let exists = persons.some((person) => person.name === state.name);

    if (exists) {
      alert(`${state.name} is already added to phonebook`);
      return;
    }
    console.log(exists);

    setPersons(persons.concat(state));
    setState({
      name: "",
      number: "",
    });
    console.log(state);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <input required value={state.name} onChange={handleChange} name="name" />
      <form onSubmit={handleSubmit}>
        <h2>Add a new</h2>
        <div>
          name: <input value={search} onChange={handleSearch} name="name" />
        </div>
        <div>
          number:{" "}
          <input
            required
            value={state.number}
            onChange={handleChange}
            name="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      <div>
        {persons.map((person) => {
          return (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;