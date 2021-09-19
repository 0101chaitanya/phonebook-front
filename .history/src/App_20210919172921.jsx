import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [state, setState] = useState({
    name: "",
    number: "",
  });
  const handleChange = (e) => {
    let inter = state;
    inter[e.target.name] = e.target.value;
    setState(inter);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let exists = persons.some((person) => person.name === state.name);
    console.log(exists);

    setPersons(persons.concat(state));
    setState({
      name: "",
      number: "",
    });
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input required onChange={handleChange} name="name" />
        </div>
        <div>
          number: <input required onChange={handleChange} name="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
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
