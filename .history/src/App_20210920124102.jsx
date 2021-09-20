import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import { getAll, update, create } from "./services/NetworkRequests";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [state, setState] = useState({
    name: "",
    number: "",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAll().then((data) => {
      console.log(data);
      setPersons(data);
    });
  }, []);

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
      if (
        window.confirm(
          `${state.name} is already exists in phonebook ,replace old number with new number ?`
        )
      ) {
        let person = persons.find((person) => person.name === state.name);

        let newObject = {
          ...state,
        };

        update(person.id, newObject).then((data) => {
          setPersons(
            persons.map((person) =>
              person.name === state.name ? data : person
            )
          );
          setState({
            name: "",
            number: "",
          });
        });
      }
      return;
    }
    console.log(exists);

    let newObject = {
      ...state,
    };

    create(newObject).then((data) => {
      console.log(data);
      setPersons(persons.concat(data));
      setState({
        name: "",
        number: "",
      });
      console.log(state);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/persons/${id}`).then((res) => {
      const personList = persons.filter((persons) => persons.id !== id);
      setPersons(personList);
    });
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <Search search={search} handleSearch={handleSearch} persons={persons} />
      <h2>Add a new</h2>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        state={state}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

/* { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  */
