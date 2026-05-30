const fs = require('fs');
const path = require('path');

// Mock data and functions from app.js to run in Node
const bibleKo = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'bible_ko.json'), 'utf8'));
const bibleAsv = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'bible_asv.json'), 'utf8'));

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
  { id: 'Ezr', abbrev: 'Ezra', name: 'Ezra', koName: '에스라', koAbbrev: '스' },
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
  { id: '1Pe', abbrev: '1Pet', name: '베드로전서', koName: '베드로전서', koAbbrev: '벧전' },
  { id: '2Pe', abbrev: '2Pet', name: '베드로후서', koName: '베드로후서', koAbbrev: '벧후' },
  { id: '1Jn', abbrev: '1John', name: '요한일서', koName: '요한일서', koAbbrev: '요일' },
  { id: '2Jn', abbrev: '2John', name: '요한이서', koName: '요한이서', koAbbrev: '요이' },
  { id: '3Jn', abbrev: '3John', name: '요한삼서', koName: '요한삼서', koAbbrev: '요삼' },
  { id: 'Jud', abbrev: 'Jude', name: 'Jude', koName: '유다서', koAbbrev: '유' },
  { id: 'Rev', abbrev: 'Rev', name: 'Revelation', koName: '요한계시록', koAbbrev: '계' }
];

const bookMap = {};
BIBLE_BOOKS.forEach((book, idx) => {
  bookMap[book.id.toLowerCase()] = idx;
  bookMap[book.abbrev.toLowerCase()] = idx;
  bookMap[book.name.toLowerCase().replace(/\s+/g, '')] = idx;
  bookMap[book.koName.toLowerCase().replace(/\s+/g, '')] = idx;
  bookMap[book.koAbbrev.toLowerCase()] = idx;
});

const customAbbrevs = {
  'ge': 0, 'gn': 0, 'ex': 1, 'le': 2, 'lv': 2, 'nu': 3, 'nm': 3, 'de': 4, 'dt': 4,
  'josh': 5, 'jg': 6, 'ru': 7,
  '1s': 8, '1 sam': 8, 'i sam': 8, 'i samuel': 8,
  '2s': 9, '2 sam': 9, 'ii sam': 9, 'ii samuel': 9,
  '1k': 10, '1 king': 10, 'i king': 10, 'i kings': 10,
  '2k': 11, '2 king': 11, 'ii king': 11, 'ii kings': 11,
  '1ch': 12, '1 chr': 12, 'i chron': 12, 'i chronicles': 12,
  '2ch': 13, '2 chr': 13, 'ii chron': 13, 'ii chronicles': 13,
  'ne': 15, 'esth': 16, 'es': 16, 'jb': 17, 'psalm': 18, 'pr': 19, 'ec': 20,
  'songofsongs': 21, 'canticles': 21, 'so': 21, 'is': 22, 'je': 23, 'la': 24,
  'ezek': 25, 'dn': 26, 'ho': 27, 'joe': 28, 'jl': 28, 'am': 29, 'ob': 30,
  'jonah': 31, 'mi': 32, 'na': 33, 'hb': 34, 'zp': 35, 'hg': 36, 'zc': 37, 'ml': 38,
  'mt': 39, 'mk': 40, 'lk': 41, 'jn': 42, 'ac': 43, 'ro': 44, 'rm': 44,
  '1co': 45, '1 cor': 45, 'i cor': 45, 'i corinthians': 45,
  '2co': 46, '2 cor': 46, 'ii cor': 46, 'ii corinthians': 46,
  'ga': 47, 'ep': 48, 'pp': 49, 'co': 50,
  '1th': 51, '1 thess': 51, 'i thess': 51, 'i thessalonians': 51,
  '2th': 52, '2 thess': 52, 'ii thess': 52, 'ii thessalonians': 52,
  '1ti': 53, '1 tim': 53, 'i tim': 53, 'i timothy': 53,
  '2ti': 54, '2 tim': 54, 'ii tim': 54, 'ii timothy': 54,
  'ti': 55, 'pm': 56, 'he': 57, 'ja': 58, 'jm': 58,
  '1pe': 59, '1 pet': 59, 'i pet': 59, 'i peter': 59,
  '2pe': 60, '2 pet': 60, 'ii pet': 60, 'ii peter': 60,
  '1jn': 61, '1 john': 61, 'i john': 61,
  '2jn': 62, '2 john': 62, 'ii john': 62,
  '3jn': 63, '3 john': 63, 'iii john': 63,
  're': 65, 'revelations': 65,
  '대하': 13, '역대기후': 13, '스': 14, '라': 14, '요이': 62, '요삼': 63
};

