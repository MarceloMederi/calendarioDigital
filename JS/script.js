// Seleção de elementos HTML
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const atual = document.getElementById('semana');
const cidade = document.getElementById('cidade');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const temperatura = document.getElementById('temperatura');
const umidade = document.getElementById('umidade');

// Configurações para a API OpenWeatherMap
const apiKey = 'b60be7941bdf80361cd5c66c74dc0bb7';
const latitude = -18.9113;
const longitude = -48.2622;

// Função que atualiza a hora e faz chamada à API periodicamente
const relogio = setInterval(function time() {
    let dateToday = new Date();
    const hj = dateToday.getDate();
    let me = dateToday.getMonth() + 1;
    const an = dateToday.getFullYear();
    const presente = dateToday;

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (me < 10) me = '0' + me;
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    dia.textContent = hj;
    mes.textContent = me;
    ano.textContent = an;

    const options = { weekday: 'long' };
    const dataFormatada = presente.toLocaleDateString('pt-BR', options);
    const dataFormatadaCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    atual.textContent = dataFormatadaCapitalizada;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    // Função que busca dados da previsão do tempo
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const nomeCidade = data.name;
            const temperaturaTexto = `${data.main.temp} °C`;
            const umidadeTexto = `${data.main.humidity}%`;

            cidade.textContent = `${nomeCidade} - ${temperaturaTexto}`;
            umidade.textContent = `Umidade: ${umidadeTexto}`;
        })
        .catch(error => {
            console.error('Erro ao obter temperatura e umidade:', error);
        });
}, 1000);
