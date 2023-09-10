
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//GET
app.get('/api/rota-get', (req, res)=> {
    res.json({mensagem: 'O metodo GET esta rodando'});
});

//POST
app.post('/api/rota-post', (req, res) => {

    const { nome } = req.body;
    if (!nome) {
      return res.status(400).json({ erro: 'O campo "nome" é obrigatório.' });
    }
  
    res.json({ mensagem: `Olá, ${nome}! Esta é uma resposta da rota POST.` });
  });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
  