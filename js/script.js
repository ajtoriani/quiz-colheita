

const CONFIG = {
  
  totalPerguntas: 8,
  siteUrl: "https://quizcolheitadefogoesangue.vercel.app/",

  whatsappUrl: "https://wa.me/?text=",
  tempoRevelacao: 2800,
  velocidadeDigitacao: 32,
};

/* ==
   PERSONAGENS
=== */

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
    pergunta:
      "O mundo está acabando, e existe uma única possibilidade de vencer no final. Qual é a sua reação?",

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
        texto: "Eu vou lutar até o meu último sopro de vida.",

        personagem: "calliandra",
      },

      {
        texto: "Eu tenho fé de que, no final, tudo vai dar certo.",

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

/*
  Garante que o número configurado
  corresponda ao número real de perguntas.

  Assim, quando Sara e Any adicionarem
  ou removerem perguntas, o quiz acompanha.
*/

CONFIG.totalPerguntas = perguntas.length;

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

/* =====================================================
   ESTADO DA MÁQUINA DE ESCREVER
===================================================== */

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
  if (digitacaoTimer !== null) {
    clearTimeout(digitacaoTimer);

    digitacaoTimer = null;
  }

  /*
    Invalida a animação anterior.
  */

  digitacaoId++;
}

/* =====================================================
   INICIAR QUIZ
===================================================== */

function startQuiz() {
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

  if (revealLoading) {
    revealLoading.classList.remove("active");

    revealLoading.setAttribute("aria-hidden", "true");
  }

  mostrarTela(quiz);

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });

  carregarPergunta();
}

/* =====================================================
   MÁQUINA DE ESCREVER
===================================================== */

function escreverPergunta(texto) {
  cancelarDigitacao();

  const idAtual = digitacaoId;

  questionText.textContent = "";

  let indice = 0;

  function escrever() {
    /*
      Cancela se uma nova pergunta
      já começou.
    */

    if (idAtual !== digitacaoId) {
      return;
    }

    /*
      Ainda existem caracteres.
    */

    if (indice < texto.length) {
      questionText.textContent += texto.charAt(indice);

      indice++;

      digitacaoTimer = setTimeout(
        escrever,

        CONFIG.velocidadeDigitacao,
      );

      return;
    }

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

  if (!pergunta) {
    return;
  }

  /*
    Atualiza contador.
  */

  questionNumber.textContent = `Pergunta ${perguntaAtual + 1} de ${CONFIG.totalPerguntas}`;

  /*
    Atualiza progresso.
  */

  progressFill.style.width = `${((perguntaAtual + 1) / CONFIG.totalPerguntas) * 100}%`;

  /*
    Limpa respostas anteriores.
  */

  answers.innerHTML = "";

  /*
    Máquina de escrever.
  */

  escreverPergunta(pergunta.pergunta);

  /*
    Cria novas respostas.
  */

  pergunta.respostas.forEach(criarResposta);
}

/* =====================================================
   CRIAR RESPOSTA
===================================================== */

function criarResposta(resposta) {
  const button = document.createElement("button");

  button.type = "button";

  button.className = "answer";

  button.textContent = resposta.texto;

  button.setAttribute("aria-label", resposta.texto);

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
    Destaca a resposta.
  */

  botao.classList.add("selected");

  /*
    Desativa todas as respostas.
  */

  document.querySelectorAll(".answer").forEach((answer) => {
    answer.disabled = true;
  });

  /*
    Soma o ponto.
  */

  if (Object.prototype.hasOwnProperty.call(pontuacao, personagem)) {
    pontuacao[personagem]++;
  }

  /*
    Pequeno intervalo
    para visualizar a seleção.
  */

  setTimeout(() => {
    proximaEtapa();
  }, 500);
}

/* =====================================================
   PRÓXIMA ETAPA
===================================================== */

function proximaEtapa() {
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
    Terminou o quiz.
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
      Se a tela mudou,
      interrompe.
    */

    if (!quiz.classList.contains("active")) {
      return;
    }

    questionCard.classList.remove("fade-out");

    carregarPergunta();
  }, 350);
}

/* =====================================================
   DESCOBRIR RESULTADO
===================================================== */

