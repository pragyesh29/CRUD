// Axios allows to make request
const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a GET request to /api/users to get all the data from the database.
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  // get the old data from the database
  axios
    .get("http://localhost:3000/api/users/", { params: { id: req.query.id } })
    .then((response) => {
      res.render("update_user", { user: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
  // res.render("update_user");
};
