FROM node:12 AS fe

WORKDIR /product/fe
COPY ./src/fe/package*.json .
RUN npm install

COPY ./src/fe/public ./public
COPY ./src/fe/src ./src
RUN npm run build

FROM nginx:1.18.0-alpine

COPY ./containers/fe/container-conf/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf.template

RUN chmod 755 /var/log/nginx
RUN mkdir -p /var/log/product
RUN mkdir -p /var/www/product/public

COPY --from=fe /product/fe/build /var/www/product/public
COPY ./containers/fe/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]