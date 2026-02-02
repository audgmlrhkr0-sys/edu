/**
 * 심리 테스트 - 모바일 터치 최적화
 */

const quizData = {
  questions: [
    {
      id: 1,
      text: '미술관에서는 조용히 해야 한다. 당신의 기분은?',
      options: [
        { text: '답답하다', value: 'A' },
        { text: '편안하다', value: 'B' },
        { text: '조용하다', value: 'C' },
        { text: '좋다', value: 'D' },
        { text: '짜증난다', value: 'E' },
        { text: '행복하다', value: 'F' },
      ],
    },
    {
      id: 2,
      text: '미술관 안에서는 뛰지 말아야 한다. 당신의 기분은?',
      options: [
        { text: '우아하다', value: 'G' },
        { text: '갑갑하다', value: 'H' },
        { text: '지루하다', value: 'I' },
        { text: '재미없다', value: 'J' },
      ],
    },
    {
      id: 3,
      text: '<사과>를 보고 떠오르는 감정을 골라보세요',
      options: [
        { text: '강렬하다', value: 'K' },
        { text: '상큼하다', value: 'L' },
        { text: '달달하다', value: 'M' },
        { text: '두렵다', value: 'N' },
        { text: '무섭다', value: 'O' },
        { text: '귀엽다', value: 'P' },
        { text: '슬프다', value: 'Q' },
        { text: '화난다', value: 'R' },
        { text: '두근거린다', value: 'S' },
        { text: '맛있다', value: 'T' },
      ],
    },
  ],
  exhibition: {
    '1전시실': ['사과', '파인애플', '감'],
    '2전시실': ['한라봉', '딸기'],
  },
  results: {
    A: { type: '답답함', description: '미술관의 조용한 분위기가 답답하게 느껴지는군요. 열린 공간과 자유로움이 더 맞을 수 있어요.' },
    B: { type: '편안함', description: '미술관의 조용한 분위기가 편안하게 느껴지시는군요. 차분한 감상이 잘 맞는 타입이에요.' },
    C: { type: '조용함', description: '조용한 환경이 자연스럽게 느껴지시는군요. 미술관의 분위기와 잘 어울려요.' },
    D: { type: '좋음', description: '미술관 분위기를 긍정적으로 느끼고 계시네요. 미술 감상에 적합한 마음가짐이에요.' },
    E: { type: '짜증', description: '조용히 해야 하는 상황이 불편하게 느껴지시는군요. 더 활기찬 문화 공간이 맞을 수 있어요.' },
    F: { type: '행복', description: '미술관에서 행복을 느끼고 계시네요. 예술과의 만남이 기쁨이 되는 타입이에요.' },
    G: { type: '우아함', description: '차분한 관람 매너가 우아하게 느껴지시는군요. 예의 바른 문화 공간을 선호하는 타입이에요.' },
    H: { type: '갑갑함', description: '움직임이 제한되는 것이 갑갑하게 느껴지시는군요. 자유로운 활동이 더 맞을 수 있어요.' },
    I: { type: '지루함', description: '천천히 걷고 조용히 감상하는 것이 지루하게 느껴지시는군요. 역동적인 경험이 좋을 수 있어요.' },
    J: { type: '재미없음', description: '규칙적인 관람이 재미없게 느껴지시는군요. 좀 더 자유로운 문화 공간을 찾아보세요.' },
    K: { type: '강렬함', description: '사과에서 강렬한 인상을 받으시는군요. 선명하고 두드러지는 것을 선호하는 타입이에요.' },
    L: { type: '상큼함', description: '사과의 상큼함이 느껴지시는군요. 시원하고 청량한 느낌을 좋아하는 타입이에요.' },
    M: { type: '달달함', description: '사과에서 달콤함을 느끼시는군요. 부드럽고 달콤한 것을 선호하는 타입이에요.' },
    N: { type: '두려움', description: '사과가 두렵게 느껴지시는군요. 무언가에 대한 신중한 경계심이 있는 타입일 수 있어요.' },
    O: { type: '무서움', description: '사과가 무섭게 느껴지시는군요. 독특한 감각과 연상을 가진 타입이에요.' },
    P: { type: '귀여움', description: '사과가 귀엽게 느껴지시는군요. 사랑스럽고 친근한 것을 좋아하는 타입이에요.' },
    Q: { type: '슬픔', description: '사과에서 슬픔이 떠오르시는군요. 감성적이고 깊은 연상을 하는 타입이에요.' },
    R: { type: '화남', description: '사과에서 화가 느껴지시는군요. 강한 감정과 연상을 가진 타입일 수 있어요.' },
    S: { type: '두근거림', description: '사과를 보며 두근거림을 느끼시는군요. 설렘과 기대를 갖는 로맨틱한 타입이에요.' },
    T: { type: '맛있음', description: '사과가 맛있어 보이시는군요. 감각적이고 실용적인 감상을 하는 타입이에요.' },
  },
};

