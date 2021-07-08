FROM node:12 AS fe

WORKDIR /product/fe
COPY ./src/fe/package*.json .
RUN npm install

COPY ./src/fe/public ./public
COPY ./src/fe/src ./src
RUN npm run build

FROM node:12 as be
WORKDIR /product/be
COPY ./src/be/package*.json .
RUN npm install

COPY ./src/be/app.js .
# COPY ./src/be/src .
COPY --from=fe /product/fe/build /product/fe

CMD ["node", "app.js"]
