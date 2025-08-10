// Fun��o para capturar os dados do formulário e enviar para o backend
function cadastrarFilme() {
    // Captura os dados dos inputs
    const titulo = document.getElementById('tituloID').value;
    const genero = document.getElementById('generoID').value;
    const descricao = document.getElementById('descricaoID').value;
    const imagem = document.getElementById('imagemID').value;

    // Verificar se todos os campos foram preenchidos
    if (!titulo || !genero || !descricao || !imagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Dados a serem enviados
    const filmeData = {
        titulo: titulo,
        genero: genero,
        descricao: descricao,
        imagem: imagem,
        gostei: 0,
        naogostei: 0
    };

    // Envia os dados para a API
    fetch('/api/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filmeData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Filme cadastrado com sucesso!");
            // Limpar os campos do formulário
            document.getElementById('tituloID').value = '';
            document.getElementById('generoID').value = '';
            document.getElementById('descricaoID').value = '';
            document.getElementById('imagemID').value = '';
        } else {
            alert("Erro ao cadastrar o filme.");
        }
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        alert("Erro ao cadastrar o filme.");
    });
}
