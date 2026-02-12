const quizData = {
  questions: [
    {
      text: '미술관에서는 조용히 해야 한다',
      options: [
        { text: '답답하다', value: 'A' },
        { text: '편안하다', value: 'B' },
        { text: '조용하다', value: 'C' },
        { text: '좋다', value: 'D' },
        { text: '짜증난다', value: 'E' },
        { text: '행복하다', value: 'F' },
        { text: '평온하다', value: 'A1' },
        { text: '차분하다', value: 'A3' },
        { text: '심심하다', value: 'A4' },
        { text: '불편하다', value: 'A5' },
        { text: '따분하다', value: 'A6' },
        { text: '우울하다', value: 'A7' },
        { text: '안정적이다', value: 'A8' },
        { text: '신중하다', value: 'A9' },
        { text: '지루하다', value: 'B1' },
        { text: '숙연하다', value: 'B2' },
        { text: '포근하다', value: 'B4' },
        { text: '딱딱하다', value: 'B5' },
        { text: '무겁다', value: 'B6' },
        { text: '가벼다', value: 'B7' },
      ],
    },
    {
      text: '미술관 안에서는 뛰면 안된다',
      options: [
        { text: '우아하다', value: 'G' },
        { text: '갑갑하다', value: 'H' },
        { text: '지루하다', value: 'I' },
        { text: '재미없다', value: 'J' },
        { text: '답답하다', value: 'C1' },
        { text: '불편하다', value: 'C2' },
        { text: '차분하다', value: 'C3' },
        { text: '조심스럽다', value: 'C4' },
        { text: '담담하다', value: 'C5' },
        { text: '침착하다', value: 'C6' },
        { text: '긴장된다', value: 'C7' },
        { text: '어색하다', value: 'C8' },
        { text: '느긋하다', value: 'C9' },
        { text: '답답하다', value: 'D1' },
        { text: '따분하다', value: 'D2' },
        { text: '정적이다', value: 'D3' },
        { text: '편안하다', value: 'D4' },
        { text: '안정적이다', value: 'D5' },
        { text: '심심하다', value: 'D6' },
        { text: '억울하다', value: 'D7' },
      ],
    },
    {
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
  // 모드별 질문 (선택 사항). 예: questionsByMode: { '남': [...], '어린이': [...] }
  // 없으면 기본 questions 사용
  questionsByMode: {},
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
    A1: { type: '평온함', description: '미술관의 조용한 분위기가 평온하게 느껴지시는군요. 고요함 속에서 안정감을 느끼는 타입이에요.' },
    A3: { type: '차분함', description: '조용한 환경에서 차분함을 느끼시는군요. 정돈된 분위기에서 내면을 들여다보는 타입이에요.' },
    A4: { type: '심심함', description: '조용한 공간이 심심하게 느껴지시는군요. 활기차고 역동적인 문화 활동이 더 적합할 수 있어요.' },
    A5: { type: '불편함', description: '조용히 해야 하는 상황이 불편하게 느껴지시는군요. 자유롭게 표현할 수 있는 공간이 더 맞을 거예요.' },
    A6: { type: '따분함', description: '미술관의 정적인 분위기가 따분하게 느껴지시는군요. 변화와 자극이 있는 환경을 선호하는 타입이에요.' },
    A7: { type: '우울함', description: '조용한 공간이 우울하게 느껴지시는군요. 밝고 활기찬 분위기가 기분 전환에 도움이 될 수 있어요.' },
    A8: { type: '안정감', description: '조용한 분위기에서 안정감을 느끼시는군요. 예측 가능하고 정돈된 환경을 편안하게 여기는 타입이에요.' },
    A9: { type: '신중함', description: '조용한 공간에서 신중함을 느끼시는군요. 사려 깊게 행동하고 배려하는 마음을 가진 타입이에요.' },
    B1: { type: '지루함', description: '조용한 환경이 지루하게 느껴지시는군요. 흥미롭고 자극적인 경험을 찾아가는 것이 좋을 수 있어요.' },
    B2: { type: '숙연함', description: '미술관의 분위기에서 숙연함을 느끼시는군요. 진지하고 깊이 있는 감상을 할 수 있는 타입이에요.' },
    B4: { type: '포근함', description: '조용한 공간이 포근하게 느껴지시는군요. 편안하고 아늑한 분위기를 즐기는 따뜻한 타입이에요.' },
    B5: { type: '딱딱함', description: '미술관의 분위기가 딱딱하게 느껴지시는군요. 좀 더 부드럽고 유연한 문화 공간이 맞을 수 있어요.' },
    B6: { type: '무거움', description: '조용한 분위기가 무겁게 느껴지시는군요. 가볍고 활기찬 환경을 선호하는 타입이에요.' },
    B7: { type: '가벼움', description: '조용한 공간이 가볍게 느껴지시는군요. 편안하고 부담 없는 분위기를 즐기는 타입이에요.' },
    C1: { type: '답답함', description: '천천히 걸어야 하는 규칙이 답답하게 느껴지시는군요. 활동적이고 자유로운 움직임을 선호하는 타입이에요.' },
    C2: { type: '불편함', description: '움직임이 제한되는 것이 불편하게 느껴지시는군요. 자유롭게 움직이며 탐험하는 것을 좋아하는 타입이에요.' },
    C3: { type: '차분함', description: '천천히 걷는 것에서 차분함을 느끼시는군요. 여유롭고 침착하게 감상하는 것을 즐기는 타입이에요.' },
    C4: { type: '조심스러움', description: '규칙을 지키며 조심스럽게 행동하시는군요. 예의를 중시하고 배려심이 깊은 타입이에요.' },
    C5: { type: '담담함', description: '규칙에 대해 담담하게 받아들이시는군요. 상황에 자연스럽게 적응하는 유연한 타입이에요.' },
    C6: { type: '침착함', description: '뛰지 않고 걷는 것이 침착하게 느껴지시는군요. 신중하고 안정적인 행동을 선호하는 타입이에요.' },
    C7: { type: '긴장감', description: '규칙을 지켜야 한다는 것에 긴장되시는군요. 실수하지 않으려는 조심스러운 마음이 있는 타입이에요.' },
    C8: { type: '어색함', description: '천천히 걸어야 하는 상황이 어색하게 느껴지시는군요. 자연스러운 행동이 제한되어 불편함을 느끼는 타입이에요.' },
    C9: { type: '느긋함', description: '천천히 걷는 것이 느긋하게 느껴지시는군요. 서두르지 않고 여유롭게 즐기는 타입이에요.' },
    D1: { type: '답답함', description: '뛰지 못하는 상황이 답답하게 느껴지시는군요. 에너지가 넘치고 활동적인 것을 선호하는 타입이에요.' },
    D2: { type: '따분함', description: '느린 관람 속도가 따분하게 느껴지시는군요. 빠르고 다채로운 경험을 원하는 타입이에요.' },
    D3: { type: '정적임', description: '정적인 환경을 그대로 받아들이시는군요. 고요하고 평온한 분위기를 이해하는 타입이에요.' },
    D4: { type: '편안함', description: '천천히 걷는 것이 편안하게 느껴지시는군요. 급하지 않게 감상하는 것을 즐기는 타입이에요.' },
    D5: { type: '안정감', description: '규칙이 있는 환경에서 안정감을 느끼시는군요. 질서 있는 공간을 선호하는 타입이에요.' },
    D6: { type: '심심함', description: '뛰지 못하는 것이 심심하게 느껴지시는군요. 흥미진진하고 역동적인 활동을 좋아하는 타입이에요.' },
    D7: { type: '억울함', description: '움직임이 제한되는 것이 억울하게 느껴지시는군요. 자유롭게 행동하고 싶은 욕구가 강한 타입이에요.' },
  },
};

// Supabase: config.js 또는 아래 직접 입력. config.js의 SUPABASE_ANON_KEY에 키를 넣으세요.
const SUPABASE_KEY_FALLBACK = ''; // config.js에 안 넣었으면 여기에 anon key 붙여넣기
function getSupabaseClient() {
  const url = (window.SUPABASE_URL || '').trim();
  const key = (window.SUPABASE_ANON_KEY || SUPABASE_KEY_FALLBACK || '').trim();
  if (!url || !key) return null;
  try {
    const s = window.supabase;
    if (s && typeof s.createClient === 'function') return s.createClient(url, key);
    if (s && typeof s === 'function') return s(url, key);
    if (typeof createClient === 'function') return createClient(url, key);
  } catch (e) {
    console.error('Supabase 클라이언트 생성 실패:', e);
  }
  if (!url || !key) {
    console.warn('Supabase: config.js의 SUPABASE_ANON_KEY 또는 main.js의 SUPABASE_KEY_FALLBACK에 anon key를 입력하세요.');
  }
  return null;
}
let _supabaseClient = null;
const supabaseClient = () => {
  if (!_supabaseClient) _supabaseClient = getSupabaseClient();
  return _supabaseClient;
};

async function saveResultToSupabase(resultType) {
  const client = supabaseClient();
  if (!client || !selectedGender || !selectedMode) return;
  const { error } = await client.from('test_results').insert({
    gender: selectedGender,
    mode: selectedMode,
    result_type: resultType,
  });
  if (error) console.error('Supabase 저장 실패:', error);
}

async function loadSimilarResults() {
  const client = supabaseClient();
  if (!client || !selectedGender || !selectedMode) return [];
  const { data, error } = await client
    .from('test_results')
    .select('result_type')
    .eq('gender', selectedGender)
    .eq('mode', selectedMode);
  if (error) {
    console.error('Supabase 조회 실패:', error);
    return [];
  }
  return data || [];
}

// 유형별 고정 색상 - 서로 다른 색상 계열 사용 (조용함:초록, 포근함:핑크, 답답함:파랑)
const TYPE_COLOR_MAP = {
  조용함: { color: '#22c55e', glow: '0 0 14px #22c55e', cls: 'star-green' },           // 초록
  포근함: { color: '#ec4899', glow: '0 0 14px #ec4899', cls: 'star-pink' },           // 핑크
  답답함: { color: '#3b82f6', glow: '0 0 14px #3b82f6', cls: 'star-blue' },           // 파랑
  편안함: { color: '#f59e0b', glow: '0 0 14px #f59e0b', cls: 'star-amber' },          // 앰버
  좋음: { color: '#eab308', glow: '0 0 14px #eab308', cls: 'star-yellow' },           // 노랑
  짜증: { color: '#ef4444', glow: '0 0 14px #ef4444', cls: 'star-red' },              // 빨강
  행복: { color: '#f97316', glow: '0 0 14px #f97316', cls: 'star-orange' },           // 주황
  우아함: { color: '#a855f7', glow: '0 0 14px #a855f7', cls: 'star-purple' },         // 보라
  갑갑함: { color: '#d946ef', glow: '0 0 14px #d946ef', cls: 'star-fuchsia' },        // 푸시아
  지루함: { color: '#92400e', glow: '0 0 14px #92400e', cls: 'star-brown' },           // 갈색
  재미없음: { color: '#78716c', glow: '0 0 14px #78716c', cls: 'star-stone' },         // 스톤
  강렬함: { color: '#dc2626', glow: '0 0 14px #dc2626', cls: 'star-red-dark' },        // 다크레드
  상큼함: { color: '#06b6d4', glow: '0 0 14px #06b6d4', cls: 'star-cyan' },           // 시안
  달달함: { color: '#f43f5e', glow: '0 0 14px #f43f5e', cls: 'star-rose' },           // 로즈
  두려움: { color: '#4f46e5', glow: '0 0 14px #4f46e5', cls: 'star-indigo' },          // 인디고
  무서움: { color: '#7c2d12', glow: '0 0 14px #7c2d12', cls: 'star-amber-dark' },      // 다크앰버
  귀여움: { color: '#fb7185', glow: '0 0 14px #fb7185', cls: 'star-coral' },           // 코랄
  슬픔: { color: '#0ea5e9', glow: '0 0 14px #0ea5e9', cls: 'star-sky' },              // 스카이
  화남: { color: '#b91c1c', glow: '0 0 14px #b91c1c', cls: 'star-crimson' },          // 크림슨
  두근거림: { color: '#be185d', glow: '0 0 14px #be185d', cls: 'star-pink-dark' },     // 다크핑크
  맛있음: { color: '#fbbf24', glow: '0 0 14px #fbbf24', cls: 'star-gold' },           // 골드
  평온함: { color: '#84cc16', glow: '0 0 14px #84cc16', cls: 'star-lime' },           // 라임
  차분함: { color: '#14b8a6', glow: '0 0 14px #14b8a6', cls: 'star-teal' },           // 틸
  심심함: { color: '#64748b', glow: '0 0 14px #64748b', cls: 'star-slate' },           // 슬레이트
  불편함: { color: '#ea580c', glow: '0 0 14px #ea580c', cls: 'star-orange-dark' },     // 다크오렌지
  따분함: { color: '#57534e', glow: '0 0 14px #57534e', cls: 'star-stone-dark' },      // 스톤다크
  우울함: { color: '#475569', glow: '0 0 14px #475569', cls: 'star-slate-dark' },      // 슬레이트다크
  안정감: { color: '#65a30d', glow: '0 0 14px #65a30d', cls: 'star-olive' },           // 올리브
  신중함: { color: '#0891b2', glow: '0 0 14px #0891b2', cls: 'star-cyan-dark' },       // 다크시안
  숙연함: { color: '#6d28d9', glow: '0 0 14px #6d28d9', cls: 'star-violet' },          // 바이올렛
  딱딱함: { color: '#a16207', glow: '0 0 14px #a16207', cls: 'star-amber-brown' },     // 앰버브라운
  무거움: { color: '#1e293b', glow: '0 0 14px #334155', cls: 'star-slate-deep' },      // 다크슬레이트
  가벼움: { color: '#67e8f9', glow: '0 0 14px #67e8f9', cls: 'star-cyan-light' },      // 라이트시안
  조심스러움: { color: '#8b5cf6', glow: '0 0 14px #8b5cf6', cls: 'star-violet-light' }, // 바이올렛라이트
  담담함: { color: '#0d9488', glow: '0 0 14px #0d9488', cls: 'star-teal-dark' },       // 다크틸
  침착함: { color: '#6366f1', glow: '0 0 14px #6366f1', cls: 'star-indigo-light' },    // 인디고라이트
  긴장감: { color: '#c026d3', glow: '0 0 14px #c026d3', cls: 'star-fuchsia-dark' },    // 다크푸시아
  어색함: { color: '#9333ea', glow: '0 0 14px #9333ea', cls: 'star-purple-dark' },     // 다크보라
  느긋함: { color: '#2dd4bf', glow: '0 0 14px #2dd4bf', cls: 'star-teal-light' },      // 라이트틸
  정적임: { color: '#71717a', glow: '0 0 14px #71717a', cls: 'star-zinc' },            // 징크
  억울함: { color: '#e11d48', glow: '0 0 14px #e11d48', cls: 'star-rose-dark' },       // 다크로즈
};

const FALLBACK_STYLE = { color: '#00f5ff', glow: '0 0 12px #00f5ff', cls: 'star-default' };

function getStyleForType(type) {
  return TYPE_COLOR_MAP[type] || FALLBACK_STYLE;
}

function setResultStar(resultType, isMyResult = true) {
  const starEl = $('result-star');
  const textEl = $('result-type');
  if (!starEl || !textEl) return;
  const style = getStyleForType(resultType);
  starEl.textContent = '★';
  starEl.className = 'result-star ' + style.cls + (isMyResult ? ' result-star-mine' : '');
  starEl.style.color = style.color;
  starEl.style.textShadow = style.glow;
  textEl.style.color = style.color;
  textEl.style.webkitTextFillColor = style.color;
  textEl.style.background = 'none';
  textEl.style.backgroundClip = 'unset';
  textEl.style.webkitBackgroundClip = 'unset';
  textEl.style.textShadow = style.glow;
}

function renderOthersResults(countByType, hasSupabase = true) {
  const el = $('others-results');
  if (!el) return;
  const entries = Object.entries(countByType).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) {
    el.innerHTML = hasSupabase
      ? '<p class="others-results-empty">아직 같은 성별·모드의 다른 사용자 결과가 없습니다.</p>'
      : '<p class="others-results-empty">통계 기능을 사용하려면 Supabase URL과 키를 설정해 주세요.</p>';
    return;
  }
  const stars = [];
  entries.forEach(([type, count]) => {
    const style = getStyleForType(type);
    for (let k = 0; k < count; k++) {
      stars.push({ type, count, color: style.color, glow: style.glow, cls: style.cls });
    }
  });
  for (let i = stars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stars[i], stars[j]] = [stars[j], stars[i]];
  }
  el.innerHTML = `
    <p class="others-results-title">같은 성별·모드의 별들</p>
    <div class="star-sky">
      ${stars.map((s) => {
        const left = (2 + Math.random() * 88).toFixed(1);
        const top = (2 + Math.random() * 88).toFixed(1);
        return `
        <span class="sky-star ${s.cls}" 
          style="color:${s.color};text-shadow:${s.glow};left:${left}%;top:${top}%;"
          data-type="${s.type}"
          data-count="${s.count}"
          title="${s.type} · ${s.count}명">★</span>
      `;
      }).join('')}
    </div>
  `;
  el.querySelectorAll('.sky-star').forEach(star => {
    star.addEventListener('mouseenter', showStarTooltip);
    star.addEventListener('mouseleave', hideStarTooltip);
    star.addEventListener('click', (e) => { e.preventDefault(); showStarTooltip(e); });
    star.addEventListener('touchstart', (e) => { showStarTooltip(e); }, { passive: true });
  });
  if (!window._starTooltipOutsideHandler) {
    window._starTooltipOutsideHandler = (e) => {
      if (e.target.closest('.sky-star') || e.target.closest('.star-tooltip')) return;
      hideStarTooltip();
    };
    document.addEventListener('click', window._starTooltipOutsideHandler);
    document.addEventListener('touchstart', window._starTooltipOutsideHandler);
  }
}

