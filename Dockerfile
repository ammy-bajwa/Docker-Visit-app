# Specifying base image
FROM node:alpine

#Setting working directory
WORKDIR /usr/app

#coping package.json file to workdir
COPY  ./package.json .

#Installing dependencies
RUN npm install

#Copying everything to workdir
COPY . .

#Start the server
CMD [ "npm","start" ]