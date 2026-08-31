/* =====================================================
   QUARTO 8
   A COLHEITA DE FOGO E SANGUE
   AJ WEB STUDIO
===================================================== */

/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const CONFIG = {
  totalPerguntas: 8,

  siteUrl: "https://colheitadefogoesanguequiz.vercel.app",

  whatsappUrl: "https://wa.me/?text=",

  tempoRevelacao: 2800,
};

/* =====================================================
   PERSONAGENS
===================================================== */

const personagens = {
  calliandra: {
    nome: "Calliandra",

    simbolo: "🔥",

    frase: "Sua chama nunca se apaga.",

    descricao:
      "Você possui coragem, determinação e um coração que enfrenta desafios mesmo quando tudo parece perdido.",

    imagem: "assets/calliandra.png",
  },

  narela: {
    nome: "Narela",

    simbolo: "🌙",

    frase: "Existe força naquilo que poucos conseguem enxergar.",

    descricao:
      "Sua sensibilidade e inteligência fazem você encontrar caminhos onde outros não conseguem ver.",

    imagem: "assets/narela.png",
  },

  aster: {
    nome: "Aster",

    simbolo: "🌿",

    frase: "Mesmo em terras difíceis, novas raízes podem nascer.",

    descricao:
      "Você valoriza conexões, equilíbrio e a força construída junto daqueles que ama.",

    imagem: "assets/aster.png",
  },

  lenora: {
    nome: "Lenora",

    simbolo: "⚔️",

    frase: "A coragem transforma medo em movimento.",

    descricao:
      "Você é intensa, determinada e luta pelo que acredita sem desistir facilmente.",

    imagem: "assets/lenora.png",
  },
};

/* =====================================================
   PERGUNTAS
===================================================== */

const perguntas = [

  {
    pergunta: "Qual é a sua cor favorita de vestido?",

    respostas: [
      {
        texto: "Rosa",

        personagem: "calliandra",
      },

      {
        texto: "Amarelo",

        personagem: "narela",
      },

      {
        texto: "Azul",

        personagem: "aster",
      },

      {
        texto: "Lilás",

        personagem: "lenora",
      },
    ],
  },

  {
    pergunta: "O mundo está acabando, e existe uma única possibilidade de vencer no final. Qual é a sua reação? ",

    respostas: [
      {
        texto: "Vamos lutar!",

        personagem: "calliandra",
      },

      {
        texto: "Eba vamos vencer!",

        personagem: "narela",
      },

      {
        texto: "Vamos morrer, e eu serei a primeira",

        personagem: "aster",
      },

      {
        texto: "Podemos ganhar, quero acreditar que vamos",

        personagem: "lenora",
      },
    ],
  },

  {
    pergunta:
      "Quando os tempos ficam difíceis, qual dessas frases mais combina com você?",

    respostas: [

      {
        texto:
          "Eu vou lutar até o meu último sopro de vida.",
        personagem: "calliandra",
      },

      {
        texto:
          "Eu tenho fé de que, no final, tudo vai dar certo.",
        personagem: "narela",
      },

      {
        texto:
          "Eu sei que posso encontrar uma solução, mas confesso que o medo aparece quando tudo fica difícil.",
        personagem: "aster",
      },

      {
        texto:
          "Eu só consigo acreditar que vai dar certo quando finalmente vejo tudo se encaminhando.",
        personagem: "lenora",
      },

    ],
  },

  {
    pergunta: "Quando surge um grande desafio, você costuma...",

    respostas: [
      {
        texto: "Agir rapidamente e confiar na Providência.",

        personagem: "calliandra",
      },

      {
        texto: "Procurar quem precisa de ajuda.",

        personagem: "narela",
      },

      {
        texto: "Observar primeiro e pensar em uma estratégia.",

        personagem: "aster",
      },

      {
        texto: "Enfrentar de frente, mesmo com medo.",

        personagem: "lenora",
      },
    ],
  },

  {
    pergunta: "O que mais importa para você?",

    respostas: [
      {
        texto: "Liberdade e determinação.",

        personagem: "calliandra",
      },

      {
        texto: "Amizade e lealdade.",

        personagem: "narela",
      },

      {
        texto: "Conhecimento e compreensão.",

        personagem: "aster",
      },

      {
        texto: "Coragem para seguir em frente.",

        personagem: "lenora",
      },
    ],
  },

  {
    pergunta: "Qual palavra combina mais com você?",

    respostas: [
      {
        texto: "Coragem",

        personagem: "calliandra",
      },

      {
        texto: "Esperança",

        personagem: "narela",
      },

      {
        texto: "Determinação",

        personagem: "aster",
      },

      {
        texto: "Resiliência",

        personagem: "lenora",
      },
    ],
  },

  {
    pergunta: "Em um grupo, você geralmente é...",

    respostas: [
      {
        texto: "Quem toma iniciativa.",

        personagem: "calliandra",
      },

      {
        texto: "Quem mantém todos unidos.",

        personagem: "narela",
      },

      {
        texto: "Quem percebe detalhes.",

        personagem: "aster",
      },

      {
        texto: "Quem inspira os outros.",

        personagem: "lenora",
      },
    ],
  },

  {
    pergunta: "Qual cenário parece mais com você?",

    respostas: [
      {
        texto: "Uma chama iluminando a escuridão.",

        personagem: "calliandra",
      },

      {
        texto: "Uma noite cheia de estrelas.",

        personagem: "narela",
      },

      {
        texto: "Uma floresta antiga.",

        personagem: "aster",
      },

      {
        texto: "Uma batalha ao amanhecer.",

        personagem: "lenora",
      },
    ],
  },
];


