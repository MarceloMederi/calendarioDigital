// Seleção de elementos HTML
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const atual = document.getElementById('atual');
const temperatura = document.getElementById('temperatura');
const cidade = document.getElementById('cidade');

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Configurações para a API OpenWeatherMap
const apiKey = 'b60be7941bdf80361cd5c66c74dc0bb7'; // Substitua com a sua chave de API da OpenWeatherMap
const latitude = -18.9113; // Substitua com a latitude da sua localização
const longitude = -48.2622; // Substitua com a longitude da sua localização

// Função que atualiza a hora e faz chamada à API periodicamente
const relogio = setInterval(function time() {
    // Obtenção da data e hora atual
    let dateToday = new Date();

    // Extração de dia, mês e ano
    const hj = dateToday.getDate();
    const me = dateToday.getMonth() + 1;
    const an = dateToday.getFullYear();

    const presente = dateToday;

    // Extração de horas, minutos e segundos
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    // Formatação para garantir dois dígitos
    if (me < 10) me = '0' + me;
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    // Atualização dos elementos HTML com data e hora
    dia.textContent = hj;
    mes.textContent = me;
    ano.textContent = an;

    // Formatação do dia da semana
    const options = { weekday: 'long' };
    const dataFormatada = presente.toLocaleDateString('pt-BR', options);
    const dataFormatadaCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    
    // Atualização do elemento HTML com o dia da semana
    atual.textContent = dataFormatadaCapitalizada;

    // Atualização dos elementos HTML com a hora
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    // Chamada à API da OpenWeatherMap para obter a temperatura
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Extração do nome da cidade e temperatura
            const nomeCidade = data.name;
            const temperaturaTexto = `${data.main.temp} °C`;

            // Atualização do elemento HTML com o nome da cidade e temperatura
            cidade.textContent = `${nomeCidade} - ${temperaturaTexto}`;
        })
        .catch(error => {
            // Exibição de mensagem de erro no console em caso de falha na chamada à API
            console.error('Erro ao obter temperatura:', error);
        });
}, 1000);
