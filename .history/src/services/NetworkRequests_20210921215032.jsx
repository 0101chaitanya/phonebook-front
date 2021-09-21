import axios from "axios";

const url = "/api/persons";
//"http://localhost:3001/api/persons"
const getAll = (setNotification) => {
  return axios.get(url).then((res) => {
    console.log("body", res);

    return res.data;
  });
};

const update = (id, newObject, setNotification) => {
  return axios
    .put(`${url}/${id}`, newObject)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response.status === 400) {
        setNotification({
          text: err.response.data.error, //JSON.stringify(err.response.data),
          className: "red",
        });

        setTimeout(
          () =>
            setNotification({
              text: "",
              className: "",
            }),
          5000
        );
      }

      console.info(err.response);
    });
};

const create = (newObject, setNotification) => {
  return axios
    .post(url, newObject)
    .then((res) => {
      console.log(res);

      return res.data;
    })
    .catch((err) => {
      if (err.response.status === 400) {
        setNotification({
          text: err.response.data.error, //JSON.stringify(err.response.data),
          className: "red",
        });

        setTimeout(
          () =>
            setNotification({
              text: "",
              className: "",
            }),
          5000
        );
      }

      console.info(err.response);
    });
};

const deleteReq = (id, setNotification) => {
  return axios.delete(`${url}/${id}`).then((res) => {
    return res.data;
  });
};

export { getAll, update, create, deleteReq };
