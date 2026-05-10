const games = [
  {
    title: "Animais da Arca",
    age: "3-5",
    description: "Charadas com animais",
    icon: "A",
    image: "assets/ark-hero.svg",
    progress: 72,
    level: "Fácil",
    screen: "play",
    featured: true
  },
  {
    title: "Memória da Bíblia",
    age: "3-5",
    description: "Pares de personagens",
    icon: "M",
    image: "assets/sheep.svg",
    progress: 48,
    level: "Fácil",
    screen: "memory",
    featured: true
  },
  {
    title: "Verdade ou Falso",
    age: "6-8",
    description: "Quiz bíblico leve",
    icon: "?",
    image: "assets/david.svg",
    progress: 20,
    level: "Médio",
    screen: "quiz",
    featured: true
  },
  {
    title: "Pintando a Arca",
    age: "3-5",
    description: "Desenhos para colorir",
    icon: "C",
    image: "assets/noah.svg",
    progress: 35,
    level: "Livre",
    screen: "paint",
    featured: true
  },
  {
    title: "Monte a História",
    age: "6-8",
    description: "Cenas na ordem certa",
    icon: "H",
    image: "assets/star-badge.svg",
    progress: 0,
    level: "Premium",
    screen: "miniGame",
    locked: true
  },
  {
    title: "Mapa dos Milagres",
    age: "6-8",
    description: "Encontre cenas de Jesus",
    icon: "M",
    image: "assets/story-rainbow.svg",
    progress: 0,
    level: "Premium",
    screen: "miniGame",
    locked: true
  },
  {
    title: "Versículo Secreto",
    age: "6-8",
    description: "Complete palavras bíblicas",
    icon: "V",
    image: "assets/star-badge.svg",
    progress: 0,
    level: "Premium",
    screen: "miniGame",
    locked: true
  },
  {
    title: "Triunfo Bíblico",
    age: "9-10",
    description: "Cartas de reis e profetas",
    icon: "T",
    image: "assets/david.svg",
    progress: 0,
    level: "Premium",
    screen: "miniGame",
    locked: true
  },
  {
    title: "Quiz dos Profetas",
    age: "9-10",
    description: "Perguntas de conhecimento",
    icon: "Q",
    image: "assets/noah.svg",
    progress: 12,
    level: "Médio",
    screen: "quiz",
    featured: true
  },
  {
    title: "Linha do Tempo",
    age: "9-10",
    description: "Organize eventos bíblicos",
    icon: "L",
    image: "assets/story-family.svg",
    progress: 0,
    level: "Premium",
    screen: "miniGame",
    locked: true
  },
  {
    title: "Desafio dos Reis",
    age: "9-10",
    description: "Estratégia e perguntas",
    icon: "R",
    image: "assets/david.svg",
    progress: 0,
    level: "Premium",
    screen: "miniGame",
    locked: true
  }
];

const animalRounds = [
  { prompt: "Toque no animal que tem tromba.", answer: "elefante", praise: "Muito bem. O elefante entrou na Arca." },
  { prompt: "Toque no animal que tem juba.", answer: "leao", praise: "Isso. O leão achou seu lugar." },
  { prompt: "Toque no animal que pula alto.", answer: "sapo", praise: "Acertou. O sapo pulou para dentro." },
  { prompt: "Toque no animal que tem casco.", answer: "tartaruga", praise: "Perfeito. A tartaruga chegou devagarinho." },
  { prompt: "Toque no animal que canta ao amanhecer.", answer: "galo", praise: "Parabéns. O galo completou a fase." }
];

const animals = [
  { id: "elefante", label: "Elefante", image: "assets/elephant.svg" },
  { id: "leao", label: "Leão", image: "assets/lion.svg" },
  { id: "sapo", label: "Sapo", image: "assets/frog.svg" },
  { id: "tartaruga", label: "Tartaruga", image: "assets/turtle.svg" },
  { id: "galo", label: "Galo", image: "assets/rooster.svg" },
  { id: "ovelha", label: "Ovelha", image: "assets/sheep-animal.svg" }
];

const quizItems = [
  { text: "Noé construiu uma arca.", answer: true, note: "Isso mesmo." },
  { text: "Davi venceu Golias com uma coroa.", answer: false, note: "Foi com uma pedra e sua funda." },
  { text: "Daniel orava a Deus.", answer: true, note: "Muito bem." },
  { text: "Jonas foi engolido por um grande peixe.", answer: true, note: "Acertou." }
];

