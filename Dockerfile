FROM node:20-alpine3.19

WORKDIR /finly/homepage2

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]

#docker build --tag nodejs-homepage .
#docker run -p 3000:3000 nodejs-homepage
