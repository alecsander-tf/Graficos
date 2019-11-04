/**
 * 
 * @param {Object, gráfico que será atualizado} chart 
 * @param {*String, valor X que será atualizado} label 
 * @param {*Valor para ser atualizado} data 
 * @param {*int, linha que será buscada para ser atualizada} linha 
 */
function addData(chart, label, data, linha) {
    //chart.data.labels.push(label);// Adiciona a linha X do gráfico
    chart.data.datasets[linha].data.push(data)
    chart.update();
}

function removeData(chart, linha) {
    chart.data.datasets[linha].data.pop();
    chart.update();
}