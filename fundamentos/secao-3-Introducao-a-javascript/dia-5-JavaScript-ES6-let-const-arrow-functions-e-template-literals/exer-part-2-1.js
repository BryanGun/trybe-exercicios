const liga_desliga = (statusMotor) => {
  statusMotor = statusMotor === 'desligado' ? 'ligado' : 'desligado';
  console.log(`O motor está ${statusMotor}`);
  return statusMotor;
}