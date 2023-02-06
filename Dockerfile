FROM node:18.12.1

WORKDIR /app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY . .

RUN npm install

RUN npx prisma generate

RUN npx prisma migrate

EXPOSE 3000

CMD npm run dev