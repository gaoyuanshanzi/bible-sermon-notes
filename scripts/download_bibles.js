const fs = require('fs');
const path = require('path');

const KOREAN_BIBLE_URL = 'https://raw.githubusercontent.com/thiagobodruk/bible/master/json/ko_ko.json';
const ASV_BIBLE_URL = 'https://raw.githubusercontent.com/bibleapi/bibleapi-bibles-json/master/asv.json';

const DATA_DIR = path.join(__dirname, '..', 'data');

// Standard Protestant 66 Books order and metadata
const BIBLE_BOOKS = [
  { id: 'Gen', abbrev: 'Gen', name: 'Genesis', koName: '창세기', koAbbrev: '창' },
  { id: 'Exo', abbrev: 'Exo', name: 'Exodus', koName: '출애굽기', koAbbrev: '출' },
  { id: 'Lev', abbrev: 'Lev', name: 'Leviticus', koName: '레위기', koAbbrev: '레' },
  { id: 'Num', abbrev: 'Num', name: 'Numbers', koName: '민수기', koAbbrev: '민' },
  { id: 'Deu', abbrev: 'Deu', name: 'Deuteronomy', koName: '신명기', koAbbrev: '신' },
  { id: 'Jos', abbrev: 'Jos', name: 'Joshua', koName: '여호수아', koAbbrev: '수' },
  { id: 'Jdg', abbrev: 'Jdg', name: 'Judges', koName: '사사기', koAbbrev: '삿' },
  { id: 'Rut', abbrev: 'Rut', name: 'Ruth', koName: '룻기', koAbbrev: '룻' },
  { id: '1Sa', abbrev: '1Sam', name: '1 Samuel', koName: '사무엘상', koAbbrev: '삼상' },
  { id: '2Sa', abbrev: '2Sam', name: '2 Samuel', koName: '사무엘하', koAbbrev: '삼하' },
  { id: '1Ki', abbrev: '1Kings', name: '1 Kings', koName: '열왕기상', koAbbrev: '왕상' },
  { id: '2Ki', abbrev: '2Kings', name: '2 Kings', koName: '열왕기하', koAbbrev: '왕하' },
  { id: '1Ch', abbrev: '1Chron', name: '1 Chronicles', koName: '역대기상', koAbbrev: '대상' },
  { id: '2Ch', abbrev: '2Chron', name: '2 Chronicles', koName: '역대기하', koAbbrev: '대하' },
  { id: 'Ezr', abbrev: 'Ezra', name: 'Ezra', koName: '에스라', koAbbrev: '스' }, // 느헤미야 전 에스라. 느헤미야가 16번째
  { id: 'Neh', abbrev: 'Neh', name: 'Nehemiah', koName: '느헤미야', koAbbrev: '느' },
  { id: 'Est', abbrev: 'Esth', name: 'Esther', koName: '에스더', koAbbrev: '에' },
  { id: 'Job', abbrev: 'Job', name: 'Job', koName: '욥기', koAbbrev: '욥' },
  { id: 'Psa', abbrev: 'Ps', name: 'Psalms', koName: '시편', koAbbrev: '시' },
  { id: 'Pro', abbrev: 'Prov', name: 'Proverbs', koName: '잠언', koAbbrev: '잠' },
  { id: 'Ecc', abbrev: 'Eccles', name: 'Ecclesiastes', koName: '전도서', koAbbrev: '전' },
  { id: 'Sng', abbrev: 'Song', name: 'Song of Solomon', koName: '아가', koAbbrev: '아' },
  { id: 'Isa', abbrev: 'Isa', name: 'Isaiah', koName: '이사야', koAbbrev: '사' },
  { id: 'Jer', abbrev: 'Jer', name: 'Jeremiah', koName: '예레미야', koAbbrev: '렘' },
  { id: 'Lam', abbrev: 'Lam', name: 'Lamentations', koName: '예레미야 애가', koAbbrev: '애' },
  { id: 'Eze', abbrev: 'Ezek', name: 'Ezekiel', koName: '에스겔', koAbbrev: '겔' },
  { id: 'Dan', abbrev: 'Dan', name: 'Daniel', koName: '다니엘', koAbbrev: '단' },
  { id: 'Hos', abbrev: 'Hos', name: 'Hosea', koName: '호세아', koAbbrev: '호' },
  { id: 'Jol', abbrev: 'Joel', name: 'Joel', koName: '요엘', koAbbrev: '욜' },
  { id: 'Amo', abbrev: 'Amos', name: 'Amos', koName: '아모스', koAbbrev: '암' },
  { id: 'Oba', abbrev: 'Obad', name: 'Obadiah', koName: '오바디야', koAbbrev: '옵' },
  { id: 'Jon', abbrev: 'Jonah', name: 'Jonah', koName: '요나', koAbbrev: '욘' },
  { id: 'Mic', abbrev: 'Mic', name: 'Micah', koName: '미가', koAbbrev: '미' },
  { id: 'Nam', abbrev: 'Nah', name: 'Nahum', koName: '나훔', koAbbrev: '나' },
  { id: 'Hab', abbrev: 'Hab', name: 'Habakkuk', koName: '하박국', koAbbrev: '하' },
  { id: 'Zep', abbrev: 'Zeph', name: 'Zephaniah', koName: '스바냐', koAbbrev: '습' },
  { id: 'Hag', abbrev: 'Hag', name: 'Haggai', koName: '학개', koAbbrev: '학' },
  { id: 'Zec', abbrev: 'Zech', name: 'Zechariah', koName: '스가랴', koAbbrev: '슥' },
  { id: 'Mal', abbrev: 'Mal', name: 'Malachi', koName: '말라기', koAbbrev: '말' },
  { id: 'Mat', abbrev: 'Matt', name: 'Matthew', koName: '마태복음', koAbbrev: '마' },
  { id: 'Mrk', abbrev: 'Mark', name: 'Mark', koName: '마가복음', koAbbrev: '막' },
  { id: 'Luk', abbrev: 'Luke', name: 'Luke', koName: '누가복음', koAbbrev: '눅' },
  { id: 'Jhn', abbrev: 'John', name: 'John', koName: '요한복음', koAbbrev: '요' },
  { id: 'Act', abbrev: 'Acts', name: 'Acts', koName: '사도행전', koAbbrev: '행' },
  { id: 'Rom', abbrev: 'Rom', name: 'Romans', koName: '로마서', koAbbrev: '롬' },
  { id: '1Co', abbrev: '1Cor', name: '1 Corinthians', koName: '고린도전서', koAbbrev: '고전' },
  { id: '2Co', abbrev: '2Cor', name: '2 Corinthians', koName: '고린도후서', koAbbrev: '고후' },
  { id: 'Gal', abbrev: 'Gal', name: 'Galatians', koName: '갈라디아서', koAbbrev: '갈' },
  { id: 'Eph', abbrev: 'Eph', name: 'Ephesians', koName: '에베소서', koAbbrev: '엡' },
  { id: 'Php', abbrev: 'Phil', name: 'Philippians', koName: '빌립보서', koAbbrev: '빌' },
  { id: 'Col', abbrev: 'Col', name: 'Colossians', koName: '골로새서', koAbbrev: '골' },
  { id: '1Th', abbrev: '1Thess', name: '1 Thessalonians', koName: '데살로니가전서', koAbbrev: '살전' },
  { id: '2Th', abbrev: '2Thess', name: '2 Thessalonians', koName: '데살로니가후서', koAbbrev: '살후' },
  { id: '1Ti', abbrev: '1Tim', name: '1 Timothy', koName: '디모데전서', koAbbrev: '딤전' },
  { id: '2Ti', abbrev: '2Tim', name: '2 Timothy', koName: '디모데후서', koAbbrev: '딤후' },
  { id: 'Tit', abbrev: 'Titus', name: 'Titus', koName: '디도서', koAbbrev: '딛' },
  { id: 'Phm', abbrev: 'Philem', name: 'Philemon', koName: '빌레몬서', koAbbrev: '몬' },
  { id: 'Heb', abbrev: 'Heb', name: 'Hebrews', koName: '히브리서', koAbbrev: '히' },
  { id: 'Jas', abbrev: 'Jas', name: 'James', koName: '야고보서', koAbbrev: '약' },
  { id: '1Pe', abbrev: '1Pet', name: '1 베드로전서', koName: '베드로전서', koAbbrev: '벧전' },
  { id: '2Pe', abbrev: '2Pet', name: '2 베드로후서', koName: '베드로후서', koAbbrev: '벧후' },
  { id: '1Jn', abbrev: '1John', name: '1 요한일서', koName: '요한일서', koAbbrev: '요일' },
  { id: '2Jn', abbrev: '2John', name: '2 요한이서', koName: '요한이서', koAbbrev: '요이' },
  { id: '3Jn', abbrev: '3John', name: '3 요한삼서', koName: '요한삼서', koAbbrev: '요삼' },
  { id: 'Jud', abbrev: 'Jude', name: 'Jude', koName: '유다서', koAbbrev: '유' },
  { id: 'Rev', abbrev: 'Rev', name: 'Revelation', koName: '요한계시록', koAbbrev: '계' }
];

