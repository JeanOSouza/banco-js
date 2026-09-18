const consultaSaldo = document.querySelector(".consultaSaldo");
const sacar = document.querySelector(".sacar");
const deposito = document.querySelector(".deposito");
const sair = document.querySelector(".sair");
const mensagens = document.querySelector(".mensagens");
const valores = document.querySelector(".valores");

const saldoDisponivel = document.querySelector(".saldoDisponivel");
let saldo = 100;

//Consutar saldo

consultaSaldo.addEventListener("click", function (e) {
  saldoDispo();
});
function saldoDispo() {
  saldoDisponivel.textContent = `Saldo disponivel : R$ ${saldo}`;
}

//Funções para sacar
sacar.addEventListener("click", function (e) {
  inputSaque();
});

function inputSaque() {
  //criando input
  const novoInput = document.createElement("input");
  novoInput.placeholder = "Qual valor deseja sacar";
  valores.append(novoInput);

  //criar botao
  const btnSubmitt = document.createElement("button");
  btnSubmitt.textContent = "Enviar";
  valores.appendChild(btnSubmitt);

  btnSubmitt.addEventListener("click", function () {
    let valorSaque = Number(novoInput.value);

    saque(valorSaque);
  });
}

function saque(valorSaque) {
  if (valorSaque <= saldo && valorSaque > 0) {
    saldo -= valorSaque;
    saldoDisponivel.textContent = `Saldo disponivel: R$ ${saldo}`;
  } else if (valorSaque > saldo) {
    saldoDisponivel.textContent = `Você não possui saldo suficiente, seu saldo é de ${saldo}`;
    mensagens.textContent = "Tente Novamente!!";
  } else {
    saldoDisponivel.textContent = "Valor invalido";
  }
}

//Funções para depositar
deposito.addEventListener("click", inputDeposito);

function inputDeposito() {
  const novoInput = document.createElement("input");
  novoInput.placeholder = "Qual valor deseja depositar";
  valores.append(novoInput);

  const btnSubmitt = document.createElement("button");
  btnSubmitt.textContent = "Depositar";
  valores.append(btnSubmitt);

  btnSubmitt.addEventListener("click", function () {
    let valorDeposito = Number(novoInput.value);
    depositar(valorDeposito);
  });
}

// if de forma ternaria
function depositar(valorDeposito) {
  valorDeposito > 0 ?
    (saldoDisponivel.textContent = `Saldo disponivel : R$ ${(saldo += valorDeposito)}`)
  : (saldoDisponivel.textContent = "Deposite um valor valido");
}
