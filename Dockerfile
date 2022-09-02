FROM node:16
RUN npm install -g npm
WORKDIR /usr/src/clean-ts-api
COPY ./package.json .
RUN npm install --omit=dev
COPY ./dist ./dist
EXPOSE 5000
CMD npm start