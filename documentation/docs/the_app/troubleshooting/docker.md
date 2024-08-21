---
sidebar_position: 2
title: "Docker API"
---

Caso você tenha seguido corretamente os passos descritos na documentação Getting Started e ao acessar a API esteja recebendo erro de CORS.
A solução já está disponível na API na versão após 20/08/2024.

Para solucionar o problema


## 1. Verifique se você possui a imagem na última versão disponibilizada
Para rodar localmente o ambiente frontend rode no terminal o comando:

```
docker image ls
```

## 2. Remova a imagem desatualizada
Caso sua imagem esteja desatualizada você pode remove-la utilizando o comando:

```
docker image rm cmoutella/school-blog-api
```

```
docker run -d --name postech-blog-api -p 8080:3000 cmoutella/school-blog-api
```

## 3. Rode o container com a imagem atualizada

Para que a versão atualizda da imagem seja baixada e executada em sua máquina:

```
docker run -d --name postech-blog-api -p 8080:3000 cmoutella/school-blog-api
```