Object.entries(customAbbrevs).forEach(([key, idx]) => {
  bookMap[key] = idx;
});

function lookupBookIdx(bookName) {
  const clean = bookName.toLowerCase().replace(/\s+/g, '');
  if (clean in bookMap) {
    return bookMap[clean];
  }
  return -1;
}

function hasKorean(str) {
  return /[\uac00-\ud7a3]/.test(str);
}

function getSingleVerse(bookIdx, chapter, verse) {
  const bookKo = bibleKo[bookIdx];
  const bookAsv = bibleAsv[bookIdx];
  if (!bookKo || !bookAsv) return null;

  const chKo = bookKo.chapters[chapter - 1];
  const chAsv = bookAsv.chapters[chapter - 1];
  if (!chKo || !chAsv) return null;

  const textKo = chKo[verse - 1];
  const textEn = chAsv[verse - 1];
  if (textKo === undefined || textEn === undefined) return null;

  return { bookIdx, chapter, verse, textKo, textEn };
}

function getVersesRange(bookIdx, startCh, startVs, endCh, endVs) {
  const list = [];
  const bookKo = bibleKo[bookIdx];
  const bookAsv = bibleAsv[bookIdx];
  if (!bookKo || !bookAsv) return list;

  for (let c = startCh; c <= endCh; c++) {
    const chKo = bookKo.chapters[c - 1];
    const chAsv = bookAsv.chapters[c - 1];
    if (!chKo || !chAsv) continue;

    const sV = (c === startCh) ? startVs : 1;
    const eV = (c === endCh) ? Math.min(endVs, chKo.length) : chKo.length;

    for (let v = sV; v <= eV; v++) {
      const textKo = chKo[v - 1];
      const textEn = chAsv[v - 1];
      if (textKo !== undefined && textEn !== undefined) {
        list.push({ bookIdx, chapter: c, verse: v, textKo, textEn });
      }
    }
  }
  return list;
}

