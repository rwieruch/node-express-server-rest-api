#Fetch Base Image
FROM node:16.20.0

#Working Directory
WORKDIR /

#Copy Node.js Package in working Directory
COPY . ./

# Install Node.js Package
RUN npm install
CMD npm start

#Expose Port
EXPOSE 3000
