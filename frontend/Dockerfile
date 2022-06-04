FROM node:14.17

WORKDIR /var/www/public

COPY . .

RUN npm install && \
	npm run build

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "npm", "run", "start" ]
