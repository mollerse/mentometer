FROM ubuntu:latest

RUN apt-get update
RUN apt-get -y install nodejs-legacy npm

RUN npm install gulp -g
RUN npm install pm2 -g --unsafe-perm

EXPOSE 9999
VOLUME /opt/app/questions

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app

ADD . /opt/app

RUN gulp

ENTRYPOINT ["pm2", "start", "app.js", "--no-daemon"]
