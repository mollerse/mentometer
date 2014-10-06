FROM ubuntu:latest

RUN apt-get update
RUN apt-get -y install nodejs-legacy npm

RUN npm install grunt-cli -g
RUN npm install pm2 -g --unsafe-perm

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app

ADD . /opt/app

RUN grunt

EXPOSE 9999

ENTRYPOINT ["pm2", "start", "app.js", "--no-daemon"]
