const express = require("express");
const router = express.Router();
const Item = require("../models/items");

let array = [];

// @route   GET item/test
// @desc    Tests route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    message: "test success"
  });
});

// @route   GET item/all
// @desc    Get all items
// @access  Public

router.get("/all", (req, res) => {
  const errors = {};
  Item.find()
    .then(items => {
      if (!items) {
        errors.noItems = "There are no items";
        res.status(404).json(errors);
      }
      res.json(items);
    })
    .catch(err => res.status(404).json({ noItems: "There are no items" }));
});

// @route   POST item/createItem
// @desc    Create an item
// @access  Public
router.post("/createItem", (req, res) => {

  const newItem = new Item ({
    username: req.body.username,
    content: req.body.content
  });

  newItem.save()
        .then(() => res.status(200).send("Item Added"))
        .catch(err => res.status(404).json({noItems: "No Items Exist"}));

});

// @route   PUT item/updateItem
// @desc    Update first item
// @access  Public
router.put("/updateItem", (req, res) => {

  const newItem = {
    username: req.body.username,
    content: req.body.content
  };

  array[0] = newItem;

  res.send("First item updated");

});

// @route   DELETE item/deleteItem
// @desc    Delete first item
// @access  Public
router.delete("/deleteItem", (req, res) => {

  Item.deleteOne({'username': req.body.username})
        .then(() => res.status(200).send("Item Deleted"))
        .catch(err => res.status(404).json({noItems: "No Items Exist"}));
});

module.exports = router;