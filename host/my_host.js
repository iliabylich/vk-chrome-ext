#!/Users/ilya/.nvm/versions/node/v6.10.1/bin/node

// Might be good to use an explicit path to node on the shebang line in case
// it isn't in PATH when launched by Chrome.

var fs = require('fs');

var nativeMessage = require('../index');

var input = new nativeMessage.Input();
var transform = new nativeMessage.Transform(messageHandler);
var output = new nativeMessage.Output();

process.stdin
    .pipe(input)
    .pipe(transform)
    .pipe(output)
    .pipe(process.stdout)
;

setInterval(function() {
    output.write({ command: 'get_current_song' });
}, 500);

var song = '';

function messageHandler(message, push, done) {
    if (message.song) {
        song = message.song;
    }
    // push({got: message});
    done();
}

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var command = req.url.slice(1);
    output.write({ command: command });

    if (command === 'get_current_song' ) {
        res.end(song);
    } else {
        res.end('Done');
    }
}).listen(9615);