const miniGameContent = {
  "Monte a História": {
    prompt: "Coloque as cenas da história em ordem.",
    options: ["Noé obedece", "A Arca fica pronta", "Os animais entram"],
    answer: "Noé obedece",
    success: "Muito bem. Primeiro Noé ouviu a Deus.",
    image: "assets/story-noah-build.svg"
  },
  "Mapa dos Milagres": {
    prompt: "Toque na cena que lembra um milagre de Jesus.",
    options: ["Tempestade calma", "Coroa do rei", "Cesta vazia"],
    answer: "Tempestade calma",
    success: "Isso. Jesus acalmou a tempestade.",
    image: "assets/story-rainbow.svg"
  },
  "Versículo Secreto": {
    prompt: "Complete a frase: Deus é...",
    options: ["amor", "medo", "pressa"],
    answer: "amor",
    success: "Acertou. Deus é amor.",
    image: "assets/star-badge.svg"
  },
  "Triunfo Bíblico": {
    prompt: "Escolha quem mostrou coragem diante de Golias.",
    options: ["Davi", "Jonas", "Noé"],
    answer: "Davi",
    success: "Correto. Davi confiou em Deus.",
    image: "assets/david.svg"
  },
  "Linha do Tempo": {
    prompt: "Qual história vem primeiro na Bíblia?",
    options: ["A criação", "Davi e Golias", "Daniel na cova"],
    answer: "A criação",
    success: "Muito bem. Deus criou todas as coisas.",
    image: "assets/story-family.svg"
  },
  "Desafio dos Reis": {
    prompt: "Quem pediu sabedoria a Deus?",
    options: ["Salomão", "Golias", "Faraó"],
    answer: "Salomão",
    success: "Isso. Salomão pediu sabedoria.",
    image: "assets/david.svg"
  }
};

const stories = [
  {
    title: "Noé prepara a Arca",
    tags: "obediência · cuidado · família",
    free: true,
    pages: [
      {
        title: "Noé prepara a Arca",
        text: "Noé ouviu a Deus e começou a preparar uma grande arca.",
        image: "assets/story-noah-build.svg",
        alt: "Noé construindo uma grande arca"
      },
      {
        title: "A família ajuda",
        text: "Ele chamou sua família e cuidou de cada parte com paciência.",
        image: "assets/story-family.svg",
        alt: "Família de Noé ajudando perto da arca"
      },
      {
        title: "Os animais entram",
        text: "Os animais entraram na arca, dois a dois, enquanto a chuva chegava.",
        image: "assets/story-animals-enter.svg",
        alt: "Animais entrando na arca"
      },
      {
        title: "Deus cuida de todos",
        text: "Deus cuidou de Noé, da família dele e de todos os animais.",
        image: "assets/story-rainbow.svg",
        alt: "Arca com arco-íris no céu"
      }
    ]
  },
  {
    title: "Davi e Golias",
    tags: "coragem · fé · confiança",
    free: true,
    pages: [
      {
        title: "Davi cuida das ovelhas",
        text: "Davi era jovem e cuidava das ovelhas com atenção.",
        image: "assets/david.svg",
        alt: "Davi cuidando das ovelhas"
      },
      {
        title: "Um desafio aparece",
        text: "Quando todos estavam com medo, Davi confiou em Deus.",
        image: "assets/story-family.svg",
        alt: "Davi diante de um desafio"
      },
      {
        title: "Coragem com fé",
        text: "Davi venceu Golias porque sabia que Deus estava com ele.",
        image: "assets/star-badge.svg",
        alt: "Selo de coragem"
      }
    ]
  },
  {
    title: "Daniel ora com fé",
    tags: "oração · constância · proteção",
    free: true,
    pages: [
      {
        title: "Daniel escolhe orar",
        text: "Daniel conversava com Deus todos os dias.",
        image: "assets/noah.svg",
        alt: "Personagem orando"
      },
      {
        title: "Deus protege Daniel",
        text: "Mesmo em um lugar perigoso, Daniel confiou no cuidado de Deus.",
        image: "assets/lion.svg",
        alt: "Leão lembrando a história de Daniel"
      },
      {
        title: "A fé continua",
        text: "Daniel nos lembra que podemos falar com Deus com confiança.",
        image: "assets/star-badge.svg",
        alt: "Selo de fé"
      }
    ]
  },
  {
    title: "Jonas e o grande peixe",
    tags: "obediência · segunda chance · missão",
    free: false,
    pages: [
      { title: "Jonas recebe uma missão", text: "Deus chamou Jonas para falar com uma cidade distante.", image: "assets/story-animals-enter.svg", alt: "Jonas iniciando uma missão" },
      { title: "Uma nova chance", text: "Jonas aprendeu que Deus dá novas oportunidades para obedecer.", image: "assets/star-badge.svg", alt: "Selo de nova chance" }
    ]
  },
  {
    title: "Moisés e o mar",
    tags: "livramento · coragem · liderança",
    free: false,
    pages: [
      { title: "Moisés guia o povo", text: "Moisés confiou em Deus e guiou o povo pelo caminho.", image: "assets/story-family.svg", alt: "Povo caminhando junto" },
      { title: "Deus abre caminho", text: "Quando parecia impossível, Deus abriu um caminho seguro.", image: "assets/story-rainbow.svg", alt: "Caminho de livramento" }
    ]
  },
  {
    title: "Jesus acalma a tempestade",
    tags: "paz · confiança · cuidado",
    free: false,
    pages: [
      { title: "A tempestade chega", text: "Os discípulos ficaram com medo quando o vento ficou forte.", image: "assets/ark-hero.svg", alt: "Barco em uma cena com água" },
      { title: "Jesus traz paz", text: "Jesus acalmou o vento e mostrou que podemos confiar nele.", image: "assets/story-rainbow.svg", alt: "Céu calmo depois da tempestade" }
    ]
  },
  {
    title: "O bom samaritano",
    tags: "amor ao próximo · ajuda · compaixão",
    free: false,
    pages: [
      { title: "Alguém precisa de ajuda", text: "Um homem estava machucado no caminho e precisava de cuidado.", image: "assets/story-family.svg", alt: "Pessoa recebendo ajuda" },
      { title: "Amar o próximo", text: "O bom samaritano parou, ajudou e mostrou compaixão.", image: "assets/star-badge.svg", alt: "Selo de compaixão" }
    ]
  },
  {
    title: "A criação do mundo",
    tags: "criação · natureza · gratidão",
    free: false,
    pages: [
      { title: "Deus cria tudo", text: "Deus fez a luz, o céu, a terra, os animais e as pessoas.", image: "assets/story-rainbow.svg", alt: "Natureza criada por Deus" },
      { title: "Tudo era bom", text: "A criação nos lembra de agradecer pelo cuidado de Deus.", image: "assets/sheep-animal.svg", alt: "Animal lembrando a criação" }
    ]
  },
  {
    title: "Nascimento de Jesus",
    tags: "Natal · promessa · alegria",
    free: false,
    pages: [
      { title: "Uma promessa de alegria", text: "O nascimento de Jesus trouxe alegria para muitas famílias.", image: "assets/star-badge.svg", alt: "Estrela lembrando o nascimento de Jesus" },
      { title: "Jesus nasceu", text: "Deus enviou Jesus para mostrar amor, esperança e salvação.", image: "assets/story-family.svg", alt: "Família celebrando uma boa notícia" }
    ]
  }
];

