FROM node:8.11.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

ENV NODE_ENV="production"
ENV DOCKER_USER=$DOCKER_USER
ENV DOCKER_PASSWORD=$DOCKER_PASSWORD
RUN echo $NODE_ENV
RUN echo $DOCKER_USER

EXPOSE 3000
CMD [ "yarn", "start" ]