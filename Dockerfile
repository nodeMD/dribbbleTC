FROM testcafe/testcafe:1.10.1

RUN testcafe -b

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
USER root

# Create app directory
WORKDIR /home/tests

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
EXPOSE 1337 1338

ENTRYPOINT ["npm", "test"]

CMD [""]