const ageProfiles = {
  "3-5": {
    title: "Arcakids",
    pill: "3 a 5 anos",
    hero: "Continuar minha aventura",
    copy: "Ajude Noé a encontrar os animais da Arca."
  },
  "6-8": {
    title: "Arcakids",
    pill: "6 a 8 anos",
    hero: "Vamos brincar e aprender?",
    copy: "Missões bíblicas, memória e histórias interativas."
  },
  "9-10": {
    title: "Arcakids",
    pill: "9 a 10 anos",
    hero: "Missões da Arca para crescer na fé.",
    copy: "Desafios bíblicos com estrelas, selos e novas descobertas."
  }
};

const memoryItems = [
  { id: "noe", label: "Noé", image: "assets/noah.svg" },
  { id: "ovelha", label: "Ovelha", image: "assets/sheep-animal.svg" },
  { id: "davi", label: "Davi", image: "assets/david.svg" },
  { id: "arca", label: "Arca", image: "assets/ark-hero.svg" },
  { id: "leao", label: "Leão", image: "assets/lion.svg" },
  { id: "selo", label: "Selo", image: "assets/star-badge.svg" }
];

const screens = [...document.querySelectorAll(".content")];
const screenTitle = document.querySelector("#screenTitle");
const screenEyebrow = document.querySelector("#screenEyebrow");
const backButton = document.querySelector("#backButton");
const navItems = [...document.querySelectorAll(".nav-item")];
const soundButton = document.querySelector("#soundButton");
const serviceWorkerPath = "./sw.js";
const trialStorageKey = "arcakidsTrialUntil";
const dailyLimitStorageKey = "arcakidsDailyLimit";
const cacheStorageKey = "arcakidsCacheVersion";
let historyStack = ["home"];
let currentAge = "3-5";
let currentRound = 0;
let playScore = 0;
let roundSolved = false;
let currentQuiz = 0;
let quizScore = 0;
let currentStory = 0;
let currentStoryPage = 0;
let chosenColor = "#ef4444";
let paintTemplate = "arca";
let drawing = false;
let firstMemoryCard = null;
let lockMemory = false;
let audioContext = null;
let musicTimer = null;
let musicOn = false;
let musicStep = 0;
let availableVoices = [];
let trialUntil = Number(localStorage.getItem(trialStorageKey) || 0);
let selectedPremiumActivity = null;
let parentUnlocked = false;
let dailyLimit = Number(localStorage.getItem(dailyLimitStorageKey) || 25);
let selectedGame = games[0];

if (localStorage.getItem(cacheStorageKey) !== "5") {
  localStorage.removeItem(dailyLimitStorageKey);
  localStorage.setItem(cacheStorageKey, "5");
  dailyLimit = 25;
}

function isTrialActive() {
  return Date.now() < trialUntil;
}

function getTrialDaysLeft() {
  if (!isTrialActive()) return 0;
  return Math.max(1, Math.ceil((trialUntil - Date.now()) / 86400000));
}

function showScreen(name, push = true) {
  const target = document.querySelector(`#${name}Screen`);
  if (!target) return;

  screens.forEach((screen) => screen.classList.remove("active"));
  target.classList.add("active");
  screenTitle.textContent = target.dataset.title;
  screenEyebrow.textContent = target.dataset.eyebrow;

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === name);
  });

  if (push && historyStack.at(-1) !== name) {
    historyStack.push(name);
  }

  backButton.style.visibility = historyStack.length > 1 ? "visible" : "hidden";

  if (name === "play") startAnimalGame();
  if (name === "memory") renderMemory();
  if (name === "quiz") startQuiz();
  if (name === "paint") drawColoringPage();
  if (name === "miniGame") renderMiniGame();
  if (name === "stories") renderStory();
  if (name === "membership") renderTrialStatus();
  if (name === "premiumActivity") renderPremiumActivity();
  if (name === "parent") renderParentArea();
}

