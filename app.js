// ==========================================================================
// Bible Metadata & Book Name Mapping Tables
// ==========================================================================

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
  // Map standard variations to index
  bookMap[book.id.toLowerCase()] = idx;
  bookMap[book.abbrev.toLowerCase()] = idx;
  bookMap[book.name.toLowerCase().replace(/\s+/g, '')] = idx;
  bookMap[book.koName.toLowerCase().replace(/\s+/g, '')] = idx;
  bookMap[book.koAbbrev.toLowerCase()] = idx;
});

// Custom variations mapping
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

// ==========================================================================
// Application Variables & State
// ==========================================================================

let bibleKo = null;
let bibleAsv = null;
let currentSearchVerses = []; // Holds the list of verses from the last search
let notes = []; // Array of sermon notes: { id, title, content, updatedAt }
let currentNoteId = null; // Currently active note ID

// Real-time Cloud Synchronization (via Vercel API CORS proxy)
const CLOUD_BIN_URL = '/api/notes';
let cloudSyncTimeout = null; // Debounce timer for cloud save
let isSyncing = false; // Sync indicator flag
let isLocalEdit = false; // Flag to indicate if edits are made locally
let lastEditTime = 0; // Timestamp of the last local edit

// DOM Elements
const loginOverlay = document.getElementById('login-overlay');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const adminUsernameInput = document.getElementById('admin-username');
const adminPasswordInput = document.getElementById('admin-password');

const loadingOverlay = document.getElementById('loading-overlay');
const appContainer = document.getElementById('app-container');

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const btnClearSearch = document.getElementById('btn-clear-search');
const btnSearchHelp = document.getElementById('btn-search-help');
const searchHelpBox = document.getElementById('search-help-box');

const resultsEmpty = document.getElementById('results-empty');
const resultsLoading = document.getElementById('results-loading');
const resultsContent = document.getElementById('results-content');
const resultsCount = document.getElementById('results-count');
const resultsList = document.getElementById('results-list');

const btnInsertAll = document.getElementById('btn-insert-all');
const noteEditor = document.getElementById('note-editor');
const charCount = document.getElementById('char-count');
const btnExport = document.getElementById('btn-export');
const btnLogout = document.getElementById('btn-logout');

// New Premium Feature DOM Elements
const btnSync = document.getElementById('btn-sync');
const btnToggleLibrary = document.getElementById('btn-toggle-library');
const btnBibleCatalog = document.getElementById('btn-bible-catalog');
const bibleCatalog = document.getElementById('bible-catalog');
const tabOt = document.getElementById('tab-ot');
const tabNt = document.getElementById('tab-nt');
const catalogBooksOt = document.getElementById('catalog-books-ot');
const catalogBooksNt = document.getElementById('catalog-books-nt');
const catalogChapters = document.getElementById('catalog-chapters');
const catalogSelectedBook = document.getElementById('catalog-selected-book');
const btnCloseChapters = document.getElementById('btn-close-chapters');
const catalogChaptersGrid = document.getElementById('catalog-chapters-grid');

const chkBlockquote = document.getElementById('chk-blockquote');

const currentNoteTitle = document.getElementById('current-note-title');
const btnRenameNote = document.getElementById('btn-rename-note');
const btnDeleteNote = document.getElementById('btn-delete-note');
const btnCopyNote = document.getElementById('btn-copy-note');

const notesSidebar = document.getElementById('notes-sidebar');
const notesList = document.getElementById('notes-list');
const btnNewNote = document.getElementById('btn-new-note');
const btnCloseLibrary = document.getElementById('btn-close-library');
const btnDeleteAllNotes = document.getElementById('btn-delete-all-notes');
const toastContainer = document.getElementById('toast-container');

// ==========================================================================
// Session & Auth Management
// ==========================================================================

function checkAuth() {
  const isAuth = sessionStorage.getItem('authenticated') === 'true';
  if (isAuth) {
    initApp();
  } else {
    loginOverlay.classList.remove('hidden');
    appContainer.classList.add('hidden');
  }
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = adminUsernameInput.value.trim();
  const password = adminPasswordInput.value;

  if (username === 'admin' && password === '123jesus') {
    loginError.style.display = 'none';
    sessionStorage.setItem('authenticated', 'true');
    initApp();
  } else {
    loginError.style.display = 'flex';
    adminPasswordInput.value = '';
    adminPasswordInput.focus();
  }
});

btnLogout.addEventListener('click', () => {
  if (confirm('로그아웃 하시겠습니까?')) {
    sessionStorage.removeItem('authenticated');
    appContainer.classList.add('hidden');
    loginOverlay.classList.remove('hidden');
    adminUsernameInput.value = '';
    adminPasswordInput.value = '';
    
    // Reset app state
    bibleKo = null;
    bibleAsv = null;
    currentSearchVerses = [];
    notes = [];
    currentNoteId = null;
    
    resultsContent.classList.add('hidden');
    resultsEmpty.classList.remove('hidden');
    bibleCatalog.classList.remove('show');
    notesSidebar.classList.add('hidden');
    searchInput.value = '';
    noteEditor.value = '';
    charCount.textContent = '0자';
  }
});

