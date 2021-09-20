import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:3001/persons").then((res) => res.data);
};

const update = (id, newObject) => {
  axios
    .put(`http://localhost:3001/persons/${person.id}`, newObject)
    .then((res) => res.data);
};

export { getAll, update };