function startAnimalGame() {
  selectedGame = games.find((game) => game.screen === "play") || selectedGame;
  currentRound = 0;
  playScore = 0;
  document.querySelector("#animalReward").hidden = true;
  document.querySelector("#nextRound").textContent = "Próxima charada";
  renderAnimalRound();
}

function renderGameCards(container, items) {
  container.innerHTML = "";
  items.forEach((game) => {
    const locked = Boolean(game.locked && !isTrialActive());
    const card = document.createElement("button");
    card.className = `game-card${locked ? " locked" : ""}`;
    card.dataset.screen = locked ? "parent" : game.screen;
    card.dataset.gameTitle = game.title;
    if (game.locked && isTrialActive() && game.screen === "membership") {
      card.dataset.premiumActivity = game.title;
      card.dataset.screen = "premiumActivity";
    }
    card.innerHTML = `
      <span class="game-art"><img src="${game.image}" alt="" /></span>
      <span class="game-level">${locked ? "Peça ajuda" : game.locked && isTrialActive() ? "Liberado" : game.level}</span>
      <strong>${game.title}</strong>
      <small>${locked ? "Peça para um adulto liberar esta aventura" : `${game.description} · ${game.age}`}</small>
      <span class="progress-track"><i style="width:${game.progress}%"></i></span>
    `;
    container.appendChild(card);
  });
}

function updateHomeForProfile(age) {
  const profile = ageProfiles[age];
  currentAge = age;
  document.querySelector("#homeScreen").dataset.title = profile.title;
  document.querySelector("#agePill").textContent = profile.pill;
  document.querySelector("#heroTitle").textContent = profile.hero;
  document.querySelector("#heroCopy").textContent = profile.copy;
  if (document.querySelector("#homeScreen").classList.contains("active")) {
    screenTitle.textContent = profile.title;
  }
  renderGameCards(
    document.querySelector("#featuredGames"),
    games.filter((game) => game.featured && (game.age === age || age === "3-5")).slice(0, 4)
  );
}

function renderAnimalRound() {
  const board = document.querySelector("#animalBoard");
  const round = animalRounds[currentRound % animalRounds.length];
  const isComplete = playScore >= animalRounds.length;
  if (isComplete) {
    document.querySelector("#animalFeedback").textContent = "Fase completa. Que aventura bonita.";
    document.querySelector("#animalReward").hidden = false;
    document.querySelector("#nextRound").textContent = "Jogar de novo";
    return;
  }
  roundSolved = false;
  const answer = animals.find((animal) => animal.id === round.answer);
  const options = [
    answer,
    ...animals.filter((animal) => animal.id !== round.answer).sort(() => Math.random() - 0.5).slice(0, 3)
  ].sort(() => Math.random() - 0.5);
  document.querySelector("#playPrompt").textContent = round.prompt;
  document.querySelector("#playScore").textContent = playScore;
  document.querySelector("#animalFeedback").textContent = "Olhe com calma e escolha um animal.";
  document.querySelector("#animalReward").hidden = true;
  document.querySelectorAll(".round-path span").forEach((step, index) => {
    step.classList.toggle("active", index === currentRound);
    step.classList.toggle("done", index < playScore);
  });
  board.innerHTML = "";
  options.forEach((animal) => {
    const tile = document.createElement("button");
    tile.className = "animal-tile";
    tile.innerHTML = `<img class="animal-image" src="${animal.image}" alt="" /><strong>${animal.label}</strong>`;
    tile.setAttribute("aria-label", animal.id);
    tile.addEventListener("click", () => {
      if (roundSolved) return;
      const correct = animal.id === round.answer;
      tile.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        playSuccessSound();
      } else {
        playTryAgainSound();
      }
      if (correct) {
        roundSolved = true;
        playScore = Math.min(5, playScore + 1);
        document.querySelector("#playScore").textContent = playScore;
        document.querySelector("#animalFeedback").textContent = round.praise;
        document.querySelectorAll(".round-path span").forEach((step, index) => {
          step.classList.toggle("done", index < playScore);
        });
        if (playScore === animalRounds.length) {
          document.querySelector("#animalReward").hidden = false;
          document.querySelector("#nextRound").textContent = "Jogar de novo";
        }
      } else {
        document.querySelector("#animalFeedback").textContent = "Quase. Tente outro animal.";
      }
    });
    board.appendChild(tile);
  });
}

function renderMemory() {
  const game = selectedGame?.screen === "memory" ? selectedGame : games.find((item) => item.screen === "memory");
  document.querySelector("#memoryScreen").dataset.title = game.title;
  screenTitle.textContent = game.title;
  document.querySelector("#memoryMastheadTitle").textContent = game.title;
  document.querySelector("#memoryMastheadCopy").textContent = game.description;
  document.querySelector("#memoryMastheadImage").src = game.image;
  const board = document.querySelector("#memoryBoard");
  const cards = [...memoryItems, ...memoryItems].sort(() => Math.random() - 0.5);
  document.querySelector("#matchCount").textContent = "0";
  document.querySelector("#memoryFeedback").textContent = "Vire duas cartas para encontrar um par.";
  document.querySelector("#memoryReward").hidden = true;
  firstMemoryCard = null;
  lockMemory = false;
  board.innerHTML = "";
  cards.forEach((item) => {
    const card = document.createElement("button");
    card.className = "memory-card";
    card.dataset.value = item.id;
    card.dataset.label = item.label;
    card.dataset.image = item.image;
    card.innerHTML = `<span class="card-back">?</span><span class="card-face"><img src="${item.image}" alt="" /><small>${item.label}</small></span>`;
    card.addEventListener("click", () => flipMemoryCard(card));
    board.appendChild(card);
  });
}

