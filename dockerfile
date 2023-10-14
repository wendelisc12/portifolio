FROM node:latest

ENV PORT=3000

WORKDIR /var/www
COPY . /var/www/

RUN npm install
RUN npm run build

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]
