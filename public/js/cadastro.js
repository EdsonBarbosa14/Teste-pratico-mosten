// Função para capturar os dados do formulário e enviar para o backend
function cadastrarFilme() {
    const titulo = document.getElementById('tituloID').value;
    const genero = document.getElementById('generoID').value;
    const descricao = document.getElementById('descricaoID').value;
    const imagem = document.getElementById('imagemID').value;

    if (!titulo || !genero || !descricao || !imagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const filmeData = {
        titulo: titulo,
        genero: genero,
        descricao: descricao,
        imagem: imagem,
        gostei: 0,
        naogostei: 0
    };

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
