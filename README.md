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
- Justere hvor ofte grafen tegnes, slik at det ser smooth ut
- Lagre svar i database, slik at rapporter kan hentes ut
- Gjør det superenkelt å lage et nytt mentometer
- Gjør det superenkelt å deploye en annen plass
- Tilgangskontroll på admin-side?
- Kjøre på bekk.no-domene med CAS-sjekk for innlogging?

Hosting
-------

Deployes med Docker på DigitalOcean. Push master til Github, sjekk status på
[Docker Hub](https://registry.hub.docker.com/u/kjbekkelund/mentometer).

Når ferdig, logg inn og kjør:

```
$ docker pull kjbekkelund/mentometer
$ docker run -p 80:9999 -v /data/questions:/opt/app/questions -d --name mentometer kjbekkelund/mentometer
```

### Endre spørsmål

```
$ vim /data/questions/index.json
```

Gjør endringer. Pass på at det er gyldig JSON (for eksempel
dobbelfnutter på keys).

```
$ docker reload mentometer
```
