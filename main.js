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
        { text: '가볍다', value: 'B7' },
      ],
    },
    {
      text: '미술관에서는 뛰면 안된다',
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
      text: '미술관 전시실에는 음식물 반입이 금지되어 있다.',
      options: [
        { text: '이해하다', value: 'U1' },
        { text: '당연하다', value: 'U2' },
        { text: '불편하다', value: 'U3' },
        { text: '답답하다', value: 'U4' },
        { text: '괜찮다', value: 'U5' },
        { text: '편안하다', value: 'U6' },
        { text: '당혹스럽다', value: 'U7' },
        { text: '짜증난다', value: 'U8' },
        { text: '차분하다', value: 'U9' },
        { text: '불만이다', value: 'U10' },
        { text: '이상하다', value: 'U11' },
        { text: '딱하다', value: 'U12' },
        { text: '좋다', value: 'U13' },
        { text: '부담된다', value: 'U14' },
        { text: '안심된다', value: 'U15' },
        { text: '아쉽다', value: 'U16' },
        { text: '타당하다', value: 'U17' },
        { text: '억울하다', value: 'U18' },
        { text: '수긍한다', value: 'U19' },
        { text: '어색하다', value: 'U20' },
      ],
    },
    {
      text: '다른사람이 내가 원하는 작품을 보고 있다. 이때 나의 감정은?',
      options: [
        { text: '부담된다', value: 'V1' }, { text: '편하다', value: 'V2' }, { text: '신경쓰인다', value: 'V3' },
        { text: '당연하다', value: 'V4' }, { text: '불편하다', value: 'V5' }, { text: '편안하다', value: 'V6' },
        { text: '조심스럽다', value: 'V7' }, { text: '답답하다', value: 'V8' }, { text: '어색하다', value: 'V9' },
        { text: '긴장된다', value: 'V10' }, { text: '차분하다', value: 'V11' }, { text: '짜증난다', value: 'V12' },
        { text: '이해하다', value: 'V13' }, { text: '괜찮다', value: 'V14' }, { text: '딱딱하다', value: 'V15' },
        { text: '불쾌하다', value: 'V16' }, { text: '자연스럽다', value: 'V17' }, { text: '의식된다', value: 'V18' },
        { text: '관대하다', value: 'V19' }, { text: '민감하다', value: 'V20' },
      ],
    },
    {
      text: '작품을 이해하려고 노력할 때 나의 감정은?',
      options: [
        { text: '피곤하다', value: 'W1' }, { text: '편하다', value: 'W2' }, { text: '스트레스', value: 'W3' },
        { text: '당연하다', value: 'W4' }, { text: '불편하다', value: 'W5' }, { text: '편안하다', value: 'W6' },
        { text: '민감하다', value: 'W7' }, { text: '답답하다', value: 'W8' }, { text: '재미있다', value: 'W9' },
        { text: '긴장된다', value: 'W10' }, { text: '차분하다', value: 'W11' }, { text: '짜증난다', value: 'W12' },
        { text: '이해하다', value: 'W13' }, { text: '괜찮다', value: 'W14' }, { text: '부담된다', value: 'W15' },
        { text: '숙연하다', value: 'W16' }, { text: '자연스럽다', value: 'W17' }, { text: '조심스럽다', value: 'W18' },
        { text: '예민하다', value: 'W19' }, { text: '관대하다', value: 'W20' },
      ],
    },
    {
      text: '미술관에 갈 때 어떤 옷을 입을지 고민될 때 나의 감정은?',
      options: [
        { text: '부담된다', value: 'X1' }, { text: '편하다', value: 'X2' }, { text: '스트레스', value: 'X3' },
        { text: '당연하다', value: 'X4' }, { text: '불편하다', value: 'X5' }, { text: '편안하다', value: 'X6' },
        { text: '우아하다', value: 'X7' }, { text: '답답하다', value: 'X8' }, { text: '좋다', value: 'X9' },
        { text: '긴장된다', value: 'X10' }, { text: '차분하다', value: 'X11' }, { text: '짜증난다', value: 'X12' },
        { text: '이해하다', value: 'X13' }, { text: '괜찮다', value: 'X14' }, { text: '자유롭다', value: 'X15' },
        { text: '딱딱하다', value: 'X16' }, { text: '자연스럽다', value: 'X17' }, { text: '의식된다', value: 'X18' },
        { text: '포멀하다', value: 'X19' }, { text: '캐주얼하다', value: 'X20' },
      ],
    },
  ],
  exhibition: {
    '1전시실': ['A', 'B', 'C', 'D', 'E'],
    '2전시실': ['F', 'G', 'H', 'I', 'J'],
    '3전시실': ['K', 'L', 'M', 'N', 'O'],
  },
  workQuestions: [
    { key: 'far', text: '작품 {work}를 멀리서 볼 때', optionsKey: 'far', useSliders: true },
    { key: 'near', text: '작품 {work}를 가까이서 볼 때', optionsKey: 'near', useSliders: true },
    { key: 'emotion', text: '작품 {work}를 보고 느끼는 감정', optionsKey: 'emotion' },
  ],
  workFarSliders: [
    { left: '편안함', right: '답답함', defaultVal: 50 },
    { left: '강렬함', right: '흐릿함', defaultVal: 50 },
    { left: '웅장함', right: '현실적', defaultVal: 50 },
  ],
  workNearSliders: [
    { left: '친근함', right: '긴장됨', defaultVal: 50 },
    { left: '압도적', right: '편안함', defaultVal: 50 },
    { left: '섬세함', right: '거대함', defaultVal: 50 },
  ],
  workOptions: {
    far: [
      { text: '아련하다', value: 'FA1' }, { text: '멀다', value: 'FA2' }, { text: '선명하다', value: 'FA3' },
      { text: '흐릿하다', value: 'FA4' }, { text: '평온하다', value: 'FA5' }, { text: '궁금하다', value: 'FA6' },
      { text: '당당하다', value: 'FA7' }, { text: '조용하다', value: 'FA8' }, { text: '위엄있다', value: 'FA9' },
      { text: '신비롭다', value: 'FA10' }, { text: '답답하다', value: 'FA11' }, { text: '편안하다', value: 'FA12' },
      { text: '외롭다', value: 'FA13' }, { text: '모호하다', value: 'FA14' }, { text: '강렬하다', value: 'FA15' },
      { text: '부드럽다', value: 'FA16' }, { text: '차갑다', value: 'FA17' }, { text: '따뜻하다', value: 'FA18' },
      { text: '낯설다', value: 'FA19' }, { text: '친숙하다', value: 'FA20' },
    ],
    near: [
      { text: '압도된다', value: 'CA1' }, { text: '선명하다', value: 'CA2' }, { text: '가깝다', value: 'CA3' },
      { text: '섬뜩하다', value: 'CA4' }, { text: '친근하다', value: 'CA5' }, { text: '긴장된다', value: 'CA6' },
      { text: '설렌다', value: 'CA7' }, { text: '두렵다', value: 'CA8' }, { text: '감동한다', value: 'CA9' },
      { text: '호기심', value: 'CA10' }, { text: '답답하다', value: 'CA11' }, { text: '편안하다', value: 'CA12' },
      { text: '신비롭다', value: 'CA13' }, { text: '당당하다', value: 'CA14' }, { text: '강렬하다', value: 'CA15' },
      { text: '부드럽다', value: 'CA16' }, { text: '섬세하다', value: 'CA17' }, { text: '거대하다', value: 'CA18' },
      { text: '작다', value: 'CA19' }, { text: '압박감', value: 'CA20' },
    ],
    emotion: [
      { text: '강렬하다', value: 'EM1' }, { text: '상큼하다', value: 'EM2' }, { text: '달달하다', value: 'EM3' },
      { text: '두렵다', value: 'EM4' }, { text: '무섭다', value: 'EM5' }, { text: '귀엽다', value: 'EM6' },
      { text: '슬프다', value: 'EM7' }, { text: '화난다', value: 'EM8' }, { text: '두근거린다', value: 'EM9' },
      { text: '평온하다', value: 'EM10' }, { text: '답답하다', value: 'EM11' }, { text: '편안하다', value: 'EM12' },
      { text: '행복하다', value: 'EM13' }, { text: '우울하다', value: 'EM14' }, { text: '신비롭다', value: 'EM15' },
      { text: '낯설다', value: 'EM16' }, { text: '친숙하다', value: 'EM17' }, { text: '아련하다', value: 'EM18' },
      { text: '생동감', value: 'EM19' }, { text: '고요하다', value: 'EM20' },
    ],
  },
  // 모드별 질문 (선택 사항). 예: questionsByMode: { '남': [...], '어린이': [...] }
  // 없으면 기본 questions 사용
  questionsByMode: {},
  results: {
    A: { type: '답답함', description: '미술관의 조용한 분위기가 답답하게 느껴지는군요. 열린 공간과 자유로움이 더 맞을 수 있어요.' },
    B: { type: '편안함', description: '미술관의 조용한 분위기가 편안하게 느껴지시는군요. 차분한 감상이 잘 맞는 타입이에요.' },
    C: { type: '조용함', description: '조용한 환경이 자연스럽게 느껴지시는군요. 미술관의 분위기와 잘 어울려요.' },
    D: { type: '행복', description: '미술관 분위기를 긍정적으로 느끼고 계시네요. 미술 감상에 적합한 마음가짐이에요.' },
    E: { type: '짜증', description: '조용히 해야 하는 상황이 불편하게 느껴지시는군요. 더 활기찬 문화 공간이 맞을 수 있어요.' },
    F: { type: '행복', description: '미술관에서 행복을 느끼고 계시네요. 예술과의 만남이 기쁨이 되는 타입이에요.' },
    G: { type: '당당함', description: '차분한 관람 매너가 우아하게 느껴지시는군요. 예의 바른 문화 공간을 선호하는 타입이에요.' },
    H: { type: '답답함', description: '움직임이 제한되는 것이 갑갑하게 느껴지시는군요. 자유로운 활동이 더 맞을 수 있어요.' },
    I: { type: '짜증', description: '천천히 걷고 조용히 감상하는 것이 지루하게 느껴지시는군요. 역동적인 경험이 좋을 수 있어요.' },
    J: { type: '짜증', description: '규칙적인 관람이 재미없게 느껴지시는군요. 좀 더 자유로운 문화 공간을 찾아보세요.' },
    U1: { type: '편안함', description: '음식물 반입 금지 규칙을 이해하고 받아들이시는군요. 규칙의 필요성을 인정하는 타입이에요.' },
    U2: { type: '편안함', description: '당연한 규칙으로 받아들이시는군요. 예의와 질서를 중시하는 타입이에요.' },
    U3: { type: '불쾌함', description: '음식물 반입 금지가 불편하게 느껴지시는군요. 자유로운 관람을 선호하는 타입이에요.' },
    U4: { type: '답답함', description: '규칙이 답답하게 느껴지시는군요. 여유로운 관람을 원하는 타입이에요.' },
    U5: { type: '편안함', description: '규칙을 괜찮게 받아들이시는군요. 유연하게 적응하는 타입이에요.' },
    U6: { type: '편안함', description: '규칙이 있는 환경이 편안하게 느껴지시는군요. 정돈된 공간을 선호하는 타입이에요.' },
    U7: { type: '어색함', description: '규칙에 당혹스러움을 느끼시는군요. 새로운 환경에 신중하게 적응하는 타입이에요.' },
    U8: { type: '짜증', description: '규칙이 짜증나게 느껴지시는군요. 자유로운 문화 공간이 더 맞을 수 있어요.' },
    U9: { type: '편안함', description: '규칙에 차분하게 반응하시는군요. 침착하게 받아들이는 타입이에요.' },
    U10: { type: '짜증', description: '규칙에 불만이 있으시군요. 더 유연한 관람 환경을 원하는 타입이에요.' },
    U11: { type: '어색함', description: '규칙이 이상하게 느껴지시는군요. 미술관 관람에 대해 새로 생각해보는 계기가 될 수 있어요.' },
    U12: { type: '답답함', description: '규칙이 딱하다고 느끼시는군요. 조금 더 여유를 원하는 타입이에요.' },
    U13: { type: '행복', description: '규칙을 긍정적으로 받아들이시는군요. 질서 있는 관람을 선호하는 타입이에요.' },
    U14: { type: '답답함', description: '규칙이 부담되시는군요. 편하게 즐기고 싶은 마음이 있는 타입이에요.' },
    U15: { type: '편안함', description: '규칙이 있어서 안심되시는군요. 안전하고 정돈된 환경을 선호하는 타입이에요.' },
    U16: { type: '답답함', description: '규칙이 아쉽게 느껴지시는군요. 간식 없이 관람하는 것이 어려운 타입이에요.' },
    U17: { type: '편안함', description: '규칙이 타당하다고 받아들이시는군요. 합리적이고 이성적인 타입이에요.' },
    U18: { type: '짜증', description: '규칙이 억울하게 느껴지시는군요. 조금 더 자유로웠으면 하는 타입이에요.' },
    U19: { type: '편안함', description: '규칙에 수긍하시는군요. 상황을 이해하고 받아들이는 성숙한 타입이에요.' },
    U20: { type: '어색함', description: '규칙이 어색하게 느껴지시는군요. 자연스러운 관람을 선호하는 타입이에요.' },
    A1: { type: '편안함', description: '미술관의 조용한 분위기가 평온하게 느껴지시는군요. 고요함 속에서 안정감을 느끼는 타입이에요.' },
    A3: { type: '편안함', description: '조용한 환경에서 차분함을 느끼시는군요. 정돈된 분위기에서 내면을 들여다보는 타입이에요.' },
    A4: { type: '짜증', description: '조용한 공간이 심심하게 느껴지시는군요. 활기차고 역동적인 문화 활동이 더 적합할 수 있어요.' },
    A5: { type: '불쾌함', description: '조용히 해야 하는 상황이 불편하게 느껴지시는군요. 자유롭게 표현할 수 있는 공간이 더 맞을 거예요.' },
    A6: { type: '짜증', description: '미술관의 정적인 분위기가 따분하게 느껴지시는군요. 변화와 자극이 있는 환경을 선호하는 타입이에요.' },
    A7: { type: '답답함', description: '조용한 공간이 우울하게 느껴지시는군요. 밝고 활기찬 분위기가 기분 전환에 도움이 될 수 있어요.' },
    A8: { type: '편안함', description: '조용한 분위기에서 안정감을 느끼시는군요. 예측 가능하고 정돈된 환경을 편안하게 여기는 타입이에요.' },
    A9: { type: '조용함', description: '조용한 공간에서 신중함을 느끼시는군요. 사려 깊게 행동하고 배려하는 마음을 가진 타입이에요.' },
    B1: { type: '짜증', description: '조용한 환경이 지루하게 느껴지시는군요. 흥미롭고 자극적인 경험을 찾아가는 것이 좋을 수 있어요.' },
    B2: { type: '조용함', description: '미술관의 분위기에서 숙연함을 느끼시는군요. 진지하고 깊이 있는 감상을 할 수 있는 타입이에요.' },
    B4: { type: '포근함', description: '조용한 공간이 포근하게 느껴지시는군요. 편안하고 아늑한 분위기를 즐기는 따뜻한 타입이에요.' },
    B5: { type: '불쾌함', description: '미술관의 분위기가 딱딱하게 느껴지시는군요. 좀 더 부드럽고 유연한 문화 공간이 맞을 수 있어요.' },
    B6: { type: '답답함', description: '조용한 분위기가 무겁게 느껴지시는군요. 가볍고 활기찬 환경을 선호하는 타입이에요.' },
    B7: { type: '편안함', description: '조용한 공간이 가볍게 느껴지시는군요. 편안하고 부담 없는 분위기를 즐기는 타입이에요.' },
    C1: { type: '답답함', description: '천천히 걸어야 하는 규칙이 답답하게 느껴지시는군요. 활동적이고 자유로운 움직임을 선호하는 타입이에요.' },
    C2: { type: '불쾌함', description: '움직임이 제한되는 것이 불편하게 느껴지시는군요. 자유롭게 움직이며 탐험하는 것을 좋아하는 타입이에요.' },
    C3: { type: '편안함', description: '천천히 걷는 것에서 차분함을 느끼시는군요. 여유롭고 침착하게 감상하는 것을 즐기는 타입이에요.' },
    C4: { type: '조용함', description: '규칙을 지키며 조심스럽게 행동하시는군요. 예의를 중시하고 배려심이 깊은 타입이에요.' },
    C5: { type: '편안함', description: '규칙에 대해 담담하게 받아들이시는군요. 상황에 자연스럽게 적응하는 유연한 타입이에요.' },
    C6: { type: '편안함', description: '뛰지 않고 걷는 것이 침착하게 느껴지시는군요. 신중하고 안정적인 행동을 선호하는 타입이에요.' },
    C7: { type: '강렬함', description: '규칙을 지켜야 한다는 것에 긴장되시는군요. 실수하지 않으려는 조심스러운 마음이 있는 타입이에요.' },
    C8: { type: '어색함', description: '천천히 걸어야 하는 상황이 어색하게 느껴지시는군요. 자연스러운 행동이 제한되어 불편함을 느끼는 타입이에요.' },
    C9: { type: '편안함', description: '천천히 걷는 것이 느긋하게 느껴지시는군요. 서두르지 않고 여유롭게 즐기는 타입이에요.' },
    D1: { type: '답답함', description: '뛰지 못하는 상황이 답답하게 느껴지시는군요. 에너지가 넘치고 활동적인 것을 선호하는 타입이에요.' },
    D2: { type: '짜증', description: '느린 관람 속도가 따분하게 느껴지시는군요. 빠르고 다채로운 경험을 원하는 타입이에요.' },
    D3: { type: '조용함', description: '정적인 환경을 그대로 받아들이시는군요. 고요하고 평온한 분위기를 이해하는 타입이에요.' },
    D4: { type: '편안함', description: '천천히 걷는 것이 편안하게 느껴지시는군요. 급하지 않게 감상하는 것을 즐기는 타입이에요.' },
    D5: { type: '편안함', description: '규칙이 있는 환경에서 안정감을 느끼시는군요. 질서 있는 공간을 선호하는 타입이에요.' },
    D6: { type: '짜증', description: '뛰지 못하는 것이 심심하게 느껴지시는군요. 흥미진진하고 역동적인 활동을 좋아하는 타입이에요.' },
    D7: { type: '짜증', description: '움직임이 제한되는 것이 억울하게 느껴지시는군요. 자유롭게 행동하고 싶은 욕구가 강한 타입이에요.' },
    V1: { type: '답답함', description: '시선 조절이 부담되시는군요. 자유로운 관람을 선호하는 타입이에요.' },
    V2: { type: '편안함', description: '시선 조절이 편하게 느껴지시는군요. 자연스러운 관람 스타일을 가진 타입이에요.' },
    V3: { type: '어색함', description: '시선에 신경 쓰이시는군요. 다른 사람을 의식하는 섬세한 타입이에요.' },
    V4: { type: '편안함', description: '시선 조절을 당연하게 받아들이시는군요. 예의를 아는 타입이에요.' },
    V5: { type: '불쾌함', description: '시선 규칙이 불편하게 느껴지시는군요. 자유로움을 선호하는 타입이에요.' },
    V6: { type: '편안함', description: '시선 조절이 편안하게 느껴지시는군요. 문화 공간을 이해하는 타입이에요.' },
    V7: { type: '조용함', description: '시선을 조심스럽게 관리하시는군요. 배려심이 깊은 타입이에요.' },
    V8: { type: '답답함', description: '시선 규칙이 답답하게 느껴지시는군요. 여유로운 관람을 원하는 타입이에요.' },
    V9: { type: '어색함', description: '시선 규칙이 어색하게 느껴지시는군요. 자연스러움을 선호하는 타입이에요.' },
    V10: { type: '강렬함', description: '시선에 긴장되시는군요. 주변을 의식하는 타입이에요.' },
    V11: { type: '편안함', description: '시선 조절에 차분하게 반응하시는군요. 침착한 타입이에요.' },
    V12: { type: '짜증', description: '시선 규칙이 짜증나시는군요. 자유로운 공간을 선호하는 타입이에요.' },
    V13: { type: '편안함', description: '시선 규칙을 이해하고 받아들이시는군요. 현명한 타입이에요.' },
    V14: { type: '편안함', description: '시선 조절을 괜찮게 받아들이시는군요. 유연한 타입이에요.' },
    V15: { type: '불쾌함', description: '시선 규칙이 딱딱하게 느껴지시는군요. 유연한 공간을 선호하는 타입이에요.' },
    V16: { type: '불쾌함', description: '시선 규칙이 불쾌하게 느껴지시는군요. 자유로움을 중시하는 타입이에요.' },
    V17: { type: '편안함', description: '시선 조절이 자연스럽게 느껴지시는군요. 문화 공간에 잘 적응하는 타입이에요.' },
    V18: { type: '어색함', description: '시선을 의식하시는군요. 주변을 살피는 타입이에요.' },
    V19: { type: '편안함', description: '시선 규칙에 관대하게 반응하시는군요. 너그러운 타입이에요.' },
    V20: { type: '어색함', description: '시선에 민감하게 반응하시는군요. 섬세한 타입이에요.' },
    W1: { type: '답답함', description: '눈치 보기가 피곤하게 느껴지시는군요. 편한 관람을 선호하는 타입이에요.' },
    W2: { type: '편안함', description: '눈치 보기가 편하게 느껴지시는군요. 상황을 읽는 타입이에요.' },
    W3: { type: '짜증', description: '눈치에 스트레스를 받으시는군요. 자유로운 공간을 선호하는 타입이에요.' },
    W4: { type: '편안함', description: '눈치를 당연하게 받아들이시는군요. 사회성을 갖춘 타입이에요.' },
    W5: { type: '불쾌함', description: '눈치 규칙이 불편하게 느껴지시는군요. 자유로움을 선호하는 타입이에요.' },
    W6: { type: '편안함', description: '눈치 보기가 편안하게 느껴지시는군요. 분위기를 읽는 타입이에요.' },
    W7: { type: '어색함', description: '눈치에 민감하게 반응하시는군요. 섬세한 타입이에요.' },
    W8: { type: '답답함', description: '눈치가 답답하게 느껴지시는군요. 편한 관람을 원하는 타입이에요.' },
    W9: { type: '행복', description: '눈치 보기가 재미있게 느껴지시는군요. 사회적 관람을 즐기는 타입이에요.' },
    W10: { type: '강렬함', description: '눈치에 긴장되시는군요. 주변을 의식하는 타입이에요.' },
    W11: { type: '편안함', description: '눈치에 차분하게 반응하시는군요. 침착한 타입이에요.' },
    W12: { type: '짜증', description: '눈치가 짜증나시는군요. 자유로운 공간을 선호하는 타입이에요.' },
    W13: { type: '편안함', description: '눈치의 필요성을 이해하시는군요. 현명한 타입이에요.' },
    W14: { type: '편안함', description: '눈치를 괜찮게 받아들이시는군요. 유연한 타입이에요.' },
    W15: { type: '답답함', description: '눈치가 부담되시는군요. 편한 관람을 선호하는 타입이에요.' },
    W16: { type: '조용함', description: '눈치에서 숙연함을 느끼시는군요. 진지한 타입이에요.' },
    W17: { type: '편안함', description: '눈치 보기가 자연스럽게 느껴지시는군요. 사회성이 있는 타입이에요.' },
    W18: { type: '조용함', description: '눈치를 조심스럽게 보시는군요. 배려심이 깊은 타입이에요.' },
    W19: { type: '어색함', description: '눈치에 예민하게 반응하시는군요. 섬세한 타입이에요.' },
    W20: { type: '편안함', description: '눈치에 관대하게 반응하시는군요. 너그러운 타입이에요.' },
    X1: { type: '답답함', description: '드레스코드가 부담되시는군요. 캐주얼한 관람을 선호하는 타입이에요.' },
    X2: { type: '편안함', description: '드레스코드가 편하게 느껴지시는군요. 적절한 복장을 아는 타입이에요.' },
    X3: { type: '짜증', description: '드레스코드에 스트레스를 받으시는군요. 자유로운 차림을 선호하는 타입이에요.' },
    X4: { type: '편안함', description: '드레스코드를 당연하게 받아들이시는군요. 예의를 아는 타입이에요.' },
    X5: { type: '불쾌함', description: '드레스코드가 불편하게 느껴지시는군요. 자유로운 차림을 선호하는 타입이에요.' },
    X6: { type: '편안함', description: '드레스코드가 편안하게 느껴지시는군요. 적절한 복장을 즐기는 타입이에요.' },
    X7: { type: '당당함', description: '드레스코드가 우아하게 느껴지시는군요. 품격 있는 관람을 선호하는 타입이에요.' },
    X8: { type: '답답함', description: '드레스코드가 답답하게 느껴지시는군요. 편한 차림을 선호하는 타입이에요.' },
    X9: { type: '행복', description: '드레스코드를 긍정적으로 받아들이시는군요. 문화 공간을 존중하는 타입이에요.' },
    X10: { type: '강렬함', description: '드레스코드에 긴장되시는군요. 적절한 복장을 고민하는 타입이에요.' },
    X11: { type: '편안함', description: '드레스코드에 차분하게 반응하시는군요. 침착한 타입이에요.' },
    X12: { type: '짜증', description: '드레스코드가 짜증나시는군요. 자유로운 차림을 선호하는 타입이에요.' },
    X13: { type: '편안함', description: '드레스코드의 필요성을 이해하시는군요. 현명한 타입이에요.' },
    X14: { type: '편안함', description: '드레스코드를 괜찮게 받아들이시는군요. 유연한 타입이에요.' },
    X15: { type: '편안함', description: '드레스코드보다 자유로움을 선호하시는군요. 캐주얼한 타입이에요.' },
    X16: { type: '불쾌함', description: '드레스코드가 딱딱하게 느껴지시는군요. 유연한 공간을 선호하는 타입이에요.' },
    X17: { type: '편안함', description: '드레스코드가 자연스럽게 느껴지시는군요. 적절한 복장을 아는 타입이에요.' },
    X18: { type: '어색함', description: '드레스코드를 의식하시는군요. 복장에 신경 쓰는 타입이에요.' },
    X19: { type: '당당함', description: '포멀한 드레스코드를 선호하시는군요. 격식을 갖추는 타입이에요.' },
    X20: { type: '편안함', description: '캐주얼한 드레스코드를 선호하시는군요. 편한 차림을 좋아하는 타입이에요.' },
    FA1: { type: '두근거림', description: '멀리서 보는 작품이 아련하게 느껴지시는군요. 감성적인 감상 타입이에요.' },
    FA2: { type: '조용함', description: '멀리서 보는 작품이 멀게 느껴지시는군요. 거리를 두고 감상하는 타입이에요.' },
    FA3: { type: '당당함', description: '멀리서도 선명하게 보이시는군요. 시각적 인지가 좋은 타입이에요.' },
    FA4: { type: '어색함', description: '멀리서 보는 작품이 흐릿하게 느껴지시는군요. 가까이서 감상하는 타입이에요.' },
    FA5: { type: '편안함', description: '멀리서 보는 작품에서 평온함을 느끼시는군요. 고요한 감상을 선호하는 타입이에요.' },
    FA6: { type: '두근거림', description: '멀리서 보며 궁금함을 느끼시는군요. 호기심이 많은 타입이에요.' },
    FA7: { type: '당당함', description: '멀리서 보는 작품이 당당하게 느껴지시는군요. 위엄을 느끼는 타입이에요.' },
    FA8: { type: '조용함', description: '멀리서 보는 작품이 조용하게 느껴지시는군요. 고요한 감상을 선호하는 타입이에요.' },
    FA9: { type: '당당함', description: '멀리서 보는 작품에서 위엄을 느끼시는군요. 거장적 감상을 하는 타입이에요.' },
    FA10: { type: '두근거림', description: '멀리서 보는 작품이 신비롭게 느껴지시는군요. 상상력이 풍부한 타입이에요.' },
    FA11: { type: '답답함', description: '멀리서 보는 작품이 답답하게 느껴지시는군요. 가까이서 감상하는 타입이에요.' },
    FA12: { type: '편안함', description: '멀리서 보는 작품이 편안하게 느껴지시는군요. 여유로운 감상을 선호하는 타입이에요.' },
    FA13: { type: '답답함', description: '멀리서 보는 작품이 외롭게 느껴지시는군요. 감성적인 타입이에요.' },
    FA14: { type: '어색함', description: '멀리서 보는 작품이 모호하게 느껴지시는군요. 명확함을 선호하는 타입이에요.' },
    FA15: { type: '강렬함', description: '멀리서도 강렬하게 느껴지시는군요. 강한 인상을 받는 타입이에요.' },
    FA16: { type: '포근함', description: '멀리서 보는 작품이 부드럽게 느껴지시는군요. 은은한 감상을 선호하는 타입이에요.' },
    FA17: { type: '불쾌함', description: '멀리서 보는 작품이 차갑게 느껴지시는군요. 냉정한 감상을 하는 타입이에요.' },
    FA18: { type: '포근함', description: '멀리서 보는 작품이 따뜻하게 느껴지시는군요. 온기 있는 감상을 하는 타입이에요.' },
    FA19: { type: '강렬함', description: '멀리서 보는 작품이 낯설게 느껴지시는군요. 새로운 것을 탐구하는 타입이에요.' },
    FA20: { type: '편안함', description: '멀리서 보는 작품이 친숙하게 느껴지시는군요. 익숙한 감상을 선호하는 타입이에요.' },
    CA1: { type: '강렬함', description: '가까이서 보는 작품에 압도되시는군요. 강한 인상을 받는 타입이에요.' },
    CA2: { type: '당당함', description: '가까이서 보는 작품이 선명하게 느껴지시는군요. 디테일을 즐기는 타입이에요.' },
    CA3: { type: '포근함', description: '가까이서 보는 작품이 가깝게 느껴지시는군요. 친밀한 감상을 선호하는 타입이에요.' },
    CA4: { type: '강렬함', description: '가까이서 보는 작품이 섬뜩하게 느껴지시는군요. 독특한 감각을 가진 타입이에요.' },
    CA5: { type: '포근함', description: '가까이서 보는 작품이 친근하게 느껴지시는군요. 작품과 교감하는 타입이에요.' },
    CA6: { type: '강렬함', description: '가까이서 보는 작품에 긴장되시는군요. 집중하는 타입이에요.' },
    CA7: { type: '두근거림', description: '가까이서 보는 작품에 설레시는군요. 기대감이 있는 타입이에요.' },
    CA8: { type: '강렬함', description: '가까이서 보는 작품이 두렵게 느껴지시는군요. 신중한 타입이에요.' },
    CA9: { type: '행복', description: '가까이서 보는 작품에 감동하시는군요. 감성적인 타입이에요.' },
    CA10: { type: '두근거림', description: '가까이서 보며 호기심을 느끼시는군요. 탐구하는 타입이에요.' },
    CA11: { type: '답답함', description: '가까이서 보는 작품이 답답하게 느껴지시는군요. 거리를 두는 타입이에요.' },
    CA12: { type: '편안함', description: '가까이서 보는 작품이 편안하게 느껴지시는군요. 친밀한 감상을 선호하는 타입이에요.' },
    CA13: { type: '두근거림', description: '가까이서 보는 작품이 신비롭게 느껴지시는군요. 상상력이 풍부한 타입이에요.' },
    CA14: { type: '당당함', description: '가까이서 보는 작품이 당당하게 느껴지시는군요. 위엄을 느끼는 타입이에요.' },
    CA15: { type: '강렬함', description: '가까이서 보는 작품이 강렬하게 느껴지시는군요. 강한 인상을 받는 타입이에요.' },
    CA16: { type: '포근함', description: '가까이서 보는 작품이 부드럽게 느껴지시는군요. 은은한 감상을 선호하는 타입이에요.' },
    CA17: { type: '조용함', description: '가까이서 보는 작품의 섬세함을 느끼시는군요. 디테일을 즐기는 타입이에요.' },
    CA18: { type: '강렬함', description: '가까이서 보는 작품이 거대하게 느껴지시는군요. 스케일에 압도되는 타입이에요.' },
    CA19: { type: '조용함', description: '가까이서 보는 작품이 작게 느껴지시는군요. 섬세한 것을 선호하는 타입이에요.' },
    CA20: { type: '답답함', description: '가까이서 보는 작품에 압박감을 느끼시는군요. 거리를 두는 타입이에요.' },
    EM1: { type: '강렬함', description: '작품에서 강렬한 감정을 느끼시는군요. 선명한 인상을 받는 타입이에요.' },
    EM2: { type: '두근거림', description: '작품에서 상큼한 감정을 느끼시는군요. 시원한 인상을 받는 타입이에요.' },
    EM3: { type: '포근함', description: '작품에서 달달한 감정을 느끼시는군요. 부드러운 인상을 받는 타입이에요.' },
    EM4: { type: '강렬함', description: '작품에서 두려움을 느끼시는군요. 신중한 감상을 하는 타입이에요.' },
    EM5: { type: '강렬함', description: '작품에서 무서움을 느끼시는군요. 독특한 감각을 가진 타입이에요.' },
    EM6: { type: '포근함', description: '작품에서 귀여움을 느끼시는군요. 사랑스러운 것을 좋아하는 타입이에요.' },
    EM7: { type: '답답함', description: '작품에서 슬픔을 느끼시는군요. 감성적인 타입이에요.' },
    EM8: { type: '짜증', description: '작품에서 화남을 느끼시는군요. 강한 감정을 가진 타입이에요.' },
    EM9: { type: '두근거림', description: '작품을 보며 두근거림을 느끼시는군요. 로맨틱한 타입이에요.' },
    EM10: { type: '편안함', description: '작품에서 평온함을 느끼시는군요. 고요한 감상을 선호하는 타입이에요.' },
    EM11: { type: '답답함', description: '작품에서 답답함을 느끼시는군요. 열린 감상을 선호하는 타입이에요.' },
    EM12: { type: '편안함', description: '작품에서 편안함을 느끼시는군요. 편안한 감상을 선호하는 타입이에요.' },
    EM13: { type: '행복', description: '작품에서 행복을 느끼시는군요. 긍정적인 감상을 하는 타입이에요.' },
    EM14: { type: '답답함', description: '작품에서 우울함을 느끼시는군요. 감성적인 타입이에요.' },
    EM15: { type: '두근거림', description: '작품에서 신비로움을 느끼시는군요. 상상력이 풍부한 타입이에요.' },
    EM16: { type: '강렬함', description: '작품에서 낯섦을 느끼시는군요. 새로운 것을 탐구하는 타입이에요.' },
    EM17: { type: '편안함', description: '작품에서 친숙함을 느끼시는군요. 익숙한 감상을 선호하는 타입이에요.' },
    EM18: { type: '두근거림', description: '작품에서 아련함을 느끼시는군요. 감성적인 타입이에요.' },
    EM19: { type: '강렬함', description: '작품에서 생동감을 느끼시는군요. 역동적인 감상을 선호하는 타입이에요.' },
    EM20: { type: '조용함', description: '작품에서 고요함을 느끼시는군요. 평온한 감상을 선호하는 타입이에요.' },
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

// 유형별 고정 색상 - 11가지 유형만, 다양한 색감
const TYPE_COLOR_MAP = {
  편안함: { color: '#22c55e', glow: '0 0 14px #22c55e', cls: 'star-green' },
  답답함: { color: '#3b82f6', glow: '0 0 14px #3b82f6', cls: 'star-blue' },
  조용함: { color: '#f8fafc', glow: '0 0 14px #f8fafc', cls: 'star-white' },
  포근함: { color: '#ec4899', glow: '0 0 14px #ec4899', cls: 'star-pink' },
  불쾌함: { color: '#6b7280', glow: '0 0 14px #6b7280', cls: 'star-gray' },
  어색함: { color: '#a855f7', glow: '0 0 14px #a855f7', cls: 'star-purple' },
  당당함: { color: '#92400e', glow: '0 0 14px #92400e', cls: 'star-brown' },
  행복: { color: '#eab308', glow: '0 0 14px #eab308', cls: 'star-yellow' },
  짜증: { color: '#f97316', glow: '0 0 14px #f97316', cls: 'star-orange' },
  강렬함: { color: '#dc2626', glow: '0 0 14px #dc2626', cls: 'star-red-dark' },
  두근거림: { color: '#f472b6', glow: '0 0 14px #f472b6', cls: 'star-pink-light' },
  흐릿함: { color: '#94a3b8', glow: '0 0 14px #94a3b8', cls: 'star-slate' },
  웅장함: { color: '#b45309', glow: '0 0 14px #b45309', cls: 'star-amber' },
  현실적: { color: '#64748b', glow: '0 0 14px #64748b', cls: 'star-slate-dark' },
  친근함: { color: '#4ade80', glow: '0 0 14px #4ade80', cls: 'star-mint' },
  긴장됨: { color: '#f59e0b', glow: '0 0 14px #f59e0b', cls: 'star-amber-light' },
  압도적: { color: '#ef4444', glow: '0 0 14px #ef4444', cls: 'star-red' },
  섬세함: { color: '#c084fc', glow: '0 0 14px #c084fc', cls: 'star-violet' },
  거대함: { color: '#0ea5e9', glow: '0 0 14px #0ea5e9', cls: 'star-sky' },
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
      ? '<p class="others-results-empty">아직 나와 같은 설정의 별들이 없습니다.</p>'
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
    <p class="others-results-title">나와 같은 설정의 별들</p>
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
let selectedWorks = [];   // 3단계: 선택한 작품 5개 (A~O 중)
let workSliderAnswers = []; // 3단계 far: 작품별 [s1,s2,s3] 슬라이더 값 (0-100)
let selectedGender = null; // 남 | 녀
let selectedMode = null;   // 어린이 | 청소년 | 청년 | 중장년 | 뉴비 | 중수 | 고수

const BASIC_QUESTIONS = 6;   // 1+2단계 질문 수
const WORKS_TO_SELECT = 5;   // 3단계에서 선택할 작품 수
const QUESTIONS_PER_WORK = 3; // 작품당 질문 수 (멀리, 가까이, 감정)

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
  const existingConfirm = container.parentElement?.querySelector('.work-select-confirm');
  if (existingConfirm) existingConfirm.remove();

  container.innerHTML = Object.entries(quizData.exhibition)
    .map(([roomName, works]) => `
      <div class="exhibition-category">
        <button type="button" class="category-toggle" aria-expanded="false">
          <span class="category-name">${roomName}</span>
          <span class="category-arrow">▼</span>
        </button>
        <div class="category-works" aria-hidden="true">
          ${works.map((work, idx) => {
            const isSelected = selectedWorks.includes(work);
            return `
            <button type="button" class="work-option option-wiggle option-wiggle-${(idx % 6) + 1} ${isSelected ? 'selected' : ''}" data-work="${work}">${work}</button>
          `}).join('')}
        </div>
      </div>
    `).join('');

  const confirmWrap = document.createElement('div');
  confirmWrap.className = 'work-select-confirm';
  confirmWrap.innerHTML = `
    <p class="work-select-hint">감상할 작품 5개를 선택하세요</p>
    <button type="button" class="btn-confirm-works glitch-btn" id="btn-confirm-works" disabled><span>감상 시작</span></button>
  `;
  container.parentElement?.appendChild(confirmWrap);

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

  function updateConfirmButton() {
    const btn = $('btn-confirm-works');
    if (btn) btn.disabled = selectedWorks.length !== WORKS_TO_SELECT;
  }

  container.querySelectorAll('.work-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const work = btn.dataset.work;
      const idx = selectedWorks.indexOf(work);
      if (idx >= 0) {
        selectedWorks.splice(idx, 1);
        btn.classList.remove('selected');
      } else if (selectedWorks.length < WORKS_TO_SELECT) {
        selectedWorks.push(work);
        btn.classList.add('selected');
      }
      updateConfirmButton();
    });
  });

  $('btn-confirm-works')?.addEventListener('click', () => {
    if (selectedWorks.length !== WORKS_TO_SELECT) return;
    currentQuestionIndex = BASIC_QUESTIONS; // 6부터 3단계 질문 시작
    showScreen(screens.question);
    renderQuestion();
  });
}

