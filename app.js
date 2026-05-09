const games = [
  {
    title: "Quem Está na Arca?",
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
    title: "Fato ou Fake Kids",
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
    title: "Colorindo com Jesus",
    age: "3-5",
    description: "Desenhos para pintar",
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
    screen: "membership",
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
    screen: "membership",
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
    screen: "membership",
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
    screen: "membership",
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
    screen: "membership",
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
    screen: "membership",
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

const storyPages = [
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
];

const ageProfiles = {
  "3-5": {
    title: "Arca Digital",
    pill: "3 a 5 anos",
    hero: "Bem-vindo a Arca Digital.",
    copy: "Atividades simples, narradas e com toque grande para crianças pequenas."
  },
  "6-8": {
    title: "Arca Digital",
    pill: "6 a 8 anos",
    hero: "Explore a Bíblia brincando.",
    copy: "Quiz leve, memória, histórias interativas e missões semanais."
  },
  "9-10": {
    title: "Arca Digital",
    pill: "9 a 10 anos",
    hero: "Missões da Arca para crescer na fé.",
    copy: "Atividades com mais desafio, leitura e recompensas por progresso."
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
let historyStack = ["home"];
let currentAge = "3-5";
let currentRound = 0;
let playScore = 0;
let roundSolved = false;
let currentQuiz = 0;
let quizScore = 0;
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
  if (name === "stories") renderStory();
}

function startAnimalGame() {
  currentRound = 0;
  playScore = 0;
  document.querySelector("#animalReward").hidden = true;
  document.querySelector("#nextRound").textContent = "Próxima charada";
  renderAnimalRound();
}

function renderGameCards(container, items) {
  container.innerHTML = "";
  items.forEach((game) => {
    const card = document.createElement("button");
    card.className = `game-card${game.locked ? " locked" : ""}`;
    card.dataset.screen = game.screen;
    card.innerHTML = `
      <span class="game-art"><img src="${game.image}" alt="" /></span>
      <span class="game-level">${game.level}</span>
      <strong>${game.title}</strong>
      <small>${game.description} · ${game.age}</small>
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
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#172033";
  if (paintTemplate === "arca") drawArkTemplate(ctx);
  if (paintTemplate === "ovelha") drawSheepTemplate(ctx);
  if (paintTemplate === "estrela") drawBadgeTemplate(ctx);
  canvas.dataset.ready = "true";
}

function drawArkTemplate(ctx) {
  ctx.strokeRect(48, 108, 224, 94);
  ctx.beginPath();
  ctx.moveTo(64, 108);
  ctx.lineTo(160, 46);
  ctx.lineTo(256, 108);
  ctx.closePath();
  ctx.stroke();
  ctx.strokeRect(126, 142, 68, 60);
  ctx.beginPath();
  ctx.arc(102, 82, 24, 0, Math.PI * 2);
  ctx.arc(218, 82, 24, 0, Math.PI * 2);
  ctx.stroke();
}

function drawSheepTemplate(ctx) {
  ctx.beginPath();
  ctx.arc(90, 118, 34, 0, Math.PI * 2);
  ctx.arc(135, 98, 42, 0, Math.PI * 2);
  ctx.arc(184, 120, 35, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(160, 135, 31, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(148, 132, 3, 0, Math.PI * 2);
  ctx.arc(172, 132, 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(103, 153);
  ctx.lineTo(103, 207);
  ctx.moveTo(202, 153);
  ctx.lineTo(202, 207);
  ctx.stroke();
}

function drawBadgeTemplate(ctx) {
  ctx.beginPath();
  ctx.arc(160, 130, 78, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(160, 55);
  ctx.lineTo(179, 104);
  ctx.lineTo(232, 107);
  ctx.lineTo(190, 140);
  ctx.lineTo(204, 192);
  ctx.lineTo(160, 162);
  ctx.lineTo(116, 192);
  ctx.lineTo(130, 140);
  ctx.lineTo(88, 107);
  ctx.lineTo(141, 104);
  ctx.closePath();
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
  const page = storyPages[currentStoryPage];
  document.querySelector("#storyTitle").textContent = page.title;
  document.querySelector("#storyText").textContent = page.text;
  document.querySelector("#storyScene").src = page.image;
  document.querySelector("#storyScene").alt = page.alt;
  document.querySelector("#storyThumb").src = page.image;
  document.querySelector("#storyThumb").alt = "";
  document.querySelector("#storySubtitle").textContent = `História narrada · página ${currentStoryPage + 1} de ${storyPages.length}`;
  document.querySelector("#storyPrev").disabled = currentStoryPage === 0;
  document.querySelector("#storyNext").textContent = currentStoryPage === storyPages.length - 1 ? "Recomeçar" : "Continuar";
}

function playStoryCue() {
  ensureAudio();
  const page = storyPages[currentStoryPage];
  playSoftChord([523.25, 659.25, 783.99], 0.7);
  narrateStory(page.text);
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

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-screen]");
  if (target) showScreen(target.dataset.screen);
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
  currentStoryPage = currentStoryPage === storyPages.length - 1 ? 0 : currentStoryPage + 1;
  renderStory();
  playTone(587.33, 0.12);
});

document.querySelector("#storyPlay").addEventListener("click", playStoryCue);

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
showScreen("home", false);

if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  navigator.serviceWorker.register(serviceWorkerPath).catch(() => {});
}
