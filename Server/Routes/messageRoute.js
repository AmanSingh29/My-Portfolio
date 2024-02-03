const express = require("express");
const routes = express.Router();
const Msg = require("../Models/messageModel");

routes.post("/send-message", async (req, res) => {
  const { fullName, email, message } = req.body;
  if (!fullName || !email || !message)
    return res.status(400).json({ error: "All Fields Are Mandatory !" });
  const newMsg = await new Msg({ fullName, email, message }).save();
  return res
    .status(202)
    .json({ msg: "Message sent successfully", data: newMsg });
});

routes.get("/get-message", async (req, res) => {
  const allMessages = await Msg.find();
  return res.status(200).json({ data: allMessages });
});

module.exports = routes;
