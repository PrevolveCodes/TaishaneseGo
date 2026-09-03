/* TaishaneseGo language-entry contract.
   IMPORTANT: fields are independent. Never derive spoken Taishanese from a character,
   Mandarin Pinyin, Cantonese Jyutping, or general Chinese knowledge. */
const LANGUAGE_ENTRY_TEMPLATE={
  id:'',
  english:'',
  taishaneseSpoken:'',
  romanization:'',
  chineseCharacter:'',
  audio:null,
  source:'',
  verificationStatus:'needs_review',
  reviewNotes:''
};
const ALLOWED_VERIFICATION_STATUSES=[
  'verified','needs_review','needs_correction','incorrect','mandarin','cantonese','unverified'
];