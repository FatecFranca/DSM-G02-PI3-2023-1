# DSM-G02-PI3-2023-1

Repositório do GRUPO 2 - Projeto Interdisciplinar 3, 3º DSM Fatec Franca 2023/ 1. Alunos: Breno Tanaka, Daniel José Martins Júnior, Gabriel Ferreira Carrijo, Juliano Cintra Alves de Almeida.

#
# PI 3 Semestre : Posto Shiny

<h3>Para nossa organização do grupo, teremos back e front, peço para gerarem branch antes de subir realmente para o projeto principal, todos nós do grupo devemos avaliar as alterações para que assim seja colocada na main(Projeto Principal)</h3>

<br>

<h3>Mensagens: Para subir suas branchs coloquem as mensagens de uma forma que explique em poucas palavras o que fez "https://github.com/iuricode/padroes-de-commits" este link pode ser util para ajudar com os padrões =)</h3>

<br>

<h3>Lembrando pessoal, vamos seguir clean code e sempre fazer pull antes de qualquer alteração para que assim não haja conflitos</h3>

<br>
<br>

Gabriel Ferreira Carrijo 
<br>
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/fagnerpsantos)](https://github.com/GabrielFCarrijo)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fagnerpsantos/)](https://br.linkedin.com/in/gabriel-carrijo-a371ab205?trk=people-guest_people_search-card)


Breno Tanaka  
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/fagnerpsantos)](https://github.com/BrenoTNK)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fagnerpsantos/)](https://www.linkedin.com/in/breno-tanaka-034b58241/)
<br>

Daniel Martins <br>
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https:)](https://github.com/MrDevKonepo)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fagnerpsantos/)](https://www.linkedin.com/in/daniel-martins-87384a20a/)
<br><br><br>

## :bookmark_tabs: Documentação do Projeto

<h1>Abastecimento</h1>
<br>
Criar Abastecimento

    Método: POST
    Rota: /abastecimento
    Descrição: Cria um novo registro de abastecimento.
    Corpo da solicitação: Os detalhes do abastecimento devem ser enviados no corpo da solicitação.
    Resposta de sucesso: Retorna os detalhes do abastecimento criado.
    Códigos de status:
        200: OK
        400: Requisição inválida

Obter todos os Abastecimentos

    Método: GET
    Rota: /abastecimento
    Descrição: Obtém todos os registros de abastecimento.
    Resposta de sucesso: Retorna a lista de todos os abastecimentos.
    Códigos de status:
        200: OK

Obter um Abastecimento por ID

    Método: GET
    Rota: /abastecimento/:id
    Descrição: Obtém os detalhes de um abastecimento específico com base no ID.
    Parâmetro da consulta: O ID do abastecimento deve ser fornecido na URL.
    Resposta de sucesso: Retorna os detalhes do abastecimento encontrado.
    Códigos de status:
        200: OK
        404: Não encontrado

<h1>Combustível</h1>
<br>
Criar Combustível

    Método: POST
    Rota: /combustivel
    Descrição: Cria um novo registro de combustível.
    Corpo da solicitação: Os detalhes do combustível devem ser enviados no corpo da solicitação.
    Resposta de sucesso: Retorna os detalhes do combustível criado.
    Códigos de status:
        200: OK
        400: Requisição inválida

Obter todos os Combustíveis

    Método: GET
    Rota: /combustivel
    Descrição: Obtém todos os registros de combustível.
    Resposta de sucesso: Retorna a lista de todos os combustíveis.
    Códigos de status:
        200: OK

Obter um Combustível por ID

    Método: GET
    Rota: /combustivel/:id
    Descrição: Obtém os detalhes de um combustível específico com base no ID.
    Parâmetro da consulta: O ID do combustível deve ser fornecido na URL.
    Resposta de sucesso: Retorna os detalhes do combustível encontrado.
    Códigos de status:
        200: OK
        404: Não encontrado

Atualizar Combustível

    Método: PUT
    Rota: /combustivel/:id
    Descrição: Atualiza os detalhes de um combustível específico com base no ID.
    Parâmetro da consulta: O ID do combustível deve ser fornecido na URL.
    Corpo da solicitação: Os detalhes atualizados do combustível devem ser enviados no corpo da solicitação.
    Resposta de sucesso: Retorna os detalhes do combustível atualizado.
    Códigos de status:
        200: OK
        400: Requisição inválida
        404: Não encontrado

Excluir Combustível

    Método: DELETE
    Rota: /combustivel/:id
    Descrição: Exclui um combustível específico com base no ID.
    Parâmetro da consulta: O ID do combustível deve ser fornecido na URL.
    Resposta de sucesso: Retorna uma mensagem de sucesso.
    Códigos de status:
        200: OK
        404: Não encontrado

<h1>Produto</h1>
<br>
Criar Produto

    Método: POST
    Rota: /produto
    Descrição: Cria um novo produto.
    Corpo da solicitação: Os detalhes do produto devem ser enviados no corpo da solicitação.
    Resposta de sucesso: Retorna os detalhes do produto criado.
    Códigos de status:
        200: OK
        400: Requisição inválida

Obter todos os Produtos

    Método: GET
    Rota: /produto
    Descrição: Obtém todos os produtos.
    Resposta de sucesso: Retorna a lista de todos os produtos.
    Códigos de status:
        200: OK

Obter um Produto por ID

    Método: GET
    Rota: /produto/:id
    Descrição: Obtém os detalhes de um produto específico com base no ID.
    Parâmetro da consulta: O ID do produto deve ser fornecido na URL.
    Resposta de sucesso: Retorna os detalhes do produto encontrado.
    Códigos de status:
        200: OK
        404: Não encontrado

Atualizar Produto

    Método: PUT
    Rota: /produto/:id
    Descrição: Atualiza os detalhes de um produto específico com base no ID.
    Parâmetro da consulta: O ID do produto deve ser fornecido na URL.
    Corpo da solicitação: Os detalhes atualizados do produto devem ser enviados no corpo da solicitação.
    Resposta de sucesso: Retorna os detalhes do produto atualizado.
    Códigos de status:
        200: OK
        400: Requisição inválida
        404: Não encontrado

Excluir Produto

    Método: DELETE
    Rota: /produto/:id
    Descrição: Exclui um produto específico com base no ID.
    Parâmetro da consulta: O ID do produto deve ser fornecido na URL.
    Resposta de sucesso: Retorna uma mensagem de sucesso.
    Códigos de status:
        200: OK
        404: Não encontrado

Excluir todos os Produtos

    Método: DELETE
    Rota: /produto
    Descrição: Exclui todos os produtos.
    Resposta de sucesso: Retorna uma mensagem de sucesso.
    Códigos de status:
        200: OK

<h1>Usuario</h1>
<br>
Obter Abastecimentos por Cliente

    Método: GET
    Rota: /usuario/abastecimento/:id
    Descrição: Obtém todos os abastecimentos de um cliente específico com base no ID do cliente.
    Parâmetro da consulta: O ID do cliente deve ser fornecido na URL.
    Resposta de sucesso: Retorna a lista de abastecimentos do cliente.
    Códigos de status:
        200: OK
        404: Não encontrado

Criar Usuário

    Método: POST
    Rota: /usuario
    Descrição: Cria um novo usuário.
    Corpo da solicitação: Os detalhes do usuário devem ser enviados no corpo da solicitação.
    Resposta de sucesso: Retorna os detalhes do usuário criado.
    Códigos de status:
        200: OK
        400: Requisição inválida

Obter todos os Usuários

    Método: GET
    Rota: /usuario
    Descrição: Obtém todos os usuários.
    Resposta de sucesso: Retorna a lista de todos os usuários.
    Códigos de status:
        200: OK

Excluir todos os Usuários

    Método: DELETE
    Rota: /usuario
    Descrição: Exclui todos os usuários.
    Resposta de sucesso: Retorna uma mensagem de sucesso.
    Códigos de status:
        200: OK

Obter um Usuário por ID

    Método: GET
    Rota: /usuario/:id
    Descrição: Obtém os detalhes de um usuário específico com base no ID.
    Parâmetro da consulta: O ID do usuário deve ser fornecido na URL.
    Resposta de sucesso: Retorna os detalhes do usuário encontrado.
    Códigos de status:
        200: OK
        404: Não encontrado

Atualizar Usuário

    Método: PUT
    Rota: /usuario/:id
    Descrição: Atualiza os detalhes de um usuário específico com base no ID.
    Parâmetro da consulta: O ID do usuário deve ser fornecido na URL.
    Corpo da solicitação: Os detalhes atualizados do usuário devem ser enviados no corpo da solicitação.
    Resposta de sucesso: Retorna os detalhes do usuário atualizado.
    Códigos de status:
        200: OK
        400: Requisição inválida
        404: Não encontrado

Excluir Usuário

    Método: DELETE
    Rota: /usuario/:id
    Descrição: Exclui um usuário específico com base no ID.
    Parâmetro da consulta: O ID do usuário deve ser fornecido na URL.
    Resposta de sucesso: Retorna uma mensagem de sucesso.
    Códigos de status:
        200: OK
        404: Não encontrado