let starTooltip = null;
function showStarTooltip(e) {
  const el = e.currentTarget;
  hideStarTooltip();
  starTooltip = document.createElement('div');
  starTooltip.className = 'star-tooltip';
  starTooltip.textContent = `${el.dataset.type} · ${el.dataset.count}명`;
  document.body.appendChild(starTooltip);
  const rect = el.getBoundingClientRect();
  const ttW = starTooltip.offsetWidth;
  let left = rect.left + rect.width / 2 - ttW / 2;
  const top = rect.top - 34;
  if (left < 8) left = 8;
  if (left + ttW > window.innerWidth - 8) left = window.innerWidth - ttW - 8;
  starTooltip.style.left = left + 'px';
  starTooltip.style.top = top + 'px';
}
function hideStarTooltip() {
  if (starTooltip && starTooltip.parentNode) starTooltip.parentNode.removeChild(starTooltip);
  starTooltip = null;
}

let currentQuestionIndex = 0;
let answers = [];
let selectedWork = null;
let selectedGender = null; // 남 | 녀
let selectedMode = null;   // 어린이 | 청소년 | 청년 | 어르신 | 쉬움 | 보통 | 어려움

const $ = (id) => document.getElementById(id);
const $$ = (selector) => document.querySelectorAll(selector);

