/* SmritiSetu – Memory Match Game Engine
   ─ Dynamic emoji cards, time-based difficulty, in-page restart
   ─ Mascot state management (idle / encourage / celebrate)         */

(function () {

    // ══════════════════════════════════════════════════════════
    // CARD POOLS  (3 pools, mixed by difficulty)
    // ══════════════════════════════════════════════════════════
    const POOLS = {
        easy: [
            { id: 'chai',      emoji: '🍵',  label: 'Tea' },
            { id: 'phool',     emoji: '🌸',  label: 'Flower' },
            { id: 'diya',      emoji: '🪔',  label: 'Diya' },
            { id: 'seb',       emoji: '🍎',  label: 'Apple' },
            { id: 'patta',     emoji: '🌿',  label: 'Leaf' },
            { id: 'surya',     emoji: '☀️',  label: 'Sun' },
        ],
        medium: [
            { id: 'titli',     emoji: '🦋',  label: 'Butterfly' },
            { id: 'haathi',    emoji: '🐘',  label: 'Elephant' },
            { id: 'baans',     emoji: '🎋',  label: 'Bamboo' },
            { id: 'aam',       emoji: '🥭',  label: 'Mango' },
            { id: 'mor',       emoji: '🦚',  label: 'Peacock' },
            { id: 'pahad',     emoji: '🏔️',  label: 'Mountain' },
            { id: 'tota',      emoji: '🦜',  label: 'Parrot' },
        ],
        hard: [
            { id: 'chaand',    emoji: '🌙',  label: 'Moon' },
            { id: 'taara',     emoji: '⭐',   label: 'Star' },
            { id: 'dhanusha',  emoji: '🌈',  label: 'Rainbow' },
            { id: 'dhol',      emoji: '🥁',  label: 'Drum' },
            { id: 'kamal',     emoji: '🪷',  label: 'Lotus' },
            { id: 'machhli',   emoji: '🐟',  label: 'Fish' },
            { id: 'dhan',      emoji: '🌾',  label: 'Paddy' },
            { id: 'badal',     emoji: '☁️',  label: 'Cloud' },
        ]
    };

    // Pairs per difficulty level: 1→2  2→3  3→4  4→5  5→6 (reduced by 1 pair for gentler play)
    const PAIRS_BY_LEVEL = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6 };
    // Grid columns per pair count
    const COLS_BY_PAIRS  = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 4 };

    const TIME_FAST = 8;    // avg seconds/pair → fast → +1 difficulty
    const TIME_SLOW = 25;   // avg seconds/pair → slow → −1 difficulty
    const MIN_LVL   = 1;
    const MAX_LVL   = 5;

    // ══════════════════════════════════════════════════════════
    // MULTILINGUAL MASCOT DIALOGUES (7 Languages)
    // ══════════════════════════════════════════════════════════
    const MSGS = {
        en: {
            idle:      ["Let's play! 😊", "Take your time! 🌸", "You've got this! 🌟", "Find a match! 👀"],
            encourage: ["Great match! 👏", "Super! 🌟", "You found it! 🌸", "Wonderful! 😄"],
            mismatch:  ["Take your time! 🌸", "Keep looking! 😊", "You can do it! 💖"],
            celebrate: ["You did it! 🎉", "Wonderful job! 🌟", "Bravo! 🥳", "So proud of you! 💖"]
        },
        hi: {
            idle:      ["चलो खेलते हैं! 😊", "आराम से खेलिए! 🌸", "आप बहुत अच्छा कर रहे हैं! 🌟", "जोड़ी ढूंढिए! 👀"],
            encourage: ["वाह, सही जोड़ी! 👏", "शाबाश! 🌟", "मिल गया! 🌸", "बहुत बढ़िया! 😄"],
            mismatch:  ["कोई बात नहीं, आराम से! 🌸", "ढूंढते रहिए! 😊", "आप कर सकते हैं! 💖"],
            celebrate: ["आपने कर दिखाया! 🎉", "अद्भुत! 🌟", "बहुत खूब! 🥳", "हमें आप पर गर्व है! 💖"]
        },
        as: {
            idle:      ["আহক খেলোঁ! 😊", "ধীৰে ধীৰে খেলক! 🌸", "আপুনি পাৰিব! 🌟", "যোৰ বিচাৰক! 👀"],
            encourage: ["বৰ ধুনীয়া! 👏", "বাহ্! 🌟", "বিচাৰি পালে! 🌸", "অতি উত্তম! 😄"],
            mismatch:  ["একো কথা নাই, ধীৰে ধীৰে! 🌸", "বিচাৰি থাকক! 😊", "আপুনি পাৰিব! 💖"],
            celebrate: ["আপুনি কৰি দেখুৱালে! 🎉", "অবিশ্বাস্য! 🌟", "বৰ আনন্দ পালোঁ! 🥳", "অভিনন্দন! 💖"]
        },
        bn: {
            idle:      ["চলুন খেলি! 😊", "ধীরে ধীরে খেলুন! 🌸", "আপনি পারবেন! 🌟", "জোড়া খুঁজুন! 👀"],
            encourage: ["দারুণ জোড়া! 👏", "সাবাশ! 🌟", "পেয়ে গেছেন! 🌸", "অসাধারণ! 😄"],
            mismatch:  ["কোনো ব্যাপার না, ধীরে ধীরে! 🌸", "খুঁজতে থাকুন! 😊", "আপনি পারবেন! 💖"],
            celebrate: ["আপনি পেরেছেন! 🎉", "অসাধারণ কাজ! 🌟", "সাবাশ! 🥳", "আমরা গর্বিত! 💖"]
        },
        kh: {
            idle:      ["To ngin ïalehkai! 😊", "Shim por suk! 🌸", "Phi lah ban leh bha! 🌟", "Wad ïa kiba ïasyriem! 👀"],
            encourage: ["Kaba bha palat! 👏", "Shisha! 🌟", "Phi la lap! 🌸", "Kaba thiang jingmut! 😄"],
            mismatch:  ["Wat lorni, shim por! 🌸", "Wad biang! 😊", "Phi lah ban leh! 💖"],
            celebrate: ["Phi la leh dep bha! 🎉", "Kaba phylla! 🌟", "Khublei shibun! 🥳", "Ngim sngewsarong! 💖"]
        },
        mni: {
            idle:      ["হৌজিক শান্নসি! 😊", "তপনা শান্নবীয়ু! 🌸", "নহাক ঙমগনি! 🌟", "মানবা থিরগা শান্নসি! 👀"],
            encourage: ["য়াম্না ফরে! 👏", "হন্না ফরে! 🌟", "ফংলে! 🌸", "অচুম্বনি! 😄"],
            mismatch:  ["চপ চানা তপনা য়েংবীয়ু! 🌸", "মখাতানা থিবীয়ু! 😊", "নহাক ঙমগনি! 💖"],
            celebrate: ["নহাক্না লোইশিনখ্রে! 🎉", "য়াম্না নুংঙাইরে! 🌟", "থাগৎচরি! 🥳", "নুংঙাইবা ফাওই! 💖"]
        },
        lus: {
            idle:      ["I khel ang u le! 😊", "Muangchangin le! 🌸", "I ti thei e! 🌟", "A inang zawng rawh le! 👀"],
            encourage: ["A va ropui em! 👏", "Tha lutuk! 🌟", "I hmu e! 🌸", "A tha ber! 😄"],
            mismatch:  ["Hmanhmawh suh le! 🌸", "Zawng leh rawh le! 😊", "I ti thei ngei ang! 💖"],
            celebrate: ["I ti zo ta e! 🎉", "I ti tha lutuk e! 🌟", "Kut i beng ang u! 🥳", "Ka chhuang lutuk che! 💖"]
        }
    };

    const MASCOT_PICS = {
        idle:      '/static/img/mascot/smiling.png',
        encourage: '/static/img/mascot/happy.png',
        mismatch:  '/static/img/mascot/thoughtful.png',
        celebrate: '/static/img/mascot/cheerful.png'
    };

    // Preload mascot sprites immediately to prevent any flickering
    const preloadedMascots = {};
    Object.values(MASCOT_PICS).forEach(src => {
        const im = new Image();
        im.src = src;
        preloadedMascots[src] = im;
    });

    const UI_STRINGS = {
        en: {
            allMatchedMsg: "🎉 All pairs matched!",
            pairsMatched: "✨ {n} Pairs Matched",
            scoreSaved: "📈 Score Saved",
            wellDone: "Well done! 🌟",
            levelUp: "🚀 Level Up! (Level {n})",
            easierRound: "💚 Easier Round (Level {n})",
            nextRound: "🚀 Next Round",
            playAgain: "🔁 Play Again",
            moreGames: "🎮 More Games",
            exitGame: "Exit Game",
            exitGameLg: "Exit & Save Progress",
            exitPromptTitle: "Would you like to stop for now?",
            exitPromptDesc: "Your progress of {n} pairs will be safely saved.",
            btnConfirmExit: "🚪 Yes, Exit & Save",
            btnCancelExit: "🌸 Keep Playing",
            exitSaving: "💾 Saving progress...",
            exitSavedNotice: "🌸 Wonderful effort! Taking you back..."
        },
        hi: {
            allMatchedMsg: "🎉 सभी जोड़ियाँ मिल गईं!",
            pairsMatched: "✨ {n} जोड़ियाँ मिलीं",
            scoreSaved: "📈 स्कोर सहेजा गया",
            wellDone: "शाबाश! 🌟",
            levelUp: "🚀 नया स्तर! (लेवल {n})",
            easierRound: "💚 आसान राउंड (लेवल {n})",
            nextRound: "🚀 अगला राउंड",
            playAgain: "🔁 दोबारा खेलें",
            moreGames: "🎮 और खेल",
            exitGame: "बाहर जाएं",
            exitGameLg: "खेल समाप्त करें और सहेजें",
            exitPromptTitle: "क्या आप अभी रुकना चाहते हैं?",
            exitPromptDesc: "आपकी {n} जोड़ियों का स्कोर सुरक्षित सहेजा जाएगा।",
            btnConfirmExit: "🚪 हाँ, बाहर जाएं और सहेजें",
            btnCancelExit: "🌸 खेलते रहें",
            exitSaving: "💾 सहेजा जा रहा है...",
            exitSavedNotice: "🌸 बहुत बढ़िया प्रयास! वापस ले जा रहे हैं..."
        },
        as: {
            allMatchedMsg: "🎉 সকলো যোৰ মিলিল!",
            pairsMatched: "✨ {n} যোৰ মিলিল",
            scoreSaved: "📈 স্ক'ৰ সংৰক্ষণ হ'ল",
            wellDone: "বৰ ধুনীয়া! 🌟",
            levelUp: "🚀 নতুন স্তৰ! (স্তৰ {n})",
            easierRound: "💚 সহজ ৰাউণ্ড (স্তৰ {n})",
            nextRound: "🚀 পৰৱৰ্তী ৰাউণ্ড",
            playAgain: "🔁 পুনৰ খেলক",
            moreGames: "🎮 অধিক খেল",
            exitGame: "বাহিৰ হওক",
            exitGameLg: "খেল সমাপ্ত কৰক আৰু সংৰক্ষণ কৰক",
            exitPromptTitle: "আপুনি এতিয়া খেল সমাপ্ত কৰিব বিচাৰে নেকি?",
            exitPromptDesc: "আপোনাৰ {n} যোৰৰ স্ক'ৰ সুৰক্ষিতভাৱে সংৰক্ষণ কৰা হ'ব।",
            btnConfirmExit: "🚪 হয়, বাহিৰ হওক আৰু সংৰক্ষণ কৰক",
            btnCancelExit: "🌸 খেলি থাকক",
            exitSaving: "💾 সংৰক্ষণ কৰা হৈছে...",
            exitSavedNotice: "🌸 অতি সুন্দৰ প্ৰয়াস! ঘূৰি যোৱা হৈছে..."
        },
        bn: {
            allMatchedMsg: "🎉 সব জোড়া মিলে গেছে!",
            pairsMatched: "✨ {n} জোড়া মিলল",
            scoreSaved: "📈 স্কোর সংরক্ষিত হলো",
            wellDone: "সাবাশ! 🌟",
            levelUp: "🚀 নতুন লেভেল! (লেভেল {n})",
            easierRound: "💚 সহজ রাউন্ড (লেভেল {n})",
            nextRound: "🚀 পরবর্তী রাউন্ড",
            playAgain: "🔁 আবার খেলুন",
            moreGames: "🎮 আরও খেলা",
            exitGame: "বেরিয়ে যান",
            exitGameLg: "খেলা শেষ করুন ও সংরক্ষণ করুন",
            exitPromptTitle: "আপনি কি এখন খেলা শেষ করতে চান?",
            exitPromptDesc: "আপনার {n} জোড়ার স্কোর নিরাপদে সংরক্ষণ করা হবে।",
            btnConfirmExit: "🚪 হ্যাঁ, শেষ করুন ও সংরক্ষণ করুন",
            btnCancelExit: "🌸 খেলতে থাকুন",
            exitSaving: "💾 সংরক্ষণ করা হচ্ছে...",
            exitSavedNotice: "🌸 দারুণ চেষ্টা! ফিরে যাওয়া হচ্ছে..."
        },
        kh: {
            allMatchedMsg: "🎉 Baroh ki la biang!",
            pairsMatched: "✨ {n} Ki la biang",
            scoreSaved: "📈 La pynsah jingkhein",
            wellDone: "Kaba bha palat! 🌟",
            levelUp: "🚀 Kyrdan thymmai! (Kyrdan {n})",
            easierRound: "💚 Kaba jem (Kyrdan {n})",
            nextRound: "🚀 Ka Round Bud",
            playAgain: "🔁 Leh biang",
            moreGames: "🎮 Kiwei ki jingïalehkai",
            exitGame: "Pynkut",
            exitGameLg: "Pynkut & Pynsah Jingkhein",
            exitPromptTitle: "Phi kwah ban sangeh noh?",
            exitPromptDesc: "Ka jingioh {n} tylli kan sa sah suk.",
            btnConfirmExit: "🚪 Ho, pynkut & pynsah",
            btnCancelExit: "🌸 Ïalehkai bteng",
            exitSaving: "💾 Dang pynsah jingkhein...",
            exitSavedNotice: "🌸 Kaba bha palat! Dang leit phai..."
        },
        mni: {
            allMatchedMsg: "🎉 পুম্নমক মান্নরে!",
            pairsMatched: "✨ {n} মান্নবা ফংলে",
            scoreSaved: "📈 স্কোর থমখ্রে",
            wellDone: "য়াম্না ফরে! 🌟",
            levelUp: "🚀 অনৌবা থাক! (থাক {n})",
            easierRound: "💚 লাইবা রাউন্দ (থাক {n})",
            nextRound: "🚀 মথংগী রাউন্দ",
            playAgain: "🔁 অমুক হন্না শান্নসি",
            moreGames: "🎮 অতৈ শান্নপোৎ",
            exitGame: "লোইশিনবা",
            exitGameLg: "শান্নবা লোইশিনসি অমসুং থমসি",
            exitPromptTitle: "হৌজিক শান্নবা তোকপীরগদ্রা?",
            exitPromptDesc: "নহাক্কী {n} গী স্কোর নিংশিংদুনা থমগনি।",
            btnConfirmExit: "🚪 হোয়, লোইশিনসি অমসুং থমসি",
            btnCancelExit: "🌸 মখাতানা শান্নসি",
            exitSaving: "💾 স্কোর থম্লি...",
            exitSavedNotice: "🌸 য়াম্না ফরে! হল্লক্লে..."
        },
        lus: {
            allMatchedMsg: "🎉 A zawng zawng a inmil e!",
            pairsMatched: "✨ {n} A inmil ta",
            scoreSaved: "📈 Score dahthat a ni e",
            wellDone: "I ti tha lutuk e! 🌟",
            levelUp: "🚀 Sang zawk! (Level {n})",
            easierRound: "💚 Awlsam zawk (Level {n})",
            nextRound: "🚀 Round lehpek",
            playAgain: "🔁 Khel nawn leh rawh",
            moreGames: "🎮 Game dangte",
            exitGame: "Chhuahna",
            exitGameLg: "Chhuak & Score Dahtha Rawh",
            exitPromptTitle: "Chawl rih i duh em?",
            exitPromptDesc: "{n} pairs i siam tawh chu him takin a in-save ang.",
            btnConfirmExit: "🚪 Aw, chhuak & save rawh",
            btnCancelExit: "🌸 Khel chhunzawm rawh",
            exitSaving: "💾 Save mek a ni...",
            exitSavedNotice: "🌸 I ti tha lutuk e! Let leh mek a ni..."
        }
    };

    function getCurrentLang() {
        return localStorage.getItem('smritisetu-language') || 'en';
    }

    let currentMascotMsgIndex = 0;

    function getMascotMessage(state, lang) {
        const l = lang || getCurrentLang();
        const langDict = MSGS[l] || MSGS.en;
        const pool = langDict[state] || langDict.idle || MSGS.en.idle;
        return pool[currentMascotMsgIndex % pool.length];
    }

    function updateModalLanguage(lang) {
        const l = lang || getCurrentLang();
        const ui = UI_STRINGS[l] || UI_STRINGS.en;

        const titleEl = document.querySelector('.cel-title');
        if (titleEl) titleEl.textContent = ui.wellDone;

        const scoreSavedEl = document.querySelector('[data-i18n="celScoreSaved"]');
        if (scoreSavedEl) scoreSavedEl.textContent = ui.scoreSaved;

        const againBtn = document.getElementById('txt-play-again') || document.getElementById('btn-play-again');
        if (againBtn) againBtn.textContent = ui.playAgain;

        const gamesBtn = document.getElementById('txt-more-games') || document.querySelector('.cel-btn-games');
        if (gamesBtn) gamesBtn.textContent = ui.moreGames;

        const statsEl = document.getElementById('celebration-stats-text');
        if (statsEl) statsEl.textContent = ui.pairsMatched.replace('{n}', numPairs || 2);

        const nextBtn = document.getElementById('txt-play-next') || document.getElementById('btn-play-next');
        if (nextBtn) {
            if (nextDifficulty > currentDifficulty)
                nextBtn.textContent = ui.levelUp.replace('{n}', nextDifficulty);
            else if (nextDifficulty < currentDifficulty)
                nextBtn.textContent = ui.easierRound.replace('{n}', nextDifficulty);
            else
                nextBtn.textContent = ui.nextRound;
        }

        // Exit button & modal translations
        const topExitText = document.querySelector('#btn-top-exit .exit-btn-text');
        if (topExitText) topExitText.textContent = ui.exitGame;

        const btmExitText = document.querySelector('#btn-bottom-exit .exit-btn-text');
        if (btmExitText) btmExitText.textContent = ui.exitGameLg;

        const exitTitle = document.getElementById('exit-modal-title');
        if (exitTitle) exitTitle.textContent = ui.exitPromptTitle;

        const confirmExitBtn = document.getElementById('txt-confirm-exit');
        if (confirmExitBtn) confirmExitBtn.textContent = ui.btnConfirmExit;

        const cancelExitBtn = document.getElementById('txt-cancel-exit');
        if (cancelExitBtn) cancelExitBtn.textContent = ui.btnCancelExit;

        const exitDesc = document.getElementById('exit-modal-desc');
        if (exitDesc) exitDesc.innerHTML = ui.exitPromptDesc.replace('{n}', `<strong id="exit-pairs-matched">${matchedPairs || 0}</strong>`);
    }

    // ══════════════════════════════════════════════════════════
    // DOM REFS
    // ══════════════════════════════════════════════════════════
    const gameBoard = document.getElementById('game-board');
    const scoreEl   = document.getElementById('score');
    const movesEl   = document.getElementById('moves');
    const msgEl     = document.getElementById('game-message');
    const mascotEl  = document.getElementById('mascot');
    const mascotMsg = document.getElementById('mascot-msg');
    const mascotImg = document.getElementById('mascot-img');
    const patientId = Number(gameBoard.dataset.patientId);

    // ══════════════════════════════════════════════════════════
    // GAME STATE
    // ══════════════════════════════════════════════════════════
    let currentDifficulty, nextDifficulty, numPairs;
    let firstCard, secondCard, lockBoard;
    let moves, score, matchedPairs;
    let gameStartTime, firstFlipTime;
    let currentMascotState = 'idle';
    let mismatchTimer = null;

    // ══════════════════════════════════════════════════════════
    // MASCOT
    // ══════════════════════════════════════════════════════════
    let mascotAnimTimer = null;

    function setMascot(state) {
        currentMascotState = state;
        const l = getCurrentLang();
        const langDict = MSGS[l] || MSGS.en;
        const pool = langDict[state] || langDict.idle || MSGS.en.idle;
        currentMascotMsgIndex = Math.floor(Math.random() * pool.length);
        const msg = pool[currentMascotMsgIndex];

        if (mascotMsg && mascotMsg.textContent !== msg) {
            mascotMsg.textContent = msg;
        }

        const pic = MASCOT_PICS[state] || MASCOT_PICS.idle;
        if (mascotImg) {
            if (!mascotImg.src.endsWith(pic)) {
                mascotImg.src = pic;
            }
            if (mascotAnimTimer) {
                clearTimeout(mascotAnimTimer);
                mascotAnimTimer = null;
            }
            mascotImg.classList.remove('pop-anim');
            requestAnimationFrame(() => {
                if (mascotImg) mascotImg.classList.add('pop-anim');
            });
            mascotAnimTimer = setTimeout(() => {
                if (mascotImg) mascotImg.classList.remove('pop-anim');
                mascotAnimTimer = null;
            }, 300);
        }
    }

    // Listen for language change events to update dialogue and modal only on actual language change
    let lastHandledLang = null;
    document.addEventListener('smritisetu:language', (e) => {
        const lang = e.detail || getCurrentLang();
        if (lang === lastHandledLang) return;
        lastHandledLang = lang;
        if (mascotMsg) {
            const translatedMsg = getMascotMessage(currentMascotState, lang);
            if (mascotMsg.textContent !== translatedMsg) {
                mascotMsg.textContent = translatedMsg;
            }
        }
        updateModalLanguage(lang);
    });

    // ══════════════════════════════════════════════════════════
    // SELECT CARDS FOR LEVEL
    // ══════════════════════════════════════════════════════════
    function selectCards(difficulty, n) {
        let pool;
        if (difficulty <= 2)       pool = [...POOLS.easy];
        else if (difficulty === 3) pool = [...POOLS.easy,   ...POOLS.medium];
        else                       pool = [...POOLS.medium, ...POOLS.hard];
        pool.sort(() => Math.random() - 0.5);
        return pool.slice(0, n);
    }

    // ══════════════════════════════════════════════════════════
    // START / RESTART GAME  (called in-page, no reload)
    // ══════════════════════════════════════════════════════════
    function startGame(difficulty) {
        currentDifficulty = Math.max(MIN_LVL, Math.min(MAX_LVL, difficulty));
        nextDifficulty    = currentDifficulty;
        numPairs          = PAIRS_BY_LEVEL[currentDifficulty] || 4;
        const cols        = COLS_BY_PAIRS[numPairs] || 4;

        // Reset state
        if (mismatchTimer) {
            clearTimeout(mismatchTimer);
            mismatchTimer = null;
        }
        firstCard = secondCard = null;
        lockBoard = false;
        moves = score = matchedPairs = 0;

        // Reset UI
        if (scoreEl) scoreEl.textContent = '0';
        if (movesEl) movesEl.textContent = '0';
        if (msgEl)   msgEl.textContent   = '';
        document.querySelectorAll('.js-level-num').forEach(el => el.textContent = currentDifficulty);

        // Rebuild board
        gameBoard.innerHTML = '';
        gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        gameBoard.dataset.difficulty = currentDifficulty;

        // Build shuffled pairs
        const chosen = selectCards(currentDifficulty, numPairs);
        const pairs  = [...chosen, ...chosen];
        pairs.sort(() => Math.random() - 0.5);

        pairs.forEach(card => {
            const btn = document.createElement('button');
            btn.className = 'memory-card emoji-card';
            btn.dataset.card = card.id;
            btn.setAttribute('aria-label', 'Memory card');
            btn.innerHTML = `<span class="card-back">🌿</span><span class="card-front">${card.emoji}</span>`;
            btn.addEventListener('click', onCardClick);
            gameBoard.appendChild(btn);
        });

        gameStartTime = Date.now();
        firstFlipTime = null;
        setMascot('idle');
    }

    // ══════════════════════════════════════════════════════════
    // CARD CLICK HANDLER
    // ══════════════════════════════════════════════════════════
    function onCardClick() {
        const card = this;
        if (lockBoard || card === firstCard || card.classList.contains('matched')) return;
        if (!firstFlipTime) {
            firstFlipTime = Date.now();
        }
        card.classList.add('flipped');

        if (!firstCard) { firstCard = card; return; }

        secondCard = card;
        moves++;
        if (movesEl) movesEl.textContent = moves;

        if (firstCard.dataset.card === secondCard.dataset.card) {
            // ✓ Match
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            score += 10;
            matchedPairs++;
            if (scoreEl) scoreEl.textContent = score;
            resetCards();

            if (matchedPairs < numPairs) {
                setMascot('encourage');
            } else {
                const elapsed = (Date.now() - gameStartTime) / 1000;
                onGameComplete(elapsed);
            }
        } else {
            // ✗ No match
            lockBoard = true;
            setMascot('mismatch');
            if (mismatchTimer) clearTimeout(mismatchTimer);
            mismatchTimer = setTimeout(() => {
                if (firstCard) firstCard.classList.remove('flipped');
                if (secondCard) secondCard.classList.remove('flipped');
                resetCards();
                setMascot('idle');
                mismatchTimer = null;
            }, 900);
        }
    }

    function resetCards() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        if (mismatchTimer) {
            clearTimeout(mismatchTimer);
            mismatchTimer = null;
        }
    }

    // ══════════════════════════════════════════════════════════
    // GAME COMPLETE
    // ══════════════════════════════════════════════════════════
    function onGameComplete(totalSec) {
        const avgPerPair = totalSec / numPairs;
        setMascot('celebrate');

        const lang = getCurrentLang();
        const ui = UI_STRINGS[lang] || UI_STRINGS.en;
        if (msgEl) msgEl.textContent = ui.allMatchedMsg;
        updateModalLanguage(lang);

        // Slight delay so player sees the last card flip
        setTimeout(() => {
            document.getElementById('celebration').classList.add('is-visible');
            if (window.smritiApplyLanguage) {
                window.smritiApplyLanguage(localStorage.getItem('smritisetu-language') || 'en');
            }
            updateModalLanguage(getCurrentLang());
        }, 700);

        submitScore(avgPerPair);
    }

    // ══════════════════════════════════════════════════════════
    // SUBMIT SCORE  +  COMPUTE TIME-ADJUSTED NEXT DIFFICULTY
    // ══════════════════════════════════════════════════════════
    async function submitScore(avgPerPair) {
        try {
            const now = Date.now();
            const durationSec = gameStartTime ? (now - gameStartTime) / 1000 : 0;
            const rxTime = firstFlipTime && gameStartTime ? (firstFlipTime - gameStartTime) / 1000 : 1.5;
            const respTime = matchedPairs > 0 ? (durationSec / matchedPairs) : (avgPerPair || 2.5);
            const acc = numPairs > 0 ? Math.round((matchedPairs / numPairs) * 100) : 0;

            const res  = await fetch('/api/score', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    patient_id: patientId,
                    game_type:  'matching',
                    difficulty: currentDifficulty,
                    score:      matchedPairs,
                    total:      numPairs,
                    accuracy:   acc,
                    reaction_time: Number(rxTime.toFixed(2)),
                    response_time: Number(respTime.toFixed(2)),
                    duration_seconds: Number(durationSec.toFixed(1))
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Save failed');

            // Accuracy-based next level from server
            const apiNext   = data.next_difficulty || currentDifficulty;
            // Time bonus/penalty
            const timeDelta = avgPerPair < TIME_FAST ? +1 : avgPerPair > TIME_SLOW ? -1 : 0;
            nextDifficulty  = Math.max(MIN_LVL, Math.min(MAX_LVL, apiNext + timeDelta));

            // Update Next Round button label in the active language
            updateModalLanguage(getCurrentLang());
        } catch (err) {
            console.error('Score save error:', err);
        }
    }

    // ══════════════════════════════════════════════════════════
    // PUBLIC API  (called from celebration button onclick)
    // ══════════════════════════════════════════════════════════
    window.smritiGame = {
        /** Same level, brand-new random shuffle */
        playAgain() {
            document.getElementById('celebration').classList.remove('is-visible');
            startGame(currentDifficulty);
        },
        /** Next (or adjusted) difficulty, fresh card set */
        playNext() {
            document.getElementById('celebration').classList.remove('is-visible');
            startGame(nextDifficulty);
        },
        /** Open gentle exit confirmation dialog */
        requestExit() {
            const lang = getCurrentLang();
            const ui = UI_STRINGS[lang] || UI_STRINGS.en;
            const exitDesc = document.getElementById('exit-modal-desc');
            if (exitDesc) exitDesc.innerHTML = (ui.exitPromptDesc || "Your progress of {n} pairs will be safely saved.").replace('{n}', `<strong id="exit-pairs-matched">${matchedPairs || 0}</strong>`);
            updateModalLanguage(lang);
            const modal = document.getElementById('exit-modal');
            if (modal) modal.classList.add('is-visible');
        },
        /** Close exit dialog and keep playing */
        cancelExit() {
            const modal = document.getElementById('exit-modal');
            if (modal) modal.classList.remove('is-visible');
        },
        /** Save current score & pairs to backend API, then navigate back */
        async confirmExit() {
            const confirmBtn = document.getElementById('btn-confirm-exit');
            const cancelBtn = document.getElementById('btn-cancel-exit');
            const descEl = document.getElementById('exit-modal-desc');
            const titleEl = document.getElementById('exit-modal-title');
            const lang = getCurrentLang();
            const ui = UI_STRINGS[lang] || UI_STRINGS.en;

            if (confirmBtn) {
                confirmBtn.disabled = true;
                confirmBtn.innerHTML = `<span>${ui.exitSaving || '💾 Saving progress...'}</span>`;
            }
            if (cancelBtn) cancelBtn.disabled = true;

            try {
                const now = Date.now();
                const durationSec = gameStartTime ? (now - gameStartTime) / 1000 : 0;
                const rxTime = firstFlipTime && gameStartTime ? (firstFlipTime - gameStartTime) / 1000 : 1.5;
                const respTime = matchedPairs > 0 ? (durationSec / matchedPairs) : durationSec;
                const acc = numPairs > 0 ? Math.round((matchedPairs / numPairs) * 100) : 0;

                await fetch('/api/score', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        patient_id: patientId,
                        game_type:  'matching',
                        difficulty: currentDifficulty,
                        score:      matchedPairs,
                        total:      numPairs,
                        accuracy:   acc,
                        reaction_time: Number(rxTime.toFixed(2)),
                        response_time: Number(respTime.toFixed(2)),
                        duration_seconds: Number(durationSec.toFixed(1))
                    })
                });

                if (titleEl) titleEl.textContent = ui.scoreSaved || '📈 Score Saved';
                if (descEl) descEl.textContent = ui.exitSavedNotice || '🌸 Wonderful effort! Taking you back...';

                setTimeout(() => {
                    window.location.href = '/games';
                }, 800);
            } catch (err) {
                console.error('Exit score save error:', err);
                window.location.href = '/games';
            }
        }
    };

    // ── KICK OFF ───────────────────────────────────────────────
    startGame(Number(gameBoard.dataset.difficulty));

})();