/* =====================================================
   ESTADO DO QUIZ
===================================================== */

let perguntaAtual = 0;

let pontuacao = {
  calliandra: 0,

  narela: 0,

  aster: 0,

  lenora: 0,
};

let personagemEscolhida = null;

let respostaSelecionada = false;

let transicaoEmAndamento = false;

/*
  Controlador da máquina de escrever.

  Esse valor impede que uma animação
  antiga continue escrevendo enquanto
  uma nova pergunta já foi carregada.
*/

let digitacaoTimer = null;

let digitacaoId = 0;

/* =====================================================
   ELEMENTOS
===================================================== */

const home = document.getElementById("home");

const quiz = document.getElementById("quiz");

const result = document.getElementById("result");

const questionCard = document.getElementById("question-card");

const questionText = document.getElementById("question-text");

const answers = document.getElementById("answers");

const questionNumber = document.getElementById("question-number");

const progressFill = document.getElementById("progress-fill");

const revealLoading = document.getElementById("reveal-loading");

const resultSymbol = document.getElementById("result-symbol");

const resultImage = document.getElementById("result-image");

const resultName = document.getElementById("result-name");

const resultPhrase = document.getElementById("result-phrase");

const resultDescription = document.getElementById("result-description");

const storyImage = document.getElementById("story-image");

const storyName = document.getElementById("story-name");

const storyDescription = document.getElementById("story-description");

/* =====================================================
   TROCA DE TELA
===================================================== */

function mostrarTela(tela) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  tela.classList.add("active");
}

/* =====================================================
   CANCELAR MÁQUINA DE ESCREVER
===================================================== */

function cancelarDigitacao() {
  /*
    Cancela o timer atual.
  */

  if (digitacaoTimer !== null) {
    clearTimeout(digitacaoTimer);

    digitacaoTimer = null;
  }

  /*
    Invalida qualquer execução
    anterior da animação.
  */

  digitacaoId++;
}

/* =====================================================
   INICIAR QUIZ
===================================================== */

function startQuiz() {
  /*
    Garante que nenhuma animação
    antiga ficou ativa.
  */

  cancelarDigitacao();

  perguntaAtual = 0;

  pontuacao = {
    calliandra: 0,

    narela: 0,

    aster: 0,

    lenora: 0,
  };

  personagemEscolhida = null;

  respostaSelecionada = false;

  transicaoEmAndamento = false;

  revealLoading.classList.remove("active");

  revealLoading.setAttribute("aria-hidden", "true");

  mostrarTela(quiz);

  carregarPergunta();
}

/* =====================================================
   MÁQUINA DE ESCREVER
===================================================== */

function escreverPergunta(texto) {
  /*
    Cancela qualquer pergunta
    que ainda esteja sendo digitada.
  */

  cancelarDigitacao();

  /*
    Cria uma identificação exclusiva
    para esta animação.
  */

  const idAtual = digitacaoId;

  /*
    Limpa completamente o título
    antes de começar.
  */

  questionText.textContent = "";

  let indice = 0;

  /*
    Velocidade da máquina de escrever.

    Quanto menor o número,
    mais rápida fica a animação.
  */

  const velocidade = 32;

  function escrever() {
    /*
      Se uma nova animação começou,
      esta foi cancelada.
    */

    if (idAtual !== digitacaoId) {
      return;
    }

    /*
      Ainda existem caracteres
      para escrever.
    */

    if (indice < texto.length) {
      questionText.textContent += texto.charAt(indice);

      indice++;

      digitacaoTimer = setTimeout(escrever, velocidade);

      return;
    }

    /*
      Terminou a pergunta.
    */

    digitacaoTimer = null;
  }

  escrever();
}

