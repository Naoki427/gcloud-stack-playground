FROM node:20

WORKDIR /app

COPY src/package.json src/package-lock.json ./
RUN npm install

COPY src/ .

EXPOSE 3000

CMD ["npm", "run", "dev"]
