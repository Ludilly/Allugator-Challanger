# Allugator_Challenge
Repositório sobre o desafio técnico Full-Stack da Allugator.

Esse projeto foi produzido por mim, Luiza Carvalho Dilly D'Angelo como um desafio técnico para a Allugator.
O principal objetivo desse projeto foi fazer uma CRUD através de um banco de dados, criar a API e consumi-la no Frontend.


---

## Setup do projeto

Para isto, foi criado um repositório chamado "Server", onde todas as informações do Backend estão armazenadas e com testes implementados e outra pasta chamada "Client",
onde o Frontend foi construído e testado.

O Frontend foi construído em React, utilizando componente funcional, Redux e testado através do RTL.

Já o Backend foi feito em Node. O banco de dados foi convertido em JSON e as funções de readFile e writeFile foram utilizadas na criação do CRUD. Os testes foram criados
utilizando o `frisby`. Além disso, é importante ressaltar que a porta utilizada foi a 3001, no intuito de evitar conflitos com o Frontend.

---

## Como utilizar a aplicação?

Para a aplicação funcionar, é necessário entrar na pasta de "server" com o terminal e utilizar o comando "npm start" ou "npm run dev". Com isso, o Backend dá aplicação estará online.

Em seguida, abra outro terminal, entre na pasta "Client" e execute o "npm start". Sua aplicação estará funcionando em seu navegador!

Você irá se deparar com a tela de filtrar os funcionários, é importante ressaltar que, quando for filtrar por salário dois valores deverão ser colocados no input,
por exemplo, "2000 3000" com isso, filtrará funcionários que recebem entre R$2000 a R$3000.

Existe também um link que irá redirecionar para a página de criar um funcionário. Lá você pode passar todas as informações para criar do novo funcionário.

Há também a rota para deletar um funcionário por CPF, basta apenas colocar o cpf que o funcionário será deletado.

---

## O que poderia melhorar?

Acredito que eu poderia melhorar essas aplicações e, abaixo, cito alguns pontos:
 - Criar validações no Backend utilizando o Joi para diminuir complexidade das funções
 - Criar testes para as validações
 - Criar um hook customizado para a requisição da API
 - Maior utilização do RTL
