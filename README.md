# nc1-test-task
###### Laravel v8.83.27 (PHP 8.1.0)

После создания проекта, подключил UI через Artisan и npm. Затем я построил простую структуру, используя Blade представления и Vue компоненты. Далее, реализовал Vue-маршруты и связал их с app.js.

После этого приступил к реализации страницы с пагинацией. Для этого создал простую таблицу "posts" в базе данных и написал запрос к данным в контроллере PostController, который отправляет данные в формате JSON в компонент Vue - PostCard.vue. Я изменил метод index для работы с переходами на страницы пагинации в самом компоненте (используя AJAX-запросы) и для ситуации обновления страницы (используя роуты Laravel).

На этом этапе также подключил TypeScript через npm и изменил конфигурацию Webpack. Файл конфигурации TypeScript находится в корневом каталоге проекта. После успешной реализации отображения данных и добавления базовой адаптивности на страницы через Bootstrap и собственные CSS-стили, перенес логику из компонента в хранилище Vuex. Также я создал интерфейс для типизации данных в TypeScript.

Для быстрого тестирования приложения с данными создал сидер, который позволяет быстро загрузить фиктивные данные.

Последовательность разработки можно проследить по истории коммитов.

## Роуты:

<pre>DOMAIN/ - view
DOMAIN/about - view
DOMAIN/contacts - view
DOMAIN/posts - PostController@index</pre>

## Используемые библиотеки

- php artisan ui
- php artisan ui vue
- npm install vue-axios vue-router vue-loader vuex vue-template-compiler typescript

## Установка

- Загрузите репозиторий с помощью команды ```git clone https://github.com/AndrewYaremenko/nc1-test-task.git```
- Перейдите в директорию проекта
- Установите необходимые PHP библиотеки, выполнив команду: ```composer install```
- Установите зависимости npm, выполните команду: ```npm install```
- Скопируйте файл ```.env.example``` и переименуйте его в ```.env```, затем откройте файл и укажите следующие поля
<pre>
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
</pre>
- Сгенерируйте ключ приложения, выполнив команду: ```php artisan key:generate```
- Выполните миграцию таблиц в БД с помощью команды: ```php artisan migrate```
- Загрузите готовые данные в таблицы, используя команду: ```php artisan db:seed --class=PostsTableSeeder```

## Использование

- Запустить сервер: ```php artisan serve```

<br>
<hr>
<br>

After creating the project, I connected the UI using Artisan and npm. Then I built a simple structure using Blade views and Vue components. Next, I implemented Vue routes and linked them to app.js.

After that, I started implementing the pagination page. For this purpose, I created a simple "posts" table in the database and wrote a data query in the PostController controller, which sends data in JSON format to the Vue component - PostCard.vue. I modified the index method to handle pagination page transitions within the component (using AJAX requests) and for page refresh situations (using Laravel routes).

At this stage, I also incorporated TypeScript using npm and modified the Webpack configuration. The TypeScript configuration file is located in the project's root directory. After successfully implementing data display and adding basic responsiveness to the pages using Bootstrap and custom CSS styles, I moved the logic from the component to the Vuex store. I also created an interface for data typing in TypeScript.

To quickly test the application with data, I created a seeder that allows loading dummy data rapidly.

The development sequence can be traced through the commit history.

## Routes:

<pre>DOMAIN/ - view
DOMAIN/about - view
DOMAIN/contacts - view
DOMAIN/posts - PostController@index</pre>

## Used Libraries

- php artisan ui
- php artisan ui vue
- npm install vue-axios vue-router vue-loader vuex vue-template-compiler typescript

## Install

- Clone repository ```https://github.com/AndrewYaremenko/nc1-test-task.git```
- Navigate to the project directory
- Connect the required libraries: ```composer install```
- Connect the npm: ```npm install```
- Copy and rename ```.env.example` to ```.env``` and changes 
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