const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const atual = document.getElementById('atual');
const temperatura = document.getElementById('temperatura');

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const apiKey = 'b60be7941bdf80361cd5c66c74dc0bb7'; // Substitua com a sua chave de API da OpenWeatherMap
const latitude = -18.9113; // Substitua com a latitude da sua localização
const longitude = -48.2622; // Substitua com a longitude da sua localização

const relogio = setInterval(function time() {
    let dateToday = new Date();

    const hj = dateToday.getDate();
    const me = dateToday.getMonth() + 1;
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

    // Chamada à API da OpenWeatherMap para obter a temperatura
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Supondo que a temperatura esteja disponível no campo 'main.temp'
            temperatura.textContent = `Temperatura: ${data.main.temp} °C`;
        })
        .catch(error => {
            console.error('Erro ao obter temperatura:', error);
        });
}, 1000);  // Atualiza a cada 1000 milissegundos (1 segundo)
