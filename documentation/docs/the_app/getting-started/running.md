---
sidebar_position: 2
title: "Rodando a aplicação localmente"
---

Para que a aplicação funcione corretamente, é necessário ter o ambiente de frontend e backend rodando localmente.


## 1. O frontend
Para rodar localmente o ambiente frontend rode no terminal o comando:

```
npm start
```

## 2. O backend
A melhor forma de consumir o backend localmente é através do container do docker da api.

Para baixar e rodar a última versão da api use o comando:

```
docker run -d --name postech-blog-api -p 8080:3000 cmoutella/school-blog-api
```

Dessa forma a api estará disponível na porta 8080.

## 3. Integração do Frontend com o Backend

Para que a integração ocorra corretamente é necessário possui o arquivo `.env` com os valores apropriados seguindo o modelo do arquivo `.env.example`.

Para o valor `BASE_URL` defina a url `http://localhost:8080`, para acessar o api na porta 8080.
Para acessar a documentação da api, acesse /api.