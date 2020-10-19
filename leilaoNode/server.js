const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());



var lances = []

exists = a => {
    var contador = 0

    lances.map( lance => {
        if( lance.valor == a){
            contador++
            return true
        }
    })

    if(contador > 1){
    	return true;
    }
    else{
    	return false
    }
}
 
app.get("/lance", function(req, res) {

        const repetidas = []
        lances.sort((a,b) => parseFloat(a.valor) - parseFloat(b.valor) );
        lances.map( (lance, index) => {
            if(exists(lance.valor)){
                repetidas.push(index)
                lances.push(lance)
            }
        })
        for (let index = repetidas.length ; index > 0; index--) {
            lances.splice(repetidas[index-1],1)
        }        
        return res.json(lances)
});
app.post("/lance", function(req, res){

        const lance  = {nome : req.body.nome, valor : req.body.valor}
        lances.push(lance)
        return res.json(lance);
    
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));