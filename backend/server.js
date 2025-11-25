const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors"); 
const user = require("../models/users");
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/userdata')
  .then(() => {console.log("The database has been connected")})
  .catch((error) => {console.log(error)})

app.use(cors());
app.use(express.json());
app.use(express.static('frontend/html', {
  extensions: ['html']
}));

app.post("/register", async (req, res) => {
  const {username, password} = req.body;
  const exist = await user.findOne({username});
  if (exist){
    return res.json({ success: false, message: "此用户名已存在" })
  }
  await user.create({username, password});
  res.json({ success: true, message: "注册成功" });
});

app.post("/login", async (req, res) => {
  const {username, password} = req.body;
  const exist = await user.findOne({username});
  if (!exist){
    return res.json({ success: false, message: "用户名不存在"})
  }
  if (exist.password != password){
    return res.json({ success: false, message: "密码错误" })
  }
  res.json({ success: true, message: "登录成功" });
});

app.listen(8080, () => {
  console.log("OK");
});