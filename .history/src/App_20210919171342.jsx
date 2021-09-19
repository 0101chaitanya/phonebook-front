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
  const handleSubmit = () => {
    setPersons(persons.concat(state));
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} name="name" />
        </div>
        <div>
          number: <input onChange={handleChange} name="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        {persons.map((person) => {
          <p>
            {person.name} {person.number}
          </p>;
        })}
      </div>
    </div>
  );
};

export default App;
