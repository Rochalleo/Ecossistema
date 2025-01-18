# Ecossistema Virtual

Este é um projeto simples que simula um ecossistema virtual onde criaturas interagem, se movimentam, consomem energia e se reproduzem. A simulação é feita em Python, enquanto a interface visual para visualizar o progresso é desenvolvida em HTML e JavaScript.

## Tecnologias Utilizadas
- **Python**: Para simular o comportamento das criaturas e salvar o estado de cada rodada.
- **HTML** e **JavaScript**: Para criar uma visualização interativa das criaturas e seus movimentos no ecossistema.

## Estrutura do Projeto
- `virtual_ecosystem.py`: Script Python que realiza a simulação e salva os estados em arquivos JSON.
- `ecosystem_viewer.html`: Página HTML para exibir o ecossistema no navegador.
- `ecosystem_viewer.js`: Lógica JavaScript para renderizar o ecossistema no canvas.
- `estado_rodada_X.json`: Arquivos JSON que armazenam o estado do ecossistema após cada rodada.

## Como Rodar o Projeto
1. Execute o script Python para gerar os arquivos JSON:
   ```bash
   python virtual_ecosystem.py
   ```
2. Inicie um servidor local (recomendado):
   ```bash
   python -m http.server
   ```
3. Abra o arquivo `ecosystem_viewer.html` no navegador acessando `http://localhost:8000`.
4. Use os botões de navegação para visualizar diferentes rodadas do ecossistema.

## Próximas atualizações  
- Adicionar mais comportamentos às criaturas, como predação ou formação de grupos.
- Melhorar os gráficos e interatividade da interface.
- Implementar outras formas de evolução no ecossistema.

Divirta-se explorando o mundo virtual das criaturas!
@Rochalleo
