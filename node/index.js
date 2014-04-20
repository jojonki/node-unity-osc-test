var osc = require('node-osc');

// settings
var targetIp = '127.0.0.1';
var outPort = 9000;
var inPort = 8888;

// output
var client = new osc.Client(targetIp, outPort);
client.send('/oscAddress', 200);

// input
var oscServer = new osc.Server(8888, '0.0.0.0');
oscServer.on("message", function (msg, rinfo) {
	console.log("TUIO message:");
	console.log(msg);
});
