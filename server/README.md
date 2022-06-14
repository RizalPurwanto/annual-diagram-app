# server

## Project setup
```
npm install
```

## Setup Database
- Create the Database
```
npx sequelize db:create
```

- Migration
```
npx sequelize db:migrate
```

- Seed the Data
```
npx sequelize db:seed:all
```

## Set the .env file
Create .env file, containing MY_KEY value for the secret key used by JsonWebToken

Example:

```
MY_KEY = s3CrEtK3y
```

## Run the Server
```
npx nodemon app.js
```


