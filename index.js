const express = require("express")
const app = express()
const http = require("http").createServer(app)
var io = require("socket.io")(http)

io.on("connection", (socket) => {
    socket.on("boasvindas", (data) => {
        console.log("EXECUTANDO EVENTO DE BOAS VINDAS")
        console.log(data)
    })

    socket.on("palavra", (data) => {
        console.log(data)
        socket.emit("resultado", data + " - GUIA DO PROGRAMADOR!")
    })
})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("APP RODANDO!")
})