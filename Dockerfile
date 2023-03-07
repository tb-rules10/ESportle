FROM node:17-alpine

WORKDIR /app

RUN npm install -g nodemon

COPY . .

RUN npm install

CMD [ "npm", "start" ]