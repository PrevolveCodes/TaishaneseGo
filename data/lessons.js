// Course content only uses source-backed language entries. Question types are explicit and validated by the app.
const LESSONS=[
{id:'u1-l1',unitId:'u1',unit:'Unit 1 — Basics',title:'People & greetings',objective:'Recognize a few foundational Taishanese words and the greeting 你好.',description:'Build a small, useful foundation with pronouns, basic grammar, and a greeting.',vocabularyIds:['v-ngoi','v-nei','v-hai','v-hao','v-hello'],exercises:[
{id:'u1q1',type:'translation',prompt:'What does 我 mean?',correctAnswer:'I / me',options:['I / me','you','good / well','to eat'],explanation:'The Learn Toisan dictionary lists 我 (ngoi1) as “I/me”.',vocabularyIds:['v-ngoi']},
{id:'u1q2',type:'multipleChoice',prompt:'Choose the Taishanese greeting meaning “hello.”',correctAnswer:'你好',options:['我','你好','好','你'],explanation:'你好 (nei1 hao2) is listed as a beginner greeting meaning “hello.”',vocabularyIds:['v-hello']},
{id:'u1q3',type:'fillBlank',prompt:'Complete the greeting: 你好 = ___ ___',correctAnswer:'nei1 hao2',options:['nei1 hao2','ngoi1 hai3','ngoi1 ge1','hieg1'],explanation:'The source gives the greeting 你好 as nei1 hao2.',vocabularyIds:['v-hello']},
{id:'u1q4',type:'matching',prompt:'Match each Taishanese item with its English meaning.',pairs:[['我','I / me'],['你','you'],['好','good / well'],['孩','am / is / are']],explanation:'These four entries are listed in the Learn Toisan beginner dictionary.',vocabularyIds:['v-ngoi','v-nei','v-hao','v-hai']}
]},
{id:'u1-l2',unitId:'u1',unit:'Unit 1 — Basics',title:'Simple identity',objective:'Use the sourced beginner pattern 我孩 + name.',description:'Practice recognizing and producing a simple identity statement.',vocabularyIds:['v-ngoi','v-hai'],exercises:[
{id:'u1q5',type:'translation',prompt:'What does 我孩 John mean?',correctAnswer:'I am John',options:['I am John','You are John','John is good','I drink'],explanation:'The Learn Toisan phrase archive gives 我孩 John (ngoi1 hai3 John) as “I am John.”',vocabularyIds:['v-ngoi','v-hai']},
{id:'u1q6',type:'wordOrder',prompt:'Put these pieces in the order used by the sourced example.',tokens:['John','我','孩'],correctOrder:['我','孩','John'],explanation:'The source example is 我孩 John。',vocabularyIds:['v-ngoi','v-hai']},
{id:'u1q7',type:'multipleChoice',prompt:'Which item means “am / is / are” in the beginner dictionary?',correctAnswer:'孩',options:['我','孩','好','你'],explanation:'孩 (hai3) is listed as a beginner grammar particle meaning am/is/are.',vocabularyIds:['v-hai']},
{id:'u1q8',type:'conversation',prompt:'You want to introduce yourself as John. Which sourced sentence should you choose?',correctAnswer:'我孩 John',options:['我孩 John','你好','我好','你好吗?'],explanation:'The sourced phrase is 我孩 John (ngoi1 hai3 John).',vocabularyIds:['v-ngoi','v-hai']}
]},
{id:'u2-l1',unitId:'u2',unit:'Unit 2 — People',title:'Possessives & family',objective:'Recognize sourced possessive forms and family vocabulary.',description:'Learn a small set of people and family words without mixing in unverified forms.',vocabularyIds:['v-my','v-your','v-he','v-father','v-mother','v-grandpa'],exercises:[
{id:'u2q1',type:'translation',prompt:'What does 我嘅 mean?',correctAnswer:'my',options:['my','your','his / her / its','father'],explanation:'The dictionary lists 我嘅 (ngoi1 ge1) as “my.”',vocabularyIds:['v-my']},
{id:'u2q2',type:'multipleChoice',prompt:'Which Taishanese item means “your”?',correctAnswer:'你嘅',options:['我嘅','你嘅','佢','(爸)爸'],explanation:'The dictionary lists 你嘅 (ne1 ge1) as “your.”',vocabularyIds:['v-your']},
{id:'u2q3',type:'matching',prompt:'Match the family words.',pairs:[['(爸)爸','father'],['(媽)媽','mother'],['公(公)','maternal grandpa'],['爺(爺)','paternal grandpa']],explanation:'These family entries are listed in the beginner section of the source dictionary.',vocabularyIds:['v-father','v-mother','v-mgrandpa','v-grandpa']},
{id:'u2q4',type:'multipleChoice',prompt:'Which sourced form means “his / her / its”?',correctAnswer:'佢',options:['佢','我嘅','你嘅','人(人)'],explanation:'The dictionary displays 佢 with kui1 ge1 and the meaning “his; her; its.”',vocabularyIds:['v-he']}
]},
{id:'u3-l1',unitId:'u3',unit:'Unit 3 — Everyday Life',title:'Eat & drink',objective:'Recognize two common beginner verbs and a sourced eating question.',description:'Connect isolated vocabulary with a real phrase from the Taishanese archive.',vocabularyIds:['v-eat','v-drink'],exercises:[
{id:'u3q1',type:'translation',prompt:'What does 吃 mean?',correctAnswer:'to eat',options:['to eat','to drink','good / well','you'],explanation:'The dictionary lists 吃 (hieg1) as “to eat.”',vocabularyIds:['v-eat']},
{id:'u3q2',type:'multipleChoice',prompt:'Choose the Taishanese word meaning “to drink.”',correctAnswer:'飲',options:['飲','吃','好','孩'],explanation:'The dictionary lists 飲 (ngim2) as “to drink.”',vocabularyIds:['v-drink']},
{id:'u3q3',type:'translation',prompt:'What does the sourced phrase 你吃誒飯未啊? ask?',correctAnswer:'Have you eaten, yet?',options:['Have you eaten, yet?','Where are you going?','Are you drinking water?','How are you?'],explanation:'The Learn Toisan common-phrases archive gives 你吃誒飯未啊? as “Have you eaten, yet?”',vocabularyIds:['v-eat']},
{id:'u3q4',type:'conversation',prompt:'Someone asks 你吃誒飯未啊? Which response from the same source means “I ate some”?',correctAnswer:'我吃誒尼',options:['我吃誒尼','我孩 John','我好','你好'],explanation:'The phrase archive gives 我吃誒尼 (ngoi1 hieg1 e1 nai2) as “I ate some.”',vocabularyIds:['v-eat']}
]},
{id:'u4-l1',unitId:'u4',unit:'Unit 4 — Food & Drinks',title:'A useful request',objective:'Recognize a sourced phrase for politely asking for water.',description:'Practice a real everyday phrase from the Taishanese archive.',vocabularyIds:['v-drink'],exercises:[
{id:'u4q1',type:'translation',prompt:'What does 唔該, 我想要啲水 mean?',correctAnswer:'Excuse me, I would like some water',options:['Excuse me, I would like some water','I am very full','I do not know','I need to go home'],explanation:'This exact phrase and English meaning appear in the Learn Toisan common-phrases archive.',vocabularyIds:['v-drink']},
{id:'u4q2',type:'multipleChoice',prompt:'Which phrase asks for some water?',correctAnswer:'唔該, 我想要啲水',options:['唔該, 我想要啲水','我好好.','我孩 John','你好吗?'],explanation:'The sourced phrase is 唔該, 我想要啲水.',vocabularyIds:['v-drink']},
{id:'u4q3',type:'matching',prompt:'Match the sourced everyday phrases with their meanings.',pairs:[['唔該, 唔該.','Thank you, thank you.'],['唔使唔該.','You are welcome.'],['我好好.','I’m very well.']],explanation:'These lines are taken from the Taishanese Basic Course source.',vocabularyIds:[]},
{id:'u4q4',type:'conversation',prompt:'You want water. Which response is the best sourced choice?',correctAnswer:'唔該, 我想要啲水',options:['唔該, 我想要啲水','你好','我孩 John','我好'],explanation:'The archive includes this exact request for water.',vocabularyIds:['v-drink']}
]}
];
const COURSE_UNITS=[
{id:'u1',title:'Unit 1 — Basics',description:'Foundational words, greetings, and simple identity.'},
{id:'u2',title:'Unit 2 — People',description:'Possessives and family vocabulary.'},
{id:'u3',title:'Unit 3 — Everyday Life',description:'Common actions and everyday questions.'},
{id:'u4',title:'Unit 4 — Food & Drinks',description:'Useful requests and food-related phrases.'},
{id:'u5',title:'Unit 5 — Places',description:'More verified place vocabulary will be added after review.',comingSoon:true},
{id:'u6',title:'Unit 6 — Common Conversations',description:'Conversation material is being prepared from verified sources.',comingSoon:true},
{id:'u7',title:'Unit 7 — Time & Numbers',description:'Time and number lessons will be added after verification.',comingSoon:true},
{id:'u8',title:'Unit 8 — Useful Everyday Phrases',description:'Additional high-frequency phrases will be added after review.',comingSoon:true}
];