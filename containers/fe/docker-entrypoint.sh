#!/bin/ash
envsubst < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/nginx.conf
nginx -g 'daemon off;'
