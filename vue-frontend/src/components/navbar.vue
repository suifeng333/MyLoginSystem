<template>
    <nav>
        <ul>
            <li><a href="index.html" class="link">首页</a></li>
            <li><a href="login.html" class="link">登录</a></li>
            <li><a href="register.html" class="link">注册</a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    background-color: rgba(20, 26, 40, 1);
    backdrop-filter: blur(6px);
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    z-index: 1000;
    animation: navSlideIn 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(-50px);
}

@keyframes navSlideIn {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}


nav ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #00ffa8;
}
</style>