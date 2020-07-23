FROM node:12 as builder
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

RUN npm run test
RUN npm run build
RUN cp package.json dist/
RUN cp package-lock.json dist/


FROM node:12-alpine
WORKDIR /app

COPY --from=builder /app/dist .
RUN npm install --production

CMD ["node","--unhandled-rejections=strict", "index.js"]