function server(req, res) {
    console.log(req.url);
    res.end('Hallo client');
}
function server2(req, res) {
    console.log(req.url);
    res.end('Hallo client');
}

module.exports = { server, server2 };