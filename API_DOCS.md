## Documentação API :smile:

##### BASE URL 
http://localhost:3333/

##### HEADERS
authentication

### /login POST
Request
```json
{
  "email": "maria.aparecida@gmail.com",
  "password": "boticario@123"
}
```

Response
```json
{
  "id": 1,
  "name": "Maria Aparecida",
  "cpf": "26526442030",
  "email": "maria.aparecida@gmail.com",
  "cashback_amount": 5.9,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJpYS5hcGFyZWNpZGFAZ21haWwuY29tIiwiaWF0IjoxNjE5MDMzOTI0LCJleHAiOjE2MTkwMzU3MjR9.tH6etoVFdvC69d_XGEFFbpcHDIym_rFh5HYICCJLZaU"
}
```

### /dealer POST
Request
```json
{
  "name": "Beatriz Aguiar",
  "email": "biaag@gmail.com",
  "cpf": "083071479019",
  "password": "boticario@123"
}
```

Response
```json
"Revendedor Cadastrado com Sucesso!"
```

### /dealer GET 
###### w/ HEADER authentication
Response
```json
[
  {
    "id": 7,
    "name": "Beatriz Aguiar",
    "cpf": "083071479019",
    "email": "biaag@gmail.com"
  },
  {
    "id": 3,
    "name": "Estrelinha",
    "cpf": "083071479010",
    "email": "estrelinha@gmail.com"
  },
  {
    "id": 2,
    "name": "Flávia Soares",
    "cpf": "93737665036",
    "email": "flavia.soares@gmail.com"
  },
]
``` 

### /dealer/:id GET
###### w/ HEADER authentication
Response
```json
{
  "id": 7,
  "name": "Beatriz Aguiar",
  "email": "biaag@gmail.com",
  "cpf": "083071479019",
  "cashback_amount": 0
}
``` 

### /order POST
###### w/ HEADER authentication
Request
```json
{
  "cod": 4242322,
  "gloss_amount": 120.90,
  "net_amount": 110.90,
  "date": "2021-04-17 21:27:00",
  "dealer_id": 3
}
```

Response
```json
"Pedido Cadastrado com Sucesso!"
``` 

### /order/:dealer-id GET
###### w/ HEADER authentication
```json
[
  {
    "id": 6,
    "cod": 544441,
    "gloss_amount": 780,
    "net_amount": 780,
    "date": "2021-04-18T14:30",
    "order_status_id": 1,
    "order_status_description": "IN VALIDATION"
  },
  {
    "id": 7,
    "cod": 222,
    "gloss_amount": 1900,
    "net_amount": 1831.6,
    "date": "2021-04-20T16:40",
    "order_status_id": 1,
    "order_status_description": "IN VALIDATION"
  },
  {
    "id": 8,
    "cod": 22244,
    "gloss_amount": 122,
    "net_amount": 53.60000000000002,
    "date": "2021-04-20T16:40",
    "order_status_id": 1,
    "order_status_description": "IN VALIDATION"
  },
]
```