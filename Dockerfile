FROM node:14-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "ts-node", "api.ts"]
