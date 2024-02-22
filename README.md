# Calendário Digital

Bem-vindo ao Calendário Digital, um projeto simples e elegante desenvolvido em HTML, CSS e JavaScript. Este calendário não é apenas uma ferramenta para acompanhar datas; é uma experiência interativa que oferece informações úteis, desde a data e hora atuais até detalhes climáticos específicos para a cidade que você escolher.
#
# Notas Importantes
* Certifique-se de ter uma conexão com a Internet para obter informações climáticas em tempo real.

* As informações climáticas são fornecidas pela OpenWeatherMap API. Adicione sua chave de API no arquivo script.js: const apiKey = 'sua_chave_aqui';.

* O mapa é fornecido pela Leaflet. Personalize-o conforme necessário consultando a documentação do Leaflet.

* Este projeto utiliza o servidor web Nginx em um contêiner Docker. Certifique-se de ter o Docker instalado em seu ambiente.
#
# Funcionalidades
* Título Cativante: No topo da página, o título "CALENDÁRIO DIGITAL" dá as boas-vindas de maneira marcante e atraente.

* Campo de Cidade Intuitivo: Insira o nome de uma cidade no campo de entrada e experimente as informações personalizadas.

* Atualizações em Tempo Real: A data, o dia da semana e a hora são exibidos com atualizações automáticas, mantendo você sempre informado.

* Informações Climáticas Detalhadas: Descubra a temperatura e a umidade da cidade escolhida, fornecidas pela API da OpenWeatherMap.

* Mapa Interativo: Explore a localização da cidade em um mapa interativo, proporcionando uma experiência visual envolvente.
#
# Pré-requisitos
Conexão com a Internet: Garanta uma conexão ativa para receber informações climáticas em tempo real.
#
# Configuração e Instalação
Com o Git bash instalado, obtenha o script calDin.sh (Digite o comando abaixo no Git bash):

* *curl -O https://raw.githubusercontent.com/MarceloMederi/calendarioDigital/main/calDin.sh*

Execute o script para montar o contêiner (Digite o comando abaixo no Git bash):

* *./calDin.sh*

Acesse o Calendário Digital em http://localhost:8080 no seu navegador.
#
# Estrutura do Projeto
* HTML (index.html): Estrutura da página web.
* CSS (style.css): Estilos para uma apresentação visual atraente.
* JavaScript (script.js): Lógica de programação para interatividade e obtenção de informações.
#
# Dependências Externas
Leaflet: Biblioteca JavaScript para mapas interativos.
* https://leafletjs.com/reference.html

Luxon: Biblioteca JavaScript para manipulação de datas e horas. 
* https://moment.github.io/luxon/#/?id=luxon
