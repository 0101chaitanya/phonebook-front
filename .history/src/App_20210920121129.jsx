import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [state, setState] = useState({
    name: "",
    number: "",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      const data = res.data;
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
      alert(`${state.name} is already added to phonebook`);
      return;
    }
    console.log(exists);

    let newObject = {
      ...state,
    };

    axios.post("http://localhost:3001/persons", newObject).then((res) => {
      console.log(res.data);
      setPersons(persons.concat(res.data));
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
