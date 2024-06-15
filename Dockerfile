FROM node:20-alpine

WORKDIR /finly/backend-dash

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]

#docker build --tag nodejs-backend .
#docker run -p 5000:5000 nodejs-backend


