const express = require("express");
const app = express();
const port = 9000;
const router = require("./router/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");
var cors = require('cors')

const customCors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
};

app.use(customCors);

app.options('/your_problematic_route', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.sendStatus(200);
});

//app.options('/carrinhos', cors({
//  allowedHeaders: ['Content-Type']
//}));

app.use(cors());
router(app, express);
tabelas.init(conexao)




app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro")
        return;
    }
    console.log("Subiu")
});