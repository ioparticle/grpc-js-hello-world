// package: helloworld
// file: helloworld/helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as helloworld_helloworld_pb from "../helloworld/helloworld_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayRepeatHello: IGreeterService_ISayRepeatHello;
    sayHelloAfterDelay: IGreeterService_ISayHelloAfterDelay;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<helloworld_helloworld_pb.HelloRequest, helloworld_helloworld_pb.HelloReply> {
    path: string; // "/helloworld.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<helloworld_helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<helloworld_helloworld_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<helloworld_helloworld_pb.HelloReply>;
}
interface IGreeterService_ISayRepeatHello extends grpc.MethodDefinition<helloworld_helloworld_pb.RepeatHelloRequest, helloworld_helloworld_pb.HelloReply> {
    path: string; // "/helloworld.Greeter/SayRepeatHello"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<helloworld_helloworld_pb.RepeatHelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_helloworld_pb.RepeatHelloRequest>;
    responseSerialize: grpc.serialize<helloworld_helloworld_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<helloworld_helloworld_pb.HelloReply>;
}
interface IGreeterService_ISayHelloAfterDelay extends grpc.MethodDefinition<helloworld_helloworld_pb.HelloRequest, helloworld_helloworld_pb.HelloReply> {
    path: string; // "/helloworld.Greeter/SayHelloAfterDelay"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<helloworld_helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<helloworld_helloworld_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<helloworld_helloworld_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<helloworld_helloworld_pb.HelloRequest, helloworld_helloworld_pb.HelloReply>;
    sayRepeatHello: grpc.handleServerStreamingCall<helloworld_helloworld_pb.RepeatHelloRequest, helloworld_helloworld_pb.HelloReply>;
    sayHelloAfterDelay: grpc.handleUnaryCall<helloworld_helloworld_pb.HelloRequest, helloworld_helloworld_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: helloworld_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayRepeatHello(request: helloworld_helloworld_pb.RepeatHelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_helloworld_pb.HelloReply>;
    sayRepeatHello(request: helloworld_helloworld_pb.RepeatHelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_helloworld_pb.HelloReply>;
    sayHelloAfterDelay(request: helloworld_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAfterDelay(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAfterDelay(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: helloworld_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayRepeatHello(request: helloworld_helloworld_pb.RepeatHelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_helloworld_pb.HelloReply>;
    public sayRepeatHello(request: helloworld_helloworld_pb.RepeatHelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_helloworld_pb.HelloReply>;
    public sayHelloAfterDelay(request: helloworld_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAfterDelay(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAfterDelay(request: helloworld_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
