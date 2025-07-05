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

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {
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
  },
  "children": [
    {
      "name": "id",
      "type": "integer",
      "example": 123
    },
    {
      "name": "category",
      "type": "object",
      "example": {
        "id": 123,
        "name": "example string"
      },
      "children": [
        {
          "name": "id",
          "type": "integer",
          "example": 123
        },
        {
          "name": "name",
          "type": "string",
          "example": "example string"
        }
      ]
    },
    {
      "name": "name",
      "type": "string",
      "example": "doggie"
    },
    {
      "name": "photoUrls",
      "type": "array",
      "example": [
        "example string"
      ],
      "children": [
        {
          "type": "string",
          "example": "example string"
        }
      ]
    },
    {
      "name": "tags",
      "type": "array",
      "example": [
        {
          "id": 123,
          "name": "example string"
        }
      ],
      "children": [
        {
          "type": "object",
          "example": {
            "id": 123,
            "name": "example string"
          },
          "children": [
            {
              "name": "id",
              "type": "integer",
              "example": 123
            },
            {
              "name": "name",
              "type": "string",
              "example": "example string"
            }
          ]
        }
      ]
    },
    {
      "name": "status",
      "type": "string",
      "example": "available"
    }
  ]
}
```

#### 405 dummy status msg

```json
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

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {
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
  },
  "children": [
    {
      "name": "id",
      "type": "integer",
      "example": 123
    },
    {
      "name": "category",
      "type": "object",
      "example": {
        "id": 123,
        "name": "example string"
      },
      "children": [
        {
          "name": "id",
          "type": "integer",
          "example": 123
        },
        {
          "name": "name",
          "type": "string",
          "example": "example string"
        }
      ]
    },
    {
      "name": "name",
      "type": "string",
      "example": "doggie"
    },
    {
      "name": "photoUrls",
      "type": "array",
      "example": [
        "example string"
      ],
      "children": [
        {
          "type": "string",
          "example": "example string"
        }
      ]
    },
    {
      "name": "tags",
      "type": "array",
      "example": [
        {
          "id": 123,
          "name": "example string"
        }
      ],
      "children": [
        {
          "type": "object",
          "example": {
            "id": 123,
            "name": "example string"
          },
          "children": [
            {
              "name": "id",
              "type": "integer",
              "example": 123
            },
            {
              "name": "name",
              "type": "string",
              "example": "example string"
            }
          ]
        }
      ]
    },
    {
      "name": "status",
      "type": "string",
      "example": "available"
    }
  ]
}
```

#### 400 dummy status msg

```json
```

#### 404 dummy status msg

```json
```

#### 405 dummy status msg

```json
```

# GET /pet/findByStatus

#### クエリパラメーター

| パラメーター | 型      | 制約 | 説明                                                  | 例 |
| ------ | ------ | -- | --------------------------------------------------- | - |
| status | string | 必須 | Status values that need to be considered for filter |   |

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "array",
  "example": [
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
  ],
  "children": [
    {
      "type": "object",
      "example": {
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
      },
      "children": [
        {
          "name": "id",
          "type": "integer",
          "example": 123
        },
        {
          "name": "category",
          "type": "object",
          "example": {
            "id": 123,
            "name": "example string"
          },
          "children": [
            {
              "name": "id",
              "type": "integer",
              "example": 123
            },
            {
              "name": "name",
              "type": "string",
              "example": "example string"
            }
          ]
        },
        {
          "name": "name",
          "type": "string",
          "example": "doggie"
        },
        {
          "name": "photoUrls",
          "type": "array",
          "example": [
            "example string"
          ],
          "children": [
            {
              "type": "string",
              "example": "example string"
            }
          ]
        },
        {
          "name": "tags",
          "type": "array",
          "example": [
            {
              "id": 123,
              "name": "example string"
            }
          ],
          "children": [
            {
              "type": "object",
              "example": {
                "id": 123,
                "name": "example string"
              },
              "children": [
                {
                  "name": "id",
                  "type": "integer",
                  "example": 123
                },
                {
                  "name": "name",
                  "type": "string",
                  "example": "example string"
                }
              ]
            }
          ]
        },
        {
          "name": "status",
          "type": "string",
          "example": "available"
        }
      ]
    }
  ]
}
```

#### 400 dummy status msg

```json
```

# GET /pet/findByTags

#### クエリパラメーター

