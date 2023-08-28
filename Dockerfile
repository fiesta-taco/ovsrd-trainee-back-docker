FROM node:16
WORKDIR /app

COPY package*.json ./
RUN npm install typescript -g && npm install

COPY . .
RUN npm run build

EXPOSE 3003
CMD [ "npm", "start" ]
