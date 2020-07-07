## Setup

#### Pre Requisites

Make sure to have these items installed.
If you need help installing any of these, ask for help on the sdjs slack

- node: `>=10`, `<=12`
- npm: `>=6`
- docker

#### Initializing the Backend App

First start by cloning the repo

```sh
$ git clone git@github.com:sandiegojs/sdjs-speaker-app.git
$ cd ./sdjs-speaker-app
```

Then, within the server folder, we'll startup the database and backend.

```sh
$ cd ./server
```

We'll run this docker-compose command to get MongoDB running. (This may take a while the first time.)

```sh
$ docker-compose up -d
```

> The `-d` tells docker to run in the background,
> later if we want to see logs from the db we can use `docker-compose logs --tail`

We'll need to make a copy of the `.env` file.

> Note: The admin user is only created when there is none in the db,
> so make sure to change those variables _before_ running the server for the first time.

```sh
$ cp .env.example .env
```

Finally to run the backend app and initialize some config in the db, we'll use this.

```sh
$ npm run develop
```

#### Initializing the Frontend App

If you're going to run both apps at the same time, make sure to use a new terminal window/tab

```sh
$ cd sdjs-speaker-app/client
$ npm run dev
```
