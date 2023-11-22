// Seleção de elementos HTML
const cidadeInput = document.getElementById('cidadeInput');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const atual = document.getElementById('semana');
const cidadeElement = document.getElementById('cidade');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const temperaturaElement = document.getElementById('temperatura');
const umidadeElement = document.getElementById('umidade');

// Configurações para a API OpenWeatherMap
const apiKey = 'b60be7941bdf80361cd5c66c74dc0bb7';

// Função de debounce para atrasar a execução da função de busca
const debounce = function (func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            func.apply(this, args);
        }, delay);
    };
};

// Função que busca dados da previsão do tempo com base na cidade digitada
const buscarPrevisaoTempo = async function (cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const nomeCidade = data.name;
        const temperaturaTexto = `${data.main.temp} °C`;
        const umidadeTexto = `${data.main.humidity}%`;

        cidadeElement.textContent = `${nomeCidade} - ${temperaturaTexto}`;
        umidadeElement.textContent = `Umidade: ${umidadeTexto}`;
    } catch (error) {
        console.error('Erro ao obter temperatura e umidade:', error);
    }
};

// Adiciona um evento de escuta ao input da cidade com debounce de 500 milissegundos
cidadeInput.addEventListener('input', debounce(function () {
    const cidadeDigitada = cidadeInput.value;
    if (cidadeDigitada.trim() !== '') {
        buscarPrevisaoTempo(cidadeDigitada);
    }
}, 500));

// Função que atualiza a hora e faz chamada à API periodicamente
const relogio = setInterval(function time() {
    const dateToday = new Date();
    const diaDoMes = dateToday.getDate();
    let mesAtual = dateToday.getMonth() + 1;
    const anoAtual = dateToday.getFullYear();
    const presente = dateToday;

    let horasAtual = dateToday.getHours();
    let minutosAtual = dateToday.getMinutes();
    let segundosAtual = dateToday.getSeconds();

    if (mesAtual < 10) mesAtual = '0' + mesAtual;
    if (horasAtual < 10) horasAtual = '0' + horasAtual;
    if (minutosAtual < 10) minutosAtual = '0' + minutosAtual;
    if (segundosAtual < 10) segundosAtual = '0' + segundosAtual;

    dia.textContent = diaDoMes;
    mes.textContent = mesAtual;
    ano.textContent = anoAtual;

    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaDaSemana = diasDaSemana[presente.getDay()];

    atual.textContent = diaDaSemana;
    horas.textContent = horasAtual;
    minutos.textContent = minutosAtual;
    segundos.textContent = segundosAtual;

    // Restante do código para buscar temperatura e umidade pode ser mantido aqui

}, 1000);
