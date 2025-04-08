const http = require("http");

exports.start = async () => {
    http.createServer(async (req, res) => {
        res.writeHead(200, {
            'Content-Type' : 'text/html;charset=UTF-8',

        });
        await res.write("원호석");
        res.end();
    }).listen(8888);
};