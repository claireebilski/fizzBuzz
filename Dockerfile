FROM node:12
# Current working directory 
WORKDIR /usr/src/server
# Copy everything to the working directory (source|destination)
COPY . .
# (run) initiate - npm install 
# helps build image 
# chain by inserting && \
RUN npm install
# Expose is metadata for devs 
EXPOSE 3000
# Commands to run 
CMD [ "npm", "start" ]