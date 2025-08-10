 // Função para carregar filmes da API
        window.onload = function() {
            fetch('/api/filmes')
                .then(response => response.json())
                .then(filmes => {
                    mostrarFilmes(filmes);
                    atualizarVotosTotais(filmes);
                })
                .catch(error => {
                    console.error('Erro ao carregar filmes:', error);
                });
        };

        // Função para exibir os filmes na página e os votos de cada um
        function mostrarFilmes(filmes) {
            const areaVotoUnitario = document.getElementById('areaVotoUnitario');
            areaVotoUnitario.innerHTML = '';

            filmes.forEach(filme => {
                const itemVotoUnitario = document.createElement('div');
                itemVotoUnitario.classList.add('itemVotoUnitario', 'flex', 'column');

                itemVotoUnitario.innerHTML = `
                    <p class="tituloItemVotoUnitario">${filme.titulo}</p>
                    <div class="areaVotosItemUnitario flex">
                        <div class="votosGosteiUnitario">Gostei: ${filme.gostei}</div>
                        <div class="votosNaoGosteiUnitario">Não Gostei: ${filme.naogostei}</div>
                    </div>
                `;

                areaVotoUnitario.appendChild(itemVotoUnitario);
            });
        }

        // Função para atualizar os votos totais (soma dos votos de todos os filmes)
        function atualizarVotosTotais(filmes) {
            const votosGosteiTotal = filmes.reduce((total, filme) => total + filme.gostei, 0);
            const votosNaoGosteiTotal = filmes.reduce((total, filme) => total + filme.naogostei, 0);

            // Atualiza os votos totais no HTML
            document.getElementById('votosGosteiTotal').textContent = `Gostei: ${votosGosteiTotal}`;
            document.getElementById('votosNaoGosteiTotal').textContent = `Não gostei: ${votosNaoGosteiTotal}`;
        }