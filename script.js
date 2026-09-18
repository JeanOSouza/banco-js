let saldo = 1000;

//no do while, se a variavel nao for global, ela nao é acessada pelo while
let opcao;
do {
  opcao = Number(
    prompt(
      "=== BANCO ===\n" +
        "1 - Sacar\n" +
        "2 - Depositar\n" +
        "3 - Consultar saldo\n" +
        "4 - Sair\n" +
        "Digite a operação desejada:",
    ),
  );
  switch (opcao) {
    case 1:
      saque();
      break;
    case 2:
      depositar();
      break;
    case 3:
      console.log(saldo);
      break;
    case 4:
      console.log(`You're out`);
      break;

    //caso haja opções invalidas, entra no defalt e retorna erro
    default:
      alert("Digite uma opção valida");
  }
  console.log(opcao);
} while (opcao !== 4);
{
}

function depositar() {
  let valorDeposito = Number(prompt("Qual valor deseja depositar na conta"));
  saldo += valorDeposito;
  console.log("Novo saldo é", saldo);
}

function saque() {
  let valorSaque = Number(prompt("Qual valor deseja sacar hoje "));
  if (valorSaque <= saldo) {
    saldo -= valorSaque;
    console.log(saldo);
  } else {
    console.log("Você não possui saldo suficiente");
  }
}
