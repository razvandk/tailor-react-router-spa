FROM node:alpine

RUN apk add --no-cache curl

COPY package.json .
RUN npm install
COPY . .

#RUN npm run build

CMD ["node", "tailor.js"]