function flipMemoryCard(card) {
  if (lockMemory || card.classList.contains("done") || card === firstMemoryCard) return;
  card.classList.add("open");
  playTone(523.25, 0.1);

  if (!firstMemoryCard) {
    firstMemoryCard = card;
    document.querySelector("#memoryFeedback").textContent = `Agora encontre outro ${card.dataset.label}.`;
    return;
  }

  if (firstMemoryCard.dataset.value === card.dataset.value) {
    firstMemoryCard.classList.add("done");
    card.classList.add("done");
    firstMemoryCard = null;
    const pairs = document.querySelectorAll(".memory-card.done").length / 2;
    document.querySelector("#matchCount").textContent = pairs;
    document.querySelector("#memoryFeedback").textContent = "Par encontrado. Muito bem.";
    playSuccessSound();
    if (pairs === memoryItems.length) {
      document.querySelector("#memoryFeedback").textContent = "Todos os pares encontrados.";
      document.querySelector("#memoryReward").hidden = false;
    }
    return;
  }

  document.querySelector("#memoryFeedback").textContent = "Essas cartas são diferentes. Tente de novo.";
  playTryAgainSound();
  lockMemory = true;
  setTimeout(() => {
    [firstMemoryCard, card].forEach((item) => {
      item.classList.remove("open");
    });
    firstMemoryCard = null;
    lockMemory = false;
  }, 700);
}

function renderQuiz() {
  const item = quizItems[currentQuiz];
  document.querySelector("#quizReward").hidden = true;
  document.querySelector("#quizQuestion").textContent = item.text;
  document.querySelector("#quizFeedback").textContent = `Pergunta ${currentQuiz + 1} de ${quizItems.length}`;
  document.querySelectorAll(".quiz-path span").forEach((step, index) => {
    step.classList.toggle("active", index === currentQuiz);
    step.classList.toggle("done", index < currentQuiz);
  });
}

function startQuiz() {
  const game = selectedGame?.screen === "quiz" ? selectedGame : games.find((item) => item.title === "Verdade ou Falso");
  document.querySelector("#quizScreen").dataset.title = game.title;
  screenTitle.textContent = game.title;
  document.querySelector("#quizMastheadTitle").textContent = game.title;
  document.querySelector("#quizMastheadCopy").textContent = game.description;
  document.querySelector("#quizMastheadImage").src = game.image;
  currentQuiz = 0;
  quizScore = 0;
  renderQuiz();
}

function finishQuiz() {
  document.querySelector("#quizQuestion").textContent = `Você acertou ${quizScore} de ${quizItems.length}.`;
  document.querySelector("#quizFeedback").textContent = "Desafio completo.";
  document.querySelector("#quizReward").hidden = false;
  document.querySelectorAll(".quiz-path span").forEach((step) => {
    step.classList.add("done");
    step.classList.remove("active");
  });
}

function drawColoringPage() {
  const canvas = document.querySelector("#paintCanvas");
  const ctx = canvas.getContext("2d");
  if (canvas.dataset.ready) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 6;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#172033";
  if (paintTemplate === "arca") drawArkTemplate(ctx);
  if (paintTemplate === "ovelha") drawSheepTemplate(ctx);
  if (paintTemplate === "estrela") drawBadgeTemplate(ctx);
  canvas.dataset.ready = "true";
}

