<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/NivaldoFarias/shortly-api">
    <img src="https://github.com/NivaldoFarias/shortly-api/blob/main/assets/shortly-api-logo.png" alt="Logo" width="120">
  </a>

<h3 align="center">Shortly API</h3>
  <p align="center">
   <strong>16º</strong> Projeto da formação fullstack Driven
</div>

<div align="center">
  <h3 align="center">Construído utilizando:</h3>

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
  
</div>

#

### Descrição

Nesse projeto desenvolvemos um projeto backend utilizando NodeJs com express e persistimos os dados em postgres.
Se trata de um encurtador de links,e abaixo estão listados alguns endpoints:

  - Login e cadastro | **POST '/signin' e '/signup'**
  - Encurtar link enviando a url no body | **POST '/urls/shorten'**
  - Ver urls encurtados por um usuário | **GET '/urls/:id'**
  - Deletar uma url criada pelo usuário | **DELETE '/urls/:id'**
  - Abrir um url encurtada | **POST '/urls/open/:shortUrl'**
  - Ver dados métricas do usuário | **GET '//users/:id'**
  - Ver o ranking de usuários com mais views | **GET '/ranking'**

<a href="https://api-shortly.herokuapp.com/">![Deploy](https://img.shields.io/badge/Deploy-430098?style=for-the-badge&logo=googlecloud&logoColor=white)</a>

<!-- CONTACT -->

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Email][slack-shield]][slack-url]

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: [https://www.linkedin.com/in/nivaldofarias/](https://www.linkedin.com/in/victorlimah/)
[slack-shield]: https://img.shields.io/badge/Email-DB4A39?style=for-the-badge&logo=gmail&logoColor=white
[slack-url]: mailto:victor.lima@dcx.ufpb.br
