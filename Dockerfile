FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install yarn -g
COPY . /usr/src/app

EXPOSE 3000
CMD [ "yarn", "start" ]