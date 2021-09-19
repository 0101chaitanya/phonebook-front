import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [state, setState] = useState({
    name: "",
    number: "",
  });
  const [search, setSearch] = useState("");
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
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search</h3>
      <div>
        name: <input value={search} onChange={handleSearch} name="name" />
      </div>
      <p>
        {persons.some(
          (person) => person.name.toLowercase() === search.toLowercase()
        )
          ? (() => {
              let person = persons.find(
                (person) => person.name.toLowercase() === search.toLowercase()
              );
              return (
                <span>
                  {person.name} {person.number}
                </span>
              );
            })()
          : false}
      </p>
      <form onSubmit={handleSubmit}>
        <h2>Add a new</h2>
        <div>
          <input
            required
            value={state.name}
            onChange={handleChange}
            name="name"
          />
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
