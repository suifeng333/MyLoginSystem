const express = require("express")
const app = express()

users = []

app.use(express.json())

app.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.json({ ok: false, msg: "用户名或密码不能为空" });
  }

  const exist = users.find(u => u.username === username);
  if (exist) {
    return res.json({ ok: false, msg: "用户名已存在" });
  }

  users.push({ username, password });
  res.json({ ok: true, msg: "注册成功" });
});

app.post('/', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.json({ ok: false, msg: "用户名或密码不能为空" });
    }

    const check = users.find(u => u.username === username && u.password === password);
    if(check){
      res.json({ok:true,msg:"Login Success"})
    }else{
      res.json({ok:false,msg:"Login Failed"})
    }
})