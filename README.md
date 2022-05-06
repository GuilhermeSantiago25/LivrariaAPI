# Desenvolvimento de API REST em NodeJS
## Sobre o projeto :man_technologist:
O Projeto Final de Módulo 4 da Resilia consiste no desenvolvimento de uma API para uma Livraria. Nesse processo é obrigatório:
- Padrão MVC
- Verbos HTTP seguindo o padrão REST
- Implementação de todas as operações de CRUD
- Utilização do padrão de projeto (design pattern) DAO para abstração de transações no banco, com Promises

As rotas a serem desenvolvidas para as entidades são:
- Listagem de todos os registros
- Listagem de um único registro com base em um parâmetro de rota
- Inserção de um registro
- Modificação de um registro
- Deleção de um registro

## Status do projeto :white_check_mark:
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)

## Tecnologias utilizadas :computer:
- NodeJS
- JavaScript
- SQLite
- Insominia
- Heroku
- Metodologia ágil Kanban (Trello)

## Dependências necessárias :page_with_curl:
 As dependências para a execução da aplicação estão listadas [aqui](https://github.com/NiltonCortesJr/LivrariaAPI/blob/main/package.json)
```
"dependencies": {
    "axios": "^0.26.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.1",
    "path": "^0.12.7",
    "sqlite": "^4.1.1",
    "sqlite3": "^5.0.6"
  }
```

## Dependências de desenvolvimento :chart_with_upwards_trend:
As dependências necessárias para o ambiente de desenvolvimento da aplicação estão listadas [aqui](https://github.com/NiltonCortesJr/LivrariaAPI/blob/main/package.json)
```
"devDependencies": {
    "jest": "^28.0.3",
    "nodemon": "^2.0.16"
  }
```

## Inicialização da aplicação via terminal :arrow_forward:
Para iniciar a aplicação, é necessário rodar no terminal o seguinte comando:
```
npm start
```
Ao rodar o comando, a mensagem abaixo deverá aparecer:

⚠️ **Atenção:
A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, 
logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.**

![TerminalConectado](https://user-images.githubusercontent.com/88124966/167202571-16ace358-7623-46a2-870d-7af1f74248d9.png)



## Rotas configuradas neste projeto :chart_with_upwards_trend:


**Rotas da LivrariaAPI**

Indicada por cada entidade:
```
"/Clientes"
"/Informatica"
"/Livros"
"/Papelaria"
```
Para utilizar os verbos http em todas as rotas, utilize o Insominia, conforme o exemplo:

![Insomnia](https://user-images.githubusercontent.com/88124966/167205915-9f18d290-b336-43e7-86fc-ff2279f7f5e6.png)

▪️ Para listar todos os Livros, utilize o método GET no caminho: 
``` "url da api/Livros" ```


▪️ Para listar os Livros por Id , utilize o método GET no caminho: 
``` "url da api/Livros/id" ```

Neste exemplo o Id pesquisado será o 2:

   ``` 
   {
     "id":2
   } 
   ```

▪️ Para inserir Livros, utilize o método POST no caminho: 
``` "url da api/Livros" ```

```
{
  "id": 100, 
  "nome":"Verity",
  "autora":"Colleen Hoover",
  "gênero": "romance",
  "valor": 32.90
}
```

▪️ Para atualizar Livros, utilize o método PUT no caminho: 
``` "url da api/Livros/id" ```

```
{
  "id": 100, 
  "nome":"Novembro 9",
  "autora":"Colleen Hoover",
  "gênero": "romance",
  "valor": 32.90
}
```

▪️ Para deletar Livros por Id, utilize o método DEL no caminho: 
``` "url da api/Livros/id" ```

```
{
  "id": 100
}
```

## Comandos utilizando o Insomnia (*) 

(*)Para que funcione as Request's, é necessário instalar o aplicativo Insominia no computador local. Escolha a melhor maneira de instalá-lo de acordo com as instruções no site: [Insomnia](https://insomnia.rest)

Para carregar as Request's no Insomnia, clique no botão abaixo, depois clique para abrir o Insomnia.aap e siga as instruções para carregar as request's.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=LivrariaAPIMod4&uri=https%3A%2F%2Fraw.githubusercontent.com%2FNiltonCortesJr%2FLivrariaAPI%2Fmain%2Fsrc%2Futils%2FInsomnia_LivrariaAPI.json)


## Autoria
:woman_technologist: [Izadora Ferreira dos Santos](https://www.linkedin.com/in/izadora-ferreira-dos-santos-0504b2177/)

:man_technologist: [José Camara Etchichury Filho](https://www.linkedin.com/in/jos%C3%A9-camara-etchichury-filho-95190a125/)

:man_technologist: [Vitor Luiz da Silva Del Duca](https://www.linkedin.com/in/vitor-del-duca-gestao-programacao-treinamento/)

:man_technologist: [Nilton Cortes Junior](https://www.linkedin.com/in/niltoncjr/)

🇧🇷

  
