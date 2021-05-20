var Userdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty" });
  } else {
    // new user
    const user = new Userdb({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
    });
    // save user in the database
    user
      .save(user)
      .then((data) => res.redirect("/add-user"))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occoured while creating a create operation",
        });
      });
  }
};

// retreive and return all users/ retrieve and return single user
exports.find = (req, res) => {
  // To retrieve single user with specified id.
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data)
          res.status(404).send({
            message: `Invalid, no user found with id ${id}`,
          });
        else res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occoured while retrieving the User",
        });
      });
  } else {
    // To retrieve all the users.
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.staus(500).send({
          message:
            err.message || "Error Occoured while retrieving user information.",
        });
      });
  }
};

// update a new identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(500).send({ message: "Data to update cannot be empty" });
  } else {
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data)
          res.send(404).send({
            message: `Cannot obtain user with ${id}. Maybe User not found`,
          });
        else res.send(data);
      })
      .catch((err) => {
        res.satus(500).send({ message: "Error Update User Information" });
      });
  }
};

// Delete a user with specified user id
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: `Cannot delete with ${id}. Maybe id is wrong` });
      else res.send({ message: "User was deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: `Could not delete User with id ${id}` });
    });
};