// 상태
let currentQuestionIndex = 0;
let answers = [];

// DOM 요소
const startScreen = document.getElementById('start-screen');
const settingsScreen = document.getElementById('settings-screen');
const workSelectScreen = document.getElementById('work-select-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const btnStart = document.querySelector('.btn-start');
const btnConfirm = document.getElementById('btn-confirm');
const btnRetry = document.querySelector('.btn-retry');
const progressFill = document.getElementById('progress-fill');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const resultTypeEl = document.getElementById('result-type');
const resultDescEl = document.getElementById('result-description');

// 화면 전환
const allScreens = [startScreen, settingsScreen, workSelectScreen, questionScreen, resultScreen];

// 선택한 작품
let selectedWork = null;

function showScreen(screen) {
  allScreens.forEach((el) => el?.classList.remove('active'));
  screen?.classList.add('active');
}

// 사용자 설정
let userSettings = { gender: null, age: null, difficulty: null };

function initStaticNoise() {
  const container = document.getElementById('static-noise');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  function drawNoise() {
    const imageData = ctx.createImageData(256, 256);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = v;
      imageData.data[i + 3] = 80;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  drawNoise();
  container.style.backgroundImage = `url(${canvas.toDataURL()})`;
  container.style.backgroundSize = '100px 100px';

  const noiseInterval = setInterval(() => {
    if (!settingsScreen.classList.contains('active')) {
      clearInterval(noiseInterval);
      return;
    }
    drawNoise();
    container.style.backgroundImage = `url(${canvas.toDataURL()})`;
  }, 80);
}

function setupSettingsScreen() {
  const options = document.querySelectorAll('.setting-option');
  options.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      const value = btn.dataset.value;

      document.querySelectorAll(`[data-category="${category}"]`).forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      userSettings[category] = value;

      const allSelected = userSettings.gender && userSettings.age && userSettings.difficulty;
      btnConfirm.disabled = !allSelected;
    });
  });

  btnConfirm.addEventListener('click', () => {
    showScreen(questionScreen);
    renderQuestion();
  });
}

// 작품 선택 화면
function renderWorkSelect() {
  const container = document.getElementById('exhibition-categories');
  const rooms = quizData.exhibition;

  container.innerHTML = Object.entries(rooms)
    .map(
      ([roomName, works]) => `
      <div class="exhibition-category" data-room="${roomName}">
        <button type="button" class="category-toggle" aria-expanded="false">
          <span class="category-name">${roomName}</span>
          <span class="category-arrow">▼</span>
        </button>
        <div class="category-works" aria-hidden="true">
          ${works
            .map(
              (work, idx) => `
            <button type="button" class="work-option option-wiggle option-wiggle-${(idx % 6) + 1}" data-work="${work}">${work}</button>
          `
            )
            .join('')}
        </div>
      </div>
    `
    )
    .join('');

  container.querySelectorAll('.category-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.closest('.exhibition-category');
      const worksEl = category.querySelector('.category-works');
      const isOpen = category.classList.contains('open');

      container.querySelectorAll('.exhibition-category').forEach((c) => {
        c.classList.remove('open');
        c.querySelector('.category-toggle').setAttribute('aria-expanded', 'false');
        c.querySelector('.category-works').setAttribute('aria-hidden', 'true');
      });

      if (!isOpen) {
        category.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        worksEl.setAttribute('aria-hidden', 'false');
      }
    });
  });

  container.querySelectorAll('.work-option').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedWork = btn.dataset.work;
      container.querySelectorAll('.work-option').forEach((o) => o.classList.remove('selected'));
      btn.classList.add('selected');
      currentQuestionIndex = 2;
      renderQuestion();
      showScreen(questionScreen);
    });
  });
}

