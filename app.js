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
    title: "Memória dos Animais",
    age: "3-5",
    description: "Ache os pares da Arca",
    icon: "A",
    image: "assets/lion.svg",
    progress: 10,
    level: "Fácil",
    screen: "memory"
  },
  {
    title: "Charadas dos Animais",
    age: "3-5",
    description: "Descubra pela dica",
    icon: "C",
    image: "assets/giraffe.svg",
    progress: 0,
    level: "Fácil",
    screen: "miniGame"
  },
  {
    title: "Sons da Arca",
    age: "3-5",
    description: "Ouça a pista e escolha",
    icon: "S",
    image: "assets/rooster.svg",
    progress: 0,
    level: "Fácil",
    screen: "miniGame"
  },
  {
    title: "Monte a História",
    age: "6-8",
    description: "Cenas na ordem certa",
    icon: "H",
    image: "assets/story-order.svg",
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
    image: "assets/miracle-map.svg",
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
    image: "assets/verse-scroll.svg",
    progress: 0,
    level: "Premium",
    screen: "miniGame",
    locked: true
  },
  {
    title: "Memória dos Selos",
    age: "6-8",
    description: "Pares de virtudes bíblicas",
    icon: "S",
    image: "assets/seal-memory.svg",
    progress: 0,
    level: "Médio",
    screen: "memory"
  },
  {
    title: "Caminho da Obediência",
    age: "6-8",
    description: "Escolhas da história",
    icon: "O",
    image: "assets/noah.svg",
    progress: 0,
    level: "Médio",
    screen: "miniGame"
  },
  {
    title: "Triunfo Bíblico",
    age: "9-10",
    description: "Cartas de reis e profetas",
    icon: "T",
    image: "assets/bible-triumph.svg",
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
    image: "assets/prophet-quiz.svg",
    progress: 12,
    level: "Médio",
    screen: "quiz",
    featured: true
  },
  {
    title: "Quem Sou Eu?",
    age: "9-10",
    description: "Charadas bíblicas",
    icon: "?",
    image: "assets/guide-sheep.svg",
    progress: 0,
    level: "Médio",
    screen: "miniGame"
  },
  {
    title: "Missão dos Discípulos",
    age: "9-10",
    description: "Desafios de compreensão",
    icon: "D",
    image: "assets/story-family.svg",
    progress: 0,
    level: "Médio",
    screen: "miniGame"
  },
  {
    title: "Linha do Tempo",
    age: "9-10",
    description: "Organize eventos bíblicos",
    icon: "L",
    image: "assets/timeline-bible.svg",
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
    image: "assets/kings-challenge.svg",
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
  { prompt: "Toque no animal que canta ao amanhecer.", answer: "galo", praise: "Muito bem. O galo cantou na Arca." },
  { prompt: "Toque no animal que dá lã.", answer: "ovelha", praise: "Isso. A ovelha entrou mansinha." },
  { prompt: "Toque no animal que faz mu.", answer: "vaca", praise: "Acertou. A vaca entrou na Arca." },
  { prompt: "Toque no animal que corre com crina.", answer: "cavalo", praise: "Muito bem. O cavalo encontrou seu lugar." },
  { prompt: "Toque no animal de pescoço comprido.", answer: "girafa", praise: "Isso. A girafa viu a Arca lá de cima." },
  { prompt: "Toque no animal que voa e lembra paz.", answer: "pomba", praise: "Parabéns. Você completou as 10 fases." }
];

const animals = [
  { id: "elefante", label: "Elefante", image: "assets/elephant.svg" },
  { id: "leao", label: "Leão", image: "assets/lion.svg" },
  { id: "sapo", label: "Sapo", image: "assets/frog.svg" },
  { id: "tartaruga", label: "Tartaruga", image: "assets/turtle.svg" },
  { id: "galo", label: "Galo", image: "assets/rooster.svg" },
  { id: "ovelha", label: "Ovelha", image: "assets/sheep-animal.svg" },
  { id: "vaca", label: "Vaca", image: "assets/cow.svg" },
  { id: "cavalo", label: "Cavalo", image: "assets/horse.svg" },
  { id: "girafa", label: "Girafa", image: "assets/giraffe.svg" },
  { id: "pomba", label: "Pomba", image: "assets/dove.svg" }
];

const quizItems = [
  { text: "Noé construiu uma arca.", answer: true, note: "Isso mesmo." },
  { text: "Davi venceu Golias com uma coroa.", answer: false, note: "Foi com uma pedra e sua funda." },
  { text: "Daniel orava a Deus.", answer: true, note: "Muito bem." },
  { text: "Jonas foi engolido por um grande peixe.", answer: true, note: "Acertou." },
  { text: "Jesus acalmou uma tempestade.", answer: true, note: "Isso. Jesus trouxe paz." },
  { text: "A Arca de Noé era um castelo.", answer: false, note: "Não. Era uma grande arca." },
  { text: "Daniel parou de orar a Deus.", answer: false, note: "Não. Daniel continuou orando." },
  { text: "Deus criou os animais.", answer: true, note: "Muito bem." },
  { text: "Davi era gigante como Golias.", answer: false, note: "Não. Davi era jovem e confiou em Deus." },
  { text: "Podemos falar com Deus em oração.", answer: true, note: "Parabéns. Isso é verdade." }
];

