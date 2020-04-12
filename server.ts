/**
 *
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var _ = require('lodash');
var grpc = require('grpc');
var async = require('async');
import * as services from './grpc/server/helloworld/helloworld_grpc_pb';
import * as messages from './grpc/server/helloworld/helloworld_pb';

function makeHelloReply(message) {
  var reply = new messages.HelloReply();
  reply.setMessage(message);

  return reply;
}
/**
 * @param {!Object} call
 * @param {function():?} callback
 */
function doSayHello(call, callback) {
  var reply = makeHelloReply('Hello ' + call.request.getName() + ' ID: '  + call.request.getId());
  callback(null, reply);
}

/**
 * @param {!Object} call
 */
function doSayRepeatHello(call) {
  var senders = [];
  function sender(name) {
    var reply = makeHelloReply('Hey! ' + name);
    return (callback) => {
      call.write(reply);
      _.delay(callback, 500); // in ms
    };
  }
  for (var i = 0; i < call.request.getCount(); i++) {
    senders[i] = sender(call.request.getName() + i);
  }
  async.series(senders, () => {
    call.end();
  });
}

/**
 * @param {!Object} call
 * @param {function():?} callback
 */
function doSayHelloAfterDelay(call, callback) {
  var reply = makeHelloReply('Hello ' + call.request.getName());
  function dummy() {
    return (cb) => {
      _.delay(cb, 5000);
    };
  }
  async.series([dummy()], () => {
    callback(null, reply);
  });
}

/**
 * @return {!Object} gRPC server
 */
function getServer() {
  var server = new grpc.Server();
  server.addService(services.GreeterService, {
    sayHello: doSayHello,
    sayRepeatHello: doSayRepeatHello,
    sayHelloAfterDelay: doSayHelloAfterDelay
  });
  return server;
}

if (require.main === module) {
  var server = getServer();
  server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
  server.start();
}

exports.getServer = getServer;
