const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota/ Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET:Buscar/listar uma informação do back-end
  * POST:Criar uma informação no back-end
  * PUT:Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query: Parãmetros nomeados enviados na rota após o "?"  (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identicar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou utilizar recursos
   */

   /**
    * SQL: My SQL, SQLite, PostgreSQL, Oracle, Microsoft SQL sERVER
    * NoSQL: MongoDB, CouchDB, etc
    */

   /** Driver: SELECT + FROM userts
    * Query Builder: table('users').select(*).where()
    */


