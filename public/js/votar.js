 // Função para carregar filmes da API
        window.onload = function() {
            fetch('/api/filmes')
                .then(response => response.json())
                .then(filmes => {
                    mostrarFilmes(filmes);
                })
                .catch(error => {
                    console.error('Erro ao carregar filmes:', error);
                });
        };

        // Função para exibir os filmes na página
        function mostrarFilmes(filmes) {
            const areaVotacao = document.getElementById('areaVotacao');
            areaVotacao.innerHTML = '';

            filmes.forEach(filme => {
                const itemVotacao = document.createElement('div');
                itemVotacao.classList.add('itemVotacao', 'flex', 'column');

                itemVotacao.innerHTML = `
                    <p class="tituloItem">${filme.titulo}</p>
                    <div class="imgItem" style="background-image: url(${filme.imagem})"></div>
                    <p class="generoItem">Gênero: ${filme.genero}</p>
                    <p class="descricaoItem">${filme.descricao}</p>

                    <div class="botoesItem flex">
                        <button class="btnVotacaoGostei" onclick="votacao(${filme.id}, 'gostei')">Gostei</button>
                        <button class="btnVotacaoNaoGostei" onclick="votacao(${filme.id}, 'naogostei')">Não Gostei</button>
                    </div>
                `;

                areaVotacao.appendChild(itemVotacao);
            });
        }

        function votacao(filmeId, tipo) {
            fetch('/api/voto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: filmeId, tipo: tipo })
            })
            .then(response => response.json())
            .then(filme => {
                alert(`Voto registrado: ${tipo} para o filme ${filme.titulo}`);
                location.reload();
            })
            .catch(error => {
                console.error('Erro ao registrar voto:', error);
            });
        }