const miniGameContent = {
  "Monte a História": [
    {
      prompt: "Qual cena vem primeiro na história de Noé?",
      options: ["Noé obedece", "A Arca fica pronta", "Os animais entram"],
      answer: "Noé obedece",
      success: "Muito bem. Primeiro Noé ouviu a Deus.",
      image: "assets/story-noah-build.svg"
    },
    {
      prompt: "Depois que Noé obedeceu, o que ele construiu?",
      options: ["Uma torre", "A Arca", "Um palácio"],
      answer: "A Arca",
      success: "Isso. Noé preparou a Arca com cuidado.",
      image: "assets/ark-scene-wide.svg"
    },
    {
      prompt: "Quem entrou na Arca em pares?",
      options: ["Os animais", "As estrelas", "As pedras"],
      answer: "Os animais",
      success: "Parabéns. Você montou a história.",
      image: "assets/story-animals-enter.svg"
    }
  ],
  "Mapa dos Milagres": [
    {
      prompt: "Toque na cena que lembra um milagre de Jesus.",
      options: ["Tempestade calma", "Coroa do rei", "Cesta vazia"],
      answer: "Tempestade calma",
      success: "Isso. Jesus acalmou a tempestade.",
      image: "assets/story-rainbow.svg"
    },
    {
      prompt: "Jesus cuidou das pessoas com...",
      options: ["amor", "briga", "pressa"],
      answer: "amor",
      success: "Muito bem. Jesus cuidava com amor.",
      image: "assets/story-family.svg"
    },
    {
      prompt: "Quando sentimos medo, podemos confiar em...",
      options: ["Jesus", "Golias", "uma coroa"],
      answer: "Jesus",
      success: "Acertou. Jesus está conosco.",
      image: "assets/miracle-map.svg"
    }
  ],
  "Versículo Secreto": [
    {
      prompt: "Complete: Deus é...",
      options: ["amor", "medo", "pressa"],
      answer: "amor",
      success: "Acertou. Deus é amor.",
      image: "assets/verse-scroll.svg"
    },
    {
      prompt: "Complete: O Senhor é meu...",
      options: ["pastor", "barco", "escudo quebrado"],
      answer: "pastor",
      success: "Isso. O Senhor cuida de nós.",
      image: "assets/sheep-animal.svg"
    },
    {
      prompt: "Complete: Posso falar com Deus em...",
      options: ["oração", "correria", "silêncio sem amor"],
      answer: "oração",
      success: "Parabéns. Você descobriu o versículo.",
      image: "assets/guide-sheep.svg"
    }
  ],
  "Triunfo Bíblico": [
    {
      prompt: "Quem mostrou coragem diante de Golias?",
      options: ["Davi", "Jonas", "Noé"],
      answer: "Davi",
      success: "Correto. Davi confiou em Deus.",
      image: "assets/david.svg"
    },
    {
      prompt: "Quem preparou uma grande Arca?",
      options: ["Noé", "Daniel", "Salomão"],
      answer: "Noé",
      success: "Isso. Noé foi obediente.",
      image: "assets/noah.svg"
    },
    {
      prompt: "Quem orava a Deus com fé?",
      options: ["Daniel", "Golias", "Faraó"],
      answer: "Daniel",
      success: "Muito bem. Daniel confiava em Deus.",
      image: "assets/lion.svg"
    }
  ],
  "Linha do Tempo": [
    {
      prompt: "Qual história vem primeiro na Bíblia?",
      options: ["A criação", "Davi e Golias", "Daniel na cova"],
      answer: "A criação",
      success: "Muito bem. Deus criou todas as coisas.",
      image: "assets/story-family.svg"
    },
    {
      prompt: "O que vem depois na história de Noé?",
      options: ["A Arca", "Golias", "O grande peixe"],
      answer: "A Arca",
      success: "Isso. Noé preparou a Arca.",
      image: "assets/story-noah-build.svg"
    },
    {
      prompt: "Qual história fala de coragem?",
      options: ["Davi e Golias", "A criação", "A Arca pronta"],
      answer: "Davi e Golias",
      success: "Parabéns. Você organizou a linha do tempo.",
      image: "assets/david.svg"
    }
  ],
  "Desafio dos Reis": [
    {
      prompt: "Quem pediu sabedoria a Deus?",
      options: ["Salomão", "Golias", "Faraó"],
      answer: "Salomão",
      success: "Isso. Salomão pediu sabedoria.",
      image: "assets/david.svg"
    },
    {
      prompt: "Um bom rei deve cuidar do povo com...",
      options: ["justiça", "medo", "egoísmo"],
      answer: "justiça",
      success: "Muito bem. Justiça é cuidar do que é certo.",
      image: "assets/kings-challenge.svg"
    },
    {
      prompt: "A sabedoria vem de...",
      options: ["Deus", "orgulho", "barulho"],
      answer: "Deus",
      success: "Parabéns. Você completou o desafio.",
      image: "assets/story-rainbow.svg"
    }
  ]
};

const bonusMiniStages = [
  {
    prompt: "Qual palavra combina com uma boa escolha?",
    options: ["obediência", "bagunça", "medo"],
    answer: "obediência",
    success: "Isso. Obedecer ajuda a cuidar da aventura.",
    image: "assets/story-order.svg"
  },
  {
    prompt: "Qual animal entrou na Arca?",
    options: ["Leão", "Carrinho", "Cadeira"],
    answer: "Leão",
    success: "Muito bem. O leão entrou na Arca.",
    image: "assets/lion.svg"
  },
  {
    prompt: "Quem cuida da criação de Deus?",
    options: ["Nós cuidamos", "Ninguém", "Só Golias"],
    answer: "Nós cuidamos",
    success: "Acertou. Podemos cuidar do que Deus fez.",
    image: "assets/story-rainbow.svg"
  },
  {
    prompt: "Quando alguém precisa de ajuda, o que fazemos?",
    options: ["Ajudamos", "Viramos as costas", "Rimos"],
    answer: "Ajudamos",
    success: "Isso. Bondade deixa a Arca mais bonita.",
    image: "assets/story-family.svg"
  },
  {
    prompt: "Qual atitude combina com Daniel?",
    options: ["oração", "desobediência", "mentira"],
    answer: "oração",
    success: "Muito bem. Daniel falava com Deus.",
    image: "assets/guide-sheep.svg"
  },
  {
    prompt: "Qual presente Deus colocou no céu depois da chuva?",
    options: ["Arco-íris", "Pedra", "Coroa"],
    answer: "Arco-íris",
    success: "Acertou. O arco-íris lembra o cuidado de Deus.",
    image: "assets/story-rainbow.svg"
  },
  {
    prompt: "Para terminar, escolha uma palavra de gratidão.",
    options: ["Obrigado, Deus", "Não quero", "Estou bravo"],
    answer: "Obrigado, Deus",
    success: "Parabéns. Você completou as 10 fases.",
    image: "assets/guide-sheep.svg"
  }
];