/* =====================================================
   CARREGAR PERGUNTA
===================================================== */

function carregarPergunta() {
  respostaSelecionada = false;

  transicaoEmAndamento = false;

  const pergunta = perguntas[perguntaAtual];

  /*
    Atualiza contador.
  */

  questionNumber.textContent = `Pergunta ${perguntaAtual + 1} de ${
    CONFIG.totalPerguntas
  }`;

  /*
    Atualiza barra de progresso.
  */

  progressFill.style.width = `${
    ((perguntaAtual + 1) / CONFIG.totalPerguntas) * 100
  }%`;

  /*
    Remove respostas antigas.
  */

  answers.innerHTML = "";

  /*
    Inicia a máquina de escrever
    SOMENTE para a pergunta atual.
  */

  escreverPergunta(pergunta.pergunta);

  /*
    Cria as respostas.
  */

  pergunta.respostas.forEach((resposta) => {
    criarResposta(resposta);
  });
}

/* =====================================================
   CRIAR RESPOSTA
===================================================== */

function criarResposta(resposta) {
  const button = document.createElement("button");

  button.type = "button";

  button.className = "answer";

  button.textContent = resposta.texto;

  button.addEventListener("click", () => {
    selecionarResposta(button, resposta.personagem);
  });

  answers.appendChild(button);
}

/* =====================================================
   SELECIONAR RESPOSTA
===================================================== */

function selecionarResposta(botao, personagem) {
  /*
    Impede múltiplos cliques.
  */

  if (respostaSelecionada || transicaoEmAndamento) {
    return;
  }

  respostaSelecionada = true;

  /*
    Destaca a resposta escolhida.
  */

  botao.classList.add("selected");

  /*
    Desativa todas as respostas
    enquanto ocorre a transição.
  */

  document.querySelectorAll(".answer").forEach((answer) => {
    answer.disabled = true;
  });

  /*
    Soma o ponto.
  */

  pontuacao[personagem]++;

  /*
    Pequeno intervalo para o
    usuário perceber a seleção.
  */

  setTimeout(() => {
    proximaEtapa();
  }, 500);
}

/* =====================================================
   PRÓXIMA ETAPA
===================================================== */

function proximaEtapa() {
  /*
    Cancela imediatamente a
    máquina de escrever anterior.

    Isso é importante porque a pessoa
    pode ter clicado antes do título
    terminar de aparecer.
  */

  cancelarDigitacao();

  perguntaAtual++;

  /*
    Ainda existem perguntas?
  */

  if (perguntaAtual < CONFIG.totalPerguntas) {
    trocarPergunta();

    return;
  }

  /*
    Acabaram as perguntas.
  */

  iniciarRevelacao();
}

/* =====================================================
   TRANSIÇÃO ENTRE PERGUNTAS
===================================================== */

function trocarPergunta() {
  transicaoEmAndamento = true;

  questionCard.classList.add("fade-out");

  setTimeout(() => {
    /*
        Segurança extra:
        se a tela mudou nesse intervalo,
        não continua a animação.
      */

    if (!quiz.classList.contains("active")) {
      return;
    }

    questionCard.classList.remove("fade-out");

    carregarPergunta();
  }, 350);
}

/* =====================================================
   DESCOBRIR VENCEDORA
===================================================== */

function descobrirResultado() {
  return Object.keys(pontuacao).reduce((anterior, atual) => {
    if (pontuacao[atual] > pontuacao[anterior]) {
      return atual;
    }

    return anterior;
  });
}

/* =====================================================
   LOADING / REVELAÇÃO
===================================================== */

function iniciarRevelacao() {
  if (transicaoEmAndamento) {
    return;
  }

  transicaoEmAndamento = true;

  /*
    Cancela qualquer digitação
    que ainda esteja acontecendo.
  */

  cancelarDigitacao();

  /*
    Descobre a personagem.
  */

  personagemEscolhida = personagens[descobrirResultado()];

  /*
    Remove a tela do quiz.
  */

  quiz.classList.remove("active");

  /*
    Ativa a tela de loading
    com a cauda do dragão.
  */

  revealLoading.classList.add("active");

  revealLoading.setAttribute("aria-hidden", "false");

  /*
    Aguarda o tempo da revelação
    antes de mostrar o resultado.
  */

  setTimeout(() => {
    mostrarResultado();
  }, CONFIG.tempoRevelacao);
}

/* =====================================================
   MOSTRAR RESULTADO
===================================================== */

