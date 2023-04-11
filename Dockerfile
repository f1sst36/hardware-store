FROM node:18.15.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY . .

EXPOSE 3000

RUN npm install

CMD npx prisma generate --schema=./src/database/prisma/schema.prisma && \
    npx prisma migrate dev --schema=./src/database/prisma/schema.prisma && \
    npm run dev
