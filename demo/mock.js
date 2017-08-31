var http = require('http');
var json = require("./mock.data.json");

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-type": 'application/json'});
    res.end(JSON.stringify(json));
});
server.listen(8124, '127.0.0.1', function () {
    console.log('服务器创建成成功:http://127.0.0.1:8124');
});