function mostrarResultado() {
  revealLoading.classList.remove("active");

  revealLoading.setAttribute("aria-hidden", "true");

  /*
    Símbolo da personagem.
  */

  resultSymbol.textContent = personagemEscolhida.simbolo;

  /*
    Imagem.
  */

  resultImage.src = personagemEscolhida.imagem;

  resultImage.alt = `Ilustração de ${personagemEscolhida.nome}`;

  /*
    Nome.
  */

  resultName.textContent = personagemEscolhida.nome;

  /*
    Frase.
  */

  resultPhrase.textContent = personagemEscolhida.frase;

  /*
    Descrição.
  */

  resultDescription.textContent = personagemEscolhida.descricao;

  /*
    Prepara o card vertical
    para Instagram Stories.
  */

  prepararStoryCard();

  /*
    Mostra o resultado.
  */

  mostrarTela(result);

  transicaoEmAndamento = false;
}

/* =====================================================
   PREPARAR STORY CARD
===================================================== */

function prepararStoryCard() {
  if (!personagemEscolhida) {
    return;
  }

  storyImage.src = personagemEscolhida.imagem;

  storyImage.alt = "";

  storyName.textContent = personagemEscolhida.nome.toUpperCase();

  storyDescription.textContent = personagemEscolhida.frase;
}

/* =====================================================
   SALVAR RESULTADO
===================================================== */

async function saveResult() {
  if (!personagemEscolhida) {
    return;
  }

  prepararStoryCard();

  const card = document.getElementById("story-card");

  try {
    /*
      Gera exatamente no tamanho
      de um Instagram Story.
    */

    const canvas = await html2canvas(card, {
      width: 1080,

      height: 1920,

      scale: 1,

      useCORS: true,

      backgroundColor: "#090606",
    });

    /*
      Cria o arquivo.
    */

    const link = document.createElement("a");

    link.download = `quarto-8-${personagemEscolhida.nome.toLowerCase()}.png`;

    link.href = canvas.toDataURL("image/png");

    link.click();
  } catch (error) {
    console.error("Erro ao gerar imagem:", error);

    alert("Não foi possível gerar a imagem agora. Tente novamente.");
  }
}

/* =====================================================
   COMPARTILHAMENTO
===================================================== */

async function shareResult() {
  if (!personagemEscolhida) {
    return;
  }

  /*
    Texto utilizado no compartilhamento.
  */

  const texto = `Eu descobri que sou ${personagemEscolhida.nome} 🌾🔥

A Providência revelou meu caminho no Quarto 8.

Qual garota do Quarto 8 você é?

${CONFIG.siteUrl}`;

  /*
    Compartilhamento nativo.

    Em celulares compatíveis,
    abre o menu nativo do aparelho.
  */

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Qual garota do Quarto 8 você é?",

        text: texto,

        url: CONFIG.siteUrl,
      });

      return;
    } catch (error) {
      /*
        Se a pessoa fechou o menu
        de compartilhamento,
        não fazemos nada.
      */

      if (error.name === "AbortError") {
        return;
      }
    }
  }

  /*
    Fallback para WhatsApp.

    Caso o navegador não tenha
    navigator.share(), abrimos
    automaticamente o WhatsApp.
  */

  const whatsappUrl = CONFIG.whatsappUrl + encodeURIComponent(texto);

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/* =====================================================
   RECOMEÇAR
===================================================== */

function restartQuiz() {
  /*
    Cancela qualquer máquina de
    escrever que ainda esteja ativa.
  */

  cancelarDigitacao();

  perguntaAtual = 0;

  pontuacao = {
    calliandra: 0,

    narela: 0,

    aster: 0,

    lenora: 0,
  };

  personagemEscolhida = null;

  respostaSelecionada = false;

  transicaoEmAndamento = false;

  /*
    Fecha o loading.
  */

  revealLoading.classList.remove("active");

  revealLoading.setAttribute("aria-hidden", "true");

  /*
    Volta para a home.
  */

  mostrarTela(home);

  /*
    Volta para o topo.
  */

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}

/* =====================================================
   PREVENIR SCROLL DURANTE REVELAÇÃO
===================================================== */

function atualizarScrollRevelacao(ativo) {
  document.body.style.overflow = ativo ? "hidden" : "";
}

/* =====================================================
   OBSERVAR REVELAÇÃO
===================================================== */

const revealObserver = new MutationObserver(() => {
  atualizarScrollRevelacao(revealLoading.classList.contains("active"));
});

revealObserver.observe(revealLoading, {
  attributes: true,

  attributeFilter: ["class"],
});

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  mostrarTela(home);
});
