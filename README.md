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

Potensielle features
--------------------

- Sync antall valgalternativer på nåværende spørsmål mellom admin-side og svar-side
- Vis nåværende spørsmål på svar-siden
- Vis hva du har stemt på
- Muliggjør flere spørsmålssett — nå er spørsmål inlinet på admin-siden
- Lagre svar i database, slik at rapporter kan hentes ut
- Gjør det superenkelt å lage et nytt mentometer
- Gjør det superenkelt å deploye en annen plass
- Tilgangskontroll på admin-side?
- Kjøre på bekk.no-domene med CAS-sjekk for innlogging?

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

