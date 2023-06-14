FROM node:20-alpine3.16

WORKDIR /app

RUN apt-get update

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]