# POST /pet

#### リクエストボディー

```json
{
  "id": 123,
  "category": {
    "id": 123,
    "name": "example string"
  },
  "name": "doggie",
  "photoUrls": [
    "example string"
  ],
  "tags": [
    {
      "id": 123,
      "name": "example string"
    }
  ],
  "status": "available"
}
```

# PUT /pet

#### リクエストボディー

```json
{
  "id": 123,
  "category": {
    "id": 123,
    "name": "example string"
  },
  "name": "doggie",
  "photoUrls": [
    "example string"
  ],
  "tags": [
    {
      "id": 123,
      "name": "example string"
    }
  ],
  "status": "available"
}
```

# GET /pet/findByStatus

#### クエリパラメーター

| パラメーター | 型      | 制約 | 説明                                                  | 例 |
| ------ | ------ | -- | --------------------------------------------------- | - |
| status | string | 必須 | Status values that need to be considered for filter |   |

# GET /pet/findByTags

#### クエリパラメーター

| パラメーター | 型      | 制約 | 説明                | 例 |
| ------ | ------ | -- | ----------------- | - |
| tags   | string | 必須 | Tags to filter by |   |

# GET /pet/{petId}

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明                  | 例 |
| ------ | --- | -- | ------------------- | - |
| petId  | int | 必須 | ID of pet to return |   |

# POST /pet/{petId}

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明                                 | 例 |
| ------ | --- | -- | ---------------------------------- | - |
| petId  | int | 必須 | ID of pet that needs to be updated |   |

# DELETE /pet/{petId}

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明               | 例 |
| ------ | --- | -- | ---------------- | - |
| petId  | int | 必須 | Pet id to delete |   |

# POST /pet/{petId}/uploadImage

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明                  | 例 |
| ------ | --- | -- | ------------------- | - |
| petId  | int | 必須 | ID of pet to update |   |

# GET /store/inventory

# POST /store/order

#### リクエストボディー

```json
{
  "id": 123,
  "petId": 123,
  "quantity": 123,
  "shipDate": "2025-01-01T00:00:00Z",
  "status": "placed",
  "complete": true
}
```

# GET /store/order/{orderId}

#### パスパラメーター

| パラメーター  | 型   | 制約 | 説明                                 | 例 |
| ------- | --- | -- | ---------------------------------- | - |
| orderId | int | 必須 | ID of pet that needs to be fetched |   |

# DELETE /store/order/{orderId}

#### パスパラメーター

| パラメーター  | 型      | 制約 | 説明                                       | 例 |
| ------- | ------ | -- | ---------------------------------------- | - |
| orderId | string | 必須 | ID of the order that needs to be deleted |   |

# POST /user

#### リクエストボディー

```json
{
  "id": 123,
  "username": "example string",
  "firstName": "example string",
  "lastName": "example string",
  "email": "example string",
  "password": "example string",
  "phone": "example string",
  "userStatus": 123
}
```

# POST /user/createWithArray

#### リクエストボディー

```json
[
  {
    "id": 123,
    "username": "example string",
    "firstName": "example string",
    "lastName": "example string",
    "email": "example string",
    "password": "example string",
    "phone": "example string",
    "userStatus": 123
  }
]
```

# POST /user/createWithList

#### リクエストボディー

```json
[
  {
    "id": 123,
    "username": "example string",
    "firstName": "example string",
    "lastName": "example string",
    "email": "example string",
    "password": "example string",
    "phone": "example string",
    "userStatus": 123
  }
]
```

# GET /user/login

#### クエリパラメーター

| パラメーター   | 型      | 制約                                                              | 説明                                   | 例 |
| -------- | ------ | --------------------------------------------------------------- | ------------------------------------ | - |
| username | string | 必須\<br>正規表現: ^\[a-zA-Z0-9]+\[a-zA-Z0-9\\.\\-\_]\*\[a-zA-Z0-9]+$ | The user name for login              |   |
| password | string | 必須                                                              | The password for login in clear text |   |

# GET /user/logout

# GET /user/{username}

#### パスパラメーター

| パラメーター   | 型      | 制約 | 説明                                                        | 例 |
| -------- | ------ | -- | --------------------------------------------------------- | - |
| username | string | 必須 | The name that needs to be fetched. Use user1 for testing. |   |

# PUT /user/{username}

#### パスパラメーター

| パラメーター   | 型      | 制約 | 説明                           | 例 |
| -------- | ------ | -- | ---------------------------- | - |
| username | string | 必須 | name that need to be deleted |   |

#### リクエストボディー

```json
{
  "id": 123,
  "username": "example string",
  "firstName": "example string",
  "lastName": "example string",
  "email": "example string",
  "password": "example string",
  "phone": "example string",
  "userStatus": 123
}
```

# DELETE /user/{username}

#### パスパラメーター

| パラメーター   | 型      | 制約 | 説明                                | 例 |
| -------- | ------ | -- | --------------------------------- | - |
| username | string | 必須 | The name that needs to be deleted |   |
