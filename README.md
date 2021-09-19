# Desafio-Final-Cappacita-dev
WIP, Desafio final da ultima etapa do curso cappacita-dev 2021
------------------------------------------------------------------------------------------------
### 1.Instalação:

    npm install --save 

### Mysql:

#### Mysql parte 1:
Esse projeto usa o Mysql para manter registro do tráfego como um exemplo de uso da plataforma Knex, para isso é preciso ter um schema "movie_db" com o seguinte comando:

    CREATE SCHEMA `movie_db

#### Mysql parte 2:
Agora é preciso criar a seguinte tabela 'movies' com os campos: 'id_acesso' 'search_term' 'movie_click' 'on_create'

    CREATE TABLE `movie_dba`.`movies` (
  `id_acesso` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `search_term` VARCHAR(45) NULL DEFAULT NULL,
  `movie_click` INT NULL DEFAULT NULL,
  `on_create` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_acesso`));


### 3.Criar um arquivo '.env' com a sua chave de api:

    ex:
    API_KEY=SUAcHAVEdEaPIaQUI

### 4.Abrir a url no seu navegador:

    http://localhost:3003/index.html

# Obrigado!

## 5. TODO:
    adicionar página de retorno de estatísticas de navegação