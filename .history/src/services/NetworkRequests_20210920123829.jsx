import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:3001/persons").then((res) => res.data);
};

const update = (id, newObject) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, newObject)
    .then((res) => res.data);
};

export { getAll, update };
