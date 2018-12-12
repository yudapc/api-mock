# api-mock
API mocking for development

### Start

`npm start`

### Upload file

Endpoint: `POST http://localhost:8083/api/v1/upload ---> field = file & type = file`

### Routes

```
GET    http://localhost:8083
POST   http://localhost:8083/upload  ---> field = file & type = file

GET    http://localhost:8083/api/v1/posts
GET    http://localhost:8083/api/v1/posts/1?_embed=comments
GET    http://localhost:8083/api/v1/posts/1
POST   http://localhost:8083/api/v1/posts
PUT    http://localhost:8083/api/v1/posts/1
PATCH  http://localhost:8083/api/v1/posts/1
DELETE http://localhost:8083/api/v1/posts/1

GET    http://localhost:8083/api/v1/comments
GET    http://localhost:8083/api/v1/comments/1
POST   http://localhost:8083/api/v1/comments
PUT    http://localhost:8083/api/v1/comments/1
PATCH  http://localhost:8083/api/v1/comments/1
DELETE http://localhost:8083/api/v1/comments/1
```

