FROM node:16
WORKDIR /usr/src/clean-ts-api
COPY ./package.json .
RUN chmod +x ./package.json
RUN npm install --omit=dev
