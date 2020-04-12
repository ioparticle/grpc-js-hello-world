FROM node

WORKDIR /helloworld

COPY ./package.json ./package.json
RUN npm install

COPY ./grpc ./grpc
COPY ./server.js ./server.js

CMD node ./server.js