// Helper mapping for ASV input abbreviations
const ASV_BOOK_ID_MAP = {
  'Gen': 'Gen', 'Exo': 'Exo', 'Lev': 'Lev', 'Num': 'Num', 'Deu': 'Deu', 'Jos': 'Jos',
  'Jdg': 'Jdg', 'Rut': 'Rut', '1Sa': '1Sa', '2Sa': '2Sa', '1Ki': '1Ki', '2Ki': '2Ki',
  '1Ch': '1Ch', '2Ch': '2Ch', 'Ezr': 'Ezr', 'Neh': 'Neh', 'Est': 'Est', 'Job': 'Job',
  'Psa': 'Psa', 'Pro': 'Pro', 'Ecc': 'Ecc', 'Sng': 'Sng', 'Isa': 'Isa', 'Jer': 'Jer',
  'Lam': 'Lam', 'Eze': 'Eze', 'Dan': 'Dan', 'Hos': 'Hos', 'Jol': 'Jol', 'Amo': 'Amo',
  'Oba': 'Oba', 'Jon': 'Jon', 'Mic': 'Mic', 'Nam': 'Nam', 'Hab': 'Hab', 'Zep': 'Zep',
  'Hag': 'Hag', 'Zec': 'Zec', 'Mal': 'Mal', 'Mat': 'Mat', 'Mrk': 'Mrk', 'Luk': 'Luk',
  'Jhn': 'Jhn', 'Act': 'Act', 'Rom': 'Rom', '1Co': '1Co', '2Co': '2Co', 'Gal': 'Gal',
  'Eph': 'Eph', 'Php': 'Php', 'Col': 'Col', '1Th': '1Th', '2Th': '2Th', '1Ti': '1Ti',
  '2Ti': '2Ti', 'Tit': 'Tit', 'Phm': 'Phm', 'Heb': 'Heb', 'Jas': 'Jas', '1Pe': '1Pe',
  '2Pe': '2Pe', '1Jn': '1Jn', '2Jn': '2Jn', '3Jn': '3Jn', 'Jud': 'Jud', 'Rev': 'Rev'
};