const extraMiniGames = {
  "Charadas dos Animais": [
    { prompt: "Sou alto e tenho pescoço comprido. Quem sou eu?", options: ["Girafa", "Sapo", "Galo"], answer: "Girafa", success: "Isso. A girafa é bem alta.", image: "assets/giraffe.svg" },
    { prompt: "Tenho tromba e sou grandão. Quem sou eu?", options: ["Elefante", "Pomba", "Vaca"], answer: "Elefante", success: "Acertou. É o elefante.", image: "assets/elephant.svg" },
    { prompt: "Tenho juba e rujo forte. Quem sou eu?", options: ["Leão", "Cavalo", "Ovelha"], answer: "Leão", success: "Muito bem. É o leão.", image: "assets/lion.svg" },
    { prompt: "Pulo e vivo perto da água. Quem sou eu?", options: ["Sapo", "Girafa", "Galo"], answer: "Sapo", success: "Isso. O sapo pula feliz.", image: "assets/frog.svg" },
    { prompt: "Ando devagar e tenho casco. Quem sou eu?", options: ["Tartaruga", "Leão", "Pomba"], answer: "Tartaruga", success: "Acertou. É a tartaruga.", image: "assets/turtle.svg" },
    { prompt: "Dou lã macia. Quem sou eu?", options: ["Ovelha", "Cavalo", "Vaca"], answer: "Ovelha", success: "Muito bem. É a ovelha.", image: "assets/sheep-animal.svg" },
    { prompt: "Canto quando o dia começa. Quem sou eu?", options: ["Galo", "Elefante", "Sapo"], answer: "Galo", success: "Isso. O galo canta cedo.", image: "assets/rooster.svg" },
    { prompt: "Faço mu e dou leite. Quem sou eu?", options: ["Vaca", "Pomba", "Girafa"], answer: "Vaca", success: "Acertou. É a vaca.", image: "assets/cow.svg" },
    { prompt: "Corro e tenho crina. Quem sou eu?", options: ["Cavalo", "Tartaruga", "Galo"], answer: "Cavalo", success: "Muito bem. É o cavalo.", image: "assets/horse.svg" },
    { prompt: "Voo e lembro paz. Quem sou eu?", options: ["Pomba", "Leão", "Vaca"], answer: "Pomba", success: "Parabéns. Você completou as charadas.", image: "assets/dove.svg" }
  ],
  "Sons da Arca": [
    { prompt: "Qual animal relincha na Arca?", options: ["Cavalo", "Galo", "Leão"], answer: "Cavalo", success: "Isso. O cavalo relincha.", image: "assets/horse.svg" },
    { prompt: "Qual animal canta cocoricó?", options: ["Galo", "Sapo", "Vaca"], answer: "Galo", success: "Isso. Cocoricó é o galo.", image: "assets/rooster.svg" },
    { prompt: "Qual animal faz mu?", options: ["Vaca", "Pomba", "Tartaruga"], answer: "Vaca", success: "Acertou. A vaca faz mu.", image: "assets/cow.svg" },
    { prompt: "Qual animal ruge?", options: ["Leão", "Ovelha", "Sapo"], answer: "Leão", success: "Muito bem. O leão ruge.", image: "assets/lion.svg" },
    { prompt: "Qual animal faz bééé?", options: ["Ovelha", "Galo", "Girafa"], answer: "Ovelha", success: "Isso. A ovelha faz bééé.", image: "assets/sheep-animal.svg" },
    { prompt: "Qual animal relincha?", options: ["Cavalo", "Sapo", "Elefante"], answer: "Cavalo", success: "Acertou. O cavalo relincha.", image: "assets/horse.svg" },
    { prompt: "Qual animal coaxaria perto da água?", options: ["Sapo", "Leão", "Vaca"], answer: "Sapo", success: "Isso. O sapo coaxaria.", image: "assets/frog.svg" },
    { prompt: "Qual animal arrulha?", options: ["Pomba", "Girafa", "Galo"], answer: "Pomba", success: "Muito bem. A pomba arrulha.", image: "assets/dove.svg" },
    { prompt: "Qual animal faz um som bem grave com a tromba?", options: ["Elefante", "Tartaruga", "Ovelha"], answer: "Elefante", success: "Acertou. É o elefante.", image: "assets/elephant.svg" },
    { prompt: "Qual animal é mais silencioso e anda devagar?", options: ["Tartaruga", "Galo", "Leão"], answer: "Tartaruga", success: "Parabéns. Você ouviu a Arca toda.", image: "assets/turtle.svg" }
  ],
  "Caminho da Obediência": [
    { prompt: "Noé ouviu Deus. O que ele fez?", options: ["Obedeceu", "Fugiu", "Riu"], answer: "Obedeceu", success: "Isso. Noé escolheu obedecer.", image: "assets/noah.svg" },
    { prompt: "Quando a família ajuda, a Arca fica...", options: ["pronta", "quebrada", "vazia"], answer: "pronta", success: "Muito bem. A família ajudou.", image: "assets/story-family.svg" },
    { prompt: "Os animais entraram...", options: ["dois a dois", "sozinhos", "correndo para longe"], answer: "dois a dois", success: "Acertou. Dois a dois.", image: "assets/story-animals-enter.svg" }
  ],
  "Quem Sou Eu?": [
    { prompt: "Cuidei das ovelhas e confiei em Deus.", options: ["Davi", "Noé", "Jonas"], answer: "Davi", success: "Isso. É Davi.", image: "assets/david.svg" },
    { prompt: "Construí uma Arca.", options: ["Noé", "Daniel", "Salomão"], answer: "Noé", success: "Acertou. É Noé.", image: "assets/noah.svg" },
    { prompt: "Orei mesmo em perigo.", options: ["Daniel", "Golias", "Faraó"], answer: "Daniel", success: "Muito bem. É Daniel.", image: "assets/lion.svg" }
  ],
  "Missão dos Discípulos": [
    { prompt: "Jesus chamou pessoas para segui-lo. Elas eram...", options: ["discípulos", "gigantes", "animais"], answer: "discípulos", success: "Isso. Eram discípulos.", image: "assets/story-family.svg" },
    { prompt: "Uma missão de Jesus é amar o...", options: ["próximo", "medo", "barulho"], answer: "próximo", success: "Muito bem. Amar o próximo.", image: "assets/star-badge.svg" },
    { prompt: "Quando aprendemos com Jesus, podemos...", options: ["servir", "empurrar", "desistir"], answer: "servir", success: "Acertou. Podemos servir.", image: "assets/guide-sheep.svg" }
  ]
};

Object.assign(miniGameContent, extraMiniGames);

Object.keys(miniGameContent).forEach((title) => {
  miniGameContent[title] = [...miniGameContent[title], ...bonusMiniStages].slice(0, 10);
});

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

const badges = [
  { title: "Selo da Obediência", icon: "★", text: "Aprendi a ouvir e obedecer.", unlock: () => foundAnimalIds.size >= 1 },
  { title: "Selo do Cuidado", icon: "✚", text: "Cuidei dos animais da Arca.", unlock: () => foundAnimalIds.size >= 2 },
  { title: "Selo da Coragem", icon: "◆", text: "Deus me ajuda a ser corajoso.", unlock: () => foundAnimalIds.size >= 3 },
  { title: "Selo da Gratidão", icon: "☀", text: "Aprendi a agradecer a Deus.", unlock: () => foundAnimalIds.size >= 4 },
  { title: "Selo da Fé", icon: "✦", text: "Confiei no cuidado de Deus.", unlock: () => foundAnimalIds.size >= 5 },
  { title: "Selo da Bondade", icon: "♡", text: "Pratiquei bondade nas missões.", unlock: () => foundAnimalIds.size >= 6 },
  { title: "Selo da Oração", icon: "●", text: "Ouvi uma história sobre oração.", unlock: () => completedStoryTitles.size >= 1 },
  { title: "Selo da Palavra", icon: "▣", text: "Completei histórias bíblicas.", unlock: () => completedStoryTitles.size >= 2 },
  { title: "Selo da Alegria", icon: "✿", text: "A Arca ficou mais alegre.", unlock: () => foundAnimalIds.size >= 8 },
  { title: "Selo da Arca Cheia", icon: "▲", text: "Encontrei todos os animais.", unlock: () => foundAnimalIds.size >= animals.length }
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
  { id: "selo", label: "Selo", image: "assets/star-badge.svg" },
  { id: "vaca", label: "Vaca", image: "assets/cow.svg" },
  { id: "cavalo", label: "Cavalo", image: "assets/horse.svg" },
  { id: "girafa", label: "Girafa", image: "assets/giraffe.svg" },
  { id: "pomba", label: "Pomba", image: "assets/dove.svg" }
];

