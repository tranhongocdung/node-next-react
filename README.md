# Employee Manager
## Main Stacks & Packages
- Database: Postgres
- Server: NodeJs, Express, Sequelize (ORM database with CLI)
- Client: NextJs, ReactJs, Redux Toolkit, Bootstrap
- Unit Test: Jest

## Setup database
- Install Postgres
- Launch pgAdmin 4 if you need a database management tool
- Create a database name "employee_manager_db"

## Setup server
From the root  of repository, go to Server folder
```sh
cd server
```

Install all packages
```sh
npm i
```
Install Sequelize-CLI
```sh
npm i sequelize-cli
```
Update database connection at path:
```sh
config/config.json
```

Run database migration
```sh
sequelize db:migrate
```

Run database migration
```sh
sequelize db:seed:all
```

Run sevrer
```sh
npm start
```

Run unit test
```sh
npm test
```
