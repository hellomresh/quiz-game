// --- Global State ---
let topic = '';
let difficulty = '';
let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
const unlockStatus = {
  bfs: { easy: false, medium: false, hard: false },
  dfs: { easy: false, medium: false, hard: false },
  astar: { easy: false, medium: false, hard: false }
};

// --- Video URLs per topic ---
const videos = {
  bfs: "https://www.youtube.com/embed/oDqjPvD54Ss",
  dfs: "https://www.youtube.com/embed/7fujbpJ0LB4",
  astar: "https://www.youtube.com/embed/-L-WgKMFuhE"
};

// --- Utilities ---
function show(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'flex';
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// --- Topic Button Click ---
document.querySelectorAll('.topic-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    topic = btn.dataset.topic;
    document.getElementById('topicTitle').innerText = topic.toUpperCase();
    document.getElementById('topicVideo').src = videos[topic];
    show('learningSection');
  });
});

// --- Proceed to Difficulty Selection ---
function showDifficulty() {
  // Enable Boss Button if all levels >= 80%
  const bossBtns = document.querySelectorAll('.boss-btn');
  bossBtns.forEach(btn => {
    const t = btn.dataset.topic;
    const unlocked = unlockStatus[t].easy && unlockStatus[t].medium && unlockStatus[t].hard;
    btn.disabled = !unlocked;
  });
  show('levelSelect');
}

// --- Difficulty Button Click ---
document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    difficulty = btn.dataset.difficulty;
    startQuiz(topic, difficulty);
  });
});

// --- Boss Button Click ---
document.querySelectorAll('.boss-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    topic = btn.dataset.topic;
    difficulty = "boss";
    startQuiz(topic, difficulty);
  });
});

// --- Start Quiz ---
function startQuiz(topic, difficulty) {
  score = 0;
  currentIndex = 0;
  answered = false;

  const allQ = quizData[topic][difficulty];
  questions = difficulty === 'boss' ? allQ : shuffle([...allQ]).slice(0, 5);

  show('quizSection');
  loadQuestion();
}

// --- Load Each Question ---
function loadQuestion() {
  answered = false;
  const q = questions[currentIndex];
  document.getElementById('questionText').innerText = `Q${currentIndex + 1}. ${q.question}`;
  const optionsBox = document.getElementById('optionsBox');
  optionsBox.innerHTML = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = opt;
    btn.onclick = () => {
      if (answered) return;
      answered = true;
      if (opt === q.answer) score++;
      currentIndex++;
      setTimeout(() => {
        currentIndex < questions.length ? loadQuestion() : showResult();
      }, 200);
    };
    optionsBox.appendChild(btn);
  });
}

// --- Show Result ---
function showResult() {
  const resultBox = document.getElementById('resultBox');
  const scoreCount = document.getElementById('scoreCount');
  const sectionScore = document.getElementById('sectionScore');

  const percent = Math.round((score / questions.length) * 100);
  scoreCount.innerText = `${score} / ${questions.length} (${percent}%)`;
  sectionScore.style.display = 'block';
  resultBox.style.display = 'flex';

  // Save score if not boss
  if (difficulty !== 'boss' && percent >= 80) {
    unlockStatus[topic][difficulty] = true;
  }

  show('resultBox');
}

// --- Restart Quiz ---
function restartQuiz() {
  document.getElementById('questionText').innerText = '';
  document.getElementById('optionsBox').innerHTML = '';
  document.getElementById('scoreCount').innerText = '';
  document.getElementById('sectionScore').style.display = 'none';
  document.getElementById('topicVideo').src = '';
  show('topicSelect');
}

// --- Back Button to Topic Selection ---
function goBack() {
  show('topicSelect');
}