const screens = [...document.querySelectorAll(".content")];
const screenTitle = document.querySelector("#screenTitle");
const screenEyebrow = document.querySelector("#screenEyebrow");
const backButton = document.querySelector("#backButton");
const navItems = [...document.querySelectorAll(".nav-item")];
const soundButton = document.querySelector("#soundButton");
const assetVersion = "24";
const serviceWorkerPath = `./sw.js?v=${assetVersion}`;
const trialStorageKey = "arcakidsTrialUntil";
const membershipStorageKey = "arcakidsMembershipActive";
const dailyLimitStorageKey = "arcakidsDailyLimit";
const cacheStorageKey = "arcakidsCacheVersion";
const foundAnimalsStorageKey = "arcakidsFoundAnimals";
const completedStoriesStorageKey = "arcakidsCompletedStories";
let historyStack = ["home"];
let currentAge = "3-5";
let currentRound = 0;
let playScore = 0;
let animalCorrectScore = 0;
let roundSolved = false;
let currentQuiz = 0;
let quizScore = 0;
let quizAnswered = false;
let currentStory = 0;
let currentStoryPage = 0;
let chosenColor = "#ef4444";
let paintTemplate = "arca";
let drawing = false;
let firstMemoryCard = null;
let lockMemory = false;
let memoryMistakes = 0;
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
let miniGameStage = 0;
let miniGameSolved = false;
let miniGameScore = 0;
let dailyFreeGameTitles = new Set();
let dailyFreeStoryTitles = new Set();
let foundAnimalIds = new Set(JSON.parse(localStorage.getItem(foundAnimalsStorageKey) || "[]"));
let completedStoryTitles = new Set(JSON.parse(localStorage.getItem(completedStoriesStorageKey) || "[]"));

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function assetUrl(path) {
  if (!path) return "";
  if (/^(data:|blob:|https?:)/.test(path)) return path;
  return path.includes("?") ? path : `${path}?v=${assetVersion}`;
}

function fallbackSvg(label = "Arcakids") {
  const safeLabel = escapeHtml(String(label).slice(0, 18));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
      <rect width="180" height="180" rx="34" fill="#FFF4D4"/>
      <circle cx="90" cy="78" r="38" fill="#F7BE45"/>
      <path d="M46 118c26 24 62 25 88 0" fill="none" stroke="#2AA7A5" stroke-width="14" stroke-linecap="round"/>
      <path d="M62 80h56M72 64l-14 16 14 16M108 64l14 16-14 16" fill="none" stroke="#172033" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="90" y="154" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="800" fill="#172033">${safeLabel}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function imageTag(src, alt = "", label = "") {
  return `<img src="${assetUrl(src)}" alt="${escapeHtml(alt)}" data-fallback-label="${escapeHtml(label || alt || "Arcakids")}" />`;
}

function setImageSource(selector, src, label = "") {
  const image = document.querySelector(selector);
  if (!image) return;
  image.dataset.fallbackLabel = label || image.alt || "Arcakids";
  delete image.dataset.fallbackApplied;
  image.src = assetUrl(src);
}

document.addEventListener(
  "error",
  (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === "true") return;
    image.dataset.fallbackApplied = "true";
    image.src = fallbackSvg(image.dataset.fallbackLabel || image.alt || "Arcakids");
  },
  true
);

if (localStorage.getItem(cacheStorageKey) !== "8") {
  localStorage.removeItem(dailyLimitStorageKey);
  localStorage.setItem(cacheStorageKey, "8");
  dailyLimit = 25;
}

function isTrialActive() {
  return Date.now() < trialUntil;
}

function hasCompleteAccess() {
  return isTrialActive() || localStorage.getItem(membershipStorageKey) === "true";
}

function getTrialDaysLeft() {
  if (!isTrialActive()) return 0;
  return Math.max(1, Math.ceil((trialUntil - Date.now()) / 86400000));
}

function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function seededNumber(seedText) {
  let seed = 2166136261;
  for (let index = 0; index < seedText.length; index += 1) {
    seed ^= seedText.charCodeAt(index);
    seed = Math.imul(seed, 16777619);
  }
  return seed >>> 0;
}

function shuffleForDay(items, seedText) {
  const mixed = [...items];
  let seed = seededNumber(seedText);
  for (let index = mixed.length - 1; index > 0; index -= 1) {
    seed = Math.imul(seed ^ (seed >>> 15), 2246822519) >>> 0;
    const swapIndex = seed % (index + 1);
    [mixed[index], mixed[swapIndex]] = [mixed[swapIndex], mixed[index]];
  }
  return mixed;
}

function getDailyGames(age, complete = hasCompleteAccess()) {
  const pool = games.filter((game) => game.age === age);
  return shuffleForDay(pool, `${getTodayKey()}-${age}-${complete ? "complete" : "free"}-games`)
    .slice(0, complete ? 6 : 2);
}

function getDailyStories(complete = hasCompleteAccess()) {
  const pool = complete ? stories : stories.filter((story) => story.free);
  return shuffleForDay(pool, `${getTodayKey()}-${complete ? "complete" : "free"}-stories`)
    .slice(0, complete ? 3 : 1);
}

function refreshDailyAccess() {
  dailyFreeGameTitles = new Set(getDailyGames(currentAge, false).map((game) => game.title));
  dailyFreeStoryTitles = new Set(getDailyStories(false).map((story) => story.title));
}

function isGameUnlocked(game) {
  return hasCompleteAccess() || dailyFreeGameTitles.has(game.title);
}

function isStoryUnlocked(story) {
  return hasCompleteAccess() || dailyFreeStoryTitles.has(story.title);
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
  if (name === "myArk") renderMyArk();
}

function renderPhaseDots(selector, total) {
  const path = document.querySelector(selector);
  if (!path) return;
  path.innerHTML = Array.from({ length: total }, () => "<span></span>").join("");
}

function getWrongAnswerText(answer) {
  return `Não foi essa. Resposta correta: ${answer}.`;
}

function persistProgress() {
  localStorage.setItem(foundAnimalsStorageKey, JSON.stringify([...foundAnimalIds]));
  localStorage.setItem(completedStoriesStorageKey, JSON.stringify([...completedStoryTitles]));
}

