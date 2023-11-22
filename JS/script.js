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

const apiKey = 'b60be7941bdf80361cd5c66c74dc0bb7';

const debounce = function (func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            func.apply(this, args);
        }, delay);
    };
};

const buscarFusoHorario = async function (cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`);
        const data = await response.json();
        return data.timezone; // Retorna o deslocamento de tempo em segundos
    } catch (error) {
        console.error('Erro ao obter fuso horário:', error);
        return 0; // Retorna 0 em caso de erro
    }
};

const buscarPrevisaoTempo = async function (cidade) {
    try {
        const fusoHorario = await buscarFusoHorario(cidade);

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const nomeCidade = data.name;
        const temperaturaTexto = `${data.main.temp} °C`;
        const umidadeTexto = `${data.main.humidity}%`;

        const horaLocal = luxon.DateTime.utc().plus({ seconds: fusoHorario });
        let horasAtual = horaLocal.hour;
        let minutosAtual = horaLocal.minute;
        let segundosAtual = horaLocal.second;

        if (horasAtual < 10) horasAtual = '0' + horasAtual;
        if (minutosAtual < 10) minutosAtual = '0' + minutosAtual;
        if (segundosAtual < 10) segundosAtual = '0' + segundosAtual;

        cidadeElement.textContent = `${nomeCidade} - ${temperaturaTexto}`;
        umidadeElement.textContent = `Umidade: ${umidadeTexto}`;
        horas.textContent = `${horasAtual}:${minutosAtual}:${segundosAtual}`;

        // Chama a função para atualizar a data
        atualizarData(horaLocal);

    } catch (error) {
        console.error('Erro ao obter temperatura e umidade:', error);
    }
};

// Função para atualizar a data
function atualizarData(data) {
    const diaDoMes = data.day;
    const mesAtual = data.month;
    const anoAtual = data.year;
    const presente = data;

    dia.textContent = diaDoMes;
    mes.textContent = mesAtual;
    ano.textContent = anoAtual;

    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaDaSemana = diasDaSemana[presente.weekday - 1];

    atual.textContent = diaDaSemana;
}

cidadeInput.addEventListener('input', debounce(function () {
    const cidadeDigitada = cidadeInput.value;
    if (cidadeDigitada.trim() !== '') {
        buscarPrevisaoTempo(cidadeDigitada);
    }
}, 500));

const relogio = setInterval(function () {
    // Chama a função para buscar a previsão do tempo e ajustar a hora
    const cidadeDigitada = cidadeInput.value;
    if (cidadeDigitada.trim() !== '') {
        buscarPrevisaoTempo(cidadeDigitada);
    }
}, 1000);
