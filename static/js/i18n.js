(() => {
    const translations = {
        en: {
            home: "Home", games: "Games", dashboard: "Care report", signOut: "Sign out", signIn: "Sign in", startCircle: "Start your care circle",
            chooseGame: "Choose a gentle game", memoryMatch: "Memory Match", music: "Music & memories", all: "All", state: "Choose a state", community: "Choose a community",
            play: "Play", pause: "Pause", close: "Close", warmNote: "Familiar sounds can make a moment feel like home.", takeTime: "Take your time. There is no rush and no wrong way to begin.",
            score: "Score", moves: "Moves", findPairs: "Find the picture pairs", wonderful: "Wonderful work", continue: "Continue", report: "Caregiver report", recentActivity: "Recent activity",
            noDiagnosis: "This is a wellbeing aid, not a medical diagnosis."
        },
        hi: {
            home: "होम", games: "खेल", dashboard: "देखभाल रिपोर्ट", signOut: "साइन आउट", signIn: "साइन इन", startCircle: "देखभाल सर्कल शुरू करें",
            chooseGame: "एक आसान खेल चुनें", memoryMatch: "याद मिलान", music: "संगीत और यादें", all: "सभी", state: "राज्य चुनें", community: "समुदाय चुनें",
            play: "चलाएं", pause: "रोकें", close: "बंद करें", warmNote: "परिचित आवाज़ें पल को घर जैसा बना सकती हैं।", takeTime: "धीरे-धीरे खेलें। कोई जल्दी नहीं है।",
            score: "स्कोर", moves: "चालें", findPairs: "तस्वीरों के जोड़े मिलाएं", wonderful: "बहुत अच्छा", continue: "जारी रखें", report: "देखभाल रिपोर्ट", recentActivity: "हाल की गतिविधि",
            noDiagnosis: "यह सहायता के लिए है, चिकित्सीय निदान नहीं।"
        },
        as: { home: "ঘৰ", games: "খেল", dashboard: "যত্নৰ প্ৰতিবেদন", signOut: "বাহিৰ হওক", signIn: "প্ৰৱেশ", startCircle: "যত্নৰ চক্ৰ আৰম্ভ কৰক", chooseGame: "এটা সহজ খেল বাছক", memoryMatch: "স্মৃতি মিলোৱা", music: "সংগীত আৰু স্মৃতি", all: "সকলো", state: "ৰাজ্য বাছক", community: "সম্প্ৰদায় বাছক", play: "চলাওক", pause: "ৰখাওক", close: "বন্ধ", warmNote: "চিনাকি শব্দই সময়খিনি ঘৰৰ দৰে কৰি তুলিব পাৰে।", takeTime: "লাহে লাহে খেলক। কোনো খৰধৰ নাই।", score: "স্ক'ৰ", moves: "চাল", findPairs: "ছবিৰ যোৰ মিলাওক", wonderful: "বৰ ভাল", continue: "আগলৈ যাওক", report: "যত্নৰ প্ৰতিবেদন", recentActivity: "শেহতীয়া কাৰ্যকলাপ", noDiagnosis: "এইটো সহায়ৰ বাবে, চিকিৎসা নিৰ্ণয় নহয়।" },
        bn: { home: "হোম", games: "খেলা", dashboard: "যত্নের রিপোর্ট", signOut: "সাইন আউট", signIn: "সাইন ইন", startCircle: "যত্নের সার্কেল শুরু করুন", chooseGame: "একটি সহজ খেলা বেছে নিন", memoryMatch: "স্মৃতি মিল", music: "সঙ্গীত ও স্মৃতি", all: "সব", state: "রাজ্য বেছে নিন", community: "সম্প্রদায় বেছে নিন", play: "চালান", pause: "থামান", close: "বন্ধ", warmNote: "পরিচিত শব্দ একটি মুহূর্তকে ঘরের মতো করে তুলতে পারে।", takeTime: "ধীরে খেলুন। কোনো তাড়া নেই।", score: "স্কোর", moves: "চাল", findPairs: "ছবির জোড়া মিলান", wonderful: "দারুণ", continue: "চালিয়ে যান", report: "যত্নের রিপোর্ট", recentActivity: "সাম্প্রতিক কার্যকলাপ", noDiagnosis: "এটি সহায়তার জন্য, চিকিৎসা নির্ণয় নয়।" },
        kh: { home: "Iing", games: "Ki jingïalehkai", dashboard: "Ka jingïathuh jong ka jingsumar", signOut: "Sign out", signIn: "Sign in", startCircle: "Sdang ka jingïasumar", chooseGame: "Jied ka jingïalehkai kaba suk", memoryMatch: "Pynïasoh jingkynmaw", music: "Ka sur bad ka jingkynmaw", all: "Baroh", state: "Jied ka jylla", community: "Jied ka shnong", play: "Pynïalehkai", pause: "Sangeh", close: "Kh փակ", warmNote: "Ki sur kiba ithuh ki lah ban pynlong ïa ka por kum ka ïing.", takeTime: "Leh suki. Ym don jingïakyrkieh.", score: "Ki dak", moves: "Ki jingïaid", findPairs: "Pynïasoh ïa ki dur", wonderful: "Ka jingtrei kaba bha", continue: "Bteng", report: "Ka jingïathuh jong ka jingsumar", recentActivity: "Ki kam ba dang shen", noDiagnosis: "Kane ka dei ka jingïarap, ym ka jingshah bishar da u doktor." },
        mni: { home: "Home", games: "Games", dashboard: "Care report", signOut: "Sign out", signIn: "Sign in", startCircle: "Care circle houjik", chooseGame: "Nungsiba game ama", memoryMatch: "Memory Match", music: "Music amasung ningsing", all: "Pumnamak", state: "State ama", community: "Community ama", play: "Play", pause: "Pause", close: "Close", warmNote: "Ningsingba sound-na yumgi oina pangthokpa ngamgani.", takeTime: "Nungsiba matamda leplasi.", score: "Score", moves: "Moves", findPairs: "Picture pair ama", wonderful: "Yamna phajare", continue: "Makhoi", report: "Care report", recentActivity: "Houjik thokpa thabak", noDiagnosis: "Masi medical diagnosis natte." },
        lus: { home: "In", games: "Game te", dashboard: "Care report", signOut: "Sign out", signIn: "Sign in", startCircle: "Care circle siam rawh", chooseGame: "Game awlsam pakhat thlang rawh", memoryMatch: "Memory Match", music: "Music leh hriatna", all: "Zawng zawng", state: "State thlang rawh", community: "Community thlang rawh", play: "Play", pause: "Pause", close: "Close", warmNote: "Aw ring hre rengte chuan in angin an ti thei.", takeTime: "Zawi zawi in play rawh.", score: "Score", moves: "Moves", findPairs: "Picture pair te zawm rawh", wonderful: "Tihfel tak", continue: "Kal zel", report: "Caregiver report", recentActivity: "Thil thleng thar", noDiagnosis: "Hei hi tanpuina a ni, medical diagnosis a ni lo." }
    };

    const languageNames = { en: "English", hi: "हिन्दी", as: "অসমীয়া", bn: "বাংলা", kh: "Khasi", mni: "মৈতৈলোন", lus: "Mizo" };
    const saved = localStorage.getItem("smritisetu-language") || "en";

    function applyLanguage(language) {
        const dictionary = translations[language] || translations.en;
        document.documentElement.lang = language;
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (dictionary[key]) element.textContent = dictionary[key];
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.dataset.i18nPlaceholder;
            if (dictionary[key]) element.placeholder = dictionary[key];
        });
        document.querySelectorAll("[data-language-label]").forEach((element) => {
            element.textContent = languageNames[language] || languageNames.en;
        });
        localStorage.setItem("smritisetu-language", language);
        document.dispatchEvent(new CustomEvent("smritisetu:language", { detail: language }));
    }

    document.addEventListener("DOMContentLoaded", () => {
        const selector = document.getElementById("language-select");
        if (selector) {
            selector.value = saved;
            selector.addEventListener("change", (event) => applyLanguage(event.target.value));
        }
        applyLanguage(saved);
        document.querySelectorAll("[data-open-music]").forEach((button) => button.addEventListener("click", () => document.getElementById("music-dialog")?.showModal()));
        document.querySelectorAll("[data-close-music]").forEach((button) => button.addEventListener("click", () => document.getElementById("music-dialog")?.close()));

        const stateSelect = document.getElementById("music-state");
        const communitySelect = document.getElementById("music-community");
        const playlist = document.getElementById("music-playlist");
        const tracks = {
            Assam: ["Tea garden morning", "Bihu rhythm"], Meghalaya: ["Hillside rain", "Khasi folk evening"],
            Arunachal: ["Mountain dawn", "Valley lullaby"], Nagaland: ["Handloom afternoon", "Hornbill gathering"],
            Manipur: ["Loktak breeze", "Pena strings"], Mizoram: ["Bamboo evening", "Mizo lullaby"], Tripura: ["Forest path", "Garia rhythm"]
        };
        function renderPlaylist() {
            if (!playlist || !stateSelect) return;
            const state = stateSelect.value;
            const selected = state === "all" ? Object.values(tracks).flat() : (tracks[state] || []);
            playlist.replaceChildren(...selected.map((name) => {
                const item = document.createElement("button"); item.type = "button"; item.className = "music-track"; item.innerHTML = `<span class="track-play">▶</span><span><strong>${name}</strong><small>${state === "all" ? "North East collection" : state}</small></span>`;
                item.addEventListener("click", () => playWarmTone(item)); return item;
            }));
        }
        function playWarmTone(button) {
            const AudioContext = window.AudioContext || window.webkitAudioContext; if (!AudioContext) return;
            const context = new AudioContext(); const oscillator = context.createOscillator(); const gain = context.createGain();
            oscillator.type = "sine"; oscillator.frequency.value = 392; gain.gain.setValueAtTime(0.0001, context.currentTime); gain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.05); gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.6); oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + 1.6);
            document.querySelectorAll(".music-track.is-playing").forEach((track) => track.classList.remove("is-playing")); button.classList.add("is-playing"); setTimeout(() => button.classList.remove("is-playing"), 1600);
        }
        stateSelect?.addEventListener("change", renderPlaylist); communitySelect?.addEventListener("change", renderPlaylist); renderPlaylist();
    });
})();
