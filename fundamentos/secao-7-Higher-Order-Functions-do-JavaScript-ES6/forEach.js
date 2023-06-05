//exibe todos os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const enviaEmail = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
};

emailListInData.forEach((element) => {
  enviaEmail(element);
});
