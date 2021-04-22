## API REST CashBack - O Boticário
> Back-End Sistema de CashBack para Revendedores Boticário

### Atenção
##### Link para o Front-End aqui [mrbrunelli/cashback-boticario-web](https://github.com/mrbrunelli/cashback-boticario-web)

### Documentação API
:link: [Link Documentação](https://github.com/mrbrunelli/cashback-boticario-api/blob/main/API_DOCS.md)

### Requisitos
- [x] Node 14^
- [x] NPM 6^

### Como Executar
1. Instalar dependências
```sh
npm install
```

2. Executar Migrations
```sh
npm run migrate:latest
``` 

3. Executar Seeds
```sh
npm run seed:run
```

4. Executar em Modo Desenvolvimento OU Produção
```sh
npm run dev / npm start
```

5. Informe as Variáveis de Ambiente no **.env**
```sh
# Exemplo
JWT_SECRET=BOTICARIO_EH_TOPZERA
PORT=3333
```

6. Confira o package.json para conhecer todas as automações
```json
"scripts": {
    "start": "node ./src/bin/www",
    "dev": "nodemon ./src/bin/www",
    "migrate:make": "npx knex migrate:make",
    "migrate:latest": "npx knex migrate:latest",
    "migrate:rollback": "npx knex migrate:rollback",
    "seed:make": "npx knex seed:make",
    "seed:run": "npx knex seed:run"
  },
```

