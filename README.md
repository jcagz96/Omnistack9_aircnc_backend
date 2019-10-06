#aircnd backend
Backend API for [aircnc mobile App](https://github.com/jcagz96/Omnistack9_aircnc_mobile)
&
Backend API for [aircnc frontend](https://github.com/jcagz96/Omnistack9_aircnc_frontend)

## Installation

```
git clone https://github.com/jcagz96/Omnistack9_aircnc_backend.git

yarn
# or
npm install

yarn dev
# or
npm dev
```

## .env file example

```
PORTA = 3333
BASE_URL = http://localhost:3333
DB_CONNECT = <YOUR MONGODB LINK, DB STORED IN MONGOBD ATLAS>

#you can choose 'local' or 's3'
STORAGE_TYPE = s3

AWS_ACCESS_KEY_ID = <YOUR_AWS_ACCESS_KEY_ID>
AWS_SECRET_ACCESS_KEY = <YOUR_AWS_SECRET_ACCESS_KEY>
AWS_DEFAULT_REGION = <YOUR_AWS_DEFAULT_REGION>
```
## images storage
You can choose store spots images in local storage or in AWS s3(if you provide AWS keys in .env file)

##endpoints
```
post : http://localhost:3333/sessions'

post : http://localhost:3333/spots
get : http://localhost:3333/spots

get: http://localhost:3333/dashboard

post: http://localhost:3333/spots/:spot_id/bookings

post: http://localhost:3333/bookings/:booking_id/approvals
post: http://localhost:3333/bookings/:booking_id/rejections
```


## Some libraries used
* Express
* Axios
* Mongoose
* SocketIO
* Crypto
* Multer
* Cors