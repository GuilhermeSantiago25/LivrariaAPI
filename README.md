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
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Tecnologias utilizadas :computer:
- NodeJS
- Insominia
- Postman
- JavaScript
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

![terminal](https://user-images.githubusercontent.com/88124966/167010269-416955d4-b140-4e09-aa2a-162dda9bf074.png)

## Comandos utilizando o Insomnia (*) :arrow_forward:
Neste repositório, há um arquivo chamado:  Insomnia_LivrariaAPI.yaml - no caminho: LivrariaAPI/src/utils - é necessário baixá-lo pra carregar as Request's para testar a criação, leitura, update e deleção de elementos da API.
➡️[clique aqui para acessar o arquivo](https://github.com/NiltonCortesJr/LivrariaAPI/blob/main/src/utils/Insomnia_LivrariaAPI.yaml) para acessá-lo e após salvar, abra o Insomnia, crie um novo Projeto, uma nova Collection, depois clique na Colletion criada e selecione: Import/Export - escolha o arquivo Insomnia_LivrariaAPI.yaml na pasta onde baixou o projeto e, siga as intruções do aplicativo para concluir o carregamento das Request's

(*)Para que funcione as Request`s, é necessário instalar o aplicativo Insominia no computador local. Escolha a melhor maneira de instalá-lo de acordo com as instruções no site: [Insomnia](https://insomnia.rest)

## Autoria
:woman_technologist: [Izadora Ferreira dos Santos](https://www.linkedin.com/in/izadora-ferreira-dos-santos-0504b2177/)

:man_technologist: [José Camara Etchichury Filho](https://www.linkedin.com/in/jos%C3%A9-camara-etchichury-filho-95190a125/)

:man_technologist: [Vitor Luiz da Silva Del Duca](https://www.linkedin.com/in/vitor-del-duca-gestao-programacao-treinamento/)

:man_technologist: [Nilton Cortes Junior](https://www.linkedin.com/in/niltoncjr/)

🇧🇷

  
