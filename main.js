const quizData = {
  questions: [
    {
      text: '미술관에서는 조용히 해야 한다',
      options: [
        // 긍정 (좋은 부분)
        { text: '여유롭다', value: 'S1' },
        { text: '고요하다', value: 'S2' },
        { text: '편안하다', value: 'S3' },
        { text: '차분하다', value: 'S4' },
        { text: '평온하다', value: 'S5' },
        { text: '안정적이다', value: 'S6' },
        { text: '숙연하다', value: 'S7' },
        { text: '집중된다', value: 'S8' },
        { text: '잔잔해진다', value: 'S9' },
        { text: '힐링된다', value: 'S10' },
        { text: '포근하다', value: 'S11' },
        { text: '평화롭다', value: 'S12' },
        { text: '담담하다', value: 'S13' },
        { text: '침착하다', value: 'S14' },
        { text: '자연스럽다', value: 'S15' },
        // 부정 (불편한 부분)
        { text: '위축된다', value: 'S16' },
        { text: '숨막힌다', value: 'S17' },
        { text: '답답하다', value: 'S18' },
        { text: '갑갑하다', value: 'S19' },
        { text: '불편하다', value: 'S20' },
        { text: '짜증난다', value: 'S21' },
        { text: '부담된다', value: 'S22' },
        { text: '긴장된다', value: 'S23' },
        { text: '어색하다', value: 'S24' },
        { text: '우울하다', value: 'S25' },
        { text: '지루하다', value: 'S26' },
        { text: '딱딱하다', value: 'S27' },
        { text: '무겁다', value: 'S28' },
        { text: '억울하다', value: 'S29' },
        { text: '압박감이 든다', value: 'S30' },
      ],
    },
    {
      text: '미술관에서는 뛰면 안된다',
      options: [
        // 긍정 (규칙에 대한 좋은 느낌)
        { text: '안전하다', value: 'R1' },
        { text: '차분하다', value: 'R2' },
        { text: '여유롭다', value: 'R3' },
        { text: '편안하다', value: 'R4' },
        { text: '당연하다', value: 'R5' },
        { text: '안정적이다', value: 'R6' },
        { text: '신중하다', value: 'R7' },
        { text: '침착하다', value: 'R8' },
        { text: '느긋하다', value: 'R9' },
        { text: '담담하다', value: 'R10' },
        { text: '평온하다', value: 'R11' },
        { text: '포근하다', value: 'R12' },
        { text: '자연스럽다', value: 'R13' },
        { text: '좋다', value: 'R14' },
        { text: '이해된다', value: 'R15' },
        // 부정 (규칙에 대한 불편한 느낌)
        { text: '답답하다', value: 'R16' },
        { text: '갑갑하다', value: 'R17' },
        { text: '불편하다', value: 'R18' },
        { text: '제한적이다', value: 'R19' },
        { text: '짜증난다', value: 'R20' },
        { text: '지루하다', value: 'R21' },
        { text: '부담된다', value: 'R22' },
        { text: '위축된다', value: 'R23' },
        { text: '억울하다', value: 'R24' },
        { text: '딱딱하다', value: 'R25' },
        { text: '심심하다', value: 'R26' },
        { text: '재미없다', value: 'R27' },
        { text: '긴장된다', value: 'R28' },
        { text: '어색하다', value: 'R29' },
        { text: '따분하다', value: 'R30' },
      ],
    },
    {
      text: '미술관 전시실에는 음식물 반입이 금지되어 있다.',
      options: [
        // ① 긍정적 형용사
        { text: '위생적이다', value: 'F1' },
        { text: '청결하다', value: 'F2' },
        { text: '쾌적하다', value: 'F3' },
        { text: '안전하다', value: 'F4' },
        { text: '질서 있다', value: 'F5' },
        { text: '전문적이다', value: 'F6' },
        { text: '보호적이다', value: 'F7' },
        { text: '책임감 있다', value: 'F8' },
        { text: '신중하다', value: 'F9' },
        { text: '엄격하다', value: 'F10' },
        { text: '집중하기 좋다', value: 'F11' },
        { text: '차분하다', value: 'F12' },
        { text: '안정적이다', value: 'F13' },
        { text: '정돈되어 있다', value: 'F14' },
        { text: '공공성을 지킨다', value: 'F15' },
        // ② 부정적 형용사
        { text: '불편하다', value: 'F16' },
        { text: '답답하다', value: 'F17' },
        { text: '제한적이다', value: 'F18' },
        { text: '부담스럽다', value: 'F19' },
        { text: '슬프다', value: 'F20' },
        { text: '폐쇄적이다', value: 'F21' },
        { text: '위압적이다', value: 'F22' },
        { text: '딱딱하다', value: 'F23' },
        { text: '거리감이 있다', value: 'F24' },
        { text: '자유롭지 못하다', value: 'F25' },
        // ③ 중립적·양가적 표현
        { text: '통제되어 있다', value: 'F26' },
        { text: '관리된다', value: 'F27' },
        { text: '규범적이다', value: 'F28' },
        { text: '배고프다', value: 'F29' },
        { text: '공식적이다', value: 'F30' },
      ],
    },
    {
      text: '다른사람이 내가 원하는 작품을 보고 있다. 이때 나의 감정은?',
      options: [
        { text: '아쉽다', value: 'V1' },
        { text: '속상하다', value: 'V2' },
        { text: '답답하다', value: 'V3' },
        { text: '조급하다', value: 'V4' },
        { text: '초조하다', value: 'V5' },
        { text: '불편하다', value: 'V6' },
        { text: '짜증이 나다', value: 'V7' },
        { text: '질투하다', value: 'V8' },
        { text: '의식하다', value: 'V9' },
        { text: '예민해지다', value: 'V10' },
        { text: '이해하다', value: 'V11' },
        { text: '참다', value: 'V12' },
        { text: '양보하다', value: 'V13' },
        { text: '수용하다', value: 'V14' },
        { text: '욕심이 나다', value: 'V15' },
        { text: '불안하다', value: 'V16' },
        { text: '관대해지다', value: 'V17' },
        { text: '눈치가 보이다', value: 'V18' },
        { text: '억울하다', value: 'V19' },
        { text: '조심스럽다', value: 'V20' },
        { text: '긴장하다', value: 'V21' },
        { text: '침착해지다', value: 'V22' },
        { text: '괜찮다', value: 'V23' },
        { text: '편하다', value: 'V24' },
        { text: '자연스럽다', value: 'V25' },
        { text: '여유롭다', value: 'V26' },
        { text: '당연하다', value: 'V27' },
        { text: '반갑다', value: 'V28' },
        { text: '공감하다', value: 'V29' },
        { text: '안절부절하다', value: 'V30' },
      ],
    },
    {
      text: '작품을 이해하려고 노력할 때 나의 감정은?',
      options: [
        { text: '궁금하다', value: 'W1' },
        { text: '집중하다', value: 'W2' },
        { text: '몰입하다', value: 'W3' },
        { text: '신중하다', value: 'W4' },
        { text: '조심스럽다', value: 'W5' },
        { text: '낯설다', value: 'W6' },
        { text: '어렵다', value: 'W7' },
        { text: '답답하다', value: 'W8' },
        { text: '혼란스럽다', value: 'W9' },
        { text: '막막하다', value: 'W10' },
        { text: '흥미롭다', value: 'W11' },
        { text: '재미있다', value: 'W12' },
        { text: '도전적이다', value: 'W13' },
        { text: '의욕이 생기다', value: 'W14' },
        { text: '끈기 있다', value: 'W15' },
        { text: '집요하다', value: 'W16' },
        { text: '세심하다', value: 'W17' },
        { text: '예민해지다', value: 'W18' },
        { text: '스트레스 받다', value: 'W19' },
        { text: '거리감이 느껴지다', value: 'W20' },
        { text: '새롭다', value: 'W21' },
        { text: '통찰하다', value: 'W22' },
        { text: '깨닫다', value: 'W23' },
        { text: '뿌듯하다', value: 'W24' },
        { text: '성취감을 느끼다', value: 'W25' },
        { text: '성찰하다', value: 'W26' },
        { text: '긴장하다', value: 'W27' },
        { text: '설레다', value: 'W28' },
        { text: '호기심이 생기다', value: 'W29' },
        { text: '만족스럽다', value: 'W30' },
      ],
    },
    {
      text: '미술관에 갈 때 어떤 옷을 입을지 고민될 때 나의 감정은?',
      options: [
        { text: '고민되다', value: 'X1' },
        { text: '망설여지다', value: 'X2' },
        { text: '신경이 쓰이다', value: 'X3' },
        { text: '의식하다', value: 'X4' },
        { text: '설레다', value: 'X5' },
        { text: '기대되다', value: 'X6' },
        { text: '긴장하다', value: 'X7' },
        { text: '부담스럽다', value: 'X8' },
        { text: '조심스럽다', value: 'X9' },
        { text: '걱정되다', value: 'X10' },
        { text: '불안하다', value: 'X11' },
        { text: '자신 없다', value: 'X12' },
        { text: '잘 보이고 싶다', value: 'X13' },
        { text: '튀고 싶지 않다', value: 'X14' },
        { text: '행복하다', value: 'X15' },
        { text: '격식을 차리고 싶다', value: 'X16' },
        { text: '편하게 입고 싶다', value: 'X17' },
        { text: '눈치가 보이다', value: 'X18' },
        { text: '위축되다', value: 'X19' },
        { text: '들뜨다', value: 'X20' },
        { text: '기분이 좋아지다', value: 'X21' },
        { text: '어색하다', value: 'X22' },
        { text: '스트레스 받다', value: 'X23' },
        { text: '답답하다', value: 'X24' },
        { text: '괜찮다', value: 'X25' },
        { text: '자연스럽다', value: 'X26' },
        { text: '부담된다', value: 'X27' },
        { text: '막막하다', value: 'X28' },
        { text: '편안하다', value: 'X29' },
        { text: '당당해지다', value: 'X30' },
      ],
    },
  ],
  exhibition: {
    '1전시실': ['A', 'B', 'C', 'D', 'E'],
    '2전시실': ['F', 'G', 'H', 'I', 'J'],
    '3전시실': ['K', 'L', 'M', 'N', 'O'],
  },
  // 작품 질문 노출 순서: 2전시실 → 3전시실 → 1전시실
  workOrderByRoom: ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'A', 'B', 'C', 'D', 'E'],
  workLabels: {
    A: '김지은, <부동산적 풍경화 #2>',
    B: '정세인, <Only.Love.gr.pu>',
    C: '김정우, <빨간내복 20097>',
    D: '박소라, <에너지 드링크가 필요한 사회>',
    E: '김승주, <Ruler No. 0>',
    F: '신미경, <Angel Series 58>',
    G: '최병석, <숲속 생활연구소>',
    H: '홍승표, <CPR Board B>',
    I: '오유경, <맺고 있는 얽힘 상태>',
    J: '권순관, <Gestures in the Subway 3-39>',
    K: '김우진, <유령과 바다, 그리고 뫼비우스>',
    L: '정성진, <Moving City>',
    M: '문소현, <Hollow Show-Night Life>',
    N: '장서영, <터뷸런스>',
    O: '더 브이오에이, <불판에 남은 떡볶이 떡의 마음속에서는 불가능한 물리적인 죽음>',
  },
  workQuestions: [
    { key: 'farPrep', text: '{work}에서 다섯 걸음 물러나, 작품의 전체 분위기를 느껴보세요.', usePrep: true },
    { key: 'far', text: '작품 {work}를 멀리서 볼 때', optionsKey: 'far', useSliders: true },
    { key: 'nearPrep', text: '{work} 앞으로 다섯 걸음 다가가, 작품을 천천히 들여다보세요.', usePrep: true },
    { key: 'near', text: '작품 {work}를 가까이서 볼 때', optionsKey: 'near', useSliders: true },
    { key: 'captionPrep', text: '작품 {work} 옆 캡션을 읽어주세요.', usePrep: true },
    { key: 'captionEmotion', text: '설명을 본 후 작품을 봤을 때 어떤 감정이 드나요?', optionsKey: 'captionEmotion' },
    { key: 'emotion', text: '작품 {work}를 보고 느끼는 감정', optionsKey: 'emotion' },
  ],
  // 작품별 슬라이더 (멀리서/가까이서 동일)
  workSliders: {
    A: [ // 김지은
      { left: '편안함', right: '답답함', defaultVal: 50 },
      { left: '차분함', right: '혼란스러움', defaultVal: 50 },
      { left: '이상적', right: '현실적', defaultVal: 50 },
    ],
    B: [ // 정세인
      { left: '공개적인', right: '감춰진', defaultVal: 50 },
      { left: '감성적', right: '이성적', defaultVal: 50 },
      { left: '해방감', right: '압박감', defaultVal: 50 },
    ],
    C: [ // 김정우
      { left: '밝음', right: '어두움', defaultVal: 50 },
      { left: '해맑음', right: '처량함', defaultVal: 50 },
      { left: '안전한', right: '위험한', defaultVal: 50 },
    ],
    D: [ // 박소라
      { left: '가벼움', right: '무거움', defaultVal: 50 },
      { left: '편안함', right: '답답함', defaultVal: 50 },
      { left: '재밌음', right: '진중함', defaultVal: 50 },
    ],
    E: [ // 김승주
      { left: '재밌음', right: '혼란스러움', defaultVal: 50 },
      { left: '독창적임', right: '익숙함', defaultVal: 50 },
      { left: '자유로운', right: '정해진', defaultVal: 50 },
    ],
    F: [ // 신미경
      { left: '부드러움', right: '단단함', defaultVal: 50 },
      { left: '수줍음', right: '거만함', defaultVal: 50 },
      { left: '웅장함', right: '소박함', defaultVal: 50 },
    ],
    G: [ // 최병석
      { left: '쓸모', right: '무쓸모', defaultVal: 50 },
      { left: '과학자', right: '괴짜', defaultVal: 50 },
      { left: '재밌음', right: '불편함', defaultVal: 50 },
    ],
    H: [ // 홍승표
      { left: '안전한', right: '위험한', defaultVal: 50 },
      { left: '흰 글씨', right: '빨간 글씨', defaultVal: 50 },
      { left: '재밌음', right: '불편함', defaultVal: 50 },
    ],
    I: [ // 오유경
      { left: '복잡한', right: '단순한', defaultVal: 50 },
      { left: '곡선', right: '직선', defaultVal: 50 },
      { left: '편안한', right: '긴장한', defaultVal: 50 },
    ],
    J: [ // 권순관
      { left: '자유로운', right: '감시받는', defaultVal: 50 },
      { left: '소속감', right: '고립감', defaultVal: 50 },
      { left: '개인적', right: '집단적', defaultVal: 50 },
    ],
    K: [ // 김우진
      { left: '슬픔', right: '무서움', defaultVal: 50 },
      { left: '고요함', right: '불안함', defaultVal: 50 },
      { left: '공허한', right: '의미 있는', defaultVal: 50 },
    ],
    L: [ // 정성진
      { left: '평온한', right: '어지러운', defaultVal: 50 },
      { left: '재밌는', right: '무서운', defaultVal: 50 },
      { left: '생명', right: '죽음', defaultVal: 50 },
    ],
    M: [ // 문소현
      { left: '찬란한', right: '공허한', defaultVal: 50 },
      { left: '천국', right: '지옥', defaultVal: 50 },
      { left: '빛', right: '어둠', defaultVal: 50 },
    ],
    N: [ // 장서영
      { left: '편안한', right: '갑갑한', defaultVal: 50 },
      { left: '밀착된', right: '분리된', defaultVal: 50 },
      { left: '자유로운', right: '단절된', defaultVal: 50 },
    ],
    O: [ // 더 브이오에이
      { left: '귀여움', right: '무서움', defaultVal: 50 },
      { left: '재밌는', right: '난해한', defaultVal: 50 },
      { left: '떡볶이', right: '작품', defaultVal: 50 },
    ],
  },
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
      { text: '😊', value: 'EM1' },
      { text: '😍', value: 'EM2' },
      { text: '🤩', value: 'EM3' },
      { text: '🧐', value: 'EM4' },
      { text: '😎', value: 'EM5' },
      { text: '😢', value: 'EM6' },
      { text: '🫨', value: 'EM7' },
      { text: '😴', value: 'EM8' },
      { text: '😵‍💫', value: 'EM9' },
      { text: '🤔', value: 'EM10' },
    ],
    captionEmotion: [
      { text: '이해된다', value: 'CP1' },
      { text: '분석적이다', value: 'CP2' },
      { text: '비판적이다', value: 'CP3' },
      { text: '긴장되다', value: 'CP4' },
      { text: '의미 있다', value: 'CP5' },
      { text: '선명하다', value: 'CP6' },
      { text: '차분하다', value: 'CP7' },
      { text: '객관적이다', value: 'CP8' },
      { text: '이성적이다', value: 'CP9' },
      { text: '정리된다', value: 'CP10' },
      { text: '논리적이다', value: 'CP11' },
      { text: '냉정하다', value: 'CP12' },
      { text: '집중된다', value: 'CP13' },
      { text: '분명하다', value: 'CP14' },
      { text: '또렷하다', value: 'CP15' },
      { text: '구조적이다', value: 'CP16' },
      { text: '거리감 있다', value: 'CP17' },
      { text: '담담하다', value: 'CP18' },
      { text: '정돈되다', value: 'CP19' },
      { text: '명확하다', value: 'CP20' },
      { text: '흥미롭다', value: 'CP21' },
      { text: '관찰적이다', value: 'CP22' },
      { text: '재미있다', value: 'CP23' },
      { text: '조용하다', value: 'CP24' },
      { text: '진지하다', value: 'CP25' },
      { text: '생각하다', value: 'CP26' },
      { text: '압박감 들다', value: 'CP27' },
      { text: '어렵다', value: 'CP28' },
      { text: '스트레스 받다', value: 'CP29' },
      { text: '눈치보다', value: 'CP30' },
    ],
  },
  // 모드별 질문 (선택 사항). 예: questionsByMode: { '남': [...], '어린이': [...] }
  // 없으면 기본 questions 사용
  questionsByMode: {},
  results: {
    A: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    B: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    C: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    D: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    E: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    F: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    G: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    H: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    I: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    J: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    // 1단계 1번 질문 (조용히 해야 한다) — 긍정
    S1: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S2: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    S3: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S4: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S6: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S7: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    S8: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S9: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S10: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    S11: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    S12: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S13: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S14: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    S15: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    // 1단계 1번 질문 — 부정
    S16: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    S17: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    S18: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    S19: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    S20: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    S21: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    S22: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    S23: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    S24: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    S25: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    S26: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    S27: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    S28: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    S29: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    S30: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    // 1단계 2번 질문 (뛰면 안 된다) — 긍정
    R1: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R2: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R3: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R4: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R6: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R7: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    R8: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R9: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R10: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R11: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    R12: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    R13: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    R14: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    R15: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    // 1단계 2번 질문 — 부정
    R16: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    R17: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    R18: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    R19: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    R20: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    R21: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    R22: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    R23: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    R24: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    R25: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    R26: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    R27: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    R28: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    R29: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    R30: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    // 1단계 3번 질문 (음식물 반입 금지) — ① 긍정
    F1: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F2: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F3: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F4: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F6: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F7: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F8: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F9: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    F10: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F11: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F12: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F13: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F14: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F15: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    // 1단계 3번 질문 — ② 부정
    F16: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    F17: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    F18: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    F19: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    F20: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    F21: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    F22: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    F23: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    F24: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    F25: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    // 1단계 3번 질문 — ③ 중립·양가
    F26: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F27: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    F28: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    F29: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    F30: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    A1: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    A3: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    A4: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    A5: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    A6: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    A7: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    A8: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    A9: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    B1: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    B2: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    B4: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    B5: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    B6: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    B7: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    C1: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    C2: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    C3: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    C4: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    C5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    C6: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    C7: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    C8: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    C9: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    D1: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    D2: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    D3: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    D4: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    D5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    D6: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    D7: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    V1: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    V2: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    V3: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    V4: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    V5: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    V6: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    V7: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    V8: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    V9: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    V10: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    V11: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V12: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V13: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V14: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V15: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    V16: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    V17: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V18: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    V19: { type: '짜증', description: "\'조용히 하세요\'에 살짝 반감 드는 자유 추구형" },
    V20: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    V21: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    V22: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V23: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V24: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V25: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V26: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V27: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V28: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V29: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    V30: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    W1: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W2: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W3: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W4: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    W5: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    W6: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    W7: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    W8: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    W9: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    W10: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    W11: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    W12: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    W13: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W14: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W15: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W16: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W17: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    W18: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    W19: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    W20: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    W21: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W22: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W23: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    W24: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    W25: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    W26: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W27: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    W28: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    W29: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    W30: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    X1: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X2: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    X3: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    X4: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    X5: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    X6: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    X7: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    X8: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X9: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    X10: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X11: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    X12: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    X13: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    X14: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    X15: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    X16: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    X17: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    X18: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    X19: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X20: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    X21: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    X22: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    X23: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X24: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X25: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    X26: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    X27: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X28: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    X29: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    X30: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    FA1: { type: '두근거림', description: '작품 앞에서 감정이 살짝 출렁이는 감성 반응형' },
    FA2: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    FA3: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    FA4: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    FA5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    FA6: { type: '두근거림', description: '작품 앞에서 감정이 살짝 출렁이는 감성 반응형' },
    FA7: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    FA8: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    FA9: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    FA10: { type: '두근거림', description: '작품 앞에서 감정이 살짝 출렁이는 감성 반응형' },
    FA11: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    FA12: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    FA13: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    FA14: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    FA15: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    FA16: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    FA17: { type: '불쾌함', description: '규칙 많은 공간에 예민해지는 제한 회피형' },
    FA18: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    FA19: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    FA20: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CA1: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    CA2: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    CA3: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    CA4: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    CA5: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    CA6: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    CA7: { type: '두근거림', description: '작품 앞에서 감정이 살짝 출렁이는 감성 반응형' },
    CA8: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    CA9: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    CA10: { type: '두근거림', description: '작품 앞에서 감정이 살짝 출렁이는 감성 반응형' },
    CA11: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    CA12: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CA13: { type: '두근거림', description: '작품 앞에서 감정이 살짝 출렁이는 감성 반응형' },
    CA14: { type: '당당함', description: '눈치 안 보고 자기 템포 유지하는 마이웨이형' },
    CA15: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    CA16: { type: '포근함', description: '공간에 스며들듯 편안해지는 감정 흡수형' },
    CA17: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    CA18: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    CA19: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    CA20: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    EM1: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    EM2: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    EM3: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    EM4: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    EM5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    EM6: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    EM7: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    EM8: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    EM9: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    EM10: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP1: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP2: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP3: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP4: { type: '강렬함', description: '괜히 더 의식돼서 긴장감 도는 집중 과부하형' },
    CP5: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP6: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP7: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP8: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP9: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP10: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP11: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP12: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP13: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP14: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP15: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP16: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP17: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
    CP18: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP19: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP20: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP21: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    CP22: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP23: { type: '행복', description: '괜히 기분 좋아지는, 이유 없는 만족형' },
    CP24: { type: '조용함', description: '소리 없는 공간이 오히려 안정적인 무음 적응형' },
    CP25: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP26: { type: '편안함', description: '들어오자마자 긴장 해제되는, 미술관 힐링형' },
    CP27: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    CP28: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    CP29: { type: '답답함', description: '벽이 점점 가까워지는 느낌, 탈출 욕구형' },
    CP30: { type: '어색함', description: '손 어디 둬야 할지 고민되는 자세 방황형' },
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

// 결과는 항상 이 11개 유형 중 하나로만 표시 (선택지 + 슬라이더 통합)
const RESULT_TYPES = ['편안함', '답답함', '조용함', '행복', '짜증', '당당함', '불쾌함', '강렬함', '어색함', '포근함', '두근거림'];
const TYPE_DESCRIPTIONS = {
  편안함: '들어오자마자 긴장 해제되는, 미술관 힐링형',
  답답함: '벽이 점점 가까워지는 느낌, 탈출 욕구형',
  조용함: '소리 없는 공간이 오히려 안정적인 무음 적응형',
  행복: '괜히 기분 좋아지는, 이유 없는 만족형',
  짜증: "'조용히 하세요'에 살짝 반감 드는 자유 추구형",
  당당함: '눈치 안 보고 자기 템포 유지하는 마이웨이형',
  불쾌함: '규칙 많은 공간에 예민해지는 제한 회피형',
  강렬함: '괜히 더 의식돼서 긴장감 도는 집중 과부하형',
  어색함: '손 어디 둬야 할지 고민되는 자세 방황형',
  포근함: '공간에 스며들듯 편안해지는 감정 흡수형',
  두근거림: '작품 앞에서 감정이 살짝 출렁이는 감성 반응형',
};
const TYPE_EMOJI = {
  편안함: '🙂‍↕️', 답답함: '😢', 조용함: '😴', 행복: '😍', 짜증: '😡',
  당당함: '😎', 불쾌함: '🫨', 강렬함: '😵‍💫', 어색함: '🤔', 포근함: '🧐', 두근거림: '🤩',
};
// 슬라이더 좌/우 라벨 → 11개 유형 매핑 (슬라이더도 최종 결과에 반영)
const SLIDER_LABEL_TO_TYPE = {
  편안함: '편안함', 답답함: '답답함', 편안한: '편안함', 갑갑한: '답답함',
  차분함: '조용함', 혼란스러움: '답답함', 이상적: '행복', 현실적: '조용함',
  공개적인: '당당함', 감춰진: '어색함', 감성적: '두근거림', 이성적: '조용함',
  해방감: '행복', 압박감: '답답함', 밝음: '편안함', 어두움: '강렬함',
  해맑음: '행복', 처량함: '강렬함', 안전한: '편안함', 위험한: '불쾌함',
  가벼움: '편안함', 무거움: '답답함', 재밌음: '행복', 진중함: '조용함',
  독창적임: '두근거림', 익숙함: '편안함', 자유로운: '행복', 정해진: '짜증',
  부드러움: '포근함', 단단함: '답답함', 수줍음: '어색함', 거만함: '당당함',
  웅장함: '당당함', 소박함: '편안함', 쓸모: '당당함', 무쓸모: '답답함',
  과학자: '당당함', 괴짜: '당당함', 불편함: '불쾌함', '흰 글씨': '편안함', '빨간 글씨': '불쾌함',
  복잡한: '강렬함', 단순한: '편안함', 곡선: '포근함', 직선: '조용함', 긴장한: '강렬함',
  감시받는: '불쾌함', 소속감: '포근함', 고립감: '답답함', 개인적: '당당함', 집단적: '어색함',
  슬픔: '강렬함', 무서움: '불쾌함', 고요함: '조용함', 불안함: '답답함',
  공허한: '답답함', '의미 있는': '편안함', 평온한: '편안함', 어지러운: '답답함',
  재밌는: '행복', 무서운: '불쾌함', 생명: '행복', 죽음: '강렬함',
  찬란한: '행복', 천국: '행복', 지옥: '불쾌함', 빛: '편안함', 어둠: '불쾌함',
  밀착된: '포근함', 분리된: '답답함', 단절된: '답답함', 귀여움: '포근함',
  난해한: '두근거림', 떡볶이: '행복', 작품: '조용함',
};

// 유형별 고정 색상 - 11가지 유형만, 다양한 색감
const TYPE_COLOR_MAP = {
  편안함: { color: '#22c55e', glow: '0 0 14px #22c55e', cls: 'star-green' },
  답답함: { color: '#3b82f6', glow: '0 0 14px #3b82f6', cls: 'star-blue' },
  조용함: { color: '#f8fafc', glow: '0 0 14px #f8fafc', cls: 'star-white' },
  포근함: { color: '#c71585', glow: '0 0 14px #c71585', cls: 'star-pink' },
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
  숙연함: { color: '#1e3a5f', glow: '0 0 14px #1e3a5f', cls: 'star-navy' },
  차분함: { color: '#14b8a6', glow: '0 0 14px #14b8a6', cls: 'star-teal' },
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
  starEl.textContent = TYPE_EMOJI[resultType] || '★';
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
        const emoji = TYPE_EMOJI[s.type] || '★';
        return `
        <span class="sky-star ${s.cls}" 
          style="color:${s.color};text-shadow:${s.glow};left:${left}%;top:${top}%;"
          data-type="${s.type}"
          data-count="${s.count}"
          title="${emoji} ${s.type} · ${s.count}명">${emoji}</span>
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
  const emoji = TYPE_EMOJI[el.dataset.type] || '';
  starTooltip.textContent = `${emoji} ${el.dataset.type} · ${el.dataset.count}명`.trim();
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
let selectedWorks = [];   // 3단계 선택 작품 3개 (A~O 중)
let workSliderAnswers = []; // 3단계 far: 작품별 [s1,s2,s3] 슬라이더 값 (0-100)
let selectedGender = null; // 남 | 녀
let selectedMode = null;   // 어린이 | 청소년 | 청년 | 중장년 | 뉴비 | 중수 | 고수
let optionPartIndex = 0;  // 30개 보기 질문: 1·2·3파트 중 현재 파트 (0,1,2)
let lastOptionPartQuestionIndex = -1; // 파트 초기화용

const BASIC_QUESTIONS = 6;   // 1+2단계 질문 수
const WORKS_TO_SELECT = 3;   // 3단계에서 선택할 작품 수
const QUESTIONS_PER_WORK = 7; // 작품당 질문 수 (멀리준비, 멀리, 가까이준비, 가까이, 캡션준비, 캡션감정, 감정)

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

function escapeHtml(s) {
  if (typeof s !== 'string') return s;
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
            const label = quizData.workLabels?.[work] || work;
            const labelSafe = escapeHtml(label);
            return `
            <button type="button" class="work-option option-wiggle option-wiggle-${(idx % 6) + 1} ${isSelected ? 'selected' : ''}" data-work="${work}" title="${labelSafe}">${labelSafe}</button>
          `}).join('')}
        </div>
      </div>
    `).join('');

  const confirmWrap = document.createElement('div');
  confirmWrap.className = 'work-select-confirm';
  confirmWrap.innerHTML = `
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
    const order = quizData.workOrderByRoom || ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'A', 'B', 'C', 'D', 'E'];
    selectedWorks.sort((a, b) => order.indexOf(a) - order.indexOf(b));
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
    const workLabel = quizData.workLabels?.[work] || work;
    const wq = quizData.workQuestions[qInWork];
    const text = wq.text.replace('{work}', workLabel);

    $('progress-fill').style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
    $('question-number').textContent = `Q_${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(totalQuestions).padStart(2, '0')}`;
    $('question-text').textContent = text;

    const optionsContainer = $('options');

    if (wq.usePrep) {
      optionsContainer.innerHTML = `
        <div class="work-prep">
          <button type="button" class="btn-prep-ready glitch-btn" id="btn-prep-ready"><span>준비완료</span></button>
        </div>
      `;
      $('btn-prep-ready')?.addEventListener('click', () => {
        currentQuestionIndex++;
        renderQuestion();
      });
      return;
    }

    if (wq.useSliders) {
      const work = selectedWorks[workIdx];
      const sliderConfig = (quizData.workSliders && quizData.workSliders[work]) || (quizData.workSliders && quizData.workSliders.A) || [
        { left: '편안함', right: '답답함', defaultVal: 50 },
        { left: '차분함', right: '혼란스러움', defaultVal: 50 },
        { left: '이상적', right: '현실적', defaultVal: 50 },
      ];
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

    if (wq.optionsKey === 'emotion') {
      const emotionOpts = quizData.workOptions.emotion;
      const slideWidthPercent = 52;
      optionsContainer.innerHTML = `
        <div class="emotion-swipe-outer">
          <button type="button" class="emotion-swipe-arrow emotion-swipe-arrow--left" aria-label="이전">←</button>
          <div class="emotion-swipe-viewport" id="emotion-swipe-viewport">
            <div class="emotion-swipe-track" id="emotion-swipe-track">
              ${emotionOpts.map((opt) => `
                <div class="emotion-swipe-slide" data-value="${opt.value}">
                  <span class="emotion-emoji">${opt.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <button type="button" class="emotion-swipe-arrow emotion-swipe-arrow--right" aria-label="다음">→</button>
        </div>
        <p class="emotion-swipe-hint">화살표를 누르거나 드래그해 넘기고, 이모지를 탭하면 선택됩니다</p>
      `;
      const viewport = $('emotion-swipe-viewport');
      const track = $('emotion-swipe-track');
      const arrowLeft = optionsContainer.querySelector('.emotion-swipe-arrow--left');
      const arrowRight = optionsContainer.querySelector('.emotion-swipe-arrow--right');
      let emotionIndex = 0;
      const totalEmotions = emotionOpts.length;

      if (track) track.style.width = `${totalEmotions * slideWidthPercent}%`;

      const centerOffsetTrack = 5000 / (totalEmotions * slideWidthPercent) - 5;

      function updateTrack(noTransition) {
        if (!track) return;
        if (noTransition) track.style.transition = 'none';
        else track.style.transition = '';
        const offsetPercent = centerOffsetTrack - emotionIndex * (100 / totalEmotions);
        track.style.transform = `translateX(${offsetPercent}%)`;
      }

      let didSwipe = false;
      let dragStartX = 0;
      let dragStartIndex = 0;
      let dragBasePercent = 0;

      function goPrev() {
        emotionIndex = (emotionIndex - 1 + totalEmotions) % totalEmotions;
        updateTrack();
        didSwipe = true;
      }
      function goNext() {
        emotionIndex = (emotionIndex + 1) % totalEmotions;
        updateTrack();
        didSwipe = true;
      }

      arrowLeft.addEventListener('click', (e) => { e.stopPropagation(); goPrev(); });
      arrowRight.addEventListener('click', (e) => { e.stopPropagation(); goNext(); });

      const dragFactor = 10000 / (totalEmotions * slideWidthPercent);

      viewport.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 && e.pointerType !== 'touch') return;
        e.preventDefault();
        dragStartX = e.clientX;
        dragStartIndex = emotionIndex;
        dragBasePercent = centerOffsetTrack - emotionIndex * (100 / totalEmotions);
        didSwipe = false;
        viewport.setPointerCapture(e.pointerId);
      });

      viewport.addEventListener('pointermove', (e) => {
        if (e.buttons === 0 && e.pointerType === 'mouse') return;
        if (!viewport.hasPointerCapture(e.pointerId)) return;
        const viewW = viewport.offsetWidth;
        if (!viewW) return;
        e.preventDefault();
        const deltaX = e.clientX - dragStartX;
        const deltaTrackPercent = (deltaX / viewW) * dragFactor;
        const currentPercent = dragBasePercent + deltaTrackPercent;
        track.style.transition = 'none';
        track.style.transform = `translateX(${currentPercent}%)`;
      });

      const TAP_THRESH = 10;

      viewport.addEventListener('pointerup', (e) => {
        if (!viewport.hasPointerCapture(e.pointerId)) return;
        viewport.releasePointerCapture(e.pointerId);
        const deltaX = e.clientX - dragStartX;
        if (Math.abs(deltaX) < TAP_THRESH) {
          selectCurrent();
          return;
        }
        const viewW = viewport.offsetWidth;
        if (!viewW) { updateTrack(); return; }
        const deltaTrackPercent = (deltaX / viewW) * dragFactor;
        const endPercent = dragBasePercent + deltaTrackPercent;
        const rawIndex = Math.round((centerOffsetTrack - endPercent) * totalEmotions / 100);
        const newIndex = Math.max(0, Math.min(totalEmotions - 1, rawIndex));
        emotionIndex = newIndex;
        updateTrack();
      });

      viewport.addEventListener('pointercancel', (e) => {
        viewport.releasePointerCapture(e.pointerId);
        updateTrack();
      });

      function selectCurrent() {
        const value = emotionOpts[emotionIndex].value;
        answers[currentQuestionIndex] = value;
        const totalQuestions = BASIC_QUESTIONS + selectedWorks.length * QUESTIONS_PER_WORK;
        optionsContainer.innerHTML = '';
        if (currentQuestionIndex < totalQuestions - 1) {
          currentQuestionIndex++;
          renderQuestion();
        } else {
          showResult();
        }
      }

      return;
    }

    const opts = quizData.workOptions[wq.optionsKey];
    const usePartsStage3 = opts && opts.length === 30;
    if (usePartsStage3) {
      if (currentQuestionIndex !== lastOptionPartQuestionIndex) {
        optionPartIndex = 0;
        lastOptionPartQuestionIndex = currentQuestionIndex;
      }
      const positive = opts.slice(optionPartIndex * 5, optionPartIndex * 5 + 5);
      const negative = opts.slice(15 + optionPartIndex * 5, 15 + optionPartIndex * 5 + 5);
      const partOptions = [...positive, ...negative];
      optionsContainer.innerHTML = partOptions
        .map((opt, idx) => `
          <button type="button" class="option glitch-option option-wiggle option-wiggle-${(idx % 20) + 1}" data-value="${opt.value}">
            <span class="option-inner">${opt.text}</span>
          </button>
        `).join('') + `
      <div class="option-part-footer">
        <button type="button" class="btn-option-change btn-shuffle-icon glitch-btn" id="btn-option-change" aria-label="보기 파트 바꾸기" title="셔플 (${optionPartIndex + 1}/3)">
        <span class="btn-shuffle-inner">
          <svg class="icon-shuffle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6.5 8.5 C 10 5 14 19 17.5 15.5"/>
            <path d="M17.5 8.5 C 14 5 10 19 6.5 15.5"/>
            <polygon points="5 8 6.2 7.2 6.2 8.8" fill="currentColor"/>
            <polygon points="19 16 17.8 15.2 17.2 16.8" fill="currentColor"/>
            <polygon points="19 8 17.8 7.2 17.8 8.8" fill="currentColor"/>
            <polygon points="5 16 6.2 15.2 6.2 16.8" fill="currentColor"/>
          </svg>
          <span class="btn-shuffle-num">${optionPartIndex + 1}/3</span>
        </span>
      </button>
      </div>`;
      optionsContainer.querySelectorAll('.option').forEach(btn => {
        btn.addEventListener('click', handleOptionClick);
        btn.addEventListener('touchstart', () => {
          optionsContainer.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
          btn.classList.add('selected');
        }, { passive: true });
      });
      $('btn-option-change')?.addEventListener('click', () => {
        optionPartIndex = (optionPartIndex + 1) % 3;
        renderQuestion();
      });
      return;
    }

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
  const opts = question.options;
  const useParts = opts.length === 30;

  if (useParts) {
    if (currentQuestionIndex !== lastOptionPartQuestionIndex) {
      optionPartIndex = 0;
      lastOptionPartQuestionIndex = currentQuestionIndex;
    }
    const positive = opts.slice(optionPartIndex * 5, optionPartIndex * 5 + 5);
    const negative = opts.slice(15 + optionPartIndex * 5, 15 + optionPartIndex * 5 + 5);
    const partOptions = [...positive, ...negative];
    optionsContainer.innerHTML = partOptions
      .map((opt, idx) => `
        <button type="button" class="option glitch-option option-wiggle option-wiggle-${(idx % 20) + 1}" data-value="${opt.value}">
          <span class="option-inner">${opt.text}</span>
        </button>
      `).join('') + `
      <div class="option-part-footer">
        <button type="button" class="btn-option-change btn-shuffle-icon glitch-btn" id="btn-option-change" aria-label="보기 파트 바꾸기" title="셔플 (${optionPartIndex + 1}/3)">
        <span class="btn-shuffle-inner">
          <svg class="icon-shuffle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6.5 8.5 C 10 5 14 19 17.5 15.5"/>
            <path d="M17.5 8.5 C 14 5 10 19 6.5 15.5"/>
            <polygon points="5 8 6.2 7.2 6.2 8.8" fill="currentColor"/>
            <polygon points="19 16 17.8 15.2 17.2 16.8" fill="currentColor"/>
            <polygon points="19 8 17.8 7.2 17.8 8.8" fill="currentColor"/>
            <polygon points="5 16 6.2 15.2 6.2 16.8" fill="currentColor"/>
          </svg>
          <span class="btn-shuffle-num">${optionPartIndex + 1}/3</span>
        </span>
      </button>
      </div>`;

    optionsContainer.querySelectorAll('.option').forEach(btn => {
      btn.addEventListener('click', handleOptionClick);
      btn.addEventListener('touchstart', () => {
        optionsContainer.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        btn.classList.add('selected');
      }, { passive: true });
    });

    $('btn-option-change')?.addEventListener('click', () => {
      optionPartIndex = (optionPartIndex + 1) % 3;
      renderQuestion();
    });
    return;
  }

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
    optionsContainer.innerHTML = '';
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
  const raw = [];
  const defaultSliders = quizData.workSliders?.A || [
    { left: '편안함', right: '답답함', defaultVal: 50 },
    { left: '차분함', right: '혼란스러움', defaultVal: 50 },
    { left: '이상적', right: '현실적', defaultVal: 50 },
  ];
  workSliderAnswers.forEach((obj, i) => {
    if (!obj) return;
    const work = selectedWorks[i];
    const sliders = (quizData.workSliders && quizData.workSliders[work]) || defaultSliders;
    const o = Array.isArray(obj) ? { far: obj } : obj;
    const far = o.far;
    if (far && far.length >= 3 && sliders.length >= 3) {
      raw.push(far[0] < 50 ? sliders[0].left : sliders[0].right);
      raw.push(far[1] < 50 ? sliders[1].left : sliders[1].right);
      raw.push(far[2] < 50 ? sliders[2].left : sliders[2].right);
    }
    const near = o.near;
    if (near && near.length >= 3 && sliders.length >= 3) {
      raw.push(near[0] < 50 ? sliders[0].left : sliders[0].right);
      raw.push(near[1] < 50 ? sliders[1].left : sliders[1].right);
      raw.push(near[2] < 50 ? sliders[2].left : sliders[2].right);
    }
  });
  // 슬라이더 라벨을 11개 유형으로만 변환 (선택지와 동일한 유형 체계)
  return raw.map((label) => {
    if (RESULT_TYPES.includes(label)) return label;
    return SLIDER_LABEL_TO_TYPE[label] || '편안함';
  });
}

