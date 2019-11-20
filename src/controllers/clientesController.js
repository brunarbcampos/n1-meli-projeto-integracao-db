const Clientes = require('../model/clientes');

//Post - adicionar novo cliente
exports.post = (req, res) => {
  let clientes = new Clientes(req.body);

  clientes.save(function (err) {
    if (err) res.status(500).send(err);
    else {
      res.status(201).send({
        status: true,
        mensagem: "Cliente incluído com sucesso!"
      });
    }
  })
}

//Get - ver clientes (todos)
exports.get = (req, res) => {
  Clientes.find(function (err, clientes) {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(clientes);
  })
}

exports.getCompradores = (req, res) => {
  Clientes.find({comprou: true}, function (err,clientes){
    if (err) res.status(500).send(err);
    
    const clientesRetorno = clientes.map(cliente => {
      return {
        nome: cliente.nome,
        email: cliente.email 
      }
    })
    res.status(200).send(clientesRetorno)
  })
}

exports.getCpf = (req, res) => {
  const cpf =  req.params.cpf;
  Clientes.find({ cpf }, function (err, cliente){
    if (err) res.status(500).send(err);
    res.status(200).send(cliente);
  })
}