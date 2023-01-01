FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node mydemo.js
EXPOSE 5000