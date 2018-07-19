FROM node:8.11.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

ENV NODE_ENV="production"
EXPOSE 3000
CMD [ "yarn", "start" ]