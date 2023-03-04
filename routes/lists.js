const List = require("../models/Lists");
const router = require("express").Router();


router.get('/', async (req, res) => {
    try {
      const lists = await List.find();
      res.status(200).json(lists);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


// Create
router.post("/", async (req,res) => {
    const newList = new List({list: req.body.listTextBoxValue, task: req.body.taskTextBoxValue});

    try {
        const savedList = await newList.save();
        res.status(200).json(savedList);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;