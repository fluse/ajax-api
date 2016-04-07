# Client API

[![Donate](https://img.shields.io/badge/donate-%20%E2%9D%A4%20-green.svg)](https://www.paypal.me/schauf)

Rest like client api calls

## Install

```shell
> npm install client-api --save
```

dependencies:
 - [jQuery](https://github.com/jquery/jquery)
 - [node-extend](https://github.com/justmoon/node-extend)

## Use

```javascript
var Api = require('client-api');
```

## Create

```javascript
var api = new Api(settings);
```

## Settings

```javascript
var settings = {
    token: '32digits',
    version: 'v1',
    baseName: '/api/',
    dataType: 'json'
}
```

| name        | type           | description  |
| ------------- |:-------------:| :---------|
| token      | String | server authorization with token |
| version      | String      |   api version |
| baseName | String      |   base url without domain.tld |
| dataType | String      |    data format |

## Calls

```javascript
api(method, path, params, data, callback);
```

| name        | type           | description  |
| ------------- |:-------------:| :---------|
| method      | String | get, post, put, delete, path |
| path      | String      |   api version |
| params | Object      |   set maximal video amount |
| data | Object      |    option on get and delete |
| callback | Function  |    recieving function |

### GET
```javascript
api('get', '/category/article', {}, callback);
```

### GET with Params

each :{name} will replace by key value from params object

```javascript
var params = {
    publisher: 'times',
    category: 'book',
    id: 5
};

api('get', '/:publisher/:category/:id', params, callback);
```

Result
`http://domain.tld./api/v1/times/book/5`

### PUT / POST
```javascript

var data = {
    name: 'newName'
};

api('put', 'category/article/:id', {
    id: inputId
}, data, callback);
```

### DELETE
```javascript

api('delete', 'category/article/:id', {
    id: inputId
}, callback);
```