function showResult() {
  // 선택지 + 슬라이더를 유형 단위로 합쳐서 카운트 (항상 11개 유형 중 하나로 결과)
  const counts = {};
  answers.forEach((key) => {
    const r = quizData.results[key];
    const type = r?.type && RESULT_TYPES.includes(r.type) ? r.type : '편안함';
    counts[type] = (counts[type] || 0) + 1;
  });
  sliderValuesToTypes().forEach((type) => {
    counts[type] = (counts[type] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(counts), 0);
  const dominantType = Object.entries(counts).find(([, c]) => c === maxCount)?.[0]
    || RESULT_TYPES[0];
  const description = (typeof window !== 'undefined' && window.RESULT_TYPE_MESSAGES && window.RESULT_TYPE_MESSAGES[dominantType])
    ? window.RESULT_TYPE_MESSAGES[dominantType]
    : (TYPE_DESCRIPTIONS[dominantType] || `${dominantType} 유형으로 분석되었습니다.`);
  const result = {
    type: dominantType,
    description,
  };
  $('result-type').textContent = (TYPE_EMOJI[result.type] || '') + ' ' + result.type;
  setResultStar(result.type);
  $('result-description').textContent = result.description;
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
  selectedWorks = [];
  workSliderAnswers = [];
  selectedGender = null;
  selectedMode = null;
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

function handleQuestionBack() {
  if (currentQuestionIndex === 0) {
    showScreen(screens.settings);
    return;
  }
  if (currentQuestionIndex === BASIC_QUESTIONS) {
    currentQuestionIndex = BASIC_QUESTIONS - 1;
    showScreen(screens.workSelect);
    renderWorkSelect();
    return;
  }
  currentQuestionIndex--;
  renderQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  setupSettingsScreen();
  scheduleGlitch();
  
  document.querySelector('.btn-start').addEventListener('click', resetSettings);
  $('btn-repick')?.addEventListener('click', goToWorkReselect);
  document.querySelector('.btn-retry')?.addEventListener('click', resetSettings);
  $('btn-question-back')?.addEventListener('click', handleQuestionBack);
});
