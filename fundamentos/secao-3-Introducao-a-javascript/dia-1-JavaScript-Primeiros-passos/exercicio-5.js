let a = 80;
let b = 70;
let c = 30;

let somaAngulos = a + b + c;

let anguloValido = a > 0 && b > 0 && c > 0;

if (anguloValido) {
    if (somaAngulos === 180) {
        console.log (true);
    } else {
        console.log (false);
    }

} else {
    console.log ("Erro")
}