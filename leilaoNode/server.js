const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());



var lances = []

exists = a => {
    var counter = 0
    lances.map( e => {
        if( e.valor == a){
            counter++
            return
        }
    })

    return counter >= 2 ? true : false 

}
 
app.get("/lance", function(req, res) {

        //array que informa as posições repetidas
        const i = []

        //ordena o array em ordem crescente
        lances.sort((a,b) => parseFloat(a.valor) - parseFloat(b.valor) );

        //percorre o vetor de lances
        lances.map( (l, index) => {
            //caso exista um elemento repetido, ele é inserido ao final da lista e é adicionado o indice do elemento corrente no array de posições repetidas
            if(exists(l.valor)){
                i.push(index)
                lances.push(l)
            }
        })

        //aqui eu retiro todos os elementos usando os indices adicionados no vetor de posições repetidas
        for (let index = i.length ; index > 0; index--) {
            lances.splice(i[index-1],1)
        }
        //depois de todos esses passo eu já tenho meu vetor devidamente ordenado, onde a primeira posição eu terei quem está vencendo no leilão
        
        return res.json(lances)
        

});
app.post("/lance", function(req, res){
        const { nome, valor } = req.body;
        const lance  = {nome : nome, valor : valor}
        lances.push(lance)
        return res.json(lance);
    
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));