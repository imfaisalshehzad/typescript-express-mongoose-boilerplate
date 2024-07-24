ARG NODE_VERSION=18.14.0

FROM node:${NODE_VERSION}-alpine


WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD npm start