function roundedRectPath(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

function drawArkTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  ctx.beginPath();
  ctx.arc(260, 42, 20, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(70, 56, 18, Math.PI, 0);
  ctx.arc(100, 56, 24, Math.PI, 0);
  ctx.arc(136, 56, 18, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(40, 138);
  ctx.lineTo(160, 54);
  ctx.lineTo(280, 138);
  ctx.closePath();
  ctx.stroke();

  roundedRectPath(ctx, 104, 128, 112, 52, 8);
  ctx.stroke();

  roundedRectPath(ctx, 130, 144, 60, 36, 8);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(32, 178);
  ctx.lineTo(288, 178);
  ctx.lineTo(258, 228);
  ctx.lineTo(62, 228);
  ctx.closePath();
  ctx.stroke();

  [86, 160, 234].forEach((x) => {
    ctx.beginPath();
    ctx.arc(x, 204, 13, 0, Math.PI * 2);
    ctx.stroke();
  });

  ctx.beginPath();
  ctx.moveTo(16, 238);
  ctx.quadraticCurveTo(46, 222, 78, 238);
  ctx.quadraticCurveTo(110, 254, 142, 238);
  ctx.quadraticCurveTo(174, 222, 206, 238);
  ctx.quadraticCurveTo(238, 254, 304, 238);
  ctx.stroke();
}

function drawSheepTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  ctx.beginPath();
  ctx.moveTo(73, 147);
  ctx.bezierCurveTo(48, 144, 42, 111, 67, 98);
  ctx.bezierCurveTo(62, 70, 96, 51, 119, 66);
  ctx.bezierCurveTo(136, 39, 181, 39, 198, 66);
  ctx.bezierCurveTo(224, 51, 256, 71, 250, 101);
  ctx.bezierCurveTo(278, 114, 269, 151, 240, 150);
  ctx.bezierCurveTo(230, 184, 184, 194, 158, 174);
  ctx.bezierCurveTo(130, 195, 83, 183, 73, 147);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(120, 102);
  ctx.bezierCurveTo(104, 80, 138, 68, 158, 86);
  ctx.bezierCurveTo(178, 68, 212, 80, 196, 102);
  ctx.stroke();

  roundedRectPath(ctx, 118, 96, 82, 78, 34);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(121, 122);
  ctx.quadraticCurveTo(92, 113, 88, 140);
  ctx.quadraticCurveTo(106, 151, 121, 137);
  ctx.moveTo(197, 122);
  ctx.quadraticCurveTo(226, 113, 230, 140);
  ctx.quadraticCurveTo(212, 151, 197, 137);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(143, 129, 4, 0, Math.PI * 2);
  ctx.arc(176, 129, 4, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(156, 141);
  ctx.quadraticCurveTo(160, 148, 164, 141);
  ctx.moveTo(149, 153);
  ctx.quadraticCurveTo(160, 162, 171, 153);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(108, 174);
  ctx.lineTo(108, 218);
  ctx.lineTo(130, 218);
  ctx.moveTo(205, 174);
  ctx.lineTo(205, 218);
  ctx.lineTo(183, 218);
  ctx.moveTo(68, 130);
  ctx.quadraticCurveTo(45, 134, 39, 112);
  ctx.quadraticCurveTo(61, 111, 68, 130);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(52, 226);
  ctx.lineTo(268, 226);
  ctx.stroke();
}

function drawBadgeTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  ctx.beginPath();
  ctx.arc(160, 116, 74, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 55);
  ctx.lineTo(179, 96);
  ctx.lineTo(224, 101);
  ctx.lineTo(191, 132);
  ctx.lineTo(200, 176);
  ctx.lineTo(160, 154);
  ctx.lineTo(120, 176);
  ctx.lineTo(129, 132);
  ctx.lineTo(96, 101);
  ctx.lineTo(141, 96);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(124, 183);
  ctx.lineTo(100, 232);
  ctx.lineTo(142, 218);
  ctx.lineTo(160, 246);
  ctx.lineTo(178, 218);
  ctx.lineTo(220, 232);
  ctx.lineTo(196, 183);
  ctx.stroke();
}

function paintAt(event) {
  if (!drawing) return;
  const canvas = document.querySelector("#paintCanvas");
  const rect = canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
  const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = chosenColor;
  ctx.beginPath();
  ctx.arc(x, y, 9, 0, Math.PI * 2);
  ctx.fill();
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playTone(frequency, duration = 0.16, volume = 0.08, type = "sine") {
  ensureAudio();
  if (!audioContext) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration + 0.02);
}

function playSuccessSound() {
  ensureAudio();
  [523.25, 659.25, 783.99].forEach((note, index) => {
    window.setTimeout(() => playTone(note, 0.18, 0.1, "triangle"), index * 95);
  });
}

function playTryAgainSound() {
  ensureAudio();
  [246.94, 196.0].forEach((note, index) => {
    window.setTimeout(() => playTone(note, 0.12, 0.06, "sine"), index * 90);
  });
}

function renderStory() {
  const story = stories[currentStory];
  const page = story.pages[currentStoryPage];
  document.querySelector("#storyTitle").textContent = page.title;
  document.querySelector("#storyText").textContent = page.text;
  document.querySelector("#storyScene").src = page.image;
  document.querySelector("#storyScene").alt = page.alt;
  document.querySelector("#storyThumb").src = page.image;
  document.querySelector("#storyThumb").alt = "";
  document.querySelector("#storySubtitle").textContent = `${story.title} · página ${currentStoryPage + 1} de ${story.pages.length}`;
  document.querySelector("#storyPrev").disabled = currentStoryPage === 0;
  document.querySelector("#storyNext").textContent = currentStoryPage === story.pages.length - 1 ? "Recomeçar" : "Continuar";
  renderStoryList();
}

function playStoryCue() {
  ensureAudio();
  const page = stories[currentStory].pages[currentStoryPage];
  playSoftChord([523.25, 659.25, 783.99], 0.7);
  narrateStory(page.text);
}

function renderStoryList() {
  const list = document.querySelector("#storyList");
  list.innerHTML = "";
  stories.forEach((story, index) => {
    const locked = !story.free && !isTrialActive();
    const card = document.createElement("button");
    card.className = `story-card${locked ? " locked" : ""}${index === currentStory ? " active" : ""}`;
    card.dataset.storyIndex = index;
    card.innerHTML = `
      <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <strong>${story.title}</strong>
        <small>${locked ? "Peça ajuda a um adulto" : story.tags}</small>
      </span>
    `;
    list.appendChild(card);
  });
}

function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  availableVoices = window.speechSynthesis.getVoices();
}

function chooseNarratorVoice() {
  refreshVoices();
  const preferredNames = [
    "Luciana",
    "Google português do Brasil",
    "Google português",
    "Microsoft Francisca",
    "Microsoft Daniel",
    "Joana",
    "Felipe"
  ];
  return (
    preferredNames
      .map((name) => availableVoices.find((voice) => voice.name.toLowerCase().includes(name.toLowerCase())))
      .find(Boolean) ||
    availableVoices.find((voice) => voice.lang.toLowerCase() === "pt-br") ||
    availableVoices.find((voice) => voice.lang.toLowerCase().startsWith("pt")) ||
    null
  );
}

