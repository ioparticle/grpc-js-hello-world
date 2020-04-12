"use strict";
exports.__esModule = true;
var helloworld_pb_1 = require("./grpc/client/helloworld/helloworld_pb");
var helloworld_grpc_web_pb_1 = require("./grpc/client/helloworld/helloworld_grpc_web_pb");
var client = new helloworld_grpc_web_pb_1.GreeterClient('http://' + window.location.hostname + ':8080', null, null);
// simple unary call
var request = new helloworld_pb_1.HelloRequest();
request.setName('World ts...');
request.setId('123456');
client.sayHello(request, {}, function (err, response) {
    console.log(response.getMessage());
});
// server streaming call
var streamRequest = new helloworld_pb_1.RepeatHelloRequest();
streamRequest.setName('World');
streamRequest.setCount(5);
var stream = client.sayRepeatHello(streamRequest, {});
stream.on('data', function (response) {
    console.log(response.getMessage());
});
// deadline exceeded
var deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);
client.sayHelloAfterDelay(request, { deadline: deadline.getTime().toString() }, function (err, response) {
    console.log('Got error, code = ' + err.code +
        ', message = ' + err.message);
});
