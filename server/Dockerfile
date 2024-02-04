FROM node:14
# create a workdir
WORKDIR /app 
# copy package.json to the workdir
COPY package.json .  
# install all dependencies
RUN npm install 
# copy all files to the workdir
COPY . .
# expose port 3000
EXPOSE 5000
# start the server
CMD ["npm", "start"]