// ==========================================================================
// Application Initialization
// ==========================================================================

async function initApp() {
  loginOverlay.classList.add('hidden');
  loadingOverlay.classList.remove('hidden');

  try {
    // Load local Bible files
    const resKo = await fetch('data/bible_ko.json');
    const resAsv = await fetch('data/bible_asv.json');
    
    if (!resKo.ok || !resAsv.ok) {
      throw new Error('Bible data files not found or failed to load.');
    }

    bibleKo = await resKo.json();
    bibleAsv = await resAsv.json();

    // Premium Features Initialization
    loadNotes();
    renderBibleCatalog();
    setupPremiumEventListeners();

    loadingOverlay.classList.add('hidden');
    appContainer.classList.remove('hidden');
    
    showToast('성경 데이터를 성공적으로 불러왔습니다.', 'success');
  } catch (error) {
    alert('성경 데이터를 불러오는 중 오류가 발생했습니다. 서버 상태나 파일 경로를 확인해 주세요.');
    console.error(error);
    loadingOverlay.classList.add('hidden');
    loginOverlay.classList.remove('hidden');
    sessionStorage.removeItem('authenticated');
  }
}

// ==========================================================================
// Search Parsing & Execution Logic
// ==========================================================================

function lookupBookIdx(bookName) {
  const clean = bookName.toLowerCase().replace(/\s+/g, '');
  if (clean in bookMap) {
    return bookMap[clean];
  }
  return -1;
}

// Check if a string contains Korean characters
function hasKorean(str) {
  return /[\uac00-\ud7a3]/.test(str);
}

// Helper: Get single verse details
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

  return {
    bookIdx,
    chapter,
    verse,
    textKo,
    textEn
  };
}

// Helper: Get verse range
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
        list.push({
          bookIdx,
          chapter: c,
          verse: v,
          textKo,
          textEn
        });
      }
    }
  }
  return list;
}

