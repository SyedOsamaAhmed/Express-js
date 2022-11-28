const express = require("express");
const router = express.Router();

const {
  getPeople,
  postPeople,
  updatePeople,
  deletePeople,
} = require("../controllers/people");



// router.get("/", getPeople);
// router.post("/", postPeople);
// router.put("/:id", updatePeople);
// router.delete("/:id", deletePeople);

router.route('/').get(getPeople).post(postPeople);
router.route('/:id').put(updatePeople).delete(deletePeople)

module.exports = router;
