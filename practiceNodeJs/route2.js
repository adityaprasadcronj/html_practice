var http = require('http');


http.createServer(function (req, res) {

   
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    switch (url) {
        case "/login":
            res.write(' Welcome to the login page :)');
            res.end();
            break;

        case "/homepage":
            res.write(' Now you are in the homepage :)');
            res.end();
            break;

        case "/form":
            res.write('Please fillup the form data..');
            res.end();
            break;

        default:
            res.write('Hello user :)');
            res.end();
    }

}).listen(3000, function () {
    console.log("server start at port 3000");
});
