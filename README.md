## Backend

```
cd backend
composer install
npm run dev
php artisan migrate --seed
sudo chmod -R 777 storage bootstrap/cache
```  

## Frontend

-  `.env` - In the .env file it is necessary to add the URL where the backend API is located, for example:

```
REACT_APP_BAKEND = 'http://usersearchtool.test/'
```

#### Installation

```
yarn install
yarn start
```