function addFoundAnimal(animalId) {
  if (!animalId) return;
  foundAnimalIds.add(animalId);
  persistProgress();
  renderProgressSummary();
  if (document.querySelector("#myArkScreen").classList.contains("active")) renderMyArk();
}

function renderProgressSummary() {
  const animalCount = foundAnimalIds.size;
  const earnedBadgeCount = badges.filter((badge) => badge.unlock()).length;
  document.querySelector("#homeAnimalCount").textContent = String(animalCount);
  document.querySelector("#homeStoryCount").textContent = String(completedStoryTitles.size);
  document.querySelector("#homeBadgeCount").textContent = String(earnedBadgeCount);
}

function getMyArkHeroMessage(count) {
  if (count === 0) {
    return {
      title: "Vamos começar a encher a Arca?",
      copy: "Jogue para encontrar o primeiro animal."
    };
  }

  if (count === 1) {
    return {
      title: "Primeiro animal encontrado!",
      copy: "Muito bem. Continue jogando para trazer novos amigos para a Arca."
    };
  }

  if (count < 4) {
    return {
      title: "A Arca está ganhando vida!",
      copy: `Você já encontrou ${count} animais. Faltam novas descobertas.`
    };
  }

  if (count < animals.length) {
    return {
      title: "A Arca está ficando cheia!",
      copy: `${count} animais já chegaram. Continue para completar a coleção.`
    };
  }

  return {
    title: "A Arca está completa!",
    copy: "Parabéns! Todos os animais foram encontrados."
  };
}

function renderMyArk() {
  const foundAnimals = animals.filter((animal) => foundAnimalIds.has(animal.id));
  const count = foundAnimals.length;
  const heroMessage = getMyArkHeroMessage(count);
  document.querySelector("#myArkHeroTitle").textContent = heroMessage.title;
  document.querySelector("#myArkHeroCopy").textContent = heroMessage.copy;
  document.querySelector("#myArkAnimalCount").textContent = `${count} ${count === 1 ? "animal" : "animais"}`;
  document.querySelector("#myArkAnimalMeter").style.width = `${Math.min(100, Math.round((count / animals.length) * 100))}%`;
  const collection = document.querySelector("#animalCollection");
  collection.innerHTML = "";

  const items = [...animals]
    .sort((a, b) => Number(foundAnimalIds.has(b.id)) - Number(foundAnimalIds.has(a.id)))
    .map((animal) => ({ ...animal, locked: !foundAnimalIds.has(animal.id) }));
  items.forEach((animal) => {
    const card = document.createElement("span");
    card.className = `animal-collection-card${animal.locked ? " locked" : ""}`;
    card.setAttribute("aria-label", animal.locked ? `${animal.label} ainda não encontrado` : `${animal.label} encontrado`);
    card.innerHTML = `${imageTag(animal.image, animal.label, animal.label)}<small>${animal.locked ? "A encontrar" : animal.label}</small>`;
    collection.appendChild(card);
  });

  const badgeGrid = document.querySelector("#badgeGrid");
  badgeGrid.innerHTML = "";
  badges.forEach((badge) => {
    const earned = badge.unlock();
    const card = document.createElement("article");
    card.className = `ark-badge${earned ? " earned" : ""}`;
    card.innerHTML = `
      <span>${badge.icon}</span>
      <strong>${badge.title}</strong>
      <small>${earned ? badge.text : "Continue brincando para conquistar."}</small>
    `;
    badgeGrid.appendChild(card);
  });
}

function startAnimalGame() {
  selectedGame = games.find((game) => game.screen === "play") || selectedGame;
  currentRound = 0;
  playScore = 0;
  animalCorrectScore = 0;
  renderPhaseDots("#animalPath", animalRounds.length);
  document.querySelector("#playTotal").textContent = animalRounds.length;
  document.querySelector("#animalReward").hidden = true;
  document.querySelector("#animalRewardTitle").textContent = "Selo da Arca desbloqueado";
  document.querySelector("#animalRewardText").textContent = "Você encontrou todos os animais desta fase.";
  document.querySelector("#nextRound").textContent = "Próxima charada";
  renderAnimalRound();
}

function renderGameCards(container, items) {
  container.innerHTML = "";
  items.forEach((game) => {
    const locked = !isGameUnlocked(game);
    const card = document.createElement("button");
    card.className = `game-card${locked ? " locked" : ""}`;
    card.dataset.screen = locked ? "parent" : game.screen;
    card.dataset.gameTitle = game.title;
    if (game.locked && hasCompleteAccess() && game.screen === "membership") {
      card.dataset.premiumActivity = game.title;
      card.dataset.screen = "premiumActivity";
    }
    card.innerHTML = `
      <span class="game-art">${imageTag(game.image, "", game.title)}</span>
      <span class="game-level">${locked ? "Adulto" : game.locked && hasCompleteAccess() ? "Liberado" : game.level}</span>
      <strong>${game.title}</strong>
      <small>${locked ? "Aventura fechada na versão free" : `${game.description} · ${game.age}`}</small>
      <span class="progress-track"><i style="width:${game.progress}%"></i></span>
    `;
    container.appendChild(card);
  });
}

function updateHomeForProfile(age) {
  const profile = ageProfiles[age];
  currentAge = age;
  refreshDailyAccess();
  document.querySelector("#homeScreen").dataset.title = profile.title;
  document.querySelector("#agePill").textContent = profile.pill;
  document.querySelector("#heroTitle").textContent = profile.hero;
  document.querySelector("#heroCopy").textContent = profile.copy;
  if (document.querySelector("#homeScreen").classList.contains("active")) {
    screenTitle.textContent = profile.title;
  }
  renderDailyHomeContent();
  renderGameCards(document.querySelector("#allGames"), games);
}

function renderDailyHomeContent() {
  const complete = hasCompleteAccess();
  const dailyGames = getDailyGames(currentAge, complete);
  const dailyStories = getDailyStories(complete);
  renderGameCards(document.querySelector("#featuredGames"), dailyGames);
  configureHomeActions(dailyGames, dailyStories, complete);

  const storyList = document.querySelector("#dailyStories");
  storyList.innerHTML = "";
  dailyStories.forEach((story) => {
    const firstPage = story.pages[0];
    const storyIndex = stories.findIndex((item) => item.title === story.title);
    const card = document.createElement("button");
    card.className = "story-strip";
    card.dataset.screen = "stories";
    card.dataset.storyIndex = storyIndex;
    card.innerHTML = `
      <span class="story-art" style="background-image:url('${assetUrl(firstPage.image)}')"></span>
      <span>
        <strong>${story.title}</strong>
        <small>${complete ? "Completo" : "Liberado hoje"} · ${story.tags}</small>
      </span>
      <b>›</b>
    `;
    storyList.appendChild(card);
  });
}

