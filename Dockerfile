FROM node:12.16.0

# Set proper deploy environment
ENV NODE_ENV=production
ENV ENDPOINT=url-to-the-backend

WORKDIR /angular-docker-env

COPY . /angular-docker-env

RUN npm install

RUN npm run build

CMD [ "yarn", "start" ]