// 질문 렌더링
function renderQuestion() {
  const question = quizData.questions[currentQuestionIndex];
  const total = quizData.questions.length;

  progressFill.style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;
  questionNumberEl.textContent = `Q_${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  let questionText = question.text;
  if (currentQuestionIndex === 2 && selectedWork) {
    questionText = questionText.replace(/<[^>]+>/, `<${selectedWork}>`);
  }
  questionTextEl.textContent = questionText;

  optionsContainer.innerHTML = question.options
    .map(
      (opt, idx) => `
      <button type="button" class="option glitch-option option-wiggle option-wiggle-${idx + 1}" data-value="${opt.value}" data-index="${idx}">
        <span class="option-inner">${opt.text}</span>
      </button>
    `
    )
    .join('');

  optionsContainer.querySelectorAll('.option').forEach((btn) => {
    btn.addEventListener('click', handleOptionClick);
    btn.addEventListener('touchstart', handleOptionTouch, { passive: true });
  });
}

function handleOptionTouch(e) {
  const btn = e.currentTarget;
  optionsContainer.querySelectorAll('.option').forEach((o) => o.classList.remove('selected'));
  btn.classList.add('selected');
}

function handleOptionClick(e) {
  const btn = e.currentTarget;
  const value = btn.dataset.value;

  optionsContainer.querySelectorAll('.option').forEach((o) => o.classList.remove('selected'));
  btn.classList.add('selected');

  answers[currentQuestionIndex] = value;

  setTimeout(() => {
    if (currentQuestionIndex === 1) {
      showScreen(workSelectScreen);
      renderWorkSelect();
    } else if (currentQuestionIndex < quizData.questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 280);
}

// 결과 계산 및 표시
function showResult() {
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0 };
  answers.forEach((v) => {
    if (counts[v] !== undefined) counts[v]++;
  });

  const maxCount = Math.max(...Object.values(counts));
  const dominant = Object.entries(counts).find(([, c]) => c === maxCount)?.[0] || answers[answers.length - 1] || 'A';

  const result = quizData.results[dominant];
  resultTypeEl.textContent = result.type;
  let desc = result.description;
  if (selectedWork) {
    desc = desc.replace(/사과/g, selectedWork);
  }
  const descWithBreaks = desc.replace(/([.!?])\s+/g, '$1<br>');
  resultDescEl.innerHTML = descWithBreaks;
  showScreen(resultScreen);
}

// 초기화
function init() {
  currentQuestionIndex = 0;
  answers = [];
  selectedWork = null;
  userSettings = { gender: null, age: null, difficulty: null };
  showScreen(startScreen);
}

// 이벤트 바인딩
btnStart.addEventListener('click', () => {
  init();
  userSettings = { gender: null, age: null, difficulty: null };
  document.querySelectorAll('.setting-option').forEach((b) => b.classList.remove('selected'));
  btnConfirm.disabled = true;
  showScreen(settingsScreen);
  initStaticNoise();
});

btnRetry.addEventListener('click', () => {
  init();
  selectedWork = null;
  userSettings = { gender: null, age: null, difficulty: null };
  document.querySelectorAll('.setting-option').forEach((b) => b.classList.remove('selected'));
  btnConfirm.disabled = true;
  showScreen(settingsScreen);
  initStaticNoise();
});

// 전체 화면 글리치 (랜덤 트리거)
function triggerScreenGlitch() {
  const glitchScreen = document.getElementById('glitch-screen');
  if (!glitchScreen) return;
  glitchScreen.classList.add('active');
  setTimeout(() => glitchScreen.classList.remove('active'), 150);
}

function scheduleGlitch() {
  const delay = 2000 + Math.random() * 5000; // 2~7초 간격
  setTimeout(() => {
    triggerScreenGlitch();
    scheduleGlitch();
  }, delay);
}

// 앱 로드 시
document.addEventListener('DOMContentLoaded', () => {
  setupSettingsScreen();
  scheduleGlitch();
});
