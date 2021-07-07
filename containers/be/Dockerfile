FROM node:12 as be

WORKDIR /product/be
COPY ./src/be/package*.json .
RUN npm install

COPY ./src/be/app.js .
# COPY ./src/be/src .

CMD ["node", "app.js"]
