FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm ci --only=production

COPY . /usr/src/app

EXPOSE 5000
CMD [ "npm", "start" ]
