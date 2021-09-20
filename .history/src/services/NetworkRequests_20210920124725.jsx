import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:3001/persons").then((res) => res.data);
};

const update = (id, newObject) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, newObject)
    .then((res) => res.data);
};

const create = (newObject) => {
  return axios
    .post("http://localhost:3001/persons", newObject)
    .then((res) => res.data);
};

const deleteReq = (id) => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then((res) => res.data);
};

export { getAll, update, create , delete};
