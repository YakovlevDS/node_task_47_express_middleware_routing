// // подключение express
// const express = require("express");
// // создаем объект приложения
// const app = express();
// // определяем обработчик для маршрута "/"
// app.get("/", function(req, res){
//     // отправляем ответ
//     res.send("<h2>Привет Express!</h2>");
// });
// // начинаем прослушивать подключения на 3000 порту
// app.listen(3000);




// const express = require("express");
 
// const app = express();
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });
// app.get("/about", function(request, response){
     
//     response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function(request, response){
     
//     response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);



//! Функция, которая передается в app.use(), принимает три параметра:

// request: данные запроса

// response: объект для управления ответом

// next: следующая в конвейере обработки функция

// const express = require("express");
 
// const app = express();
// app.use(function(request, response, next){
     
//     console.log("Middleware 1");
//     next();
// });
// app.use(function(request, response, next){
     
//     console.log("Middleware 2");
//     next();
// });
 
// app.get("/", function(request, response){
     
//     console.log("Route /");
//     response.send("Hello");
// });
// app.listen(3000);


// !мы можем на каком-то этапе остановить обработку:
// const express = require("express");
 
// const app = express();
// app.use(function(request, response, next){
     
//     console.log("Middleware 1");
//     next();
// });
// app.use(function(request, response, next){
     
//     console.log("Middleware 2");
//     response.send("Middleware 2");
// });
 
// app.get("/", function(request, response){
//     console.log("Route /");
//     response.send("Hello");
// });
// app.listen(3000);


//! Функции middleware также могут сопоставляться с определенными маршрутами.
// const express = require("express");
 
// const app = express();
// app.use(function(request, response, next){
     
//     console.log("Middleware 1");
//     next();
// });
// app.use("/about", function(request, response, next){
     
//     console.log("About Middleware");
//     response.send("About Middleware");
// });
 
// app.get("/", function(request, response){
//     console.log("Route /");
//     response.send("Hello");
// });
// app.listen(3000);

//! Middleware помогают выполнять некоторые задачи, которые должны быть сделаны до отправки ответа. Стандартная задача - логгирование запросов.
// Здесь с помощью объекта request получаем различную информацию о запросе и добавляем ее в файл server.log, используя модуль fs.
const express = require("express");
const fs = require("fs");
 
const app = express();
app.use((req, res, next)=>{
     
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n", ()=>{});
    next();
});
 
app.get("/", (req, res)=>{
    res.send("Hello");
});
app.listen(3000);