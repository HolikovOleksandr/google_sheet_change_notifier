from node:22.9.0

workdir /usr/src/app

copy package*.json ./

run npm install

copy . . 

run npm run build

cmd ["npm", "run", "start:dev"]

expose ${PORT}