function narrateStory(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const chunks = text
    .replace(/\./g, ".|")
    .replace(/,/g, ",|")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
  speakChunks(chunks, 0);
}

function speakChunks(chunks, index) {
  if (index >= chunks.length) return;
  const utterance = new SpeechSynthesisUtterance(chunks[index]);
  const narratorVoice = chooseNarratorVoice();
  if (narratorVoice) utterance.voice = narratorVoice;
  utterance.lang = "pt-BR";
  utterance.rate = 0.78;
  utterance.pitch = 1.03;
  utterance.volume = 0.96;
  utterance.onend = () => {
    window.setTimeout(() => speakChunks(chunks, index + 1), chunks[index].endsWith(",") ? 180 : 360);
  };
  window.speechSynthesis.speak(utterance);
}

function playSoftChord(notes, duration = 0.7) {
  notes.forEach((note, index) => {
    window.setTimeout(() => playTone(note, duration, 0.035, "triangle"), index * 70);
  });
}

function playMusicStep() {
  const melody = [
    [392.0, 523.25],
    [440.0, 587.33],
    [493.88, 659.25],
    [523.25, 783.99],
    [493.88, 659.25],
    [440.0, 587.33],
    [392.0, 523.25],
    [329.63, 493.88]
  ];
  const notes = melody[musicStep % melody.length];
  notes.forEach((note, index) => {
    window.setTimeout(() => playTone(note, 0.34, 0.026, "triangle"), index * 90);
  });
  musicStep += 1;
}

function toggleMusic() {
  ensureAudio();
  musicOn = !musicOn;
  soundButton.classList.toggle("active", musicOn);
  soundButton.textContent = musicOn ? "♫" : "♪";
  if (musicOn) {
    playMusicStep();
    musicTimer = window.setInterval(playMusicStep, 620);
  } else {
    window.clearInterval(musicTimer);
    musicTimer = null;
  }
}

function startFreeTrial() {
  trialUntil = Date.now() + 7 * 86400000;
  localStorage.setItem(trialStorageKey, String(trialUntil));
  renderTrialStatus();
  renderGameCards(document.querySelector("#allGames"), games);
  renderStoryList();
  playSuccessSound();
}

function renderTrialStatus() {
  const status = document.querySelector("#trialStatus");
  const button = document.querySelector("#freeTrialButton");
  if (!status || !button) return;
  if (isTrialActive()) {
    status.hidden = false;
    status.innerHTML = `<strong>Teste grátis ativo</strong><span>${getTrialDaysLeft()} dia(s) restantes de acesso premium.</span>`;
    button.textContent = "Teste grátis ativo";
    button.disabled = true;
  } else {
    status.hidden = true;
    button.textContent = "Iniciar teste grátis por 7 dias";
    button.disabled = false;
  }
}

function renderPremiumActivity() {
  const activity = selectedPremiumActivity || games.find((game) => game.locked);
  if (!activity) return;
  document.querySelector("#premiumPreviewImage").src = activity.image;
  document.querySelector("#premiumPreviewTitle").textContent = activity.title;
  document.querySelector("#premiumPreviewDescription").textContent =
    `${activity.description}. Atividade liberada durante o teste grátis de 7 dias.`;
}

function renderMiniGame() {
  const game = selectedGame || games.find((item) => item.screen === "miniGame");
  const content = miniGameContent[game.title] || {
    prompt: game.description,
    options: ["Começar", "Tentar", "Continuar"],
    answer: "Começar",
    success: "Parabéns. Você completou a aventura.",
    image: game.image
  };
  document.querySelector("#miniGameScreen").dataset.title = game.title;
  screenTitle.textContent = game.title;
  document.querySelector("#miniGameImage").src = content.image;
  document.querySelector("#miniGameTitle").textContent = game.title;
  document.querySelector("#miniGamePrompt").textContent = content.prompt;
  document.querySelector("#miniGameFeedback").textContent = "Escolha uma opção para completar a missão.";
  document.querySelector("#miniGameReward").hidden = true;
  const choices = document.querySelector("#miniGameChoices");
  choices.innerHTML = "";
  content.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "secondary-button";
    button.textContent = option;
    button.addEventListener("click", () => {
      const isCorrect = option === content.answer;
      document.querySelector("#miniGameFeedback").textContent = isCorrect ? content.success : "Quase. Tente outra opção.";
      if (isCorrect) {
        button.className = "primary-button";
        document.querySelector("#miniGameReward").hidden = false;
        playSuccessSound();
      } else {
        playTryAgainSound();
      }
    });
    choices.appendChild(button);
  });
}

function renderParentArea() {
  const gate = document.querySelector("#parentGate");
  const dashboard = document.querySelector("#parentDashboard");
  if (!gate || !dashboard) return;
  gate.hidden = parentUnlocked;
  dashboard.hidden = !parentUnlocked;
  renderDailyLimit();
}

function unlockParentArea() {
  const answer = document.querySelector("#gateAnswer").value.trim();
  const feedback = document.querySelector("#gateFeedback");
  if (answer === "11") {
    parentUnlocked = true;
    feedback.textContent = "";
    renderParentArea();
    playSuccessSound();
    return;
  }
  feedback.textContent = "Quase. Tente de novo.";
  playTryAgainSound();
}

