let pecaXadrez = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei - Pode mover-se em qualquer direção, porém apenas uma casa por vez');
    break;
  case 'bispo':
    console.log('Bispo - Move-se na diagonal, quantas casas quiser.');
    break;
  case 'rainha':
    console.log('Rainha - Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
    break;
  case 'cavalo':
    console.log('Cavalo - É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.');
    break;
  case 'torre':
    console.log('Torre -> Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
    break;
  case 'peão':
    console.log('Peão -> Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro.');
    break;
  default:
    console.log('Erro');
};