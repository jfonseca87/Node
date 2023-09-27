const http = require('http');

http.createServer( (req, res) => {
    
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv")
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.write("id, nombre\n");
    res.write("1, jorge\n");
    res.write("2, luis\n");
    res.write("3, pepito\n");
    res.write("4, pepita\n");
    res.end();

}).listen(3000);

console.log("Escuchando en el puerto 3000");