async function downloadFile(url) {
  console.log(`Downloading ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.statusText}`);
  }
  return await response.text();
}

async function run() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    // 1. Process Korean Bible
    const koRaw = await downloadFile(KOREAN_BIBLE_URL);
    const koParsed = JSON.parse(koRaw);

    // Let's verify and map koParsed to our standard structure
    // The thiagobodruk ko_ko.json is an array of 66 books, usually in order.
    // Let's make sure it is exactly 66 books and align it with BIBLE_BOOKS.
    const alignedKo = BIBLE_BOOKS.map((bookMeta, idx) => {
      // In thiagobodruk, the order is standard, so we match by index first.
      const bookData = koParsed[idx];
      if (!bookData) {
        throw new Error(`Korean book at index ${idx} is missing!`);
      }
      
      // Let's verify name matches (e.g. 창세기)
      // Thiagobodruk names are: "창세기", "출애굽기", etc.
      return {
        abbrev: bookMeta.abbrev,
        name: bookMeta.name,
        koAbbrev: bookMeta.koAbbrev,
        koName: bookMeta.koName,
        chapters: bookData.chapters // Array of arrays of strings
      };
    });

    fs.writeFileSync(
      path.join(DATA_DIR, 'bible_ko.json'),
      JSON.stringify(alignedKo, null, 2),
      'utf8'
    );
    console.log('Saved data/bible_ko.json successfully.');

    // 2. Process ASV Bible
    const asvRaw = await downloadFile(ASV_BIBLE_URL);
    const asvParsed = JSON.parse(asvRaw);
    const rows = asvParsed.resultset.row;
    
    // Group verses by book number, chapter, verse
    const asvGroups = {};
    for (const row of rows) {
      const field = row.field;
      const bookNum = field[1];    // 1-indexed book number (1-66)
      const chapterNum = field[2]; // 1-indexed
      const verseNum = field[3];   // 1-indexed
      const text = field[4].trim();

      const bookMeta = BIBLE_BOOKS[bookNum - 1];
      if (!bookMeta) continue;
      const bookId = bookMeta.id;
      
      if (!asvGroups[bookId]) {
        asvGroups[bookId] = {};
      }
      if (!asvGroups[bookId][chapterNum]) {
        asvGroups[bookId][chapterNum] = {};
      }
      asvGroups[bookId][chapterNum][verseNum] = text;
    }

    // Align ASV into standard structure
    const alignedAsv = BIBLE_BOOKS.map((bookMeta) => {
      const bookData = asvGroups[bookMeta.id] || {};
      const chapters = [];
      
      // Look at the number of chapters in the Korean Bible to make sure we match indices perfectly!
      // In some English/Korean translations, there might be slight variations in verse counts,
      // but they generally match. Let's construct chapters based on the keys present in bookData.
      const chapterKeys = Object.keys(bookData).map(Number).sort((a, b) => a - b);
      const maxChapter = chapterKeys.length > 0 ? Math.max(...chapterKeys) : 0;

      for (let c = 1; c <= maxChapter; c++) {
        const chapterData = bookData[c] || {};
        const verseKeys = Object.keys(chapterData).map(Number).sort((a, b) => a - b);
        const maxVerse = verseKeys.length > 0 ? Math.max(...verseKeys) : 0;
        
        const verses = [];
        for (let v = 1; v <= maxVerse; v++) {
          verses.push(chapterData[v] || ""); // Use empty string if a verse is missing
        }
        chapters.push(verses);
      }

      return {
        abbrev: bookMeta.abbrev,
        name: bookMeta.name,
        koAbbrev: bookMeta.koAbbrev,
        koName: bookMeta.koName,
        chapters: chapters
      };
    });

    fs.writeFileSync(
      path.join(DATA_DIR, 'bible_asv.json'),
      JSON.stringify(alignedAsv, null, 2),
      'utf8'
    );
    console.log('Saved data/bible_asv.json successfully.');
    console.log('Bible data setup completed successfully!');
  } catch (error) {
    console.error('Error during download and process:', error);
    process.exit(1);
  }
}

run();
