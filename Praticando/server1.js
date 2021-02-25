const http = require("http");
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Contente-Type','text/plain');
    res.end('Olá Mundo \n Meu 1° Script')

})
server.listen(port,host,()=>{
    console.log(`Servidor esta rodando http://${host}:${port}`)
})
    