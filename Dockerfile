FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY .env .env

RUN npm install

COPY src ./src

COPY data ./data

EXPOSE 3000


CMD ["node", "src/index.js"]
