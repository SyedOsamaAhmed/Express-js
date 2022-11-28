const { people } = require("../data");

const getPeople = (req, res) => {
  res.json({
    success: true,
    data: people,
  });
};

const postPeople = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Could not find data by that name",
    });
  }

  res.status(201).json({
    sucess: true,
    data: [...people, name],
  });
};

const updatePeople = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person with id:${person.id}`,
    });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) person.name = name;

    return person;
  });

  res.status(200).json({
    success: true,
    data: newPeople,
  });
};

const deletePeople = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person with id:${req.params.id}`,
    });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({
    success: true,
    data: newPeople,
  });
};

module.exports = {
  getPeople,
  postPeople,
  updatePeople,
  deletePeople,
};