// Parse Search Query. Returns { verses: [...], error: string | null } or null if not reference pattern
function parseBibleReference(query) {
  // Clean query: e.g. "Gen 1:1"
  const tokens = query.split(',').map(t => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;

  // Let's check if the first token looks like a book + numbers structure
  // Matches "Gen 1", "Gen 1:1", "창 1:1"
  const refPattern = /^([1-3]?\s*[A-Za-z가-힣]+)\s*\d+/;
  if (!refPattern.test(tokens[0])) {
    return null; // Fall back to keyword search
  }

  // We have a reference search!
  // Limit to 10 queries
  const limitedTokens = tokens.slice(0, 10);
  const results = [];

  for (const token of limitedTokens) {
    // A. Check if range search: contains '-'
    if (token.includes('-')) {
      const rangeParts = token.split('-').map(p => p.trim());
      if (rangeParts.length !== 2) {
        return { verses: [], error: '연속 구절 범위를 확인해 주세요. (예: Gen 1:1 - Gen 1:15)' };
      }

      const startRef = rangeParts[0];
      const endRef = rangeParts[1];

      // Parse start reference (must be full verse format Book Chapter:Verse)
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

      // Parse end reference:
      // Case A.1: Full reference (e.g. Gen 1:15 or 창 1:15)
      const endFullMatch = endRef.match(/^([1-3]?\s*[A-Za-z가-힣]+)\s*(\d+)\s*:\s*(\d+)$/);
      if (endFullMatch) {
        const endBookIdx = lookupBookIdx(endFullMatch[1]);
        if (endBookIdx !== bookIdx) {
          return { verses: [], error: '서로 다른 책 사이의 구절 범위 검색은 지원하지 않습니다.' };
        }
        endCh = parseInt(endFullMatch[2], 10);
        endVs = parseInt(endFullMatch[3], 10);
      } else {
        // Case A.2: Chapter:Verse (e.g. 2:15)
        const endChVsMatch = endRef.match(/^(\d+)\s*:\s*(\d+)$/);
        if (endChVsMatch) {
          endCh = parseInt(endChVsMatch[1], 10);
          endVs = parseInt(endChVsMatch[2], 10);
        } else {
          // Case A.3: Just verse number (e.g. 15)
          const endVsMatch = endRef.match(/^(\d+)$/);
          if (endVsMatch) {
            endVs = parseInt(endVsMatch[1], 10);
          } else {
            return { verses: [], error: '끝 구절의 범위 지정이 올바르지 않습니다.' };
          }
        }
      }

      // Fetch range
      const rangeVerses = getVersesRange(bookIdx, startCh, startVs, endCh, endVs);
      if (rangeVerses.length === 0) {
        return { verses: [], error: `해당 구절 범위를 찾을 수 없습니다: ${token}` };
      }
      results.push(...rangeVerses);
    } 
    // B. Check if chapter search: e.g. "Gen 1" or "창 1" (no colon)
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
    // C. Single verse search: e.g. "Gen 1:1"
    else {
      const singleMatch = token.match(/^([1-3]?\s*[A-Za-z가-힣]+)\s*(\d+)\s*:\s*(\d+)$/);
      if (!singleMatch) {
        return null; // Fall back to keyword if pattern mismatches
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

// Perform Keyword Search
function searchKeyword(keyword) {
  const cleanKeyword = keyword.toLowerCase().trim();
  const isKo = hasKorean(cleanKeyword);
  const results = [];

  if (isKo) {
    // Search in Korean Gaeyeok
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
    // Search in English ASV
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

// Handle Form Submission
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;

  resultsEmpty.classList.add('hidden');
  resultsContent.classList.add('hidden');
  resultsLoading.classList.remove('hidden');

  setTimeout(() => {
    try {
      // 1. Try Reference/Chapter parsing
      const refParsed = parseBibleReference(query);
      
      if (refParsed !== null) {
        resultsLoading.classList.add('hidden');
        if (refParsed.error) {
          showErrorState(refParsed.error);
          return;
        }
        
        currentSearchVerses = refParsed.verses;
        renderSearchResults(currentSearchVerses, false);
      } 
      // 2. Otherwise execute Keyword Search
      else {
        const keywordResults = searchKeyword(query);
        resultsLoading.classList.add('hidden');
        currentSearchVerses = keywordResults;
        renderSearchResults(keywordResults, true);
      }
    } catch (err) {
      console.error(err);
      resultsLoading.classList.add('hidden');
      showErrorState('검색을 수행하는 중 내부 오류가 발생했습니다.');
    }
  }, 50); // Small timeout to allow loader spinner render
});

function showErrorState(msg) {
  resultsList.innerHTML = '';
  resultsCount.textContent = '검색 오류';
  resultsCount.style.color = 'var(--accent-error)';
  btnInsertAll.classList.add('hidden');
  resultsContent.classList.remove('hidden');
  
  const errCard = document.createElement('div');
  errCard.className = 'results-state-msg';
  errCard.style.padding = '40px 0';
  errCard.innerHTML = `
    <i class="fa-solid fa-circle-exclamation" style="color: var(--accent-error);"></i>
    <p>${msg}</p>
  `;
  resultsList.appendChild(errCard);
}

function renderSearchResults(verses, isKeywordSearch) {
  resultsList.innerHTML = '';
  resultsCount.style.color = 'var(--text-secondary)';
  
  if (verses.length === 0) {
    resultsCount.textContent = '검색 결과: 0건';
    btnInsertAll.classList.add('hidden');
    resultsContent.classList.remove('hidden');
    
    const noResultCard = document.createElement('div');
    noResultCard.className = 'results-state-msg';
    noResultCard.style.padding = '40px 0';
    noResultCard.innerHTML = `
      <i class="fa-solid fa-folder-open"></i>
      <p>검색 결과가 존재하지 않습니다. 검색어를 확인해 주세요.</p>
    `;
    resultsList.appendChild(noResultCard);
    return;
  }

  // Cap layout display to 300 items to avoid UI lag, but show total count
  const displayLimit = 300;
  const countToDisplay = Math.min(verses.length, displayLimit);
  
  if (verses.length > displayLimit) {
    resultsCount.textContent = `검색 결과: 총 ${verses.length}건 중 ${displayLimit}개 표시`;
  } else {
    resultsCount.textContent = `검색 결과: ${verses.length}건`;
  }
  
  btnInsertAll.classList.remove('hidden');
  resultsContent.classList.remove('hidden');

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < countToDisplay; i++) {
    const v = verses[i];
    const meta = BIBLE_BOOKS[v.bookIdx];
    const koRef = `${meta.koName} ${v.chapter}장 ${v.verse}절`;
    const enRef = `${meta.name} ${v.chapter}:${v.verse}`;

    const card = document.createElement('div');
    card.className = 'verse-item';
    card.innerHTML = `
      <div class="verse-meta">
        <div class="verse-title">
          <span class="ko-title">${meta.koAbbrev} ${v.chapter}:${v.verse}</span>
          <span class="en-title">${meta.abbrev} ${v.chapter}:${v.verse}</span>
        </div>
        <button class="btn-primary btn-sm btn-insert-single" data-index="${i}">
          <i class="fa-solid fa-arrow-right"></i> 삽입
        </button>
      </div>
      <div class="verse-text-ko">${v.textKo}</div>
      <div class="verse-text-en">${v.textEn}</div>
    `;

    // Individual insert click listener
    card.querySelector('.btn-insert-single').addEventListener('click', (e) => {
      e.stopPropagation();
      insertVerses([v]);
    });

    fragment.appendChild(card);
  }

  resultsList.appendChild(fragment);
}

// Clear Search Input
btnClearSearch.addEventListener('click', () => {
  searchInput.value = '';
  btnClearSearch.style.display = 'none';
  resultsContent.classList.add('hidden');
  resultsEmpty.classList.remove('hidden');
  searchInput.focus();
  currentSearchVerses = [];
});

// Show/Hide Clear button on input change
searchInput.addEventListener('input', () => {
  btnClearSearch.style.display = searchInput.value ? 'block' : 'none';
});

// Search Help Toggle
btnSearchHelp.addEventListener('click', () => {
  searchHelpBox.classList.toggle('show');
});

// ==========================================================================
// Note Editor Insertion Logic
// ==========================================================================

// ==========================================================================
// Note Editor Insertion Logic
// ==========================================================================

function insertVerses(versesToInsert) {
  if (versesToInsert.length === 0) return;

  const format = document.querySelector('input[name="insert-format"]:checked')?.value || 'both';
  const isBlockquote = document.getElementById('chk-blockquote')?.checked || false;

  const formattedText = versesToInsert.map(v => {
    const meta = BIBLE_BOOKS[v.bookIdx];
    const koRef = `${meta.koAbbrev} ${v.chapter}:${v.verse}`;
    const enRef = `${meta.abbrev} ${v.chapter}:${v.verse}`;
    
    let text = '';
    if (format === 'both') {
      text = `${v.textKo} (${koRef}) ${v.textEn} (${enRef})`;
    } else if (format === 'ko') {
      text = `${v.textKo} (${koRef})`;
    } else if (format === 'en') {
      text = `${v.textEn} (${enRef})`;
    }
    
    return isBlockquote ? `> ${text}` : text;
  }).join('\n') + '\n'; // Add trailing newline for formatting separation

  const startPos = noteEditor.selectionStart;
  const endPos = noteEditor.selectionEnd;
  const currentVal = noteEditor.value;

  // Insert at current cursor
  noteEditor.value = currentVal.substring(0, startPos) + formattedText + currentVal.substring(endPos);
  
  // Set new cursor position after the inserted text
  const newPos = startPos + formattedText.length;
  noteEditor.selectionStart = newPos;
  noteEditor.selectionEnd = newPos;
  
  // Focus back to editor
  noteEditor.focus();
  
  // Trigger Auto-save & stats update
  updateEditorStats();
  autoSaveCurrentNote();
}

// Insert All button
btnInsertAll.addEventListener('click', () => {
  if (currentSearchVerses.length === 0) return;
  
  // Warn if inserting a massive amount of verses
  if (currentSearchVerses.length > 50) {
    if (!confirm(`총 ${currentSearchVerses.length}개의 많은 성경 구절을 삽입하시겠습니까?`)) {
      return;
    }
  }
  insertVerses(currentSearchVerses);
});

// Update editor statistics
function updateEditorStats() {
  const content = noteEditor.value;
  charCount.textContent = `${content.length}자`;
}

noteEditor.addEventListener('input', () => {
  updateEditorStats();
  autoSaveCurrentNote();
});

// ==========================================================================
// Txt File Export Download
// ==========================================================================

btnExport.addEventListener('click', () => {
  const content = noteEditor.value;
  if (!content.trim()) {
    showToast('작성된 설교노트 내용이 없습니다. 내용을 입력한 후 내보내기를 진행해 주세요.', 'error');
    noteEditor.focus();
    return;
  }

  try {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // YYYYMMDD formatting
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    
    // Get sanitized active note title for the filename
    const activeNote = notes.find(n => n.id === currentNoteId);
    const noteTitle = activeNote ? activeNote.title.replace(/[\/\\?%*:|"<>\s]/g, '_') : 'sermon_notes';
    const filename = `${noteTitle}_${yyyy}${mm}${dd}.txt`;

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('TXT 파일 내보내기가 완료되었습니다.', 'success');
  } catch (err) {
    showToast('파일 내보내기 중 오류가 발생했습니다.', 'error');
    console.error(err);
  }
});

// ==========================================================================
// Premium Feature: Notes Library State Management (LocalStorage CRUD)
// ==========================================================================

function loadNotes() {
  const storedNotes = localStorage.getItem('grace_notes');
  if (storedNotes) {
    try {
      notes = JSON.parse(storedNotes);
    } catch (e) {
      console.error('Failed to parse notes from storage:', e);
      notes = [];
    }
  }
  if (!notes) notes = [];

  // Clean up legacy auto-generated default notes that have no content
  const hadDefaultNote = notes.some(n =>
    (n.title === '기본 설교노트' || n.id.startsWith('default-')) && n.content.trim() === ''
  );
  notes = notes.filter(n =>
    !((n.title === '기본 설교노트' || n.id.startsWith('default-')) && n.content.trim() === '')
  );
  if (hadDefaultNote) {
    localStorage.setItem('grace_notes', JSON.stringify(notes));
  }

  // Restore the last active note if it still exists
  const lastActiveId = localStorage.getItem('grace_last_active_note');
  const activeNoteExists = notes.some(n => n.id === lastActiveId);

  if (notes.length === 0) {
    // No notes at all — show empty state
    showEmptyState();
  } else if (lastActiveId && activeNoteExists) {
    switchNote(lastActiveId);
  } else {
    switchNote(notes[0].id);
  }

  renderNotesList();

  // Pull latest notes from cloud
  syncFromCloud();
}

function saveNotes() {
  localStorage.setItem('grace_notes', JSON.stringify(notes));
  renderNotesList();
}

// Show empty state in the editor area when there are no notes
function showEmptyState() {
  currentNoteId = null;
  currentNoteTitle.textContent = '설교노트 작성';
  noteEditor.value = '';
  updateEditorStats();
  renderNotesList();
}

function renderNotesList() {
  notesList.innerHTML = '';

  if (notes.length === 0) {
    notesList.innerHTML = `
      <div class="notes-empty-state">
        <i class="fa-regular fa-folder-open"></i>
        <p>노트가 없습니다</p>
        <span>위의 <strong>+ 새 노트</strong> 버튼으로<br>첫 설교노트를 만들어 보세요.</span>
      </div>
    `;
    return;
  }

  // Sort notes by updatedAt in descending order (newest first)
  const sortedNotes = [...notes].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  sortedNotes.forEach(note => {
    const noteEl = document.createElement('div');
    noteEl.className = `note-item ${note.id === currentNoteId ? 'active' : ''}`;
    
    // Formatting date: YYYY-MM-DD HH:mm
    const date = new Date(note.updatedAt);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd} ${hh}:${min}`;

    noteEl.innerHTML = `
      <div class="note-item-title">${escapeHTML(note.title)}</div>
      <div class="note-item-date"><i class="fa-regular fa-clock"></i> ${formattedDate}</div>
    `;

    noteEl.addEventListener('click', () => {
      if (note.id !== currentNoteId) {
        switchNote(note.id);
      }
    });

    notesList.appendChild(noteEl);
  });
}


function switchNote(noteId) {
  currentNoteId = noteId;
  localStorage.setItem('grace_last_active_note', noteId);

  const activeNote = notes.find(n => n.id === noteId);
  if (activeNote) {
    currentNoteTitle.textContent = activeNote.title;
    noteEditor.value = activeNote.content;
    updateEditorStats();
  }

  // Update active state in list
  renderNotesList();

  // On mobile: close the library overlay after selecting a note
  if (window.matchMedia('(max-width: 1023px)').matches) {
    notesSidebar.classList.add('hidden');
    if (btnToggleLibrary) {
      btnToggleLibrary.innerHTML = `<i class="fa-solid fa-folder-open"></i> 라이브러리`;
    }
    // 선택 후 메인 에디터(왼쪽)로 자동 스크롤 복귀
    const wrapper = document.querySelector('.workspace-wrapper');
    if (wrapper) {
      setTimeout(() => wrapper.scrollTo({ left: 0, behavior: 'smooth' }), 50);
    }
  }
}

function createNewNote() {
  const prefix = '새 설교노트';
  let counter = 1;
  while (notes.some(n => n.title === `${prefix} ${counter}`)) {
    counter++;
  }

  const newNote = {
    id: 'note-' + Date.now(),
    title: `${prefix} ${counter}`,
    content: '',
    updatedAt: new Date().toISOString()
  };

  notes.push(newNote);
  saveNotes();
  switchNote(newNote.id);
  
  // Sync immediately
  syncToCloud();
  showToast(`"${newNote.title}"를 생성했습니다.`, 'success');
}

function renameActiveNote() {
  const activeNote = notes.find(n => n.id === currentNoteId);
  if (!activeNote) return;

  const newTitle = prompt('새로운 노트 제목을 입력해 주세요:', activeNote.title);
  if (newTitle === null) return; // Cancelled
  
  const cleanTitle = newTitle.trim();
  if (!cleanTitle) {
    showToast('노트 제목은 공백일 수 없습니다.', 'error');
    return;
  }

  activeNote.title = cleanTitle;
  activeNote.updatedAt = new Date().toISOString();
  
  saveNotes();
  switchNote(activeNote.id);
  
  // Sync immediately
  syncToCloud();
  showToast('노트 제목이 변경되었습니다.', 'success');
}

function deleteActiveNote() {
  const activeNote = notes.find(n => n.id === currentNoteId);
  if (!activeNote) return;

  if (!confirm(`"${activeNote.title}" 노트를 정말 삭제하시겠습니까?\n삭제된 내용은 복구할 수 없습니다.`)) {
    return;
  }

  // Filter out the deleted note
  notes = notes.filter(n => n.id !== currentNoteId);

  saveNotes();

  if (notes.length === 0) {
    // No notes left — show empty state
    showEmptyState();
  } else {
    switchNote(notes[0].id);
  }

  // Sync immediately
  syncToCloud();
  showToast('노트가 삭제되었습니다.', 'success');
}

function deleteAllNotes() {
  if (notes.length === 0) {
    showToast('삭제할 노트가 없습니다.', 'info');
    return;
  }

  const count = notes.length;
  if (!confirm(`모든 설교 노트 ${count}개를 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다.`)) {
    return;
  }

  // Clear all notes
  notes = [];
  currentNoteId = null;

  saveNotes();
  showEmptyState();

  // Sync to cloud
  syncToCloud();
  showToast(`${count}개의 노트가 모두 삭제되었습니다.`, 'success');
}


function autoSaveCurrentNote() {
  const activeNote = notes.find(n => n.id === currentNoteId);
  if (activeNote) {
    activeNote.content = noteEditor.value;
    activeNote.updatedAt = new Date().toISOString();
    
    // Quick save to localStorage without fully re-rendering sidebar lists to avoid losing editor cursor focus
    localStorage.setItem('grace_notes', JSON.stringify(notes));
    
    // Update only the date of the active element in the notes-list
    const activeEl = notesList.querySelector('.note-item.active');
    if (activeEl) {
      const dateEl = activeEl.querySelector('.note-item-date');
      if (dateEl) {
        const date = new Date();
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        dateEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${yyyy}-${mm}-${dd} ${hh}:${min}`;
      }
    }

    // Trigger debounced cloud save
    triggerDebouncedCloudSync();
  }
}

// ==========================================================================
// Real-time Cloud Synchronization Operations (REST Client)
// ==========================================================================

function getMaxTimestamp(notesList) {
  if (!notesList || notesList.length === 0) return 0;
  let maxTime = 0;
  notesList.forEach(n => {
    const time = n.updatedAt ? new Date(n.updatedAt).getTime() : 0;
    if (!isNaN(time) && time > maxTime) {
      maxTime = time;
    }
  });
  return maxTime;
}

function mergeNotes(localList, cloudList) {
  const mergedMap = new Map();
  
  const addNoteToMerge = (note) => {
    if (!note || !note.id) return;
    const existing = mergedMap.get(note.id);
    if (!existing) {
      mergedMap.set(note.id, note);
    } else {
      const existingTime = existing.updatedAt ? new Date(existing.updatedAt).getTime() : 0;
      const incomingTime = note.updatedAt ? new Date(note.updatedAt).getTime() : 0;
      if (incomingTime > existingTime) {
        mergedMap.set(note.id, note);
      }
    }
  };

  localList.forEach(addNoteToMerge);
  cloudList.forEach(addNoteToMerge);

  return Array.from(mergedMap.values());
}

async function syncFromCloud(showFeedback = false) {
  if (isSyncing) return;
  isSyncing = true;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    let res;
    try {
      res = await fetch(CLOUD_BIN_URL, { signal: controller.signal });
    } finally {
      clearTimeout(timeout);
    }

    if (!res.ok) throw new Error(`서버 응답 오류 (${res.status})`);
    
    const data = await res.json();
    if (data && data.notes && Array.isArray(data.notes)) {
      const cloudNotes = data.notes;
      
      // Perform a smart merge of local and cloud notes
      const merged = mergeNotes(notes, cloudNotes);
      const mergedStr = JSON.stringify(merged);
      const localStr = JSON.stringify(notes);
      const cloudStr = JSON.stringify(cloudNotes);
      
      let didChange = false;

      // 1. If cloud is behind the merged state, push merged notes to cloud
      if (cloudStr !== mergedStr) {
        notes = merged;
        localStorage.setItem('grace_notes', JSON.stringify(notes));
        await syncToCloud();
        didChange = true;
      }
      
      // 2. If local is behind the merged state, update local notes and refresh UI
      if (localStr !== mergedStr) {
        notes = merged;
        localStorage.setItem('grace_notes', JSON.stringify(notes));
        
        // Ensure current active note still exists
        const activeNoteExists = notes.some(n => n.id === currentNoteId);
        if (!activeNoteExists && notes.length > 0) {
          currentNoteId = notes[0].id;
        }

        // Update Editor UI
        const activeNote = notes.find(n => n.id === currentNoteId);
        if (activeNote) {
          currentNoteTitle.textContent = activeNote.title;
          
          // Only update editor if it is not currently focused by the user to avoid cursor jumps
          if (document.activeElement !== noteEditor) {
            noteEditor.value = activeNote.content;
            updateEditorStats();
          }
        }
        
        renderNotesList();
        didChange = true;
      }
      
      if (showFeedback) {
        if (didChange) {
          showToast('동기화 완료: 최신 데이터를 주고받았습니다.', 'success');
        } else {
          showToast('동기화 완료: 이미 최신 상태입니다.', 'success');
        }
      } else if (didChange) {
        showToast('클라우드와 실시간 동기화되었습니다.', 'success');
      }
    } else if (showFeedback) {
      // Server returned empty/invalid data — push local data up
      await syncToCloud();
      showToast('동기화 완료: 로컬 데이터를 클라우드에 저장했습니다.', 'success');
    }
  } catch (err) {
    console.warn('Cloud sync unavailable:', err.message);
    if (showFeedback) {
      if (err.name === 'AbortError') {
        showToast('동기화 시간 초과. 네트워크 연결을 확인해 주세요.', 'error');
      } else {
        showToast('클라우드 연결을 일시적으로 사용할 수 없습니다. 로컬에 저장됩니다.', 'error');
      }
    }
  } finally {
    isSyncing = false;
  }
}

async function syncToCloud() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    let res;
    try {
      res = await fetch(CLOUD_BIN_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!res.ok) throw new Error(`Cloud push failed: ${res.status}`);
    
    isLocalEdit = false;
    console.log('Successfully pushed notes to cloud.');
  } catch (err) {
    console.warn('Cloud push unavailable (data saved locally):', err.message);
    // Do NOT throw — local data is already saved, cloud is best-effort
  }
}

function triggerDebouncedCloudSync() {
  isLocalEdit = true;
  lastEditTime = Date.now();
  
  if (cloudSyncTimeout) {
    clearTimeout(cloudSyncTimeout);
  }
  
  cloudSyncTimeout = setTimeout(() => {
    syncToCloud();
  }, 1500); // 1.5 seconds of inactivity before pushing to cloud
}

// Utility function to escape HTML characters
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ==========================================================================
// Premium Feature: Bible Catalog Browser Setup
// ==========================================================================

function renderBibleCatalog() {
  catalogBooksOt.innerHTML = '';
  catalogBooksNt.innerHTML = '';

  BIBLE_BOOKS.forEach((book, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'catalog-book-btn';
    btn.title = `${book.name} (${book.abbrev})`;
    btn.textContent = book.koAbbrev; // Sleek abbreviations e.g. "창", "출"

    btn.addEventListener('click', () => {
      openCatalogChapters(idx);
    });

    if (idx < 39) {
      catalogBooksOt.appendChild(btn);
    } else {
      catalogBooksNt.appendChild(btn);
    }
  });
}

function openCatalogChapters(bookIdx) {
  const book = BIBLE_BOOKS[bookIdx];
  const bookKo = bibleKo[bookIdx];
  const chaptersCount = bookKo.chapters.length;

  catalogSelectedBook.textContent = book.koName;
  catalogChaptersGrid.innerHTML = '';

  for (let c = 1; c <= chaptersCount; c++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chapter-btn';
    btn.textContent = c;

    btn.addEventListener('click', () => {
      // Formulate chapter search query e.g. "창 1"
      const query = `${book.koAbbrev} ${c}`;
      searchInput.value = query;
      btnClearSearch.style.display = 'block';
      
      // Hide the catalog chapter panel
      catalogChapters.classList.add('hidden');
      
      // Perform search form submit programmatically
      searchForm.dispatchEvent(new Event('submit'));
      showToast(`"${book.koName} ${c}장"을 불러왔습니다.`, 'info');
    });

    catalogChaptersGrid.appendChild(btn);
  }

  catalogChapters.classList.remove('hidden');
}

// ==========================================================================
// Premium Feature: Event Listeners & Toast Setup
// ==========================================================================

function setupPremiumEventListeners() {
  // Cloud Sync Manual Button Trigger
  btnSync.addEventListener('click', async () => {
    const icon = btnSync.querySelector('i');
    if (icon) icon.classList.add('fa-spin');
    
    showToast('동기화를 진행하는 중입니다...', 'info');
    
    // Explicit manual sync with toast notifications
    await syncFromCloud(true);
    
    // Stop spinning after a brief natural-feeling delay
    setTimeout(() => {
      if (icon) icon.classList.remove('fa-spin');
    }, 1000);
  });

  // Helper: check if we are on a mobile-sized screen
  function isMobile() {
    return window.matchMedia('(max-width: 1023px)').matches;
  }

  // Helper: show / hide the close button inside the sidebar
  function updateCloseLibraryBtn() {
    if (btnCloseLibrary) {
      btnCloseLibrary.style.display = isMobile() ? 'inline-flex' : 'none';
    }
  }

  // Library Panel Toggle
  btnToggleLibrary.addEventListener('click', () => {
    notesSidebar.classList.toggle('hidden');

    // Save state of library toggle (only persist open state on desktop)
    const isVisible = !notesSidebar.classList.contains('hidden');
    if (!isMobile()) {
      localStorage.setItem('grace_library_visible', isVisible);
    }

    // Toggle active icon or label
    btnToggleLibrary.innerHTML = isVisible
      ? `<i class="fa-solid fa-folder-closed"></i> 라이브러리`
      : `<i class="fa-solid fa-folder-open"></i> 라이브러리`;

    // Show/hide close button on mobile
    updateCloseLibraryBtn();

    // 모바일: 사이드바가 열리면 자동으로 오른쪽 끝으로 스크롤하여 노트목록 표시
    if (isMobile()) {
      const wrapper = document.querySelector('.workspace-wrapper');
      if (wrapper) {
        setTimeout(() => {
          if (isVisible) {
            wrapper.scrollTo({ left: wrapper.scrollWidth, behavior: 'smooth' });
          } else {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }, 50);
      }
    }
  });

  // Close Library button (mobile only)
  if (btnCloseLibrary) {
    btnCloseLibrary.addEventListener('click', () => {
      notesSidebar.classList.add('hidden');
      btnToggleLibrary.innerHTML = `<i class="fa-solid fa-folder-open"></i> 라이브러리`;
      // 모바일: 닫으면 왼쪽(메인 화면)으로 자동 스크롤 복귀
      const wrapper = document.querySelector('.workspace-wrapper');
      if (wrapper) {
        wrapper.scrollTo({ left: 0, behavior: 'smooth' });
      }
    });
  }

  // Load past library toggle state (desktop only)
  const libraryVisible = localStorage.getItem('grace_library_visible') === 'true';
  if (libraryVisible && !isMobile()) {
    notesSidebar.classList.remove('hidden');
    btnToggleLibrary.innerHTML = `<i class="fa-solid fa-folder-closed"></i> 라이브러리`;
    updateCloseLibraryBtn();
  }

  // Bible Catalog Toggle
  btnBibleCatalog.addEventListener('click', () => {
    bibleCatalog.classList.toggle('show');
  });

  // Close chapters panel
  btnCloseChapters.addEventListener('click', () => {
    catalogChapters.classList.add('hidden');
  });

  // Catalog Tabs Toggle
  tabOt.addEventListener('click', () => {
    tabOt.classList.add('active');
    tabNt.classList.remove('active');
    catalogBooksOt.classList.remove('hidden');
    catalogBooksNt.classList.add('hidden');
    catalogChapters.classList.add('hidden');
  });

  tabNt.addEventListener('click', () => {
    tabNt.classList.add('active');
    tabOt.classList.remove('active');
    catalogBooksNt.classList.remove('hidden');
    catalogBooksOt.classList.add('hidden');
    catalogChapters.classList.add('hidden');
  });

  // Note actions
  btnNewNote.addEventListener('click', createNewNote);
  btnRenameNote.addEventListener('click', renameActiveNote);
  btnDeleteNote.addEventListener('click', deleteActiveNote);
  if (btnDeleteAllNotes) {
    btnDeleteAllNotes.addEventListener('click', deleteAllNotes);
  }
  
  // Note clipboard copy
  btnCopyNote.addEventListener('click', () => {
    const content = noteEditor.value;
    if (!content.trim()) {
      showToast('복사할 설교노트 내용이 없습니다.', 'error');
      return;
    }
    
    navigator.clipboard.writeText(content).then(() => {
      showToast('노트 내용이 클립보드에 복사되었습니다.', 'success');
    }).catch(err => {
      showToast('클립보드 복사 중 오류가 발생했습니다.', 'error');
      console.error(err);
    });
  });
}

function showToast(message, type = 'info') {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  // Icon selector
  let icon = 'circle-info';
  if (type === 'success') icon = 'circle-check';
  if (type === 'error') icon = 'circle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid fa-${icon}"></i>
    <span>${message}</span>
  `;

  // Append toast
  toastContainer.appendChild(toast);

  // Automatically remove toast element after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ==========================================================================
// Kickstart Application
// ==========================================================================

// Run auth check at startup
checkAuth();

// Start background real-time cloud synchronization polling
setInterval(() => {
  const isAuth = sessionStorage.getItem('authenticated') === 'true';
  const timeSinceLastEdit = Date.now() - lastEditTime;
  
  if (isAuth && bibleKo && bibleAsv && timeSinceLastEdit > 6000) {
    syncFromCloud();
  }
}, 10000); // Poll every 10 seconds
