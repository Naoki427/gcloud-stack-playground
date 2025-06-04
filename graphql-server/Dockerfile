FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install
    # && npm install @nestjs/graphql @nestjs/apollo apollo-server-express graphql @prisma/client @nestjs/config \
    # && npm install -D prisma typescript ts-node @nestjs/cli

COPY prisma ./prisma
RUN npx prisma generate

COPY src ./src
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY .env ./

RUN npm run build

CMD ["npm", "run", "start:prod"]