FROM node:16.13.1-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

#EXPOSE 3000
#
#CMD ['npm', 'run server']