function parseBibleReference(query) {
  const tokens = query.split(',').map(t => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;

  const refPattern = /^([1-3]?\s*[A-Za-z가-힣]+)\s*\d/;
  if (!refPattern.test(tokens[0])) {
    return null; // Keyword search
  }

  const limitedTokens = tokens.slice(0, 10);
  const results = [];

  for (const token of limitedTokens) {
    if (token.includes('-')) {
      const rangeParts = token.split('-').map(p => p.trim());
      if (rangeParts.length !== 2) {
        return { verses: [], error: '연속 구절 범위를 확인해 주세요. (예: Gen 1:1 - Gen 1:15)' };
      }

      const startRef = rangeParts[0];
      const endRef = rangeParts[1];

      const startMatch = startRef.match(/^([1-3]?\s*[A-Za-z가-힣]+)\s*(\d+)\s*:\s*(\d+)$/);
      if (!startMatch) {
        return { verses: [], error: '시작 구절의 형식(장:절)이 올바르지 않습니다. (예: Gen 1:1)' };
      }

      const bookIdx = lookupBookIdx(startMatch[1]);
      if (bookIdx === -1) {
        return { verses: [], error: `찾을 수 없는 성경책 이름입니다: "${startMatch[1]}"` };
      }

      const startCh = parseInt(startMatch[2], 10);
      const startVs = parseInt(startMatch[3], 10);

      let endCh = startCh;
      let endVs = startVs;

      const endFullMatch = endRef.match(/^([1-3]?\s*[A-Za-z가-힣]+)\s*(\d+)\s*:\s*(\d+)$/);
      if (endFullMatch) {
        const endBookIdx = lookupBookIdx(endFullMatch[1]);
        if (endBookIdx !== bookIdx) {
          return { verses: [], error: '서로 다른 책 사이의 구절 범위 검색은 지원하지 않습니다.' };
        }
        endCh = parseInt(endFullMatch[2], 10);
        endVs = parseInt(endFullMatch[3], 10);
      } else {
        const endChVsMatch = endRef.match(/^(\d+)\s*:\s*(\d+)$/);
        if (endChVsMatch) {
          endCh = parseInt(endChVsMatch[1], 10);
          endVs = parseInt(endChVsMatch[2], 10);
        } else {
          const endVsMatch = endRef.match(/^(\d+)$/);
          if (endVsMatch) {
            endVs = parseInt(endVsMatch[1], 10);
          } else {
            return { verses: [], error: '끝 구절의 범위 지정이 올바르지 않습니다.' };
          }
        }
      }

      const rangeVerses = getVersesRange(bookIdx, startCh, startVs, endCh, endVs);
      if (rangeVerses.length === 0) {
        return { verses: [], error: `해당 구절 범위를 찾을 수 없습니다: ${token}` };
      }
      results.push(...rangeVerses);
    } 
    else if (/^([1-3]?\s*[A-Za-z가-힣]+)\s*(\d+)$/.test(token)) {
      const chMatch = token.match(/^([1-3]?\s*[A-Za-z가-힣]+)\s*(\d+)$/);
      const bookIdx = lookupBookIdx(chMatch[1]);
      if (bookIdx === -1) {
        return { verses: [], error: `찾을 수 없는 성경책 이름입니다: "${chMatch[1]}"` };
      }
      
      const ch = parseInt(chMatch[2], 10);
      const bookKo = bibleKo[bookIdx];
      const maxCh = bookKo.chapters.length;
      if (ch < 1 || ch > maxCh) {
        return { verses: [], error: `"${bookKo.koName}"은(는) 1장부터 ${maxCh}장까지 있습니다.` };
      }
      
      const versesCount = bookKo.chapters[ch - 1].length;
      const chVerses = getVersesRange(bookIdx, ch, 1, ch, versesCount);
      results.push(...chVerses);
    }
    else {
      const singleMatch = token.match(/^([1-3]?\s*[A-Za-z가-힣]+)\s*(\d+)\s*:\s*(\d+)$/);
      if (!singleMatch) {
        return null;
      }

      const bookIdx = lookupBookIdx(singleMatch[1]);
      if (bookIdx === -1) {
        return { verses: [], error: `찾을 수 없는 성경책 이름입니다: "${singleMatch[1]}"` };
      }

      const ch = parseInt(singleMatch[2], 10);
      const vs = parseInt(singleMatch[3], 10);

      const verse = getSingleVerse(bookIdx, ch, vs);
      if (!verse) {
        return { verses: [], error: `성경 구절이 존재하지 않습니다: ${token}` };
      }
      results.push(verse);
    }
  }

  return { verses: results, error: null };
}

function searchKeyword(keyword) {
  const cleanKeyword = keyword.toLowerCase().trim();
  const isKo = hasKorean(cleanKeyword);
  const results = [];

  if (isKo) {
    for (let b = 0; b < bibleKo.length; b++) {
      const bookKo = bibleKo[b];
      const bookAsv = bibleAsv[b];
      for (let c = 0; c < bookKo.chapters.length; c++) {
        const chKo = bookKo.chapters[c];
        const chAsv = bookAsv[c];
        for (let v = 0; v < chKo.length; v++) {
          const textKo = chKo[v] || '';
          if (textKo.includes(cleanKeyword)) {
            results.push({
              bookIdx: b,
              chapter: c + 1,
              verse: v + 1,
              textKo,
              textEn: (chAsv && chAsv[v]) || ''
            });
          }
        }
      }
    }
  } else {
    for (let b = 0; b < bibleAsv.length; b++) {
      const bookKo = bibleKo[b];
      const bookAsv = bibleAsv[b];
      for (let c = 0; c < bookAsv.chapters.length; c++) {
        const chKo = bookKo.chapters[c];
        const chAsv = bookAsv.chapters[c];
        for (let v = 0; v < chAsv.length; v++) {
          const textEn = chAsv[v] || '';
          if (textEn.toLowerCase().includes(cleanKeyword)) {
            results.push({
              bookIdx: b,
              chapter: c + 1,
              verse: v + 1,
              textKo: (chKo && chKo[v]) || '',
              textEn
            });
          }
        }
      }
    }
  }

  return results;
}

// TEST CASES SUITE
function runTests() {
  console.log('--- STARTING BIBLE SEARCH PARSER TESTS ---');

  // Test 1: Single verse reference
  const t1 = parseBibleReference('Gen 1:1');
  console.assert(t1 !== null, 'Test 1 parsing failed');
  console.assert(t1.verses.length === 1, 'Test 1 should return exactly 1 verse');
  console.assert(t1.verses[0].textKo.startsWith('태초에'), `Test 1 Ko text mismatch: ${t1.verses[0].textKo}`);
  console.assert(t1.verses[0].textEn.startsWith('In the beginning'), `Test 1 En text mismatch: ${t1.verses[0].textEn}`);
  console.log('✓ Test 1 Passed: Single reference parsing (Gen 1:1)');

  // Test 2: Korean shorthand verse reference
  const t2 = parseBibleReference('창 1:1');
  console.assert(t2 !== null, 'Test 2 parsing failed');
  console.assert(t2.verses.length === 1, 'Test 2 should return exactly 1 verse');
  console.assert(t2.verses[0].bookIdx === 0, 'Test 2 book index should be 0 (Genesis)');
  console.log('✓ Test 2 Passed: Korean shorthand parsing (창 1:1)');

  // Test 3: Multiple references (split by comma)
  const t3 = parseBibleReference('Gen 1:1, John 2:1');
  console.assert(t3 !== null, 'Test 3 parsing failed');
  console.assert(t3.verses.length === 2, 'Test 3 should return 2 verses');
  console.assert(t3.verses[1].bookIdx === 42, 'Second verse should be John (Index 42)');
  console.assert(t3.verses[1].textKo.includes('사흘 되던 날'), `John 2:1 Ko text mismatch: ${t3.verses[1].textKo}`);
  console.log('✓ Test 3 Passed: Multiple discrete references parsing (Gen 1:1, John 2:1)');

  // Test 4: Range reference (same book, same chapter)
  const t4 = parseBibleReference('Gen 1:1 - Gen 1:5');
  console.assert(t4 !== null, 'Test 4 parsing failed');
  console.assert(t4.verses.length === 5, `Test 4 should return 5 verses, got ${t4.verses.length}`);
  console.assert(t4.verses[4].verse === 5, 'Last verse should be verse 5');
  console.log('✓ Test 4 Passed: Range references (Gen 1:1 - Gen 1:5)');

  // Test 5: Range reference (short form)
  const t5 = parseBibleReference('Gen 1:1-3');
  console.assert(t5 !== null, 'Test 5 parsing failed');
  console.assert(t5.verses.length === 3, `Test 5 should return 3 verses, got ${t5.verses.length}`);
  console.log('✓ Test 5 Passed: Short range references (Gen 1:1-3)');

  // Test 6: Range reference (spanning chapters)
  const t6 = parseBibleReference('Gen 1:31 - Gen 2:2');
  console.assert(t6 !== null, 'Test 6 parsing failed');
  console.assert(t6.verses.length === 3, `Test 6 should return 3 verses (1:31, 2:1, 2:2), got ${t6.verses.length}`);
  console.assert(t6.verses[0].chapter === 1 && t6.verses[0].verse === 31, 'First verse in span should be 1:31');
  console.assert(t6.verses[2].chapter === 2 && t6.verses[2].verse === 2, 'Last verse in span should be 2:2');
  console.log('✓ Test 6 Passed: Multi-chapter range references (Gen 1:31 - Gen 2:2)');

  // Test 7: Chapter search (no verses)
  const t7 = parseBibleReference('Gen 1');
  console.assert(t7 !== null, 'Test 7 parsing failed');
  console.assert(t7.verses.length === 31, `Genesis chapter 1 should have 31 verses, got ${t7.verses.length}`);
  console.log('✓ Test 7 Passed: Whole chapter parsing (Gen 1)');

  // Test 8: Keyword search English
  const t8 = searchKeyword('heavenly');
  console.assert(t8.length > 0, 'Keyword search for "heavenly" should return results');
  console.assert(t8[0].textEn.toLowerCase().includes('heavenly'), 'Result should contain "heavenly"');
  console.log(`✓ Test 8 Passed: English keyword search ("heavenly" returned ${t8.length} results)`);

  // Test 9: Keyword search Korean
  const t9 = searchKeyword('사랑');
  console.assert(t9.length > 0, 'Keyword search for "사랑" should return results');
  console.assert(t9[0].textKo.includes('사랑'), 'Result should contain "사랑"');
  console.log(`✓ Test 9 Passed: Korean keyword search ("사랑" returned ${t9.length} results)`);

  console.log('--- ALL PARSER TESTS COMPLETED SUCCESSFULLY! ---');
}

runTests();
