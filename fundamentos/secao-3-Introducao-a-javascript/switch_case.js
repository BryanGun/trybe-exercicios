let statusProcessoSeletivo = "aprovada";

switch (statusProcessoSeletivo){
    case "aprovada":
        console.log("Parabéns, você está no grupo de pessoas aprovadas!");
        break;
    case "reprovada":
        console.log("Infelizmente, você reprovou.");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera.");
        break;
    default:
        console.log("informacao incorreta");
}