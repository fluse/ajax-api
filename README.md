# Rest like Client Calls

## Install

```shell
> npm install client-api --save
```

dependencies:
 - [jQuery](https://github.com/jquery/jquery)
 - [node-extend](https://github.com/justmoon/node-extend)

## Use

```javascript
var Api = require('ajaxApi');
```

## Create

```javascript
var api = new Api(settings);
```

## Settings

```javascript
var settings = {
    token: String,
    version: 'v1',
    baseName: '/api/',
    dataType: 'json'
}

// http://domain.tld/{baseName}/{version}/
```

## Calls

```javascript
api(method, path, params, data, callback);
```

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