const screens = {
  start: $('start-screen'),
  settings: $('settings-screen'),
  workSelect: $('work-select-screen'),
  question: $('question-screen'),
  result: $('result-screen')
};

const showScreen = (screen) => {
  Object.values(screens).forEach(s => s?.classList.remove('active'));
  screen?.classList.add('active');
};

function initStaticNoise() {
  const container = $('static-noise');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const drawNoise = () => {
    const imageData = ctx.createImageData(256, 256);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = v;
      imageData.data[i + 3] = 80;
    }
    ctx.putImageData(imageData, 0, 0);
    container.style.backgroundImage = `url(${canvas.toDataURL()})`;
  };

  drawNoise();
  container.style.backgroundSize = '100px 100px';

  const noiseInterval = setInterval(() => {
    if (!screens.settings.classList.contains('active')) {
      clearInterval(noiseInterval);
    } else {
      drawNoise();
    }
  }, 80);
}

function setupSettingsScreen() {
  $$('.setting-gender').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.setting-gender').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedGender = btn.dataset.value;
      $('btn-confirm').disabled = !(selectedGender && selectedMode);
    });
  });

  $$('.setting-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.setting-mode').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedMode = btn.dataset.value;
      $('btn-confirm').disabled = !(selectedGender && selectedMode);
    });
  });

  $('btn-confirm').addEventListener('click', () => {
    showScreen(screens.question);
    renderQuestion();
  });
}