| パラメーター | 型      | 制約 | 説明                | 例 |
| ------ | ------ | -- | ----------------- | - |
| tags   | string | 必須 | Tags to filter by |   |

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "array",
  "example": [
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
  ],
  "children": [
    {
      "type": "object",
      "example": {
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
      },
      "children": [
        {
          "name": "id",
          "type": "integer",
          "example": 123
        },
        {
          "name": "category",
          "type": "object",
          "example": {
            "id": 123,
            "name": "example string"
          },
          "children": [
            {
              "name": "id",
              "type": "integer",
              "example": 123
            },
            {
              "name": "name",
              "type": "string",
              "example": "example string"
            }
          ]
        },
        {
          "name": "name",
          "type": "string",
          "example": "doggie"
        },
        {
          "name": "photoUrls",
          "type": "array",
          "example": [
            "example string"
          ],
          "children": [
            {
              "type": "string",
              "example": "example string"
            }
          ]
        },
        {
          "name": "tags",
          "type": "array",
          "example": [
            {
              "id": 123,
              "name": "example string"
            }
          ],
          "children": [
            {
              "type": "object",
              "example": {
                "id": 123,
                "name": "example string"
              },
              "children": [
                {
                  "name": "id",
                  "type": "integer",
                  "example": 123
                },
                {
                  "name": "name",
                  "type": "string",
                  "example": "example string"
                }
              ]
            }
          ]
        },
        {
          "name": "status",
          "type": "string",
          "example": "available"
        }
      ]
    }
  ]
}
```

#### 400 dummy status msg

```json
```

# GET /pet/{petId}

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明                  | 例 |
| ------ | --- | -- | ------------------- | - |
| petId  | int | 必須 | ID of pet to return |   |

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {
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
  },
  "children": [
    {
      "name": "id",
      "type": "integer",
      "example": 123
    },
    {
      "name": "category",
      "type": "object",
      "example": {
        "id": 123,
        "name": "example string"
      },
      "children": [
        {
          "name": "id",
          "type": "integer",
          "example": 123
        },
        {
          "name": "name",
          "type": "string",
          "example": "example string"
        }
      ]
    },
    {
      "name": "name",
      "type": "string",
      "example": "doggie"
    },
    {
      "name": "photoUrls",
      "type": "array",
      "example": [
        "example string"
      ],
      "children": [
        {
          "type": "string",
          "example": "example string"
        }
      ]
    },
    {
      "name": "tags",
      "type": "array",
      "example": [
        {
          "id": 123,
          "name": "example string"
        }
      ],
      "children": [
        {
          "type": "object",
          "example": {
            "id": 123,
            "name": "example string"
          },
          "children": [
            {
              "name": "id",
              "type": "integer",
              "example": 123
            },
            {
              "name": "name",
              "type": "string",
              "example": "example string"
            }
          ]
        }
      ]
    },
    {
      "name": "status",
      "type": "string",
      "example": "available"
    }
  ]
}
```

#### 400 dummy status msg

```json
```

#### 404 dummy status msg

```json
```

# POST /pet/{petId}

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明                                 | 例 |
| ------ | --- | -- | ---------------------------------- | - |
| petId  | int | 必須 | ID of pet that needs to be updated |   |

### レスポンス

#### 405 dummy status msg

```json
```

# DELETE /pet/{petId}

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明               | 例 |
| ------ | --- | -- | ---------------- | - |
| petId  | int | 必須 | Pet id to delete |   |

### レスポンス

#### 400 dummy status msg

```json
```

# POST /pet/{petId}/uploadImage

#### パスパラメーター

