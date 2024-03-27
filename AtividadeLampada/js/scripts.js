// let led = "ligar";
// const ligar = () => {
//   let btnEnviar = document.getElementById("btnEnviar");
//   let imgLampada = document.getElementById("lampada");
//   if (led == "ligar") {
//     imgLampada.src = "img/acesa.jpg";

//     btnEnviar.innerHTML = "Apagar";
//     led = "apagar";
//   } else {
//     imgLampada.src = "img/apagada.jpg";
//     imgLampada.alt = "Lampada apagada";

//     btnEnviar.innerHTML = "Acender";
//     led = "ligar";
//   }
// };

let led = "ligar";


const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //valor informado pelo usuario

  console.log(qtdImagem);

  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";

  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens" src="img/acesa.jpg" alt="">`;
  }
};

const calcular = () => {
  let inperDesc = document.getElementById("inPercDesc");
  let inValorPedido = document.getElementById("inValorPedido").value;
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  //recebendo ou injetando valor

  // if (inValorPedido.value >= 2000) {
  // inperDesc.value = 1.5; //recebendo ou ejetanta valor
  // inValDesc.value = inValorPedido.value * 0.015;
  // inValFinal.value = inValorPedido.value - inValDesc.value;
  // } else if (inValorPedido.value >= 1500) {
  // inperDesc.value = 1.0;
  // inValDesc.value = inValorPedido.value * 0.010;
  // inValFinal.value = inValorPedido.value - inValDesc.value;
  //}else if (inValorPedido.value >= 1000) {
  //inperDesc.value = 0.8;
  // inValDesc.value = inValorPedido.value * 0.08;
  // inValFinal.value = inValorPedido.value - inValDesc.value;
  //}else if (inValorPedido.value >= 500) {
  //inperDesc.value = 0.5;
  // inValDesc.value = inValorPedido.value * 0.05;
  // inValFinal.value = inValorPedido.value - inValDesc.value;
  //}
  // inValDesc.value = inValorPedido.value * (inperDesc.value / 100);
  //  inValFinal.value = inValorPedido.value - inValDesc.value;
  // };

  //mesmo caso so que em switch

  switch (true) {
    case inValorPedido >= 2000:
      inperDesc.value = 1.5;
      break;
    case inValorPedido >= 1500:
      inperDesc.value = 1.0;
      break;
    case inValorPedido >= 1000:
      inperDesc.value = 0.8;
      break;
    case inValorPedido >= 500:
      inperDesc.value = 0.5;
      break;
  }
  inValDesc.value = inValorPedido * (inperDesc.value / 100);
  inValFinal.value = inValorPedido - inValDesc.value;
};
//div- caixa pra eu colocar coisa la dentro

// let msgErro = document.getElementById("mensagem-erro")
// msgErro.style.display = "none"
// msgErro.innerText = ""

const validaForm = () => {
  //captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inval = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  //validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "nome do cliente com tamanho inválido <br>"); // . length tamanho
  inFone == "" && (msgErro.innerHTML += "telefone inválido <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválido <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail inválido <br>");
  inProd.length > 6 && (msgErro.innerHTML += "Produto inválido <br>");
  inQtd == "" && (msgErro.innerHTML += "Qtde inválido <br>");
  inQtd < 0 && (msgErro.innerHTML += "Qtde negativo <br>");
  inval == "" && (msgErro.innerHTML += "valor inválido <br>");
  inval < 0 && (msgErro.innerHTML += "valor negativo <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : ((msgErro.style.display = "block"),msgErro.classList.remove("verde"));//lista dos class

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};
