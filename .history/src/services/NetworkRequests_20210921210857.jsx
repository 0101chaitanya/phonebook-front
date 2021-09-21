import axios from "axios";

const url = "/api/persons";
//"http://localhost:3001/api/persons"
const getAll = () => {
  return axios.get(url).then((res) => {
    return res.data;
  });
};

const update = (id, newObject) => {
  return axios.put(`${url}/${id}`, newObject).then((res) => {
    return res.data;
  });
};

const create = (newObject) => {
  return axios.post(url, newObject).then((res) => {
    return res.data;
  });
};

const deleteReq = (id) => {
  return axios.delete(`${url}/${id}`).then((res) => res.data);
};

export { getAll, update, create, deleteReq };