function descobrirResultado() {
  const personagensComMaiorPontuacao = Object.keys(pontuacao);

  return personagensComMaiorPontuacao.reduce((anterior, atual) => {
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

  cancelarDigitacao();

  /*
    Descobre a personagem.
  */

  const resultado = descobrirResultado();

  personagemEscolhida = personagens[resultado];

  /*
    Remove quiz.
  */

  quiz.classList.remove("active");

  /*
    Ativa loading.
  */

  if (revealLoading) {
    revealLoading.classList.add("active");

    revealLoading.setAttribute("aria-hidden", "false");
  }

  /*
    Bloqueia scroll.
  */

  atualizarScrollRevelacao(true);

  /*
    Aguarda a animação
    do dragão.
  */

  setTimeout(() => {
    mostrarResultado();
  }, CONFIG.tempoRevelacao);
}

/* =====================================================
   MOSTRAR RESULTADO
===================================================== */

function mostrarResultado() {
  if (!personagemEscolhida) {
    return;
  }

  /*
    Fecha loading.
  */

  if (revealLoading) {
    revealLoading.classList.remove("active");

    revealLoading.setAttribute("aria-hidden", "true");
  }

  atualizarScrollRevelacao(false);

  /*
    Símbolo.
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
    Prepara Story.
  */

  prepararStoryCard();

  /*
    Mostra resultado.
  */

  mostrarTela(result);

  transicaoEmAndamento = false;

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
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
   GERAR CANVAS DO RESULTADO
===================================================== */

async function gerarImagemResultado() {
  if (!personagemEscolhida) {
    return null;
  }

  prepararStoryCard();

  const card = document.getElementById("story-card");

  if (!card) {
    throw new Error("Story card não encontrado.");
  }

  /*
    Garante que a imagem da personagem
    esteja carregada antes do canvas.
  */

  if (storyImage && !storyImage.complete) {
    await new Promise((resolve) => {
      storyImage.onload = resolve;

      storyImage.onerror = resolve;
    });
  }

  const canvas = await html2canvas(card, {
    width: 1080,

    height: 1920,

    scale: 1,

    useCORS: true,

    allowTaint: false,

    backgroundColor: "#090606",
  });

  return canvas;
}

/* =====================================================
   SALVAR RESULTADO
===================================================== */

async function saveResult() {
  if (!personagemEscolhida) {
    return;
  }

  try {
    const canvas = await gerarImagemResultado();

    if (!canvas) {
      throw new Error("Canvas não foi gerado.");
    }

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
   TEXTO DE COMPARTILHAMENTO
===================================================== */

function criarMensagemCompartilhamento() {
  if (!personagemEscolhida) {
    return "";
  }

  return `Eu tirei a ${personagemEscolhida.nome}! 🔥

E qual garota do Quarto 8 você seria?

Descubra no quiz de A Colheita de Fogo e Sangue 🌾

${CONFIG.siteUrl}`;
}

/* =====================================================
   COMPARTILHAMENTO
   IMAGEM + TEXTO + LINK
===================================================== */

async function shareResult() {
  if (!personagemEscolhida) {
    return;
  }

  const texto = criarMensagemCompartilhamento();

  /*
    ==================================================
    TENTA GERAR A IMAGEM PRIMEIRO
    ==================================================
  */

  let arquivoImagem = null;

  try {
    const canvas = await gerarImagemResultado();

    if (canvas) {
      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/png");
      });

      if (blob) {
        arquivoImagem = new File(
          [blob],

          `quarto-8-${personagemEscolhida.nome.toLowerCase()}.png`,

          {
            type: "image/png",
          },
        );
      }
    }
  } catch (error) {
    console.warn(
      "Não foi possível preparar a imagem para compartilhamento.",
      error,
    );
  }

  /*
    ==================================================
    COMPARTILHAMENTO NATIVO
    ==================================================
  */

  if (navigator.share) {
    try {
      /*
        Primeiro tenta compartilhar
        IMAGEM + TEXTO + LINK.
      */

      if (
        arquivoImagem &&
        navigator.canShare &&
        navigator.canShare({
          files: [arquivoImagem],
        })
      ) {
        await navigator.share({
          title: `Eu tirei a ${personagemEscolhida.nome}!`,

          text: texto,

          files: [arquivoImagem],
        });

        return;
      }

      /*
        Caso o navegador não permita
        arquivos, compartilha pelo menos
        texto + link.
      */

      await navigator.share({
        title: `Eu tirei a ${personagemEscolhida.nome}!`,

        text: texto,

        url: CONFIG.siteUrl,
      });

      return;
    } catch (error) {
      /*
        Se a pessoa simplesmente fechou
        o menu de compartilhamento,
        não abrimos o WhatsApp.
      */

      if (error && error.name === "AbortError") {
        return;
      }

      console.warn("Compartilhamento nativo indisponível:", error);
    }
  }

  /*
    ==================================================
    FALLBACK PARA WHATSAPP
    ==================================================

    Se o navegador não suporta
    navigator.share(), o WhatsApp
    é aberto automaticamente.

    Como o WhatsApp não aceita
    uma imagem local gerada pelo
    navegador através de wa.me,
    enviamos a mensagem + link.
  */

  const whatsappUrl = CONFIG.whatsappUrl + encodeURIComponent(texto);

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/* =====================================================
   COPIAR RESULTADO
   FALLBACK EXTRA
===================================================== */

async function copiarResultado() {
  if (!personagemEscolhida) {
    return;
  }

  const texto = criarMensagemCompartilhamento();

  try {
    await navigator.clipboard.writeText(texto);

    alert("Resultado copiado! Agora é só colar onde quiser. 🌾🔥");
  } catch (error) {
    console.error("Erro ao copiar:", error);
  }
}

/* =====================================================
   RECOMEÇAR
===================================================== */

function restartQuiz() {
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
    Fecha loading.
  */

  if (revealLoading) {
    revealLoading.classList.remove("active");

    revealLoading.setAttribute("aria-hidden", "true");
  }

  atualizarScrollRevelacao(false);

  /*
    Volta para home.
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

if (revealLoading) {
  const revealObserver = new MutationObserver(() => {
    atualizarScrollRevelacao(revealLoading.classList.contains("active"));
  });

  revealObserver.observe(revealLoading, {
    attributes: true,

    attributeFilter: ["class"],
  });
}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /*
      Garante que o número
      sempre acompanhe as perguntas.
    */

  CONFIG.totalPerguntas = perguntas.length;

  mostrarTela(home);

  atualizarScrollRevelacao(false);
});
