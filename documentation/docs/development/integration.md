---
title: Integrações
---

Para trabalhar as integrações optamos por preparar todas as requisições dentro da pasta src/features/


## Começando as integrações

Iniciamos o processo pelas requests que buscam a lista de Posts disponíveis. Foi quando percebemos que o que tínhamos preparado o front para receber não era o que estava sendo retornado pelo back.

Revisitamos o repositório da API para fazer as devidas correções. Foi necessário alterar o objeto de post que estava sendo registrado no banco, incluindo propriedades como:

- teacherId
- createdAt
- updatedAt

Percebemos também que para o melhor aproveitamento da request no front, seria interessante incluir na respota o nome do professor.
Para isto em vez de incluirmos mais essa informação no banco, aproveitamos a teacherId para resolver em tempo de backend e incluir no objeto o nome do professor.

## Adaptação / Refatoração da API

Percebemos que no decorrer do desenvolvimento do projeto vamos precisar voltar no backend para fazer adaptações.

Para a listagem de posts na visão do professor logado precisamos novamente retornar a API para fazer alguns ajustes, preparar o endpoint para receber search params com informações como page e limit para lidar com a paginação.