function renderDailyLimit() {
  const slider = document.querySelector("#dailyLimitSlider");
  const label = document.querySelector("#dailyLimitLabel");
  const summary = document.querySelector("#dailyLimitSummary");
  if (!slider || !label || !summary) return;
  slider.value = String(dailyLimit);
  label.textContent = `${dailyLimit} minutos`;
  summary.textContent = `${dailyLimit} min`;
}

function updateDailyLimit(value) {
  dailyLimit = Number(value);
  localStorage.setItem(dailyLimitStorageKey, String(dailyLimit));
  renderDailyLimit();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-screen]");
  if (target?.dataset.gameTitle) {
    selectedGame = games.find((game) => game.title === target.dataset.gameTitle) || selectedGame;
  }
  if (target?.dataset.premiumActivity) {
    selectedPremiumActivity = games.find((game) => game.title === target.dataset.premiumActivity);
  }
  if (target) showScreen(target.dataset.screen);
});

document.querySelector("#freeTrialButton").addEventListener("click", startFreeTrial);
document.querySelector("#gateSubmit").addEventListener("click", unlockParentArea);
document.querySelector("#gateAnswer").addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockParentArea();
});
document.querySelector("#dailyLimitSlider").addEventListener("input", (event) => {
  updateDailyLimit(event.target.value);
});

soundButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMusic();
});

backButton.addEventListener("click", () => {
  if (historyStack.length <= 1) return;
  historyStack.pop();
  showScreen(historyStack.at(-1), false);
});

document.querySelectorAll(".profile").forEach((profile) => {
  profile.addEventListener("click", () => {
    document.querySelectorAll(".profile").forEach((item) => item.classList.remove("active"));
    profile.classList.add("active");
    updateHomeForProfile(profile.dataset.age);
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    renderGameCards(
      document.querySelector("#allGames"),
      filter === "all" ? games : games.filter((game) => game.age === filter)
    );
  });
});

document.querySelector("#nextRound").addEventListener("click", () => {
  if (playScore >= animalRounds.length) {
    startAnimalGame();
    return;
  }
  if (!roundSolved) {
    document.querySelector("#animalFeedback").textContent = "Encontre o animal antes de seguir.";
    return;
  }
  currentRound = Math.min(currentRound + 1, animalRounds.length - 1);
  renderAnimalRound();
});

document.querySelector("#resetMemory").addEventListener("click", renderMemory);

document.querySelectorAll("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    if (currentQuiz >= quizItems.length) {
      startQuiz();
      return;
    }
    const item = quizItems[currentQuiz];
    const answer = button.dataset.answer === "true";
    const correct = answer === item.answer;
    document.querySelector("#quizFeedback").textContent = correct ? item.note : "Tente outra vez.";
    if (correct) {
      playSuccessSound();
    } else {
      playTryAgainSound();
    }
    if (correct) quizScore += 1;
    if (answer === item.answer) {
      setTimeout(() => {
        currentQuiz += 1;
        if (currentQuiz >= quizItems.length) {
          finishQuiz();
        } else {
          renderQuiz();
        }
      }, 900);
    }
  });
});

document.querySelector("#storyPrev").addEventListener("click", () => {
  currentStoryPage = Math.max(0, currentStoryPage - 1);
  renderStory();
});

document.querySelector("#storyNext").addEventListener("click", () => {
  const story = stories[currentStory];
  currentStoryPage = currentStoryPage === story.pages.length - 1 ? 0 : currentStoryPage + 1;
  renderStory();
  playTone(587.33, 0.12);
});

document.querySelector("#storyPlay").addEventListener("click", playStoryCue);

document.querySelector("#storyList").addEventListener("click", (event) => {
  const card = event.target.closest("[data-story-index]");
  if (!card) return;
  const nextStory = stories[Number(card.dataset.storyIndex)];
  if (!nextStory.free && !isTrialActive()) {
    showScreen("parent");
    return;
  }
  currentStory = Number(card.dataset.storyIndex);
  currentStoryPage = 0;
  renderStory();
});

if ("speechSynthesis" in window) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

document.querySelectorAll(".swatches button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".swatches button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    chosenColor = button.dataset.color;
  });
});

document.querySelectorAll(".template-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".template-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    paintTemplate = button.dataset.template;
    const canvas = document.querySelector("#paintCanvas");
    canvas.dataset.ready = "";
    drawColoringPage();
  });
});

document.querySelector("#clearPaint").addEventListener("click", () => {
  const canvas = document.querySelector("#paintCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.dataset.ready = "";
  drawColoringPage();
});

const paintCanvas = document.querySelector("#paintCanvas");
paintCanvas.addEventListener("pointerdown", (event) => {
  drawing = true;
  paintAt(event);
});
paintCanvas.addEventListener("pointermove", paintAt);
paintCanvas.addEventListener("pointerup", () => {
  drawing = false;
});
paintCanvas.addEventListener("pointerleave", () => {
  drawing = false;
});

renderGameCards(document.querySelector("#allGames"), games);
updateHomeForProfile(currentAge);
renderTrialStatus();
showScreen("home", false);

if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  navigator.serviceWorker.register(serviceWorkerPath).catch(() => {});
}
