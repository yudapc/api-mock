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

GET    http://localhost:8083/api/v1/pages
GET    http://localhost:8083/api/v1/pages/1?_embed=sections
GET    http://localhost:8083/api/v1/pages/1
POST   http://localhost:8083/api/v1/pages
PUT    http://localhost:8083/api/v1/pages/1
PATCH  http://localhost:8083/api/v1/pages/1
DELETE http://localhost:8083/api/v1/pages/1

GET    http://localhost:8083/api/v1/planktons
GET    http://localhost:8083/api/v1/planktons/1
POST   http://localhost:8083/api/v1/planktons
PUT    http://localhost:8083/api/v1/planktons/1
PATCH  http://localhost:8083/api/v1/planktons/1
DELETE http://localhost:8083/api/v1/planktons/1

GET    http://localhost:8083/api/v1/sections
GET    http://localhost:8083/api/v1/sections/1
POST   http://localhost:8083/api/v1/sections
PUT    http://localhost:8083/api/v1/sections/1
PATCH  http://localhost:8083/api/v1/sections/1
DELETE http://localhost:8083/api/v1/sections/1
```
