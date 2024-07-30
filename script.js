const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPergunta = document.querySelector(".caixa-pergunta");

const caixaalternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");


const pergunta = [
{
enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
alternativas: [
"Isso é assustador!",
"Isso é maravilhoso!"
],
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
function mostrapergunta() {
perguntaAtual = pergunta[atual];
caixaPergunta.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}

function mostraAlternativa() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document. createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click",
function () {
atual++;
mostraPergunta();
});
caixaAlternativas.appendChild(botaoAlternativas);
}
}
