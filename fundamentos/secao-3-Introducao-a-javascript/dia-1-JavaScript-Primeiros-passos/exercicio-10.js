let valorCusto = 1;
let valorVenda = 3;

if (valorCusto >= 0 && valorVenda >= 0) {
    let valorCustoTotal = valorCusto * 1.2;
    let lucroTotal = (valorVenda - valorCustoTotal);
    console.log(lucroTotal);
} else {
    console.log("Erro");
}