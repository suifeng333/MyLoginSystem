<template>
    <div class="bigbox">
        <h2>登录</h2>
        <div class="input_box">
            <label>用户名</label>
            <input type="text" id="login_username" placeholder="请输入用户名">
        </div>
        <div class="input_box">
            <label>密码</label>
            <input type="password" id="login_password" placeholder="请输入密码">
        </div>
        <button onclick="login()" id="login_button">登录</button>
    </div>
</template>

<style scoped>
.bigbox {
    width: 380px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    opacity: 0;
    animation: bigboxFadeIn 0.9s ease-out forwards;
}

@keyframes bigboxFadeIn {
    0% {
        opacity: 0;
        transform: translateY(40px) scale(0.97);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}


.bigbox h2 {
    color: #00ffa8;
    font-size: 32px;
    font-weight: bold;
    opacity: 0;
    animation: fadeUp 0.7s ease-out forwards;
    animation-delay: 0.1s;
}

.input_box {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.input_box label {
    color: white;
    margin-bottom: 6px;
    font-size: 17px;
    font-weight: bold;
    opacity: 0;
    animation: fadeUp 0.7s ease-out forwards;
    animation-delay: 0.25s;
}

.input_box input {
    box-sizing: border-box;
    height: 45px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.05);
    color: white;
    padding: 10px 12px;
    font-size: 20px;
    transition: border 0.3s ease;
}

.input_box input:focus {
    outline: none;
    border: 1px solid #00ffa8;
    box-shadow: 0 0 10px #00ffa8;
}

#login_button {
    width: 120px;
    height: 40px;
    margin-top: 20px;
    background: #00ffa8;
    color: black;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    opacity: 0;
    animation: fadeUp 0.7s ease-out forwards;
    animation-delay: 0.55s;
    transition: background 0.25s ease, box-shadow 0.25s ease;
}

#login_button:hover {
    background: #00ffcc;
    box-shadow: 0 4px 12px rgba(0,255,200,0.4);
}

@keyframes fadeUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

<script setup>
function login() {
  const username = document.getElementById("login_username").value;
  const password = document.getElementById("login_password").value;

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  });
}
</script>