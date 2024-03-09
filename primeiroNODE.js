const http = require('http');
const fs = require("fs")
const hostname = "127.0.0.1";
const port = 3000;

//Criand novo arquivo:
fs.writeFile('teste.json', '{"primeiro"}', (err)=>{
    if(err) throw err;
    console.log("Verificação ok!")
})

/*

//Sobescreve o arquivo

fs.appendFile('teste.txt', "Primeira linha! segunda linha", (err)=>{ 
    if(err) throw err;
    console.log("Salvo com sucesso!")})
*/

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    console.log(req)
    res.setHeader("Content-Type", "text/plain");
   if(req.url == "/jona"){
    fs.readFile('index.html', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end()
        
    })}else(res.end())
})
server.listen(port, hostname, ()=>{
    console.log("Servidor on!")
})
