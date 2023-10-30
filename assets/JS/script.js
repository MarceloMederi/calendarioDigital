const dia = document.getElementById('dia');
const data = document.getElementById('mes');
const ano = document.getElementById('ano');

const atual = document.getElementById('atual');

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hj = dateToday.getDate();
    let me = dateToday.getMonth() + 1;
    let an = dateToday.getFullYear();

    let presente = dateToday;

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(me <10) me = '0' + me;
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    
    dia.textContent = hj;
    mes.textContent = me;
    ano.textContent = an;

    const options = { weekday: 'long' }; // 'long' para obter o dia da semana por extenso
    const dataFormatada = presente.toLocaleDateString('pt-BR', options);

    // Capitalize a primeira letra da dataFormatada
    const dataFormatadaCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    
    atual.textContent = dataFormatadaCapitalizada;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
});

