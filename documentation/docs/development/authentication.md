---
title: Autenticação
---

Visando a melhor paralelisação do projeto, após realizadas as configurações iniciais do projeto, o desenvolvimento foi iniciado pela autenticação do usuário professor.


## Login

No processo de desenvolvimento me deparei com uma dificuldade de bater no endpoint do backend, e após alguns testes o problema foi identificado: CORS.

Foi necessário colocar uma configuração para permitir que a request do front pudesse ser endereçada e receber dados de entpoints externos.
Assim como também foi necessário fazer ajustes no repositório do backend, para permitir receber requisições de endpoints externos.

Uma vez que a requisição estava sendo feita com sucesso e dados retornados, segui para o processo de autenticação do usuário.

## Autenticação do usuário

Recebendo os dados corretamente a primeira preocupação foi guardar o token recebido para poder ser utilizado conforme necessário, isso foi alcançado através de um cookie.

Em seguida foi necessário lidar com a expiração do cookie, para que o usuário não acessasse rotas protegidas sem uma autenticação válida (o que resultaria em erros de requisição).

O back foi alterado para enviar além do login um objeto Date contendo a informação da expiração do token. Essa informação também foi guardada no cookie, para que o front pudesse conferir se o token ainda estaria válido no momento que o usuário tentasse acessar uma rota protegida.

## Rotas protegidas

Para proteger as rotas foi necessário aplicar um layout que verificasse a validade do token. Com o Next podemos aplicar o agrupamento de páginas que serão afetadas por um mesmo layout, como foi feito em `(logged)`.

Organizamos esse layout de forma que um usuário não autenticado será redirecionado para a página de login.
Caso esteja autenticado ele irá acessar a rota protegida.