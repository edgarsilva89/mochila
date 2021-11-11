
function trazerDados(req, res) {
    res.json([
    {
        id: 153,
        nome: 'Edgar',
        email: 'edgarsilva89@gmail.com',
        senha: '123'
    },
    {
        id: 154,
        nome: 'Guilherme',
        email: 'guilherme@gmail.com',
        senha: '123'
    }
    ])
}


function inserirDados(req, res) {
    //controller
    //processo de cadatrar dados no banco de dados
    console.log(req.body)
    res.send('Ok, minha rota retornou isto.'+ req.body.email)
    //controller
}

function alterarDados(req, res){
    console.log(req.body)
    console.log(req.params)
    res.send('ok, minha rota retornou isso')
}

function deletarDados(req, res){
    console.log(req.params)
    res.send('ok, minha rota retornou isso')
}



module.exports = {
    trazerDados,
    inserirDados,
    alterarDados,
    deletarDados
}