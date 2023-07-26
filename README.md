# nc1-test-task
###### Laravel v8.83.27 (PHP 8.1.0)

## Used Libraries

- php artisan ui
- php artisan ui vue
- npm install vue-axios vue-router vue-loader vuex vue-template-compiler typescript

## Install

- Clone repository ```https://github.com/AndrewYaremenko/nc1-test-task.git```
- Navigate to the project directory
- Connect the required libraries: ```composer install```
- Connect the npm: ```npm install```
- Copy and rename ```.env.example``` to ```.env``` and changes 
<pre>
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
</pre>
- Generate application key: ```php artisan key:generate```
- Migrate tables to the database: ```php artisan migrate```
- Fill in the tables with the ready data: ```php artisan db:seed --class=PostsTableSeeder```

## Usage

- Using the built-in development server: ```php artisan serve```