function setButtonTarget(button, target) {
  if (!button) return;
  ["screen", "gameTitle", "storyIndex"].forEach((key) => {
    delete button.dataset[key];
  });
  Object.entries(target).forEach(([key, value]) => {
    button.dataset[key] = value;
  });
}

function configureHomeActions(dailyGames, dailyStories, complete) {
  const firstGame = dailyGames[0];
  const firstStory = dailyStories[0];
  const firstStoryIndex = stories.findIndex((story) => story.title === firstStory?.title);

  setButtonTarget(document.querySelector("#heroContinueButton"), {
    screen: firstGame?.screen || "games",
    gameTitle: firstGame?.title || ""
  });
  setButtonTarget(document.querySelector("#missionButton"), {
    screen: firstGame?.screen || "games",
    gameTitle: firstGame?.title || ""
  });
  setButtonTarget(document.querySelector("#heroStoryButton"), {
    screen: "stories",
    storyIndex: String(Math.max(0, firstStoryIndex))
  });

  [
    ["#quickGamesButton", "games", complete ? "Missões bíblicas" : "Peça a um adulto"],
    ["#quickStoriesButton", "stories", complete ? "Histórias da Bíblia" : "Peça a um adulto"],
    ["#seeAllGamesButton", "games", complete ? "Ver todos" : "Liberar mais"],
    ["#seeAllStoriesButton", "stories", complete ? "Abrir" : "Liberar mais"]
  ].forEach(([selector, screen, label]) => {
    const button = document.querySelector(selector);
    setButtonTarget(button, { screen: complete ? screen : "parent" });
    button?.classList.toggle("locked-action", !complete);
    if (selector.startsWith("#quick")) {
      const small = button?.querySelector("small");
      if (small) small.textContent = label;
    } else if (button) {
      button.textContent = label;
    }
  });
}

