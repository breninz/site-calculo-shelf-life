function calcularShelfLife() {
    // Obter as datas dos campos de entrada
    const dataFabricacao = new Date(document.getElementById("dataFabricacao").value);
    const dataValidade = new Date(document.getElementById("dataValidade").value);

    // Calcular a diferença em milissegundos
    const diferencaMs = dataValidade - dataFabricacao;

    // Converter a diferença para dias
    const umDiaEmMs = 1000 * 60 * 60 * 24;
    const shelfLifeDias = Math.floor(diferencaMs / umDiaEmMs);

    // Exibir o resultado
    document.getElementById("resultadoShelfLife").innerText = `Shelf Life: ${shelfLifeDias} dias.`;
}

function calcularPorcentagem() {
    // Obter as datas dos campos de entrada
    const dataFabricacao = new Date(document.getElementById("dataFabricacao").value);
    const dataValidade = new Date(document.getElementById("dataValidade").value);
    const hoje = new Date();

    // Calcular o Shelf Life total e o tempo decorrido
    const shelfLifeTotalMs = dataValidade - dataFabricacao;
    const tempoDecorridoMs = hoje - dataFabricacao;

    // Calcular a porcentagem consumida e restante
    const porcentagemConsumida = (tempoDecorridoMs / shelfLifeTotalMs) * 100;
    const porcentagemRestante = 100 - porcentagemConsumida;

    // Exibir o resultado
    document.getElementById("resultadoPorcentagem").innerText =
        `Shelf Life consumido: ${porcentagemConsumida.toFixed(2)}%\n` +
        `Shelf Life restante: ${porcentagemRestante.toFixed(2)}%`;
}

function limpar() {
        // Resetar campos de data
    document.getElementById("dataFabricacao").value = "";
    document.getElementById("dataValidade").value = "";
    
        // Limpar resultados
    document.getElementById("resultadoShelfLife").textContent = "";
    document.getElementById("resultadoPorcentagem").textContent = "";
}
