#FROM node:16
FROM 905418051827.dkr.ecr.eu-central-1.amazonaws.com/yakov-docker-repo-dev:16
WORKDIR /app

COPY package*.json ./
RUN npm install typescript -g && npm install

COPY . .
RUN npm run build

EXPOSE 3003
CMD [ "npm", "start" ]