function renderAnimalRound() {
  const board = document.querySelector("#animalBoard");
  const round = animalRounds[currentRound % animalRounds.length];
  const isComplete = playScore >= animalRounds.length;
  if (isComplete) {
    document.querySelector("#animalFeedback").textContent =
      `Fase completa. Você acertou ${animalCorrectScore} de ${animalRounds.length}.`;
    document.querySelector("#animalReward").hidden = false;
    document.querySelector("#animalRewardTitle").textContent = "Selo da Arca desbloqueado";
    document.querySelector("#animalRewardText").textContent =
      `Você terminou a aventura e acertou ${animalCorrectScore} de ${animalRounds.length}.`;
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
  document.querySelectorAll("#animalPath span").forEach((step, index) => {
    step.classList.toggle("active", index === currentRound);
    step.classList.toggle("done", index < playScore);
  });
  board.innerHTML = "";
  options.forEach((animal) => {
    const tile = document.createElement("button");
    tile.className = "animal-tile";
    tile.dataset.animalId = animal.id;
    tile.innerHTML = `${imageTag(animal.image, "", animal.label).replace("<img", "<img class=\"animal-image\"")}<strong>${animal.label}</strong>`;
    tile.setAttribute("aria-label", animal.id);
    tile.addEventListener("click", () => {
      if (roundSolved) return;
      const correct = animal.id === round.answer;
      roundSolved = true;
      tile.classList.add(correct ? "correct" : "wrong");
      const correctTile = board.querySelector(`[data-animal-id="${round.answer}"]`);
      correctTile?.classList.add("correct");
      if (correct) {
        playSuccessSound();
      } else {
        playTryAgainSound();
      }
      if (correct) animalCorrectScore += 1;
      playScore = Math.min(animalRounds.length, playScore + 1);
      document.querySelector("#playScore").textContent = playScore;
      document.querySelectorAll("#animalPath span").forEach((step, index) => {
        step.classList.toggle("done", index < playScore);
      });
      if (correct) {
        document.querySelector("#animalFeedback").textContent = round.praise;
        addFoundAnimal(round.answer);
      } else {
        document.querySelector("#animalFeedback").textContent = getWrongAnswerText(answer.label);
      }
      if (playScore === animalRounds.length) {
        document.querySelector("#animalFeedback").textContent =
          `Fim do jogo. Você acertou ${animalCorrectScore} de ${animalRounds.length}.`;
        document.querySelector("#animalReward").hidden = false;
        document.querySelector("#animalRewardTitle").textContent = "Selo da Arca desbloqueado";
        document.querySelector("#animalRewardText").textContent =
          `Placar final: ${animalCorrectScore} de ${animalRounds.length} respostas certas.`;
        document.querySelector("#nextRound").textContent = "Jogar de novo";
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
  setImageSource("#memoryMastheadImage", game.image, game.title);
  const board = document.querySelector("#memoryBoard");
  const cards = [...memoryItems, ...memoryItems].sort(() => Math.random() - 0.5);
  document.querySelector("#matchCount").textContent = "0";
  document.querySelector("#matchTotal").textContent = memoryItems.length;
  document.querySelector("#memoryFeedback").textContent = "Vire duas cartas para encontrar um par.";
  document.querySelector("#memoryReward").hidden = true;
  document.querySelector("#memoryRewardText").textContent = "Você encontrou todos os pares bíblicos.";
  firstMemoryCard = null;
  lockMemory = false;
  memoryMistakes = 0;
  board.innerHTML = "";
  cards.forEach((item) => {
    const card = document.createElement("button");
    card.className = "memory-card";
    card.dataset.value = item.id;
    card.dataset.label = item.label;
    card.dataset.image = assetUrl(item.image);
    card.innerHTML = `<span class="card-back">?</span><span class="card-face">${imageTag(item.image, "", item.label)}<small>${item.label}</small></span>`;
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
      document.querySelector("#memoryFeedback").textContent =
        `Todos os pares encontrados. Erros: ${memoryMistakes}.`;
      document.querySelector("#memoryRewardText").textContent =
        `Você encontrou ${pairs} de ${memoryItems.length} pares. Erros: ${memoryMistakes}.`;
      document.querySelector("#memoryReward").hidden = false;
    }
    return;
  }

  memoryMistakes += 1;
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
  quizAnswered = false;
  document.querySelector("#quizReward").hidden = true;
  document.querySelector("#quizQuestion").textContent = item.text;
  document.querySelector("#quizFeedback").textContent = `Pergunta ${currentQuiz + 1} de ${quizItems.length}`;
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.disabled = false;
    button.classList.remove("choice-correct", "choice-wrong");
  });
  document.querySelectorAll("#quizPath span").forEach((step, index) => {
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
  setImageSource("#quizMastheadImage", game.image, game.title);
  currentQuiz = 0;
  quizScore = 0;
  renderPhaseDots("#quizPath", quizItems.length);
  renderQuiz();
}

function finishQuiz() {
  document.querySelector("#quizQuestion").textContent = `Você acertou ${quizScore} de ${quizItems.length}.`;
  document.querySelector("#quizFeedback").textContent = `Desafio completo. Placar final: ${quizScore} de ${quizItems.length}.`;
  document.querySelector("#quizReward").hidden = false;
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.disabled = true;
    button.classList.remove("choice-correct", "choice-wrong");
  });
  document.querySelectorAll("#quizPath span").forEach((step) => {
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
  if (paintTemplate === "peixe") drawFishTemplate(ctx);
  if (paintTemplate === "leao") drawLionTemplate(ctx);
  if (paintTemplate === "arcoiris") drawRainbowTemplate(ctx);
  if (paintTemplate === "coracao") drawHeartTemplate(ctx);
  if (paintTemplate === "pomba") drawDoveTemplate(ctx);
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

function drawFishTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  ctx.beginPath();
  ctx.ellipse(150, 132, 78, 48, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(222, 132);
  ctx.lineTo(282, 90);
  ctx.lineTo(282, 174);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(118, 122, 5, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(154, 84);
  ctx.quadraticCurveTo(180, 54, 204, 90);
  ctx.moveTo(154, 180);
  ctx.quadraticCurveTo(180, 210, 204, 174);
  ctx.moveTo(88, 132);
  ctx.quadraticCurveTo(102, 146, 122, 148);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(42, 220);
  ctx.quadraticCurveTo(76, 202, 112, 220);
  ctx.quadraticCurveTo(148, 238, 184, 220);
  ctx.quadraticCurveTo(220, 202, 278, 220);
  ctx.stroke();
}

function drawLionTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  ctx.beginPath();
  ctx.arc(160, 122, 76, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(160, 126, 48, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(126, 84, 18, 0, Math.PI * 2);
  ctx.arc(194, 84, 18, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(144, 120, 4, 0, Math.PI * 2);
  ctx.arc(176, 120, 4, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(153, 137);
  ctx.quadraticCurveTo(160, 145, 167, 137);
  ctx.moveTo(145, 154);
  ctx.quadraticCurveTo(160, 166, 175, 154);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 46);
  ctx.lineTo(160, 72);
  ctx.moveTo(102, 68);
  ctx.lineTo(122, 88);
  ctx.moveTo(218, 68);
  ctx.lineTo(198, 88);
  ctx.moveTo(84, 132);
  ctx.lineTo(112, 132);
  ctx.moveTo(236, 132);
  ctx.lineTo(208, 132);
  ctx.moveTo(110, 188);
  ctx.lineTo(130, 166);
  ctx.moveTo(210, 188);
  ctx.lineTo(190, 166);
  ctx.stroke();
}

function drawRainbowTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  [106, 78, 50].forEach((radius) => {
    ctx.beginPath();
    ctx.arc(160, 184, radius, Math.PI, 0);
    ctx.stroke();
  });

  ctx.beginPath();
  ctx.arc(64, 184, 26, Math.PI, 0);
  ctx.arc(96, 184, 34, Math.PI, 0);
  ctx.arc(134, 184, 24, Math.PI, 0);
  ctx.moveTo(214, 184);
  ctx.arc(228, 184, 26, Math.PI, 0);
  ctx.arc(260, 184, 34, Math.PI, 0);
  ctx.arc(298, 184, 24, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(274, 58, 20, 0, Math.PI * 2);
  ctx.stroke();
}

function drawHeartTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  ctx.beginPath();
  ctx.moveTo(160, 214);
  ctx.bezierCurveTo(72, 150, 58, 88, 104, 68);
  ctx.bezierCurveTo(132, 56, 154, 74, 160, 94);
  ctx.bezierCurveTo(166, 74, 188, 56, 216, 68);
  ctx.bezierCurveTo(262, 88, 248, 150, 160, 214);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(120, 132);
  ctx.quadraticCurveTo(160, 164, 200, 132);
  ctx.stroke();
}

function drawDoveTemplate(ctx) {
  ctx.clearRect(0, 0, 320, 260);
  ctx.strokeStyle = "#172033";

  ctx.beginPath();
  ctx.ellipse(166, 140, 58, 36, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(94, 112, 28, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(68, 112);
  ctx.lineTo(34, 96);
  ctx.lineTo(68, 88);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(88, 106, 3, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 112);
  ctx.quadraticCurveTo(158, 54, 228, 78);
  ctx.quadraticCurveTo(192, 104, 166, 140);
  ctx.moveTo(220, 142);
  ctx.lineTo(282, 104);
  ctx.lineTo(258, 148);
  ctx.lineTo(286, 184);
  ctx.closePath();
  ctx.moveTo(146, 172);
  ctx.lineTo(132, 204);
  ctx.moveTo(178, 174);
  ctx.lineTo(194, 204);
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
  [220.0, 164.81].forEach((note, index) => {
    window.setTimeout(() => playTone(note, 0.16, 0.08, "square"), index * 120);
  });
}

function renderStory() {
  const story = stories[currentStory];
  const page = story.pages[currentStoryPage];
  document.querySelector("#storyTitle").textContent = page.title;
  document.querySelector("#storyText").textContent = page.text;
  setImageSource("#storyScene", page.image, page.alt || story.title);
  document.querySelector("#storyScene").alt = page.alt;
  setImageSource("#storyThumb", page.image, story.title);
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
    const locked = !isStoryUnlocked(story);
    const card = document.createElement("button");
    card.className = `story-card${locked ? " locked" : ""}${index === currentStory ? " active" : ""}`;
    card.dataset.storyIndex = index;
    card.innerHTML = `
      <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <strong>${story.title}</strong>
        <small>${locked ? "História fechada na versão free" : story.tags}</small>
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

function toggleFreeTrial() {
  if (isTrialActive()) {
    trialUntil = 0;
    localStorage.removeItem(trialStorageKey);
    playTryAgainSound();
  } else {
    trialUntil = Date.now() + 7 * 86400000;
    localStorage.setItem(trialStorageKey, String(trialUntil));
    playSuccessSound();
  }
  refreshDailyAccess();
  renderTrialStatus();
  renderGameCards(document.querySelector("#allGames"), games);
  renderDailyHomeContent();
  renderStoryList();
}

function renderTrialStatus() {
  const status = document.querySelector("#trialStatus");
  const button = document.querySelector("#freeTrialButton");
  if (!status || !button) return;
  if (isTrialActive()) {
    status.hidden = false;
    status.innerHTML = `<strong>Teste grátis ativo</strong><span>${getTrialDaysLeft()} dia(s) restantes. Toque no botão para voltar à versão free.</span>`;
    button.textContent = "Desativar teste e ver versão free";
    button.classList.add("trial-active");
  } else {
    status.hidden = false;
    status.innerHTML = "<strong>Versão free ativa</strong><span>Mostrando apenas a seleção diária liberada.</span>";
    button.textContent = "Ativar teste grátis por 7 dias";
    button.classList.remove("trial-active");
  }
}

function renderPremiumActivity() {
  const activity = selectedPremiumActivity || games.find((game) => game.locked);
  if (!activity) return;
  setImageSource("#premiumPreviewImage", activity.image, activity.title);
  document.querySelector("#premiumPreviewTitle").textContent = activity.title;
  document.querySelector("#premiumPreviewDescription").textContent =
    `${activity.description}. Atividade liberada durante o teste grátis de 7 dias.`;
}

function renderMiniGame() {
  const game = selectedGame || games.find((item) => item.screen === "miniGame");
  const stages = miniGameContent[game.title] || [
    {
      prompt: game.description,
      options: ["Começar", "Tentar", "Continuar"],
      answer: "Começar",
      success: "Parabéns. Você completou a aventura.",
      image: game.image
    }
  ];
  const content = stages[miniGameStage] || stages[0];
  document.querySelector(".app-screen").scrollTop = 0;
  document.querySelector("#miniGameScreen").dataset.title = game.title;
  screenTitle.textContent = game.title;
  setImageSource("#miniGameImage", content.image, game.title);
  document.querySelector("#miniGameTitle").textContent = game.title;
  document.querySelector("#miniGamePrompt").textContent = content.prompt;
  document.querySelector("#miniGameFeedback").textContent = `Fase ${miniGameStage + 1} de ${stages.length}. Escolha uma opção.`;
  document.querySelector("#miniGameNext").hidden = true;
  document.querySelector("#miniGameReward").hidden = miniGameStage < stages.length - 1 || !miniGameSolved;
  document.querySelector("#miniGameRewardText").textContent = "Parabéns! A Arca está ficando cheia.";
  document.querySelector("#miniGameProgress").innerHTML = stages
    .map((_, index) => `<span class="${index < miniGameStage ? "done" : index === miniGameStage ? "active" : ""}"></span>`)
    .join("");
  const choices = document.querySelector("#miniGameChoices");
  choices.innerHTML = "";
  content.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "secondary-button";
    button.textContent = option;
    button.addEventListener("click", () => {
      if (miniGameSolved) return;
      const isCorrect = option === content.answer;
      miniGameSolved = true;
      button.classList.add(isCorrect ? "choice-correct" : "choice-wrong");
      [...choices.children].forEach((choice) => {
        choice.disabled = true;
        if (choice.textContent === content.answer) choice.classList.add("choice-correct");
      });
      document.querySelector("#miniGameFeedback").textContent = isCorrect
        ? content.success
        : getWrongAnswerText(content.answer);
      document.querySelector("#miniGameNext").hidden = false;
      document.querySelector("#miniGameNext").textContent =
        miniGameStage === stages.length - 1 ? "Jogar de novo" : "Próxima fase";
      if (isCorrect) {
        miniGameScore += 1;
        playSuccessSound();
      } else {
        playTryAgainSound();
      }
      if (miniGameStage === stages.length - 1) {
        document.querySelector("#miniGameReward").hidden = false;
        document.querySelector("#miniGameRewardText").textContent =
          `Placar final: você acertou ${miniGameScore} de ${stages.length}.`;
      }
    });
    choices.appendChild(button);
  });
}

function advanceMiniGame() {
  const game = selectedGame || games.find((item) => item.screen === "miniGame");
  const stages = miniGameContent[game.title] || [];
  if (miniGameStage >= stages.length - 1) {
    miniGameStage = 0;
    miniGameScore = 0;
  } else {
    miniGameStage += 1;
  }
  miniGameSolved = false;
  renderMiniGame();
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
    miniGameStage = 0;
    miniGameSolved = false;
    miniGameScore = 0;
  }
  if (target?.dataset.storyIndex) {
    currentStory = Number(target.dataset.storyIndex);
    currentStoryPage = 0;
  }
  if (target?.dataset.premiumActivity) {
    selectedPremiumActivity = games.find((game) => game.title === target.dataset.premiumActivity);
  }
  if (target) showScreen(target.dataset.screen);
});

document.querySelector("#freeTrialButton").addEventListener("click", toggleFreeTrial);
document.querySelector("#gateSubmit").addEventListener("click", unlockParentArea);
document.querySelector("#gateAnswer").addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockParentArea();
});
document.querySelector("#dailyLimitSlider").addEventListener("input", (event) => {
  updateDailyLimit(event.target.value);
});
document.querySelector("#miniGameNext").addEventListener("click", advanceMiniGame);

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
    if (quizAnswered) return;
    if (currentQuiz >= quizItems.length) {
      startQuiz();
      return;
    }
    const item = quizItems[currentQuiz];
    const answer = button.dataset.answer === "true";
    const correct = answer === item.answer;
    const rightText = item.answer ? "Verdade" : "Falso";
    quizAnswered = true;
    document.querySelectorAll("[data-answer]").forEach((choice) => {
      const isRightChoice = (choice.dataset.answer === "true") === item.answer;
      choice.disabled = true;
      choice.classList.toggle("choice-correct", isRightChoice);
    });
    button.classList.toggle("choice-wrong", !correct);
    document.querySelector("#quizFeedback").textContent = correct
      ? item.note
      : getWrongAnswerText(rightText);
    if (correct) {
      playSuccessSound();
    } else {
      playTryAgainSound();
    }
    if (correct) quizScore += 1;
    setTimeout(() => {
      currentQuiz += 1;
      if (currentQuiz >= quizItems.length) {
        finishQuiz();
      } else {
        renderQuiz();
      }
    }, correct ? 1400 : 2600);
  });
});

document.querySelector("#storyPrev").addEventListener("click", () => {
  currentStoryPage = Math.max(0, currentStoryPage - 1);
  renderStory();
});

document.querySelector("#storyNext").addEventListener("click", () => {
  const story = stories[currentStory];
  if (currentStoryPage === story.pages.length - 1) {
    completedStoryTitles.add(story.title);
    persistProgress();
    renderProgressSummary();
    if (document.querySelector("#myArkScreen").classList.contains("active")) renderMyArk();
  }
  currentStoryPage = currentStoryPage === story.pages.length - 1 ? 0 : currentStoryPage + 1;
  renderStory();
  playTone(587.33, 0.12);
});

document.querySelector("#storyPlay").addEventListener("click", playStoryCue);

document.querySelector("#storyList").addEventListener("click", (event) => {
  const card = event.target.closest("[data-story-index]");
  if (!card) return;
  const nextStory = stories[Number(card.dataset.storyIndex)];
  if (!isStoryUnlocked(nextStory)) {
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
renderProgressSummary();
renderMyArk();
renderTrialStatus();
showScreen("home", false);

if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  navigator.serviceWorker.register(serviceWorkerPath).then((registration) => registration.update()).catch(() => {});
}
