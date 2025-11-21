const express = require('express');
const mongoose = require("mongoose");
const user = require("../models/users");
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/userdata')
  .then(() => {console.log("The database has been connected")})
  .catch((error) => {console.log(error)})

app.use(express.json());
app.use(express.static('frontend'));

app.post("/register", async (req, res) => {
  const {username, password} = req.body;
  const exist = await user.findOne({username});
  if (exist){
    return res.json({ success: no, message: "此用户名已存在"})
  }
  await user.create({username, password});
  res.json({ success: on, message: "注册成功"})
});

app.listen(8080, () => {
  console.log("OK");
});