import { HelloRequest, RepeatHelloRequest, HelloReply } from './grpc/client/helloworld/helloworld_pb';
import { GreeterClient } from './grpc/client/helloworld/helloworld_grpc_web_pb';

var client = new GreeterClient('http://' + window.location.hostname + ':8080', null, null);

// simple unary call
var request = new HelloRequest();
request.setName('World ts...');
request.setId('123456');

client.sayHello(request, {}, (err, response) => {
  console.log(response.getMessage());
});


// server streaming call
var streamRequest = new RepeatHelloRequest();
streamRequest.setName('World');
streamRequest.setCount(5);

var stream = client.sayRepeatHello(streamRequest, {});
stream.on('data', (response) => {
  console.log(response.getMessage());
});
  

// deadline exceeded
var deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);

client.sayHelloAfterDelay(request, {deadline: deadline.getTime().toString()},
  (err, response) => {
    console.log('Got error, code = ' + err.code +
                ', message = ' + err.message);
  });
