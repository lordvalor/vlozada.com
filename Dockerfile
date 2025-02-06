FROM alpine:latest
WORKDIR /var/www

RUN npm install @11ty/eleventy

RUN npm run buil