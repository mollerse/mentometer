Mentometer
==========

Utvikling
---------

Clon repoet, kjør:

```
$ npm install
```

Start app-en med:

```
$ node app.js
```

Åpne http://localhost:9999 og http://localhost:9999/admin

Teknisk forklaring
------------------

Backend:

- [Node.js](http://nodejs.org/)
- [express.js](http://expressjs.com/)
- [SockJS](https://github.com/sockjs)
- [Grunt](http://gruntjs.com/)
- [pm2](https://github.com/Unitech/pm2)

Frontend:

- [D3.js](http://d3js.org/)
- [SockJS](https://github.com/sockjs)
- [dispatch.js](https://github.com/olav/dispatch.js)
- [promiscuous](https://github.com/RubenVerborgh/promiscuous)

Hosting
-------

App-en hostes på Linode. Ta kontakt med Kim Joar, kim.bekkelund@bekk.no,
dersom du ønsker å bruke mentometer-app-en.

### Endre spørsmål på Linode

```
$ sudo su - root

$ cd /srv/www/mentometer

$ vim public/admin/dashboard.js
```

Gjør endringer her, pass på at det er gyldig JSON (for eksempel
dobbelfnutter på keys)

```
$ grunt
```

Dette tar fort litt tid, gjerne 1-2 minutter

```
$ pm2 restart app
```

