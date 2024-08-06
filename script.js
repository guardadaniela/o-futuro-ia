const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPergunta = document.querySelector(".caixa-pergunta");

const caixaalternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");


const pergunta = [
{
enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
alternativas: [
{ texto: "Isso é assustador!",
afirmacao: "afirmação"
},
{ texto: "Isso é maravilhoso!",
afirmacao: "afirmação"
}
]
},
{
enunciado: "Pergunta 2",
alternativas: [
"Alternativa 1",
"Alternativa 2"
],
},
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativa() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document. createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", function () {
atual++;
mostraPergunta();
});
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + "";
atual++;
mostraPergunta();
}

mostrapergunta();
function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
