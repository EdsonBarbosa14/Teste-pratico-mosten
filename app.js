const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Endpoint para obter os filmes
app.get('/api/filmes', (req, res) => {
  fs.readFile('./filmes.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo JSON');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint para votar em um filme
app.post('/api/voto', (req, res) => {
  const { id, tipo } = req.body;

  fs.readFile('./filmes.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo JSON');
      return;   
    }

    let filmes = JSON.parse(data);
    const filme = filmes.find(f => f.id === id);

    if (filme) {
      if (tipo === 'gostei') {
        filme.gostei++;
      } else if (tipo === 'naogostei') {
        filme.naogostei++;
      }

      fs.writeFile('./filmes.json', JSON.stringify(filmes, null, 2), 'utf-8', (err) => {
        if (err) {
          res.status(500).send('Erro ao salvar o arquivo JSON');
          return;
        }
        res.json(filme);
      });
    } else {
      res.status(404).send('Filme não encontrado');
    }
  });
});

app.post('/api/cadastro', (req, res) => {
  const novoFilme = req.body;

  fs.readFile('./filmes.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo JSON');
      return;
    }

    let filmes = JSON.parse(data);

    // Adiciona o novo filme à lista de filmes JSON
    novoFilme.id = filmes.length + 1;
    filmes.push(novoFilme);

    fs.writeFile('./filmes.json', JSON.stringify(filmes, null, 2), 'utf-8', (err) => {
      if (err) {
        res.status(500).send('Erro ao salvar o arquivo JSON');
        return;
      }
      res.json({ success: true });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/pages/index.html`);
});
