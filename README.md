# Dare Assessment API

## Setup

Clone the repo and then run `npm install`.

Install adonis cli using npm: `npm i -g @adonisjs/cli`.

Configure your .env file on root folder like the .env.example.

Create a mysql database with the same name as informed on .env file.

## Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

Create an admin user.

````sql
INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `created_at`, `updated_at`)
VALUES
	(1, 'djulian', 'djulianm@me.com', '$2a$10$2o14cz1nvQyHZ/ntsoAp4.GHuhdF3tuCdZbrSBs4EDZqb1UgfK3Ge', 'admin', '2020-06-18 20:45:28', '2020-06-18 20:45:28');
````

Authentication:

````/login/
email: djulianm@me.com
password: 123123
````

## Starting the API

```js
adonis serve --dev
```
