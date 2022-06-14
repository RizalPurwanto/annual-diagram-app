# annual-diagram-app
A simple web-app to display bar diagram/chart

## server
### Project setup
```
npm install
```

### Database Setup 
This project uses PostgreSQL for the database system

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
### Set the .env file
Create .env file, containing MY_KEY value for the secret key used by JsonWebToken

Example:

```
MY_KEY = s3CrEtK3y
```


### Run the Server
```
npx nodemon app.js
```
<br>

## client-app
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br>

## Emails and Passwords for Login
 1. - Email: anemone@mail.com
    - Password: adonis

    <br>

 2. - Email: hortensia@mail.com
    - Password: horten

    <br>

 3. - Email: chrys@mail.com
    - Password: chrys
    
