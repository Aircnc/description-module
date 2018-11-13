FROM node:10.9.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install
RUN yarn global add nodemon

EXPOSE 3002

CMD ["npm", "run", "start"]