function renderWorkSelect() {
  const container = $('exhibition-categories');
  container.innerHTML = Object.entries(quizData.exhibition)
    .map(([roomName, works]) => `
      <div class="exhibition-category">
        <button type="button" class="category-toggle" aria-expanded="false">
          <span class="category-name">${roomName}</span>
          <span class="category-arrow">▼</span>
        </button>
        <div class="category-works" aria-hidden="true">
          ${works.map((work, idx) => `
            <button type="button" class="work-option option-wiggle option-wiggle-${(idx % 6) + 1}" data-work="${work}">${work}</button>
          `).join('')}
        </div>
      </div>
    `).join('');

  container.querySelectorAll('.category-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.closest('.exhibition-category');
      const isOpen = category.classList.contains('open');

      container.querySelectorAll('.exhibition-category').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.category-toggle').setAttribute('aria-expanded', 'false');
        c.querySelector('.category-works').setAttribute('aria-hidden', 'true');
      });

      if (!isOpen) {
        category.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        category.querySelector('.category-works').setAttribute('aria-hidden', 'false');
      }
    });
  });

  container.querySelectorAll('.work-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedWork = btn.dataset.work;
      container.querySelectorAll('.work-option').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
      currentQuestionIndex = 2;
      renderQuestion();
      showScreen(screens.question);
    });
  });
}