function renderQuestion() {
  const isStage3 = currentQuestionIndex >= BASIC_QUESTIONS && selectedWorks.length > 0;
  const totalQuestions = BASIC_QUESTIONS + selectedWorks.length * QUESTIONS_PER_WORK;

  const stageBadge = $('stage-badge');
  if (stageBadge) {
    if (isStage3) {
      stageBadge.textContent = '3단계 · 작품 감상';
      stageBadge.className = 'stage-badge stage-3';
    } else if (currentQuestionIndex < 3) {
      stageBadge.textContent = '1단계 · 기본 규칙';
      stageBadge.className = 'stage-badge stage-1';
    } else {
      stageBadge.textContent = '2단계 · 암묵적 규칙';
      stageBadge.className = 'stage-badge stage-2';
    }
  }

  if (isStage3) {
    const workIdx = Math.floor((currentQuestionIndex - BASIC_QUESTIONS) / QUESTIONS_PER_WORK);
    const qInWork = (currentQuestionIndex - BASIC_QUESTIONS) % QUESTIONS_PER_WORK;
    const work = selectedWorks[workIdx];
    const wq = quizData.workQuestions[qInWork];
    const text = wq.text.replace('{work}', work);

    $('progress-fill').style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
    $('question-number').textContent = `Q_${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(totalQuestions).padStart(2, '0')}`;
    $('question-text').textContent = text;

    const optionsContainer = $('options');

    if (wq.useSliders) {
      const sliderConfig = wq.key === 'near' ? quizData.workNearSliders : quizData.workFarSliders;
      const savedRaw = workSliderAnswers[workIdx];
      let saved = null;
      if (savedRaw && typeof savedRaw === 'object') {
        if (Array.isArray(savedRaw) && wq.key === 'far') saved = savedRaw;
        else if (!Array.isArray(savedRaw) && Array.isArray(savedRaw[wq.key])) saved = savedRaw[wq.key];
      }
      if (!saved || saved.length < 3) saved = sliderConfig.map(s => s.defaultVal);
      optionsContainer.innerHTML = `
        <div class="work-sliders">
          ${sliderConfig.map((slider, idx) => `
            <div class="slider-row">
              <span class="slider-label slider-left">${slider.left}</span>
              <input type="range" class="work-slider" min="0" max="100" value="${saved[idx]}" data-slider-idx="${idx}">
              <span class="slider-label slider-right">${slider.right}</span>
            </div>
            <div class="slider-value" data-value-idx="${idx}">${saved[idx]}%</div>
          `).join('')}
          <button type="button" class="btn-slider-next glitch-btn" id="btn-slider-next"><span>다음</span></button>
        </div>
      `;
      optionsContainer.querySelectorAll('.work-slider').forEach(input => {
        const valueEl = optionsContainer.querySelector(`[data-value-idx="${input.dataset.sliderIdx}"]`);
        input.addEventListener('input', () => { valueEl.textContent = input.value + '%'; });
      });
      $('btn-slider-next')?.addEventListener('click', () => {
        const vals = [];
        optionsContainer.querySelectorAll('.work-slider').forEach(inp => vals.push(parseInt(inp.value, 10)));
        const prev = workSliderAnswers[workIdx];
        const prevObj = prev && typeof prev === 'object'
          ? (Array.isArray(prev) ? { far: prev } : prev)
          : {};
        workSliderAnswers[workIdx] = { ...prevObj, [wq.key]: vals };
        currentQuestionIndex++;
        renderQuestion();
      });
      return;
    }

    const opts = quizData.workOptions[wq.optionsKey];
    optionsContainer.innerHTML = opts
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
    return;
  }

  const questions = (selectedMode && quizData.questionsByMode?.[selectedMode]) || quizData.questions;
  const question = questions[currentQuestionIndex];
  const total = questions.length;

  $('progress-fill').style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;
  $('question-number').textContent = `Q_${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  $('question-text').textContent = question.text;

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

  const isStage3 = currentQuestionIndex >= BASIC_QUESTIONS && selectedWorks.length > 0;
  const totalQuestions = BASIC_QUESTIONS + selectedWorks.length * QUESTIONS_PER_WORK;

  setTimeout(() => {
    if (isStage3) {
      if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        renderQuestion();
      } else {
        showResult();
      }
    } else {
      const questions = (selectedMode && quizData.questionsByMode?.[selectedMode]) || quizData.questions;
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
      } else {
  selectedWorks = [];
  workSliderAnswers = [];
  renderWorkSelect();
        showScreen(screens.workSelect);
      }
    }
  }, 280);
}

function sliderValuesToTypes() {
  const types = [];
  workSliderAnswers.forEach((obj) => {
    if (!obj) return;
    const o = Array.isArray(obj) ? { far: obj } : obj;
    const far = o.far;
    if (far && far.length >= 3) {
      types.push(far[0] < 50 ? '편안함' : '답답함');
      types.push(far[1] < 50 ? '강렬함' : '흐릿함');
      types.push(far[2] < 50 ? '웅장함' : '현실적');
    }
    const near = o.near;
    if (near && near.length >= 3) {
      types.push(near[0] < 50 ? '친근함' : '긴장됨');
      types.push(near[1] < 50 ? '압도적' : '편안함');
      types.push(near[2] < 50 ? '섬세함' : '거대함');
    }
  });
  return types;
}

function showResult() {
  const counts = {};
  answers.forEach(v => counts[v] = (counts[v] || 0) + 1);
  sliderValuesToTypes().forEach(t => counts[t] = (counts[t] || 0) + 1);

  const allValues = [...answers, ...sliderValuesToTypes()].filter(Boolean);
  const maxCount = Math.max(...Object.values(counts), 0);
  const dominant = Object.entries(counts).find(([, c]) => c === maxCount)?.[0] || allValues[allValues.length - 1] || 'A';

  const result = quizData.results[dominant] || { type: dominant, description: `${dominant} 유형으로 분석되었습니다.` };
  $('result-type').textContent = result.type;
  setResultStar(result.type);
  
  const desc = result.description;
  
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
  selectedWorks = [];
  workSliderAnswers = [];
  selectedGender = null;
  selectedMode = null;
  $$('.setting-option').forEach(b => b.classList.remove('selected'));
  $$('.setting-gender').forEach(b => b.classList.remove('selected'));
  $$('.setting-mode').forEach(b => b.classList.remove('selected'));
  $('btn-confirm').disabled = true;
  showScreen(screens.settings);
  initStaticNoise();
};

function goToWorkReselect() {
  selectedWorks = [];
  workSliderAnswers = [];
  answers.length = BASIC_QUESTIONS;
  renderWorkSelect();
  showScreen(screens.workSelect);
}

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
  $('btn-repick')?.addEventListener('click', goToWorkReselect);
  document.querySelector('.btn-retry')?.addEventListener('click', resetSettings);
});
