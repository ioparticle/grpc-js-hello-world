#!/usr/bin/env bash
PROTO_IMPORT_DIR="./proto"
GEN_OUT_SERVER_DIR="./grpc/server"
GEN_OUT_WEB_DIR="./grpc/client"

# Remove grpc and built it again
if [ -d "$GEN_OUT_DIR" ]; then
  rm -R grpc
fi

# Create the generated output dir if it doesn't exist
if [ ! -d "$GEN_OUT_SERVER_DIR" ]; then
  mkdir -p ${GEN_OUT_SERVER_DIR}
fi
if [ ! -d "$GEN_OUT_WEB_DIR" ]; then
  mkdir -p ${GEN_OUT_WEB_DIR}
fi

# FILE_PATHS='./grpc/*.proto ./grpc/**/*.proto ./grpc/**/**/*.proto'
FILE_PATHS='./proto/**/*.proto'

# Generate Server JavaScript
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${GEN_OUT_SERVER_DIR} \
  --grpc_out=${GEN_OUT_SERVER_DIR} \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  -I ${PROTO_IMPORT_DIR} \
  ${FILE_PATHS}

# Generate Server TypeScript definitions
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=${GEN_OUT_SERVER_DIR} \
  -I ${PROTO_IMPORT_DIR} \
  ${FILE_PATHS}

# Generate Web JavaScript + TypeScript definitions
protoc \
  --js_out=import_style=commonjs,binary:${GEN_OUT_WEB_DIR} \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${GEN_OUT_WEB_DIR} \
  -I ${PROTO_IMPORT_DIR} \
  ${FILE_PATHS}
