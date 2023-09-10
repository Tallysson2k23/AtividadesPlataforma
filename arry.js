

const pessoas = [
    { nome: "Tallysson", idade: 20, profissão: "Piloto", cidade: "Scc" },
    { nome: "Yen", idade: 25, profissão: "Engenheira", cidade: "Santa Cruz do Capibaribe" },
    { nome: "Maria", idade: 30, profissão: "Professora", cidade: "Caruaru" },
    { nome: "João", idade: 25, profissão: "Dentista", cidade: "Recife" }
  ];
  
  for (let i = 0; i < pessoas.length; i++) {
    console.log(`Pessoa ${i + 1}:`);
    for (let prop in pessoas[i]) {
      console.log(`${prop}: ${pessoas[i][prop]}`);
    }
    console.log('\n');
  }
  
  for (const pessoa of pessoas) {
    console.log(`Pessoa:`);
    for (let prop in pessoa) {
      console.log(`${prop}: ${pessoa[prop]}`);
    }
    console.log('\n');
  }
  