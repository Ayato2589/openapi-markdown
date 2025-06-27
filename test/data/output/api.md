* `POST /pet`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `PUT /pet`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `GET /pet/findByStatus`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `GET /pet/findByTags`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `GET /pet/{petId}`

  | Name  | Type | Required | Description         |
  | :---- | :--- | :------: | :------------------ |
  | petId | int  |    Yes   | ID of pet to return |

* `POST /pet/{petId}`

  | Name  | Type | Required | Description                        |
  | :---- | :--- | :------: | :--------------------------------- |
  | petId | int  |    Yes   | ID of pet that needs to be updated |

* `DELETE /pet/{petId}`

  | Name  | Type | Required | Description      |
  | :---- | :--- | :------: | :--------------- |
  | petId | int  |    Yes   | Pet id to delete |

* `POST /pet/{petId}/uploadImage`

  | Name  | Type | Required | Description         |
  | :---- | :--- | :------: | :------------------ |
  | petId | int  |    Yes   | ID of pet to update |

* `GET /store/inventory`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `POST /store/order`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `GET /store/order/{orderId}`

  | Name    | Type | Required | Description                        |
  | :------ | :--- | :------: | :--------------------------------- |
  | orderId | int  |    Yes   | ID of pet that needs to be fetched |

* `DELETE /store/order/{orderId}`

  | Name    | Type   | Required | Description                              |
  | :------ | :----- | :------: | :--------------------------------------- |
  | orderId | string |    Yes   | ID of the order that needs to be deleted |

* `POST /user`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `POST /user/createWithArray`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `POST /user/createWithList`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `GET /user/login`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `GET /user/logout`

  | Name | Type | Required | Description |
  | :--- | :--- | :------: | :---------- |

* `GET /user/{username}`

  | Name     | Type   | Required | Description                                               |
  | :------- | :----- | :------: | :-------------------------------------------------------- |
  | username | string |    Yes   | The name that needs to be fetched. Use user1 for testing. |

* `PUT /user/{username}`

  | Name     | Type   | Required | Description                  |
  | :------- | :----- | :------: | :--------------------------- |
  | username | string |    Yes   | name that need to be deleted |

* `DELETE /user/{username}`

  | Name     | Type   | Required | Description                       |
  | :------- | :----- | :------: | :-------------------------------- |
  | username | string |    Yes   | The name that needs to be deleted |
