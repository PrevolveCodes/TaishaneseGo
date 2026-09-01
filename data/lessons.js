/* TaishaneseGo communicative course data.
   Spoken meaning, pronunciation, phrases, and usage lead. Characters are secondary.
   Only source-verified language is included. */
const LESSONS=[
{id:'u1-l1',unitId:'u1',unit:'Unit 1 — First Conversations',title:'Meet someone',objective:'Greet someone and introduce yourself.',description:'Start from zero with useful phrases, then combine familiar language.',vocabularyIds:['v-hello','v-ngoi','v-hai'],steps:[
{type:'introduction',title:'A greeting',meaning:'Hello',taishanese:'你好',romanization:'nei1 hao2',character:'你好',audio:null,source:'https://www.learntoisan.com/sentences',note:'Learn the spoken form first. The characters are an optional written representation.'},
{type:'introduction',title:'A complete introduction',meaning:'I am John',taishanese:'我孩 John',romanization:'ngoi1 hai3 John',character:'我孩 John',audio:null,source:'https://www.learntoisan.com/sentences',note:'Learn this as a useful whole phrase before analyzing its pieces.'},
{type:'exercise',id:'u1q1',kind:'multipleChoice',stage:'understand',prompt:'You just learned a greeting. What does “你好” mean?',display:'你好',options:['Hello','Goodbye','Thank you','Sorry'],correctAnswer:'Hello',skill:'recognition',vocabularyIds:['v-hello']},
{type:'exercise',id:'u1q2',kind:'multipleChoice',stage:'understand',prompt:'Which Taishanese phrase means “I am John”?',options:['你好','我孩 John','我','你'],correctAnswer:'我孩 John',skill:'phraseRecognition',vocabularyIds:['v-ngoi','v-hai']},
{type:'exercise',id:'u1q3',kind:'conversation',stage:'communicate',prompt:'You meet someone. What can you say to greet them?',options:['你好','我孩 John','我','你'],correctAnswer:'你好',vocabularyIds:['v-hello']},
{type:'exercise',id:'u1q4',kind:'wordOrder',stage:'combine',prompt:'Build the sourced sentence “I am John.”',tokens:['John','孩','我'],correctOrder:['我','孩','John'],explanation:'The sourced sentence is 我孩 John (ngoi1 hai3 John).',vocabularyIds:['v-ngoi','v-hai']},
{type:'exercise',id:'u1q5',kind:'multipleChoice',stage:'notice',prompt:'In “我孩 John”, which pronunciation means “I / me”?',options:['hai3','ngoi1','nei1','hao2'],correctAnswer:'ngoi1',vocabularyIds:['v-ngoi']},
{type:'exercise',id:'u1q6',kind:'multipleChoice',stage:'context',prompt:'Which choice is a self-introduction?',options:['我孩 John','你好','我','你'],correctAnswer:'我孩 John',vocabularyIds:['v-ngoi','v-hai']},
{type:'exercise',id:'u1q7',kind:'fillBlank',stage:'guidedRecall',prompt:'Type the romanization you learned for “Hello.”',correctAnswer:'nei1 hao2',hint:'Think back to the greeting card. You do not need to type Chinese characters.',vocabularyIds:['v-hello']},
{type:'exercise',id:'u1q8',kind:'matching',stage:'reinforce',prompt:'Match each useful phrase with its meaning.',pairs:[['你好','Hello'],['我孩 John','I am John']],vocabularyIds:['v-hello','v-ngoi','v-hai']}
],exercises:[]},
{id:'u1-l2',unitId:'u1',unit:'Unit 1 — First Conversations',title:'Use what you know',objective:'Understand familiar language inside useful everyday phrases.',description:'Previously learned language returns in new contexts instead of being tested in isolation.',vocabularyIds:['v-hao','v-eat'],steps:[
{type:'introduction',title:'A useful feeling',meaning:'I’m very full',taishanese:'我好飽',romanization:'ngoi1 hao2 bao2',character:'我好飽',audio:null,source:'https://www.learntoisan.com/sentences',note:'A complete sourced phrase. Notice familiar language inside a new expression.'},
{type:'introduction',title:'Another useful feeling',meaning:'I’m very tired',taishanese:'我好攰',romanization:'ngoi1 hao2 gui3',character:'我好攰',audio:null,source:'https://www.learntoisan.com/sentences',note:'Learn the whole phrase and its use rather than memorizing the characters.'},
{type:'introduction',title:'A real everyday question',meaning:'Have you eaten, yet?',taishanese:'你吃誒飯未啊?',romanization:'nei1 hieg1 e1 fan3 mei3 a1?',character:'你吃誒飯未啊?',audio:null,source:'https://www.learntoisan.com/sentences',note:'You do not need to recognize every character to understand the communicative meaning.'},
{type:'introduction',title:'A real response',meaning:'I ate some.',taishanese:'我吃誒尼',romanization:'ngoi1 hieg1 e1 nai2',character:'我吃誒尼',audio:null,source:'https://www.learntoisan.com/sentences',note:'A sourced response that reuses familiar language in a new situation.'},
{type:'exercise',id:'u1q9',kind:'multipleChoice',stage:'understand',prompt:'Someone says “你吃誒飯未啊?” What are they asking about?',options:['Whether you have eaten','Whether you are tired','Your name','A greeting'],correctAnswer:'Whether you have eaten',vocabularyIds:['v-eat']},
{type:'exercise',id:'u1q10',kind:'multipleChoice',stage:'recognizePhrase',prompt:'Which phrase means “I ate some”?',options:['我吃誒尼','我好攰','你好','我孩 John'],correctAnswer:'我吃誒尼',vocabularyIds:['v-eat']},
{type:'exercise',id:'u1q11',kind:'multipleChoice',stage:'context',prompt:'You want to say “I’m very tired.” Which phrase should you choose?',options:['我好攰','我好飽','我吃誒尼','你好'],correctAnswer:'我好攰',vocabularyIds:['v-ngoi','v-hao']},
{type:'exercise',id:'u1q12',kind:'multipleChoice',stage:'context',prompt:'You have eaten and want to answer the sourced question. Which response fits?',options:['我吃誒尼','我好攰','你好','我孩 John'],correctAnswer:'我吃誒尼',vocabularyIds:['v-eat']},
{type:'exercise',id:'u1q13',kind:'matching',stage:'reinforce',prompt:'Match the whole expressions with their meanings.',pairs:[['我好飽','I’m very full'],['我好攰','I’m very tired'],['你吃誒飯未啊?','Have you eaten, yet?'],['我吃誒尼','I ate some.']],vocabularyIds:['v-ngoi','v-hao','v-eat']},
{type:'exercise',id:'u1q14',kind:'fillBlank',stage:'guidedRecall',prompt:'Type the romanization for “to eat.”',correctAnswer:'hieg1',hint:'You encountered this sound inside a real question and response. Type romanization, not characters.',vocabularyIds:['v-eat']}
],exercises:[]},
{id:'u2-l1',unitId:'u2',unit:'Unit 2 — People & Relationships',title:'Talk about people',objective:'Learn possessive and family language while reusing familiar pronunciation.',description:'New vocabulary is introduced through meaning first and then mixed with language you already know.',vocabularyIds:['v-my','v-your','v-father','v-mother'],steps:[
{type:'introduction',title:'My',meaning:'My',taishanese:'我嘅',romanization:'ngoi1 ge1',character:'我嘅',audio:null,source:'https://www.learntoisan.com/dictionary',note:'Notice the familiar ngoi1 inside a new phrase.'},
{type:'introduction',title:'Your',meaning:'Your',taishanese:'你嘅',romanization:'ne1 ge1',character:'你嘅',audio:null,source:'https://www.learntoisan.com/dictionary',note:'The source spelling and transcription are preserved.'},
{type:'introduction',title:'Father',meaning:'Father',taishanese:'(爸)爸',romanization:'ba4-ba42',character:'(爸)爸',audio:null,source:'https://www.learntoisan.com/dictionary',note:'The source records a tone change in the compound.'},
{type:'introduction',title:'Mother',meaning:'Mother',taishanese:'(媽)媽',romanization:'ma4-ma42',character:'(媽)媽',audio:null,source:'https://www.learntoisan.com/dictionary',note:'The source records a tone change in the compound.'},
{type:'exercise',id:'u2q1',kind:'multipleChoice',stage:'understand',prompt:'Which Taishanese form means “my”?',options:['我嘅','你嘅','(爸)爸','(媽)媽'],correctAnswer:'我嘅',vocabularyIds:['v-my']},
{type:'exercise',id:'u2q2',kind:'multipleChoice',stage:'understand',prompt:'Which Taishanese form means “your”?',options:['我嘅','你嘅','(爸)爸','(媽)媽'],correctAnswer:'你嘅',vocabularyIds:['v-your']},
{type:'exercise',id:'u2q3',kind:'multipleChoice',stage:'context',prompt:'Which family word means “father”?',options:['(爸)爸','(媽)媽','我嘅','你嘅'],correctAnswer:'(爸)爸',vocabularyIds:['v-father']},
{type:'exercise',id:'u2q4',kind:'multipleChoice',stage:'context',prompt:'Which family word means “mother”?',options:['(媽)媽','(爸)爸','我嘅','你嘅'],correctAnswer:'(媽)媽',vocabularyIds:['v-mother']},
{type:'exercise',id:'u2q5',kind:'matching',stage:'reinforce',prompt:'Match the people language with its meaning.',pairs:[['我嘅','my'],['你嘅','your'],['(爸)爸','father'],['(媽)媽','mother']],vocabularyIds:['v-my','v-your','v-father','v-mother']},
{type:'exercise',id:'u2q6',kind:'multipleChoice',stage:'recall',prompt:'You have seen this phrase before. Which one means “my”?',options:['你嘅','我嘅','(媽)媽','(爸)爸'],correctAnswer:'我嘅',vocabularyIds:['v-my']}
],exercises:[]}
];
LESSONS.forEach(lesson=>{lesson.exercises=lesson.steps.filter(step=>step.type!=='introduction')});
const COURSE_UNITS=[
{id:'u1',title:'Unit 1 — First Conversations',description:'Start from zero: greet someone, introduce yourself, and reuse familiar language in real phrases.'},
{id:'u2',title:'Unit 2 — People & Relationships',description:'Talk about people and family while reusing language from Unit 1.'},
{id:'u3',title:'Unit 3 — Everyday Life',description:'More verified communicative material will be added after language review.',comingSoon:true},
{id:'u4',title:'Unit 4 — Food & Drinks',description:'Additional verified food and drink communication will be added after language review.',comingSoon:true},
{id:'u5',title:'Unit 5 — Places',description:'Verified practical place language will be added after review.',comingSoon:true},
{id:'u6',title:'Unit 6 — Daily Life',description:'Verified daily-life communication will be added after review.',comingSoon:true},
{id:'u7',title:'Unit 7 — Conversation Builder',description:'Longer verified conversations will be added after review.',comingSoon:true},
{id:'u8',title:'Unit 8 — Review & Communication',description:'Cumulative communication practice will be added after review.',comingSoon:true}
];
