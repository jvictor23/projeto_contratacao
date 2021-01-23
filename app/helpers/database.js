var pg = require('pg');
/*String de conexao com o banco de dados*/
var conString = "postgres://postgres:root@localhost:5432/p_contratacao";

var pool = new pg.Pool({
    connectionString: conString
});

/*Banco de dados realizando conexao*/
pool.on('connect',()=>{
    console.log("Banco conectado");
});

/*exportando campo das queries*/
module.exports={
    query:(text,params) => pool.query(text,params)
}
  