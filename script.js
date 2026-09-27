const consultaSaldo = document.querySelector(".consultaSaldo");
const sacar = document.querySelector(".sacar");
const deposito = document.querySelector(".deposito");
const sair = document.querySelector(".sair");
const mensagens = document.querySelector(".mensagens");
const valores = document.querySelector(".valores");
const saldoDisponivel = document.querySelector(".saldoDisponivel");
const historicoCampo = document.querySelector(".historicoCampo");

let saldo = 100;

let historicoSaldo = [];

//Consutar saldo

consultaSaldo.addEventListener("click", function (e) {
  saldoDispo();

  valores.textContent = "";
  createButton("Extrato", mostrarHistorico);
  createButton("Saque", mostrarSaques);
  createButton("Deposito", mostrarDepositos);
  createButton("Total", calcularTotais);
});

function createButton(nomeBotao, acao) {
  const buttonC = document.createElement("button");
  buttonC.textContent = nomeBotao;
  valores.appendChild(buttonC);

  buttonC.addEventListener("click", function () {
    console.log(`Cliquei em ${nomeBotao}`);
    acao();
  });
}

function saldoDispo() {
  saldoDisponivel.textContent = `Saldo disponivel : R$ ${saldo}`;
}

//Funções para sacar
sacar.addEventListener("click", function (e) {
  inputSaque();
});

function inputSaque() {
  valores.textContent = "";
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
  mensagens.textContent = "";
  if (valorSaque <= saldo && valorSaque > 0) {
    saldo -= valorSaque;
    historicoSaldo.push({ tipo: "saque", valor: valorSaque });
    saldoDisponivel.textContent = `Saldo disponivel: R$ ${saldo}`;
    mostrarHistorico();
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
  valores.textContent = "";
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
  if (valorDeposito > 0) {
    saldo += valorDeposito;
    saldoDisponivel.textContent = `Saldo disponivel : R$ ${saldo}`;
    historicoSaldo.push({ tipo: "deposito", valor: valorDeposito });
    mostrarHistorico();
  } else {
    saldoDisponivel.textContent = "Deposite um valor valido";
  }
}
//mostrar historico do saldo na tela

function mostrarHistorico() {
  historicoCampo.textContent = "";
  for (let histFunc of historicoSaldo) {
    const hist = document.createElement("p");
    historicoCampo.appendChild(hist);
    hist.textContent = `${histFunc.tipo}: R$ ${histFunc.valor}`;
  }
}

// mostrar apenas saques
function mostrarSaques() {
  historicoCampo.textContent = "";
  for (let histFunc of historicoSaldo) {
    if (histFunc.tipo === "saque") {
      const pElement = document.createElement("p");
      historicoCampo.append(pElement);
      pElement.textContent = `${histFunc.tipo}: R$ ${histFunc.valor}`;
    }
  }
}

//mostrar apenas depositos
function mostrarDepositos() {
  historicoCampo.textContent = "";
  for (let histFunc of historicoSaldo) {
    if (histFunc.tipo === "deposito") {
      const pElement = document.createElement("p");
      historicoCampo.append(pElement);
      pElement.textContent = `${histFunc.tipo}: R$ ${histFunc.valor}`;
    }
  }
}

//
function calcularTotais() {
  let totalDepositos = 0;
  let totalSaques = 0;
  let resultado = 0;
  historicoCampo.textContent = "";
  for (let histFunc of historicoSaldo) {
    if (histFunc.tipo === "deposito") {
      totalDepositos += histFunc.valor;
    }
    if (histFunc.tipo === "saque") {
      totalSaques += histFunc.valor;
    }
  }
  resultado = totalDepositos - totalSaques;
  //deposito
  const pElementDep = document.createElement("p");
  pElementDep.textContent = `Total deposito R$${totalDepositos}`;
  historicoCampo.append(pElementDep);
  //saque
  const pElementSaq = document.createElement("p");
  pElementSaq.textContent = `Total saque R$${totalSaques}`;
  historicoCampo.append(pElementSaq);
  //total
  const pElementTotal = document.createElement("p");
  pElementTotal.textContent = `Total R$${resultado}`;
  historicoCampo.append(pElementTotal);
}

//sairBanco

sair.addEventListener("click", function () {
  sairBtn();
});
function sairBtn() {
  mensagens.textContent = "Operação encerrada.";
}