function renderQuestion() {
  const questions = (selectedMode && quizData.questionsByMode?.[selectedMode]) || quizData.questions;
  const question = questions[currentQuestionIndex];
  const total = questions.length;

  $('progress-fill').style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;
  $('question-number').textContent = `Q_${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  $('question-text').textContent = currentQuestionIndex === 2 && selectedWork 
    ? question.text.replace(/<[^>]+>/, `<${selectedWork}>`)
    : question.text;

  const optionsContainer = $('options');
  optionsContainer.innerHTML = question.options
    .map((opt, idx) => `
      <button type="button" class="option glitch-option option-wiggle option-wiggle-${(idx % 20) + 1}" data-value="${opt.value}">
        <span class="option-inner">${opt.text}</span>
      </button>
    `).join('');

  optionsContainer.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', handleOptionClick);
    btn.addEventListener('touchstart', () => {
      optionsContainer.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
    }, { passive: true });
  });
}

function handleOptionClick(e) {
  const btn = e.currentTarget;
  const optionsContainer = $('options');
  
  optionsContainer.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  btn.classList.add('selected');
  answers[currentQuestionIndex] = btn.dataset.value;

  const questions = (selectedMode && quizData.questionsByMode?.[selectedMode]) || quizData.questions;
  setTimeout(() => {
    if (currentQuestionIndex === 1) {
      showScreen(screens.workSelect);
      renderWorkSelect();
    } else if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 280);
}

function showResult() {
  const counts = {};
  answers.forEach(v => counts[v] = (counts[v] || 0) + 1);

  const maxCount = Math.max(...Object.values(counts));
  const dominant = Object.entries(counts).find(([, c]) => c === maxCount)?.[0] || answers[answers.length - 1] || 'A';

  const result = quizData.results[dominant];
  $('result-type').textContent = result.type;
  setResultStar(result.type);
  
  let desc = result.description;
  if (selectedWork) desc = desc.replace(/사과/g, selectedWork);
  
  $('result-description').innerHTML = desc.replace(/([.!?])\s+/g, '$1<br>');
  showScreen(screens.result);

  const othersEl = $('others-results');
  if (othersEl) othersEl.innerHTML = '';

  const hasSupabase = !!supabaseClient();
  saveResultToSupabase(result.type)
    .then(() => loadSimilarResults())
    .then((rows) => {
      const countByType = {};
      (rows || []).forEach((row) => {
        const t = row.result_type || '';
        if (t) countByType[t] = (countByType[t] || 0) + 1;
      });
      renderOthersResults(countByType, hasSupabase);
    })
    .catch((err) => {
      console.error('통계 로드 실패:', err);
      renderOthersResults({}, hasSupabase);
    });
}

const resetSettings = () => {
  currentQuestionIndex = 0;
  answers = [];
  selectedWork = null;
  selectedGender = null;
  selectedMode = null;
  $$('.setting-option').forEach(b => b.classList.remove('selected'));
  $('btn-confirm').disabled = true;
  showScreen(screens.settings);
  initStaticNoise();
};

const scheduleGlitch = () => {
  setTimeout(() => {
    const glitchScreen = $('glitch-screen');
    if (glitchScreen) {
      glitchScreen.classList.add('active');
      setTimeout(() => glitchScreen.classList.remove('active'), 150);
    }
    scheduleGlitch();
  }, 2000 + Math.random() * 5000);
};

document.addEventListener('DOMContentLoaded', () => {
  setupSettingsScreen();
  scheduleGlitch();
  
  document.querySelector('.btn-start').addEventListener('click', resetSettings);
  document.querySelector('.btn-retry').addEventListener('click', resetSettings);
});