| パラメーター | 型   | 制約 | 説明                  | 例 |
| ------ | --- | -- | ------------------- | - |
| petId  | int | 必須 | ID of pet to update |   |

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {
    "code": 123,
    "type": "example string",
    "message": "example string"
  },
  "children": [
    {
      "name": "code",
      "type": "integer",
      "example": 123
    },
    {
      "name": "type",
      "type": "string",
      "example": "example string"
    },
    {
      "name": "message",
      "type": "string",
      "example": "example string"
    }
  ]
}
```

# GET /store/inventory

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {}
}
```

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

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {
    "id": 123,
    "petId": 123,
    "quantity": 123,
    "shipDate": "2025-01-01T00:00:00Z",
    "status": "placed",
    "complete": true
  },
  "children": [
    {
      "name": "id",
      "type": "integer",
      "example": 123
    },
    {
      "name": "petId",
      "type": "integer",
      "example": 123
    },
    {
      "name": "quantity",
      "type": "integer",
      "example": 123
    },
    {
      "name": "shipDate",
      "type": "string",
      "example": "2025-01-01T00:00:00Z"
    },
    {
      "name": "status",
      "type": "string",
      "example": "placed"
    },
    {
      "name": "complete",
      "type": "boolean",
      "example": true
    }
  ]
}
```

#### 400 dummy status msg

```json
```

# GET /store/order/{orderId}

#### パスパラメーター

| パラメーター  | 型   | 制約 | 説明                                 | 例 |
| ------- | --- | -- | ---------------------------------- | - |
| orderId | int | 必須 | ID of pet that needs to be fetched |   |

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {
    "id": 123,
    "petId": 123,
    "quantity": 123,
    "shipDate": "2025-01-01T00:00:00Z",
    "status": "placed",
    "complete": true
  },
  "children": [
    {
      "name": "id",
      "type": "integer",
      "example": 123
    },
    {
      "name": "petId",
      "type": "integer",
      "example": 123
    },
    {
      "name": "quantity",
      "type": "integer",
      "example": 123
    },
    {
      "name": "shipDate",
      "type": "string",
      "example": "2025-01-01T00:00:00Z"
    },
    {
      "name": "status",
      "type": "string",
      "example": "placed"
    },
    {
      "name": "complete",
      "type": "boolean",
      "example": true
    }
  ]
}
```

#### 400 dummy status msg

```json
```

#### 404 dummy status msg

```json
```

# DELETE /store/order/{orderId}

#### パスパラメーター

| パラメーター  | 型      | 制約 | 説明                                       | 例 |
| ------- | ------ | -- | ---------------------------------------- | - |
| orderId | string | 必須 | ID of the order that needs to be deleted |   |

### レスポンス

#### 400 dummy status msg

```json
```

#### 404 dummy status msg

```json
```

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

### レスポンス

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

### レスポンス

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

### レスポンス

# GET /user/login

#### クエリパラメーター

| パラメーター   | 型      | 制約                                                              | 説明                                   | 例 |
| -------- | ------ | --------------------------------------------------------------- | ------------------------------------ | - |
| username | string | 必須\<br>正規表現: ^\[a-zA-Z0-9]+\[a-zA-Z0-9\\.\\-\_]\*\[a-zA-Z0-9]+$ | The user name for login              |   |
| password | string | 必須                                                              | The password for login in clear text |   |

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "string",
  "example": "example string"
}
```

#### 400 dummy status msg

```json
```

# GET /user/logout

### レスポンス

# GET /user/{username}

#### パスパラメーター

| パラメーター   | 型      | 制約 | 説明                                                        | 例 |
| -------- | ------ | -- | --------------------------------------------------------- | - |
| username | string | 必須 | The name that needs to be fetched. Use user1 for testing. |   |

### レスポンス

#### 200 dummy status msg

```json
{
  "type": "object",
  "example": {
    "id": 123,
    "username": "example string",
    "firstName": "example string",
    "lastName": "example string",
    "email": "example string",
    "password": "example string",
    "phone": "example string",
    "userStatus": 123
  },
  "children": [
    {
      "name": "id",
      "type": "integer",
      "example": 123
    },
    {
      "name": "username",
      "type": "string",
      "example": "example string"
    },
    {
      "name": "firstName",
      "type": "string",
      "example": "example string"
    },
    {
      "name": "lastName",
      "type": "string",
      "example": "example string"
    },
    {
      "name": "email",
      "type": "string",
      "example": "example string"
    },
    {
      "name": "password",
      "type": "string",
      "example": "example string"
    },
    {
      "name": "phone",
      "type": "string",
      "example": "example string"
    },
    {
      "name": "userStatus",
      "type": "integer",
      "example": 123
    }
  ]
}
```

#### 400 dummy status msg

```json
```

#### 404 dummy status msg

```json
```

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

### レスポンス

#### 400 dummy status msg

```json
```

#### 404 dummy status msg

```json
```

# DELETE /user/{username}

#### パスパラメーター

| パラメーター   | 型      | 制約 | 説明                                | 例 |
| -------- | ------ | -- | --------------------------------- | - |
| username | string | 必須 | The name that needs to be deleted |   |

### レスポンス

#### 400 dummy status msg

```json
```

#### 404 dummy status msg

```json
```
