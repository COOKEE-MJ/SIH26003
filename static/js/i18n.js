(() => {
    const translations = {
        en: {
            careCircleProfiles: "Care Circle Profiles",
            caregiverProfile: "Caregiver Profile",
            editCaregiverProfile: "Edit Caregiver Profile",
            editPatientProfile: "Edit Patient Profile",
            quickNavigation: "Care Modules",
            edit: "Edit",
            name: "Name",
            email: "Email",
            patientName: "Patient Name",
            ageGender: "Age & Sex",
            relationship: "Relationship",
            dementiaStage: "Dementia Stage",
            contact: "Contact",
            saveChanges: "Save Changes",
            cancel: "Cancel",

            home: "Home", games: "Games", dashboard: "Family Care",
            doctorReport: "Doctor Report",
            signOut: "Sign out", signIn: "Sign in", startCircle: "Create account",
            music: "Music & memories",
            companionGirl: "🌸 Friendly Companion",
            playingWith: "Playing with",
            listenGuidance: "Read instructions aloud",

            /* --- Auth gate --- */
            authTagline: "A gentler way to care for memory.",
            authLead: "Keep games, patient progress and family support in one warm, simple place.",
            authSignIn: "Sign in to my account", authCreate: "Create a new account",
            authNote: "For caregivers, families and care teams.",

            /* --- Login --- */
            loginWelcome: "Welcome back",
            loginHeading: "Sign in to SmritiSetu",
            loginLead: "Your patient's games and progress stay connected to your account.",
            loginEmail: "Email address", loginPassword: "Password",
            loginBtn: "Sign in", loginSwitch: "New here?", loginSwitchLink: "Create an account",

            /* --- Register --- */
            registerTagline: "A caring beginning",
            registerHeading: "Create your caregiver account",
            registerLead: "Your account keeps your patient's care journey private and easy to follow.",
            registerName: "Your name", registerEmail: "Email address",
            registerPassword: "Password", registerConfirm: "Confirm password",
            registerBtn: "Create account",
            registerSwitch: "Already registered?", registerSwitchLink: "Sign in",

            /* --- Home --- */
            heroTagline: "Designed for elders and caregivers",
            heroHeading: "Care that remembers,",
            heroHeadingEm: "so they feel remembered.",
            heroLead: "Gentle activities, familiar rhythms, and a simple family dashboard for the person you care for.",
            heroExplore: "Explore activities", heroProgress: "View progress",
            heroAddPatient: "Add a patient",
            trustLine: "A calm, caregiver-first space for everyday progress",
            storySectionTagline: "The care loop",
            storySectionHeading: "Small moments. Meaningful insight.",
            story1Title: "Play together",
            story1Body: "Large, friendly games that feel like a welcome activity, never a test.",
            story2Title: "Notice progress",
            story2Body: "Scores and session history turn everyday play into a gentle care signal.",
            story3Title: "Stay connected",
            story3Body: "Keep the family and doctor conversation grounded in what is changing.",
            homeFooterSignedIn: "Signed in as",
            homeFooterCaring: "Caring for",
            homeFooterRegister: "Register a patient to begin.",

            /* --- Dashboard gate (add patient) --- */
            addPatientTagline: "Before the dashboard",
            addPatientHeading: "Tell us about the person you care for",
            addPatientLead: "This keeps their games and progress connected to the right care circle.",
            labelPatientName: "Patient's full name", placeholderPatientName: "e.g. Sunita Devi",
            labelAge: "Age", labelGender: "Gender",
            selectGender: "Select", optionFemale: "Female", optionMale: "Male",
            labelStage: "Dementia stage, if known",
            optionUnknown: "Not sure / undiagnosed", optionEarly: "Early stage",
            optionMiddle: "Middle stage", optionAdvanced: "Advanced stage",
            labelRelation: "Your relationship", placeholderRelation: "Daughter, son, caregiver",
            labelContact: "Contact number", placeholderContact: "For sharing reports",
            registerPatientBtn: "Register patient & view dashboard",
            addPatientNote: "You can update these details as your care journey changes.",

            /* --- Games --- */
            chooseGame: "Choose a gentle game",
            takeTime: "Take your time. There is no rush and no wrong way to begin.",
            memoryMatch: "Memory Match", memoryMatchCopy: "Find the pairs at your own pace.",
            wordRecall: "Word Recall", wordRecallCopy: "Coming soon to your care circle.",
            familiarThings: "Familiar Things", familiarThingsCopy: "A peaceful picture activity, coming soon.",
            playWith: "Playing with",
            paceNote: "Keep the room comfortable and celebrate effort, not speed.",

            /* --- Play (select game) --- */
            playHeading: "Choose an activity",
            playLead: "Pick something comfortable. There is no pressure.",
            playMatchLabel: "Memory Matching",
            playMatchCopy: "Find pairs of pictures. Simple and calming.",

            /* --- Matching game --- */
            gameTagline: "A familiar picture activity",
            findPairs: "Find the picture pairs",
            gameInstruction: "Take your time and remember the positions.",
            score: "Score", moves: "Moves",
            wonderful: "Wonderful work",
            celebrationMsg: "You found every pair. That was lovely.",
            continue: "Continue",
            difficulty: "Difficulty Level",

            /* --- Dashboard --- */
            report: "Caregiver report",
            caregiverReport: "SmritiSetu caregiver report",
            patientActivity: "A clear, shareable view of their activity",
            backHome: "← Back home",
            back: "Back",
            patientProfile: "Patient profile",
            patientId: "Patient ID",
            patientBanner: "Use these patterns as conversation starters with a qualified professional. They are not a diagnosis.",
            totalSessions: "Total sessions", totalSessionsSub: "All recorded activities",
            averageScore: "Average score", averageScoreSub: "Across completed games",
            latestScore: "Latest score", latestScoreSub: "Most recent activity",
            engagementTagline: "A gentle signal", engagementHeading: "Engagement over time",
            updatedFromPlay: "Updated from play",
            sessionNotes: "Session notes", recentActivity: "Recent activity",
            colDate: "Date", colGame: "Game", colScore: "Score", colDifficulty: "Difficulty",
            loadingSessions: "Loading sessions…",
            disclaimer: "SmritiSetu supports everyday engagement and caregiver conversations. It does not diagnose or replace clinical care.",

            /* --- Shared --- */
            close: "Close", all: "All",
            state: "Choose a state", community: "Choose a community",
            play: "Play", pause: "Pause",
            warmNote: "Familiar sounds can make a moment feel like home.",
            noDiagnosis: "This is a wellbeing aid, not a medical diagnosis.",

            /* --- How SmritiSetu Works --- */
            howItWorksEyebrow: "Interactive Care Pathway",
            howItWorksHeading: "How SmritiSetu Works",
            howItWorksSubheading: "A simple journey from cognitive engagement to meaningful care insights.",
            step1Title: "Choose Language",
            step1Desc: "Select English, Hindi, Assamese, Bengali, Khasi, Manipuri, or Mizo.",
            step1Highlight: "Multilingual interface with selected North East Indian language support.",
            step2Title: "Memory Match Activity",
            step2Desc: "Patient plays a gentle visual card-matching activity with culturally familiar everyday objects.",
            step2Highlight: "Gentle memory activity with familiar cultural items.",
            step3Title: "Gameplay Metric Tracking",
            step3Desc: "Tracks game accuracy, response time, reaction time, and session duration strictly for that patient.",
            step3Highlight: "Adaptive game difficulty adjusts automatically.",
            step4Title: "Caregiver Progress Dashboard",
            step4Desc: "Daily care routines, family memory notes, and session history remain isolated by patient ID.",
            step4Highlight: "Patient-isolated data tracking.",
            step5Title: "Printable Gameplay Summary",
            step5Desc: "Gameplay progress metrics and session summaries are organized for caregiver review and consultations.",
            step5Highlight: "Performance data only."
        },

        hi: {
            careCircleProfiles: "देखभाल मंडल प्रोफ़ाइल",
            caregiverProfile: "देखभालकर्ता प्रोफ़ाइल",
            editCaregiverProfile: "देखभालकर्ता प्रोफ़ाइल संपादित करें",
            editPatientProfile: "मरीज़ प्रोफ़ाइल संपादित करें",
            quickNavigation: "देखभाल मॉड्यूल",
            edit: "संपादित करें",
            name: "नाम",
            email: "ईमेल",
            patientName: "मरीज़ का नाम",
            ageGender: "उम्र और लिंग",
            relationship: "संबंध",
            dementiaStage: "डिमेंशिया चरण",
            contact: "संपर्क",
            saveChanges: "परिवर्तन सहेजें",
            cancel: "रद्द करें",

            home: "होम", games: "खेल", dashboard: "पारिवारिक देखभाल",
            doctorReport: "डॉक्टर रिपोर्ट",
            signOut: "साइन आउट", signIn: "साइन इन", startCircle: "खाता बनाएं",
            music: "संगीत और यादें",
            companionGirl: "🌸 प्यारी सहेली",
            playingWith: "के साथ खेल रहे हैं",
            listenGuidance: "निर्देश सुनें",

            authTagline: "याद की देखभाल का एक सरल तरीका।",
            authLead: "खेल, मरीज़ की प्रगति और परिवार का सहयोग — सब एक जगह।",
            authSignIn: "अपने खाते में साइन इन करें", authCreate: "नया खाता बनाएं",
            authNote: "देखभालकर्ताओं, परिवारों और देखभाल टीमों के लिए।",

            loginWelcome: "वापस स्वागत है",
            loginHeading: "SmritiSetu में साइन इन करें",
            loginLead: "आपके मरीज़ के खेल और प्रगति आपके खाते से जुड़े रहते हैं।",
            loginEmail: "ईमेल पता", loginPassword: "पासवर्ड",
            loginBtn: "साइन इन", loginSwitch: "नए हैं?", loginSwitchLink: "खाता बनाएं",

            registerTagline: "एक देखभाल की शुरुआत",
            registerHeading: "अपना देखभालकर्ता खाता बनाएं",
            registerLead: "आपका खाता आपके मरीज़ की देखभाल को निजी और सरल रखता है।",
            registerName: "आपका नाम", registerEmail: "ईमेल पता",
            registerPassword: "पासवर्ड", registerConfirm: "पासवर्ड की पुष्टि करें",
            registerBtn: "खाता बनाएं",
            registerSwitch: "पहले से पंजीकृत हैं?", registerSwitchLink: "साइन इन करें",

            heroTagline: "बुजुर्गों और देखभालकर्ताओं के लिए",
            heroHeading: "देखभाल जो याद रखती है,",
            heroHeadingEm: "ताकि वे महसूस करें कि उन्हें याद किया जाता है।",
            heroLead: "सरल गतिविधियाँ, परिचित लय, और आपके मरीज़ के लिए एक सादा पारिवारिक डैशबोर्ड।",
            heroExplore: "गतिविधियाँ खोजें", heroProgress: "प्रगति देखें",
            heroAddPatient: "मरीज़ जोड़ें",
            trustLine: "हर दिन की प्रगति के लिए एक शांत स्थान",
            storySectionTagline: "देखभाल का चक्र",
            storySectionHeading: "छोटे पल। गहरी जानकारी।",
            story1Title: "साथ खेलें",
            story1Body: "बड़े, आसान खेल जो परीक्षा नहीं, बल्कि आनंद देते हैं।",
            story2Title: "प्रगति देखें",
            story2Body: "स्कोर और सत्र इतिहास हर दिन के खेल को देखभाल का संकेत बनाते हैं।",
            story3Title: "जुड़े रहें",
            story3Body: "परिवार और डॉक्टर की बातचीत को बदलाव पर केंद्रित रखें।",
            homeFooterSignedIn: "साइन इन है",
            homeFooterCaring: "देखभाल कर रहे हैं",
            homeFooterRegister: "शुरू करने के लिए मरीज़ दर्ज करें।",

            addPatientTagline: "डैशबोर्ड से पहले",
            addPatientHeading: "हमें उस व्यक्ति के बारे में बताएं जिसकी आप देखभाल करते हैं",
            addPatientLead: "यह उनके खेल और प्रगति को सही देखभाल सर्कल से जोड़ता है।",
            labelPatientName: "मरीज़ का पूरा नाम", placeholderPatientName: "जैसे सुनीता देवी",
            labelAge: "उम्र", labelGender: "लिंग",
            selectGender: "चुनें", optionFemale: "महिला", optionMale: "पुरुष",
            labelStage: "डिमेंशिया की अवस्था, यदि ज्ञात हो",
            optionUnknown: "निश्चित नहीं / अनिर्धारित", optionEarly: "प्रारंभिक",
            optionMiddle: "मध्य", optionAdvanced: "उन्नत",
            labelRelation: "आपका संबंध", placeholderRelation: "बेटी, बेटा, देखभालकर्ता",
            labelContact: "संपर्क नंबर", placeholderContact: "रिपोर्ट साझा करने के लिए",
            registerPatientBtn: "मरीज़ दर्ज करें और डैशबोर्ड देखें",
            addPatientNote: "आप इन विवरणों को बाद में अपडेट कर सकते हैं।",

            chooseGame: "एक आसान खेल चुनें",
            takeTime: "धीरे-धीरे खेलें। कोई जल्दी नहीं है।",
            memoryMatch: "याद मिलान", memoryMatchCopy: "अपनी गति से जोड़े खोजें।",
            wordRecall: "शब्द स्मरण", wordRecallCopy: "जल्द आएगा।",
            familiarThings: "परिचित चीज़ें", familiarThingsCopy: "एक शांत चित्र गतिविधि, जल्द आएगा।",
            playWith: "के साथ खेल रहे हैं",
            paceNote: "कमरे को सुविधाजनक रखें और प्रयास की सराहना करें, गति की नहीं।",

            playHeading: "एक गतिविधि चुनें",
            playLead: "कुछ सुविधाजनक चुनें। कोई दबाव नहीं।",
            playMatchLabel: "याद मिलान", playMatchCopy: "तस्वीरों के जोड़े खोजें। सरल और शांत।",

            gameTagline: "एक परिचित चित्र गतिविधि",
            findPairs: "तस्वीरों के जोड़े मिलाएं",
            gameInstruction: "धीरे-धीरे खेलें और स्थान याद रखें।",
            score: "स्कोर", moves: "चालें",
            wonderful: "बहुत अच्छा",
            celebrationMsg: "आपने हर जोड़ा खोज लिया। बहुत सुंदर।",
            continue: "जारी रखें",
            difficulty: "कठिनाई स्तर",

            report: "देखभाल रिपोर्ट",
            caregiverReport: "SmritiSetu देखभालकर्ता रिपोर्ट",
            patientActivity: "उनकी गतिविधि का स्पष्ट दृश्य",
            backHome: "← होम पर वापस",
            back: "वापस",
            patientProfile: "मरीज़ की प्रोफ़ाइल",
            patientId: "मरीज़ ID",
            patientBanner: "इन पैटर्न को किसी विशेषज्ञ के साथ बातचीत के लिए उपयोग करें। ये निदान नहीं हैं।",
            totalSessions: "कुल सत्र", totalSessionsSub: "सभी दर्ज गतिविधियाँ",
            averageScore: "औसत स्कोर", averageScoreSub: "पूरे खेलों में",
            latestScore: "नवीनतम स्कोर", latestScoreSub: "सबसे हाल की गतिविधि",
            engagementTagline: "एक सौम्य संकेत", engagementHeading: "समय के साथ जुड़ाव",
            updatedFromPlay: "खेल से अपडेट",
            sessionNotes: "सत्र नोट्स", recentActivity: "हाल की गतिविधि",
            colDate: "तारीख", colGame: "खेल", colScore: "स्कोर", colDifficulty: "कठिनाई",
            loadingSessions: "सत्र लोड हो रहे हैं…",
            disclaimer: "SmritiSetu रोज़ाना जुड़ाव में सहयोग करता है। यह निदान नहीं करता।",

            close: "बंद करें", all: "सभी",
            state: "राज्य चुनें", community: "समुदाय चुनें",
            play: "चलाएं", pause: "रोकें",
            warmNote: "परिचित आवाज़ें पल को घर जैसा बना सकती हैं।",
            noDiagnosis: "यह सहायता के लिए है, चिकित्सीय निदान नहीं।",

            /* --- How SmritiSetu Works --- */
            howItWorksEyebrow: "संवादात्मक देखभाल मार्ग",
            howItWorksHeading: "स्मृतिसेतु कैसे काम करता है",
            howItWorksSubheading: "संज्ञानात्मक जुड़ाव से सार्थक देखभाल अंतर्दृष्टि तक की एक सरल यात्रा।",
            step1Title: "भाषा चुनें",
            step1Desc: "अंग्रेज़ी, हिंदी, असमिया, बंगाली, खासी, मणिपुरी या मिज़ो चुनें।",
            step1Highlight: "पूर्वोत्तर क्षेत्रीय भाषा समर्थन सहित बहुभाषी इंटरफ़ेस।",
            step2Title: "मेमोरी मैच गतिविधि",
            step2Desc: "मरीज़ परिचित सांस्कृतिक वस्तुओं के साथ सौम्य कार्ड-मिलान गतिविधि खेलते हैं।",
            step2Highlight: "परिचित सांस्कृतिक वस्तुओं के साथ सौम्य स्मृति गतिविधि।",
            step3Title: "गेमप्ले मेट्रिक्स ट्रैकिंग",
            step3Desc: "प्रत्येक पूर्ण सत्र के लिए गेम सटीकता, प्रतिक्रिया समय और अवधि को ट्रैक करता है।",
            step3Highlight: "खेल की कठिनाई स्वचालित रूप से समायोजित होती है।",
            step4Title: "देखभालकर्ता प्रगति डैशबोर्ड",
            step4Desc: "दैनिक देखभाल दिनचर्या और परिवार के नोट्स प्रत्येक मरीज़ के लिए अलग रहते हैं।",
            step4Highlight: "मरीज़-विशिष्ट डेटा ट्रैकिंग।",
            step5Title: "प्रिंट करने योग्य गेमप्ले सारांश",
            step5Desc: "देखभालकर्ता समीक्षा और परामर्श के लिए गेमप्ले मेट्रिक्स व्यवस्थित किए जाते हैं।",
            step5Highlight: "केवल प्रदर्शन डेटा।"
        },

        as: {
            careCircleProfiles: "যত্ন মণ্ডল প্ৰ'ফাইল",
            caregiverProfile: "পৰিচৰ্যাকাৰী প্ৰ'ফাইল",
            editCaregiverProfile: "পৰিচৰ্যাকাৰী প্ৰ'ফাইল সম্পাদনা কৰক",
            editPatientProfile: "ৰোগীৰ প্ৰ'ফাইল সম্পাদনা কৰক",
            quickNavigation: "যত্ন মডিউল",
            edit: "সম্পাদনা",
            name: "নাম",
            email: "ইমেইল",
            patientName: "ৰোগীৰ নাম",
            ageGender: "বয়স আৰু লিংগ",
            relationship: "সম্পৰ্ক",
            dementiaStage: "স্মৃতিভ্ৰংশৰ পৰ্যায়",
            contact: "যোগাযোগ",
            saveChanges: "পৰিৱৰ্তন সংৰক্ষণ কৰক",
            cancel: "বাতিল কৰক",

            home: "ঘৰ", games: "খেল", dashboard: "যত্নৰ প্ৰতিবেদন",
            signOut: "বাহিৰ হওক", signIn: "প্ৰৱেশ", startCircle: "খাতা বনাওক",
            music: "সংগীত আৰু স্মৃতি",
            companionGirl: "🌸 মৰমৰ সংগী",
            authTagline: "স্মৃতিৰ যত্নৰ এক সহজ উপায়।",
            authLead: "খেল, ৰোগীৰ অগ্ৰগতি আৰু পৰিয়ালৰ সহায় — সকলো একঠাইতে।",
            authSignIn: "মোৰ খাতাত প্ৰৱেশ কৰক", authCreate: "নতুন খাতা বনাওক",
            authNote: "পৰিচৰ্যাকাৰী, পৰিয়াল আৰু যত্ন দলৰ বাবে।",
            loginWelcome: "পুনৰ স্বাগতম", loginHeading: "SmritiSetu-ত প্ৰৱেশ কৰক",
            loginLead: "আপোনাৰ ৰোগীৰ খেল আৰু অগ্ৰগতি আপোনাৰ খাতাৰ সৈতে জুৰি থাকে।",
            loginEmail: "ইমেইল ঠিকনা", loginPassword: "পাছৱৰ্ড",
            loginBtn: "প্ৰৱেশ কৰক", loginSwitch: "নতুন নেকি?", loginSwitchLink: "খাতা বনাওক",
            registerTagline: "এক যত্নশীল আৰম্ভণি", registerHeading: "আপোনাৰ পৰিচৰ্যাকাৰী খাতা বনাওক",
            registerLead: "আপোনাৰ খাতাই ৰোগীৰ যত্নৰ যাত্ৰা গোপনীয় আৰু সহজ ৰাখে।",
            registerName: "আপোনাৰ নাম", registerEmail: "ইমেইল ঠিকনা",
            registerPassword: "পাছৱৰ্ড", registerConfirm: "পাছৱৰ্ড নিশ্চিত কৰক",
            registerBtn: "খাতা বনাওক", registerSwitch: "আগতেই পঞ্জীয়ন কৰিছে নেকি?", registerSwitchLink: "প্ৰৱেশ কৰক",
            heroTagline: "বৃদ্ধ আৰু পৰিচৰ্যাকাৰীৰ বাবে",
            heroHeading: "যত্ন যিয়ে মনত ৰাখে,", heroHeadingEm: "যাতে তেওঁলোকে অনুভৱ কৰে মনত ৰখা হৈছে।",
            heroLead: "সহজ কাৰ্যকলাপ, পৰিচিত তাল, আৰু এক সহজ পৰিয়াল ডেছবৰ্ড।",
            heroExplore: "কাৰ্যকলাপ চাওক", heroProgress: "অগ্ৰগতি চাওক", heroAddPatient: "ৰোগী যোগ কৰক",
            trustLine: "দৈনিক অগ্ৰগতিৰ বাবে এক শান্ত ঠাই",
            storySectionTagline: "যত্নৰ চক্ৰ", storySectionHeading: "সৰু পল। অৰ্থপূৰ্ণ অন্তৰ্দৃষ্টি।",
            story1Title: "একেলগে খেলক", story1Body: "ডাঙৰ, বন্ধুত্বপূৰ্ণ খেল যি পৰীক্ষা নহয়, আনন্দ দিয়ে।",
            story2Title: "অগ্ৰগতি লক্ষ্য কৰক", story2Body: "স্কোৰ আৰু সত্ৰৰ ইতিহাসে দৈনিক খেলক যত্নৰ সংকেতলৈ ৰূপান্তৰিত কৰে।",
            story3Title: "সংযুক্ত থাকক", story3Body: "পৰিয়াল আৰু চিকিৎসকৰ কথোপকথন পৰিৱৰ্তনৰ ওপৰত কেন্দ্ৰিত ৰাখক।",
            homeFooterSignedIn: "প্ৰৱেশ কৰি আছে", homeFooterCaring: "যত্ন লৈছে", homeFooterRegister: "আৰম্ভ কৰিবলৈ ৰোগী দৰ্তা কৰক।",
            addPatientTagline: "ডেছবৰ্ডৰ আগত", addPatientHeading: "আপুনি যাৰ যত্ন লয় তেওঁৰ বিষয়ে জনাওক",
            addPatientLead: "এয়া তেওঁলোকৰ খেল আৰু অগ্ৰগতি সঠিক যত্ন চক্ৰৰ সৈতে সংযুক্ত কৰে।",
            labelPatientName: "ৰোগীৰ পূৰ্ণ নাম", placeholderPatientName: "যেনে সুনীতা দেৱী",
            labelAge: "বয়স", labelGender: "লিংগ",
            selectGender: "বাছক", optionFemale: "মহিলা", optionMale: "পুৰুষ",
            labelStage: "ডিমেনচিয়াৰ স্তৰ, যদি জ্ঞাত হয়",
            optionUnknown: "নিশ্চিত নহয়", optionEarly: "প্ৰাৰম্ভিক", optionMiddle: "মধ্যম", optionAdvanced: "উন্নত",
            labelRelation: "আপোনাৰ সম্পৰ্ক", placeholderRelation: "জীয়েক, পুতেক, পৰিচৰ্যাকাৰী",
            labelContact: "যোগাযোগ নম্বৰ", placeholderContact: "প্ৰতিবেদন ভাগ কৰাৰ বাবে",
            registerPatientBtn: "ৰোগী দৰ্তা কৰক আৰু ডেছবৰ্ড চাওক", addPatientNote: "আপুনি পাছত এই তথ্য আপডেট কৰিব পাৰে।",
            chooseGame: "এটা সহজ খেল বাছক", takeTime: "লাহে লাহে খেলক। কোনো খৰধৰ নাই।",
            memoryMatch: "স্মৃতি মিলোৱা", memoryMatchCopy: "আপোনাৰ গতিত জোৰা বিচাৰক।",
            wordRecall: "শব্দ স্মৰণ", wordRecallCopy: "সোনকালে আহিব।",
            familiarThings: "পৰিচিত বস্তু", familiarThingsCopy: "এক শান্ত চিত্ৰ কাৰ্যকলাপ, সোনকালে আহিব।",
            playWith: "ৰ সৈতে খেলি আছে", paceNote: "কোঠাটো আৰামদায়ক ৰাখক আৰু প্ৰচেষ্টাৰ প্ৰশংসা কৰক।",
            playHeading: "এটা কাৰ্যকলাপ বাছক", playLead: "সুবিধাজনক কিবা বাছক। কোনো চাপ নাই।",
            playMatchLabel: "স্মৃতি মিলোৱা", playMatchCopy: "ছবিৰ জোৰা বিচাৰক। সহজ আৰু শান্ত।",
            gameTagline: "এক পৰিচিত ছবি কাৰ্যকলাপ", findPairs: "ছবিৰ যোৰ মিলাওক",
            gameInstruction: "লাহে লাহে খেলক আৰু স্থান মনত ৰাখক।",
            score: "স্ক'ৰ", moves: "চাল", wonderful: "বৰ ভাল",
            celebrationMsg: "আপুনি সকলো জোৰা বিচাৰিলে। অতি সুন্দৰ।", continue: "আগলৈ যাওক", difficulty: "কঠিনতা স্তৰ",
            report: "যত্নৰ প্ৰতিবেদন", caregiverReport: "SmritiSetu পৰিচৰ্যাকাৰী প্ৰতিবেদন",
            patientActivity: "তেওঁলোকৰ কাৰ্যকলাপৰ এক স্পষ্ট দৃশ্য", backHome: "← ঘৰলৈ উভতক", back: "উভতি",
            patientProfile: "ৰোগীৰ প্ৰ'ফাইল", patientId: "ৰোগী ID",
            patientBanner: "এই নিদৰ্শনবোৰ বিশেষজ্ঞৰ সৈতে কথোপকথনৰ বাবে ব্যৱহাৰ কৰক। এইবোৰ ৰোগনিৰ্ণয় নহয়।",
            totalSessions: "মুঠ সত্ৰ", totalSessionsSub: "সকলো দৰ্তা কাৰ্যকলাপ",
            averageScore: "গড় স্ক'ৰ", averageScoreSub: "সম্পূৰ্ণ খেলসমূহত",
            latestScore: "শেহতীয়া স্ক'ৰ", latestScoreSub: "সৰ্বাধুনিক কাৰ্যকলাপ",
            engagementTagline: "এক সৌম্য সংকেত", engagementHeading: "সময়ৰ লগত সংযুক্ততা",
            updatedFromPlay: "খেলৰ পৰা আপডেট", sessionNotes: "সত্ৰ টোকা", recentActivity: "শেহতীয়া কাৰ্যকলাপ",
            colDate: "তাৰিখ", colGame: "খেল", colScore: "স্ক'ৰ", colDifficulty: "কঠিনতা",
            loadingSessions: "সত্ৰ লোড হৈছে…",
            disclaimer: "SmritiSetu দৈনিক সংযুক্ততাত সহায় কৰে। ই ৰোগনিৰ্ণয় নকৰে।",
            close: "বন্ধ", all: "সকলো", state: "ৰাজ্য বাছক", community: "সম্প্ৰদায় বাছক",
            play: "চলাওক", pause: "ৰখাওক",
            warmNote: "চিনাকি শব্দই সময়খিনি ঘৰৰ দৰে কৰি তুলিব পাৰে।",
            noDiagnosis: "এইটো সহায়ৰ বাবে, চিকিৎসা নিৰ্ণয় নহয়।",

            /* --- How SmritiSetu Works --- */
            howItWorksEyebrow: "পাৰস্পৰিক যত্ন পথ",
            howItWorksHeading: "স্মৃতিসেতু কেনেকৈ কাম কৰে",
            howItWorksSubheading: "জ্ঞানমূলক অংশগ্ৰহণৰ পৰা অৰ্থপূৰ্ণ যত্ন অন্তৰ্দৃষ্টিলৈ এক সহজ যাত্ৰা।",
            step1Title: "ভাষা বাছক",
            step1Desc: "ইংৰাজী, হিন্দী, অসমীয়া, বঙালী, খাছী, মণিপুৰী বা মিজো বাছক।",
            step1Highlight: "উত্তৰ-পূব ভাৰতীয় ভাষাৰ সমৰ্থনসহ বহুভাষিক আন্তঃপৃষ্ঠ।",
            step2Title: "মেমৰি মেচ কাৰ্য্যকলাপ",
            step2Desc: "ৰোগীয়ে চিনাকি সাংস্কৃতিক বস্তুৰ সৈতে শান্ত কাৰ্ড মিলোৱা খেল খেলে।",
            step2Highlight: "চিনাকি সাংস্কৃতিক বস্তুৰ সৈতে শান্ত স্মৃতি কাৰ্য্যকলাপ।",
            step3Title: "খেলৰ মেট্ৰিক অনুসৰণ",
            step3Desc: "প্ৰতিটো সম্পূৰ্ণ খেলৰ বাবে সঠিকতা, সঁহাৰিৰ সময় আৰু সময়সীমা ট্ৰেক কৰে।",
            step3Highlight: "খেলৰ অসুবিধা স্বয়ংক্ৰিয়ভাৱে সমন্বয় হয়।",
            step4Title: "কেয়াৰগিভাৰ অগ্ৰগতি ডেছবৰ্ড",
            step4Desc: "দৈনন্দিন ৰুটিন আৰু পৰিয়ালৰ টোকা প্ৰতিজন ৰোগীৰ বাবে সুকীয়াকৈ সংৰক্ষিত থাকে।",
            step4Highlight: "ৰোগী-আধাৰিত তথ্য সুৰক্ষা।",
            step5Title: "প্ৰিণ্টযোগ্য খেলৰ সাৰাংশ",
            step5Desc: "কেয়াৰগিভাৰ পৰ্যালোচনাৰ বাবে খেলৰ মেট্ৰিক আৰু সাৰাংশ সুশৃংখলিত কৰা হৈছে।",
            step5Highlight: "কেৱল প্ৰদৰ্শন তথ্য।"
        },

        bn: {
            careCircleProfiles: "যত্ন বৃত্ত প্রোফাইল",
            caregiverProfile: "পরিচর্যাকারী প্রোফাইল",
            editCaregiverProfile: "পরিচর্যাকারী প্রোফাইল সম্পাদনা করুন",
            editPatientProfile: "রোগীর প্রোফাইল সম্পাদনা করুন",
            quickNavigation: "যত্ন মডিউল",
            edit: "সম্পাদনা",
            name: "নাম",
            email: "ইমেল",
            patientName: "রোগীর নাম",
            ageGender: "বয়স ও লিঙ্গ",
            relationship: "সম্পর্ক",
            dementiaStage: "ডিমেনশিয়া পর্যায়",
            contact: "যোগাযোগ",
            saveChanges: "পরিবর্তন সংরক্ষণ করুন",
            cancel: "বাতিল করুন",

            home: "হোম", games: "খেলা", dashboard: "যত্নের রিপোর্ট",
            signOut: "সাইন আউট", signIn: "সাইন ইন", startCircle: "অ্যাকাউন্ট তৈরি করুন",
            music: "সঙ্গীত ও স্মৃতি",
            companionGirl: "🌸 স্নেহের সঙ্গী",
            authTagline: "স্মৃতির যত্নের একটি সহজ উপায়।",
            authLead: "খেলা, রোগীর অগ্রগতি এবং পরিবারের সহায়তা — সব এক জায়গায়।",
            authSignIn: "আমার অ্যাকাউন্টে সাইন ইন করুন", authCreate: "নতুন অ্যাকাউন্ট তৈরি করুন",
            authNote: "পরিচর্যাকারী, পরিবার এবং যত্ন দলের জন্য।",
            loginWelcome: "আবার স্বাগতম", loginHeading: "SmritiSetu-তে সাইন ইন করুন",
            loginLead: "আপনার রোগীর খেলা ও অগ্রগতি আপনার অ্যাকাউন্টের সাথে যুক্ত থাকে।",
            loginEmail: "ইমেইল ঠিকানা", loginPassword: "পাসওয়ার্ড",
            loginBtn: "সাইন ইন", loginSwitch: "নতুন?", loginSwitchLink: "অ্যাকাউন্ট তৈরি করুন",
            registerTagline: "একটি যত্নশীল শুরু", registerHeading: "আপনার পরিচর্যাকারী অ্যাকাউন্ট তৈরি করুন",
            registerLead: "আপনার অ্যাকাউন্ট রোগীর যত্নের যাত্রা ব্যক্তিগত ও সহজ রাখে।",
            registerName: "আপনার নাম", registerEmail: "ইমেইল ঠিকানা",
            registerPassword: "পাসওয়ার্ড", registerConfirm: "পাসওয়ার্ড নিশ্চিত করুন",
            registerBtn: "অ্যাকাউন্ট তৈরি করুন", registerSwitch: "আগে নিবন্ধিত?", registerSwitchLink: "সাইন ইন করুন",
            heroTagline: "বয়স্ক ও পরিচর্যাকারীদের জন্য",
            heroHeading: "যত্ন যা মনে রাখে,", heroHeadingEm: "যাতে তারা অনুভব করে স্মরণ করা হচ্ছে।",
            heroLead: "সহজ কার্যক্রম, পরিচিত ছন্দ, এবং একটি সহজ পারিবারিক ড্যাশবোর্ড।",
            heroExplore: "কার্যক্রম দেখুন", heroProgress: "অগ্রগতি দেখুন", heroAddPatient: "রোগী যোগ করুন",
            trustLine: "প্রতিদিনের অগ্রগতির জন্য একটি শান্ত জায়গা",
            storySectionTagline: "যত্নের চক্র", storySectionHeading: "ছোট মুহূর্ত। অর্থবহ অন্তর্দৃষ্টি।",
            story1Title: "একসাথে খেলুন", story1Body: "বড়, বন্ধুত্বপূর্ণ খেলা যা পরীক্ষা নয়, আনন্দ দেয়।",
            story2Title: "অগ্রগতি লক্ষ্য করুন", story2Body: "স্কোর ও সেশন ইতিহাস প্রতিদিনের খেলাকে যত্নের সংকেতে রূপান্তরিত করে।",
            story3Title: "সংযুক্ত থাকুন", story3Body: "পরিবার ও ডাক্তারের কথোপকথন পরিবর্তনের উপর কেন্দ্রিত রাখুন।",
            homeFooterSignedIn: "সাইন ইন আছেন", homeFooterCaring: "যত্ন নিচ্ছেন", homeFooterRegister: "শুরু করতে রোগী নিবন্ধন করুন।",
            addPatientTagline: "ড্যাশবোর্ডের আগে", addPatientHeading: "যার যত্ন নেন তার সম্পর্কে বলুন",
            addPatientLead: "এটি তাদের খেলা ও অগ্রগতি সঠিক যত্ন বৃত্তের সাথে সংযুক্ত রাখে।",
            labelPatientName: "রোগীর পূর্ণ নাম", placeholderPatientName: "যেমন সুনীতা দেবী",
            labelAge: "বয়স", labelGender: "লিঙ্গ",
            selectGender: "বেছে নিন", optionFemale: "মহিলা", optionMale: "পুরুষ",
            labelStage: "ডিমেনশিয়ার পর্যায়, যদি জানা থাকে",
            optionUnknown: "নিশ্চিত নই", optionEarly: "প্রাথমিক", optionMiddle: "মধ্যম", optionAdvanced: "উন্নত",
            labelRelation: "আপনার সম্পর্ক", placeholderRelation: "মেয়ে, ছেলে, পরিচর্যাকারী",
            labelContact: "যোগাযোগ নম্বর", placeholderContact: "রিপোর্ট শেয়ারের জন্য",
            registerPatientBtn: "রোগী নিবন্ধন করুন ও ড্যাশবোর্ড দেখুন", addPatientNote: "আপনি পরে এই তথ্য আপডেট করতে পারবেন।",
            chooseGame: "একটি সহজ খেলা বেছে নিন", takeTime: "ধীরে খেলুন। কোনো তাড়া নেই।",
            memoryMatch: "স্মৃতি মিল", memoryMatchCopy: "নিজের গতিতে জোড়া খুঁজুন।",
            wordRecall: "শব্দ স্মরণ", wordRecallCopy: "শীঘ্রই আসছে।",
            familiarThings: "পরিচিত জিনিস", familiarThingsCopy: "একটি শান্ত ছবির কার্যক্রম, শীঘ্রই আসছে।",
            playWith: "এর সাথে খেলছেন", paceNote: "ঘরটি আরামদায়ক রাখুন এবং প্রচেষ্টার প্রশংসা করুন।",
            playHeading: "একটি কার্যক্রম বেছে নিন", playLead: "কিছু সুবিধাজনক বেছে নিন। কোনো চাপ নেই।",
            playMatchLabel: "স্মৃতি মিল", playMatchCopy: "ছবির জোড়া খুঁজুন। সহজ এবং শান্ত।",
            gameTagline: "একটি পরিচিত ছবির কার্যক্রম", findPairs: "ছবির জোড়া মিলান",
            gameInstruction: "ধীরে খেলুন এবং অবস্থান মনে রাখুন।",
            score: "স্কোর", moves: "চাল", wonderful: "দারুণ",
            celebrationMsg: "আপনি সব জোড়া খুঁজে পেয়েছেন। অসাধারণ।", continue: "চালিয়ে যান", difficulty: "কঠিনতার মাত্রা",
            report: "যত্নের রিপোর্ট", caregiverReport: "SmritiSetu পরিচর্যাকারী রিপোর্ট",
            patientActivity: "তাদের কার্যক্রমের একটি স্পষ্ট দৃশ্য", backHome: "← হোমে ফিরে যান", back: "ফিরে",
            patientProfile: "রোগীর প্রোফাইল", patientId: "রোগী ID",
            patientBanner: "এই নিদর্শনগুলি বিশেষজ্ঞের সাথে কথোপকথনের জন্য ব্যবহার করুন। এগুলি রোগ নির্ণয় নয়।",
            totalSessions: "মোট সেশন", totalSessionsSub: "সকল নথিভুক্ত কার্যক্রম",
            averageScore: "গড় স্কোর", averageScoreSub: "সম্পন্ন খেলায়",
            latestScore: "সর্বশেষ স্কোর", latestScoreSub: "সাম্প্রতিক কার্যক্রম",
            engagementTagline: "একটি মৃদু সংকেত", engagementHeading: "সময়ের সাথে সংযুক্ততা",
            updatedFromPlay: "খেলা থেকে আপডেট", sessionNotes: "সেশন নোট", recentActivity: "সাম্প্রতিক কার্যক্রম",
            colDate: "তারিখ", colGame: "খেলা", colScore: "স্কোর", colDifficulty: "কঠিনতা",
            loadingSessions: "সেশন লোড হচ্ছে…",
            disclaimer: "SmritiSetu দৈনিক সংযুক্ততায় সহায়তা করে। এটি রোগ নির্ণয় করে না।",
            close: "বন্ধ", all: "সব", state: "রাজ্য বেছে নিন", community: "সম্প্রদায় বেছে নিন",
            play: "চালান", pause: "থামান",
            warmNote: "পরিচিত শব্দ একটি মুহূর্তকে ঘরের মতো করে তুলতে পারে।",
            noDiagnosis: "এটি সহায়তার জন্য, চিকিৎসা নির্ণয় নয়।",

            /* --- How SmritiSetu Works --- */
            howItWorksEyebrow: "ইন্টারেক্টিভ কেয়ার পথ",
            howItWorksHeading: "স্মৃতিসেতু যেভাবে কাজ করে",
            howItWorksSubheading: "জ্ঞানীয় সম্পৃক্ততা থেকে অর্থপূর্ণ পরিচর্যা অন্তর্দৃষ্টির একটি সহজ যাত্রা।",
            step1Title: "ভাষা নির্বাচন করুন",
            step1Desc: "ইংরেজি, হিন্দি, অসমীয়া, বাংলা, খাসি, মণিপুরী বা মিজো নির্বাচন করুন।",
            step1Highlight: "উত্তর-পূর্ব ভারতের ভাষার সমর্থনসহ বহুভাষিক ইন্টারফেস।",
            step2Title: "মেমোরি ম্যাচ কার্যকলাপ",
            step2Desc: "রোগী পরিচিত সাংস্কৃতিক বস্তুর সাথে শান্ত কার্ড মিলানোর খেলা খেলেন।",
            step2Highlight: "পরিচিত সাংস্কৃতিক আইটেমের সাথে শান্ত স্মৃতি কার্যকলাপ।",
            step3Title: "গেমপ্লে মেট্রিক্স ট্র্যাকিং",
            step3Desc: "প্রতিটি সম্পন্ন সেশনের জন্য সঠিকতা, প্রতিক্রিয়ার সময় এবং স্থায়িত্ব ট্র্যাক করে।",
            step3Highlight: "খেলার অসুবিধা স্বয়ংক্রিয়ভাবে সমন্বয় হয়।",
            step4Title: "পরিচর্যাকারী অগ্রগতি ড্যাশবোর্ড",
            step4Desc: "দৈনন্দিন রুটিন এবং পারিবারিক নোট প্রতিটি রোগীর জন্য আলাদা থাকে।",
            step4Highlight: "রোগী-ভিত্তিক ডেটা সুরক্ষা।",
            step5Title: "মুদ্রণযোগ্য গেমপ্লে সারাংশ",
            step5Desc: "পরিচর্যাকারীর পর্যালোচনা এবং পরামর্শের জন্য গেমপ্লে মেট্রিক্স সাজানো হয়।",
            step5Highlight: "শুধুমাত্র কর্মক্ষমতা ডেটা।"
        },

        kh: {
            careCircleProfiles: "Ki Profile Sumar",
            caregiverProfile: "Profile nongsumar",
            editCaregiverProfile: "Pynbna ia ka Profile nongsumar",
            editPatientProfile: "Pynbna ia ka Profile u nongpang",
            quickNavigation: "Ki bynta sumar",
            edit: "Pynbna",
            name: "Kyrteng",
            email: "Email",
            patientName: "Kyrteng u nongpang",
            ageGender: "Rta & Shynrang/Kynthei",
            relationship: "Jingiadei",
            dementiaStage: "Kyrdan jingklet",
            contact: "Phone / Contact",
            saveChanges: "Kynshew ki jingkylla",
            cancel: "Sangeh",

            home: "Iing", games: "Ki jingïalehkai", dashboard: "Ka jingïathuh jong ka jingsumar",
            signOut: "Sign out", signIn: "Sign in", startCircle: "Sdang ka jingïasumar",
            music: "Ka sur bad ka jingkynmaw",
            companionGirl: "🌸 Paralok ba sbun",
            authTagline: "Ka jingsumar jingkynmaw kaba biang.",
            authLead: "Ki lehkai, ka jingïakyrkieh bad ka jingïarap jong ki kynmaw — baroh hei kynmaw.",
            authSignIn: "Sign in sha iing ka ïingsep", authCreate: "Sdang ka ïingsep",
            authNote: "Ba dei bynta ki jingsumar, ki kynmaw bad ki nongïarap.",
            loginWelcome: "Khublei lah ïoh iing", loginHeading: "Sign in sha SmritiSetu",
            loginLead: "Ki lehkai bad jingïakyrkieh jong nong-jied ïa ngi kynthup hei nongsumar.",
            loginEmail: "Ka email", loginPassword: "Ka password",
            loginBtn: "Sign in", loginSwitch: "Bru shu?", loginSwitchLink: "Sdang ka ïingsep",
            registerTagline: "Ka jingsdang kaba ïarap", registerHeading: "Sdang ka ïingsep ba dei nongsumar",
            registerLead: "Ka ïingsep jong phi kynap ïa ka jingsumar jong nong-jied ba biang.",
            registerName: "Ka kyrteng jong phi", registerEmail: "Ka email",
            registerPassword: "Ka password", registerConfirm: "Nang seng ïa ka password",
            registerBtn: "Sdang ka ïingsep", registerSwitch: "La register noh?", registerSwitchLink: "Sign in",
            heroTagline: "Ba dei bynta ki rukom bad ki nongsumar",
            heroHeading: "Ka jingsumar ba kynmaw,", heroHeadingEm: "ban tip wa ngi kynmaw ïa ki.",
            heroLead: "Ki lehkai suk, ka jingkynmaw, bad ka dashboard kaba biang.",
            heroExplore: "Ïohi ki kynmaw", heroProgress: "Ïoh ka jingïakyrkieh", heroAddPatient: "Rung ïa u nong-jied",
            trustLine: "Ka ïing suk ba dei bynta ki nongsumar",
            storySectionTagline: "Ka dur jingsumar", storySectionHeading: "Ki por shu. Ka jingïathuh kaba por.",
            story1Title: "Leh lehkai bynta", story1Body: "Ki lehkai kaba biang da ki jingïarap.",
            story2Title: "Ïoh ka jingïakyrkieh", story2Body: "Ki dak bad ka jingïakyrkieh pynïawei ka jingsumar.",
            story3Title: "Kynthup hei nongsumar", story3Body: "Pynïaid ka ïap bad u doktor ba dei ïa ka jingïawei.",
            homeFooterSignedIn: "La sign in", homeFooterCaring: "Nongsumar",
            homeFooterRegister: "Rung ïa u nong-jied ban sdang.",
            addPatientTagline: "Mynta ka dashboard", addPatientHeading: "Ïoh ka jingïathuh bad nong-jied",
            addPatientLead: "Hei pynïasoh ka jingsumar ïa ka jingïarap.",
            labelPatientName: "Ka kyrteng u/ka nong-jied", placeholderPatientName: "Sunita Devi",
            labelAge: "Ka snem", labelGender: "Ka jingïa",
            selectGender: "Jied", optionFemale: "Ka kmie", optionMale: "U kpa",
            labelStage: "Ka jingïaheh dementia, ba phi shim",
            optionUnknown: "Ym shim", optionEarly: "Ka jingsdang", optionMiddle: "Ka jingïawei", optionAdvanced: "Ka jingïam",
            labelRelation: "Ka jingïapoh", placeholderRelation: "Ka jingïapoh",
            labelContact: "Ka number jingïapoh", placeholderContact: "Ban pynïasoh ki ripot",
            registerPatientBtn: "Rung ïa u nong-jied bad ïoh ka dashboard", addPatientNote: "Phi lah pynïawei ki jingïathuh mynta.",
            chooseGame: "Jied ka jingïalehkai kaba suk", takeTime: "Leh suki. Ym don jingïakyrkieh.",
            memoryMatch: "Pynïasoh jingkynmaw", memoryMatchCopy: "Ïohi ki dur ba dei bynta phi.",
            wordRecall: "Ka jingkynmaw", wordRecallCopy: "Ïa ban ïoh.",
            familiarThings: "Ki jingïathuh", familiarThingsCopy: "Ka lehkai kaba suk, ïa ban ïoh.",
            playWith: "Leh lehkai bad", paceNote: "Pynïaid ka kynmaw suk bad khublei ïa ki jingkypa.",
            playHeading: "Jied ka kynmaw", playLead: "Jied ba suk. Ym don jingïakyrkieh.",
            playMatchLabel: "Pynïasoh jingkynmaw", playMatchCopy: "Ïohi ki dur kaba dur. Suk bad biang.",
            gameTagline: "Ka lehkai kaba dur", findPairs: "Pynïasoh ïa ki dur",
            gameInstruction: "Leh suki bad kynmaw ïa ki kynmaw.",
            score: "Ki dak", moves: "Ki jingïaid", wonderful: "Ka jingtrei kaba bha",
            celebrationMsg: "Phi la ïohi baroh ki dur. Ka jingtrei kaba bha.", continue: "Bteng", difficulty: "Ka jingïakyrkieh",
            report: "Ka jingïathuh jong ka jingsumar", caregiverReport: "SmritiSetu ka jingïathuh",
            patientActivity: "Ka jingïathuh jong u/ka nong-jied", backHome: "← Phai sha iing", back: "Wanphai",
            patientProfile: "Ka profile u/ka nong-jied", patientId: "Ka ID",
            patientBanner: "Ïoh hei kynmaw ki jingïathuh hei jingïapoh bad u doktor. Hynrei ym dei ki jingïawei.",
            totalSessions: "Ki session", totalSessionsSub: "Baroh ki jingkynmaw",
            averageScore: "Ka dak jingrep", averageScoreSub: "Ha ki lehkai",
            latestScore: "Ka dak shu", latestScoreSub: "Ka kynmaw ba dang shen",
            engagementTagline: "Ka jingïathuh kaba suk", engagementHeading: "Ka jingkynmaw ha ki snem",
            updatedFromPlay: "Update ha ki lehkai", sessionNotes: "Ki jingïathuh session", recentActivity: "Ki kam ba dang shen",
            colDate: "Ka sngi", colGame: "Ka lehkai", colScore: "Ka dak", colDifficulty: "Ka jingïakyrkieh",
            loadingSessions: "Load hei ki session…",
            disclaimer: "SmritiSetu ïarap ïa ka jingkynmaw. Ym dei ka jingïawei.",
            close: "Kh փakk", all: "Baroh", state: "Jied ka jylla", community: "Jied ka shnong",
            play: "Pynïalehkai", pause: "Sangeh",
            warmNote: "Ki sur kiba ithuh ki lah ban pynlong ïa ka por kum ka ïing.",
            noDiagnosis: "Kane ka dei ka jingïarap, ym ka jingshah bishar da u doktor.",

            /* --- How SmritiSetu Works --- */
            howItWorksEyebrow: "Ka lynti sumar ba biang",
            howItWorksHeading: "Kumno ka SmritiSetu ka treikam",
            howItWorksSubheading: "Ka lynti kaba jem na ka jingkynmaw sha ki jingtip ba sngewthuh shaphang ka jingkoit jingkhiah.",
            step1Title: "Jied Ktien",
            step1Desc: "Jied ktien English, Hindi, Assamese, Bengali, Khasi, Manipuri, ne Mizo.",
            step1Highlight: "Multilingual interface ba don ki ktien North East.",
            step2Title: "Memory Match Activity",
            step2Desc: "Lehkai ki jingïalehkai pynïasyriem dur kiba shngain bad kiba ithuh.",
            step2Highlight: "Jinglehkai kynmaw kaba jem bad ki tiar kiba ithuh.",
            step3Title: "Ka Jingbatai Jingïalehkai",
            step3Desc: "Ka system ka peit ïa ka accuracy, por ba shim, bad ka duration man ka session.",
            step3Highlight: "Ka jingeh ka pynbeit hi da lade.",
            step4Title: "Caregiver Progress Dashboard",
            step4Desc: "Ki routine man ka sngi bad ki memory note ki sah la ka jong ha man u patient.",
            step4Highlight: "Patient-isolated data tracking.",
            step5Title: "Ka Gameplay Summary ba lah ban shon",
            step5Desc: "Ki gameplay metric la pynkhreh na ka bynta ban peit ka longing bad u doctor.",
            step5Highlight: "Tang ka data jingïalehkai."
        },

        mni: {
            careCircleProfiles: "য়েংশিনবগী প্রোফাইল",
            caregiverProfile: "য়েংশিনবগী প্রোফাইল",
            editCaregiverProfile: "য়েংশিনবগী প্রোফাইল শেমদোকউ",
            editPatientProfile: "অনাবাগী প্রোফাইল শেমদোকউ",
            quickNavigation: "য়েংশিনবগী মডিউল",
            edit: "শেমদোকউ",
            name: "মিং",
            email: "ইমেল",
            patientName: "অনাবাগী মিং",
            ageGender: "চহি অমসুং নুপা/নুপী",
            relationship: "মরী",
            dementiaStage: "স্মৃতি মাংবগী তাংকক",
            contact: "পাউ ফাওনবা",
            saveChanges: "শেমদোকপা থমিল্লু",
            cancel: "তোকউ",

            home: "Home", games: "Games", dashboard: "Care report",
            signOut: "Sign out", signIn: "Sign in", startCircle: "Account toubiyu",
            music: "Music amasung ningsing",
            companionGirl: "🌸 নুংশিরবা মরুপ",
            authTagline: "Ningsing amadi natte yawning lakpa.", authLead: "Leima, patient progress amasung mipham haibana natte — nungshiba amadi.",
            authSignIn: "Sign in toubiyu", authCreate: "Nupa account toubiyu",
            authNote: "Caregiver, mipham amasung care team-gi jaoba.",
            loginWelcome: "Nungshiba paaridaba", loginHeading: "SmritiSetu-da sign in toubiyu",
            loginLead: "Nong patient gi leima amasung progress account-da natte.",
            loginEmail: "Email", loginPassword: "Password",
            loginBtn: "Sign in", loginSwitch: "Nupa?", loginSwitchLink: "Account toubiyu",
            registerTagline: "Nungsiba matamda", registerHeading: "Caregiver account toubiyu",
            registerLead: "Account-na patient care private amasung nungsiba oikhre.",
            registerName: "Nong ming", registerEmail: "Email",
            registerPassword: "Password", registerConfirm: "Password natte oire",
            registerBtn: "Account toubiyu", registerSwitch: "Register toubijadreba?", registerSwitchLink: "Sign in",
            heroTagline: "Leiriba amasung caregiver-gi",
            heroHeading: "Care-na ningsing,", heroHeadingEm: "mamatang ningsijaba.",
            heroLead: "Nungsiba activity, nungsiba thounu, amasung natte dashboard.",
            heroExplore: "Activity ensee", heroProgress: "Progress ensee", heroAddPatient: "Patient yumphatpa",
            trustLine: "Natte activity-gi nungsiba matam",
            storySectionTagline: "Care loopki", storySectionHeading: "Nungsiba matam. Thanga phongdokpa.",
            story1Title: "Natte thalloi", story1Body: "Nungsiba, yaaoba leima, natte lakliba.",
            story2Title: "Progress ensee", story2Body: "Score amasung session history care signal oikhre.",
            story3Title: "Natte oire", story3Body: "Mipham amasung doctor-gi thougal changba.",
            homeFooterSignedIn: "Sign in tounai", homeFooterCaring: "Care touni",
            homeFooterRegister: "Patient register toullakpa.",
            addPatientTagline: "Dashboard-gi matungda", addPatientHeading: "Care touna patient-gi bae matik",
            addPatientLead: "Care-gi activity amasung progress natte oikhre.",
            labelPatientName: "Patient-gi ming", placeholderPatientName: "Sunita Devi",
            labelAge: "Mapaakta", labelGender: "Gender",
            selectGender: "Phongdokpak", optionFemale: "Nupi", optionMale: "Nupa",
            labelStage: "Dementia-gi khara, shangba matungda",
            optionUnknown: "Shangba natte", optionEarly: "Haibanda", optionMiddle: "Madungda", optionAdvanced: "Thounada",
            labelRelation: "Nong nakta", placeholderRelation: "Icha, Ipa, Caregiver",
            labelContact: "Phonnumber", placeholderContact: "Report share touri",
            registerPatientBtn: "Patient register toullakpa amasung dashboard ensee",
            addPatientNote: "Matik update toullakpahani.",
            chooseGame: "Nungsiba game ama phongdokpak", takeTime: "Nungsiba matamda leplasi.",
            memoryMatch: "Memory Match", memoryMatchCopy: "Pair phongdokpak nungsiba.",
            wordRecall: "Word Recall", wordRecallCopy: "Shana oikhre.",
            familiarThings: "Nungsiba matik", familiarThingsCopy: "Nungsiba picture activity, shana oikhre.",
            playWith: "Natte thalloi", paceNote: "Room nungsiba oiruku amasung effort-gi jaoba.",
            playHeading: "Activity ama phongdokpak", playLead: "Nungsiba ama phongdokpak. Pressure natte.",
            playMatchLabel: "Memory Match", playMatchCopy: "Picture pair phongdokpak. Nungsiba.",
            gameTagline: "Nungsiba picture activity", findPairs: "Picture pair ama",
            gameInstruction: "Nungsiba matamda leplasi amasung thawan ningsigi.",
            score: "Score", moves: "Moves", wonderful: "Yamna phajare",
            celebrationMsg: "Pair baroh phongdokkhre. Yamna phajare.", continue: "Makhoi", difficulty: "Difficulty level",
            report: "Care report", caregiverReport: "SmritiSetu caregiver report",
            patientActivity: "Patient activity-gi thengna oire", backHome: "← য়ুমদা হনবা", back: "হনবা",
            patientProfile: "Patient profile", patientId: "Patient ID",
            patientBanner: "Specialist-gi thougal-da pattern yumphatpa. Diagnosis natte.",
            totalSessions: "Houjik thokpa session", totalSessionsSub: "Baroi activity",
            averageScore: "Lakpa score", averageScoreSub: "Game baroi-da",
            latestScore: "Nupa score", latestScoreSub: "Shana activity",
            engagementTagline: "Nungsiba signal", engagementHeading: "Matamda engagement",
            updatedFromPlay: "Game-da update", sessionNotes: "Session notes", recentActivity: "Houjik thokpa thabak",
            colDate: "Chaochirak", colGame: "Game", colScore: "Score", colDifficulty: "Difficulty",
            loadingSessions: "Session load oini…",
            disclaimer: "SmritiSetu haibanda engagement-da ikai. Diagnosis natte.",
            close: "Close", all: "Pumnamak", state: "State ama", community: "Community ama",
            play: "Play", pause: "Pause",
            warmNote: "Ningsingba sound-na yumgi oina pangthokpa ngamgani.",
            noDiagnosis: "Masi medical diagnosis natte.",

            /* --- How SmritiSetu Works --- */
            howItWorksEyebrow: "য়েংশিনবগী থৌওং",
            howItWorksHeading: "স্মৃতিসেতুনা কমদৌনা থবক তৌবগে",
            howItWorksSubheading: "ৱাখলগী শান্ন-খোৎনবদগী কান্নবা য়েংশিনবগী ৱাফম ফাওবগী অয়াম্বা খোঙচৎ।",
            step1Title: "ল Lon খনবীয়ু",
            step1Desc: "ইংলিশ, হিন্দি, অসমীয়া, বেঙ্গলী, খাসি, মণিপুরী নত্রগা মিজো খনবীয়ু।",
            step1Highlight: "নোংপোক-অৱাং লোনশিংগী তেংবাং য়াওবা মলতি-লেংগুয়েজ ইন্তারফেস।",
            step2Title: "মেমোরি মেচ শান্নবীয়ু",
            step2Desc: "অনাবনা খংনবা নাৎকী পোৎলমশিংগা লোয়ননা কার্ড মিলহনবগী শান্নবা শান্নৈ।",
            step2Highlight: "খংনবা পোৎলমশিংগা লোয়ননা শান্ত ওইবা মেমোরি শান্নবা।",
            step3Title: "শানাবগী মেত্রিক্স য়েংশিনবা",
            step3Desc: "লোইশিনখিবা শান্নবা খুদিংগী এক্যুরেসি, মতম অমসুং চাং য়েংশিল্লি।",
            step3Highlight: "শানাবগী অকন্বা মশানা শেমদোকই।",
            step4Title: "কেয়রগিভরগী চাউখৎলকপা ড্যাশবোর্ড",
            step4Desc: "নুমিৎ খুদিংগী থবক অমসুং ইমুংগী নোটশিং অনাবা খুদিংগী তোখায়না থম্মী।",
            step4Highlight: "অনাবা-তোখায়বা দেতা সেফটি।",
            step5Title: "প্রিন্ত তৌবা য়াবা শানাবগী সারংশ",
            step5Desc: "কেয়রগিভর অমসুং দোক্তরগা তান্ননবগীদমক শানাবগী মেত্রিক্স শেম্মী।",
            step5Highlight: "শানাবগী দেতা খক্তনি।"
        },

        lus: {
            careCircleProfiles: "Enkawltu Profile-te",
            caregiverProfile: "Enkawltu Profile",
            editCaregiverProfile: "Enkawltu Profile siamthat rawh",
            editPatientProfile: "Damlo Profile siamthat rawh",
            quickNavigation: "Enkawlna Module-te",
            edit: "Siamthat rawh",
            name: "Hming",
            email: "Email",
            patientName: "Damlo Hming",
            ageGender: "Kum & Mipa/Hmeichhia",
            relationship: "Inlaichinna",
            dementiaStage: "Hriatrengna bo chin",
            contact: "Biakpawhna",
            saveChanges: "Siamthat vawng tha rawh",
            cancel: "Thulh rawh",

            home: "In", games: "Game te", dashboard: "Care report",
            signOut: "Sign out", signIn: "Sign in", startCircle: "Account siam rawh",
            music: "Music leh hriatna",
            companionGirl: "🌸 Thian ngainatawm",
            authTagline: "Hriatna enkawl dan tha.", authLead: "Game, patient progress leh huan tana tangkawp — chawl hmun pakhat.",
            authSignIn: "Ka account-ah sign in rawh", authCreate: "Account thar siam rawh",
            authNote: "Caregiver, huan leh care team tan.",
            loginWelcome: "Kal leh sual che u", loginHeading: "SmritiSetu-ah sign in rawh",
            loginLead: "I patient game leh progress i account nena inzawm ni reng.",
            loginEmail: "Email", loginPassword: "Password",
            loginBtn: "Sign in", loginSwitch: "Thar nge?", loginSwitchLink: "Account siam rawh",
            registerTagline: "Ṭanpui tiraw", registerHeading: "Caregiver account siam rawh",
            registerLead: "I account chuan patient care private leh awlsam tih a ni.",
            registerName: "I hming", registerEmail: "Email",
            registerPassword: "Password", registerConfirm: "Password ngen rawh",
            registerBtn: "Account siam rawh", registerSwitch: "La register tawh em?", registerSwitchLink: "Sign in",
            heroTagline: "Boruak upa leh caregiver tan",
            heroHeading: "Enkawl thiamna ti hriatna,", heroHeadingEm: "chuan an hriat ta se.",
            heroLead: "Game awlsam, hriatna, leh family dashboard awlsam.",
            heroExplore: "Game en rawh", heroProgress: "Progress en rawh", heroAddPatient: "Patient rawn rawh",
            trustLine: "Nitin progress tan hmun ṭha",
            storySectionTagline: "Care loop", storySectionHeading: "Tuk tlem. Hriatna ṭha.",
            story1Title: "Inkawr chuan game rawh", story1Body: "Game ṭha, lawm a ti, examination a ni lo.",
            story2Title: "Progress hre rawh", story2Body: "Score leh session history chuan nitin game-a care signal a ni.",
            story3Title: "Inzawm ni reng rawh", story3Body: "Huan leh doctor kawm-na chuan thil danglam chungchang.",
            homeFooterSignedIn: "Sign in tawh", homeFooterCaring: "Enkawl ni",
            homeFooterRegister: "Patient register rawn rawh.",
            addPatientTagline: "Dashboard hmaa", addPatientHeading: "I enkawl tu chungchang hrilin rawh",
            addPatientLead: "An game leh progress care circle nena inzawm a ni.",
            labelPatientName: "Patient hming pawimawh", placeholderPatientName: "Sunita Devi",
            labelAge: "Chibai", labelGender: "Gender",
            selectGender: "Thlang rawh", optionFemale: "Hmeichhia", optionMale: "Pasal",
            labelStage: "Dementia stage, hre chuan",
            optionUnknown: "Hre lo", optionEarly: "Tiraw", optionMiddle: "Hnuaiah", optionAdvanced: "Zawnna",
            labelRelation: "I inzawmna", placeholderRelation: "Nau, pa, caregiver",
            labelContact: "Phone number", placeholderContact: "Report share tan",
            registerPatientBtn: "Patient register rawn rawh leh dashboard en rawh",
            addPatientNote: "I tih tur chuan thlang tur an ni.",
            chooseGame: "Game awlsam pakhat thlang rawh", takeTime: "Zawi zawi in play rawh.",
            memoryMatch: "Memory Match", memoryMatchCopy: "I chibai ang chuan pair hmu rawh.",
            wordRecall: "Word Recall", wordRecallCopy: "Tun ṭum lo hma.",
            familiarThings: "Hriat mek tur", familiarThingsCopy: "Picture activity ṭha, tun ṭum lo.",
            playWith: "Nena game", paceNote: "Khawm ṭha siam rawh leh chibai in tih rawh.",
            playHeading: "Game pakhat thlang rawh", playLead: "Awlsam tur thlang rawh. Chhuang a nei lo.",
            playMatchLabel: "Memory Match", playMatchCopy: "Picture pair hmu rawh. Awlsam leh ṭha.",
            gameTagline: "Picture hriatna game", findPairs: "Picture pair te zawm rawh",
            gameInstruction: "Zawi zawi in play rawh leh kha siam rawh.",
            score: "Score", moves: "Moves", wonderful: "Tihfel tak",
            celebrationMsg: "Pair zawng zawng i hmu tawh. Ṭha hle.", continue: "Kal zel", difficulty: "Difficulty level",
            report: "Caregiver report", caregiverReport: "SmritiSetu caregiver report",
            patientActivity: "Patient activity hriselna", backHome: "← In lam pan rawh", back: "Kir leh",
            patientProfile: "Patient profile", patientId: "Patient ID",
            patientBanner: "Pattern te chu specialist nena biak chuan sawi rawh. Diagnosis a ni lo.",
            totalSessions: "Session zawng zawng", totalSessionsSub: "Hrilh mek activity",
            averageScore: "Score tlan tlan", averageScoreSub: "Game zawng zawng ah",
            latestScore: "Score thar", latestScoreSub: "Tharh zawng activity",
            engagementTagline: "Signal mak", engagementHeading: "Ṭum engkim-a engagement",
            updatedFromPlay: "Game atang update", sessionNotes: "Session notes", recentActivity: "Thil thleng thar",
            colDate: "Ni", colGame: "Game", colScore: "Score", colDifficulty: "Difficulty",
            loadingSessions: "Session load ni mek…",
            disclaimer: "SmritiSetu chuan engagement-ah tangkawp a pe. Diagnosis a ni lo.",
            close: "Close", all: "Zawng zawng", state: "State thlang rawh", community: "Community thlang rawh",
            play: "Play", pause: "Pause",
            warmNote: "Aw ring hre rengte chuan in angin an ti thei.",
            noDiagnosis: "Hei hi tanpuina a ni, medical diagnosis a ni lo.",

            /* --- How SmritiSetu Works --- */
            howItWorksEyebrow: "Enkawlna Kawng",
            howItWorksHeading: "SmritiSetu Hnathawh Dan",
            howItWorksSubheading: "Rilru sawizawina atanga enkawlna hriatthiamna atana kawng awlsam tak.",
            step1Title: "Tawng Thlang Rawh",
            step1Desc: "English, Hindi, Assamese, Bengali, Khasi, Manipuri, emaw Mizo thlang rawh.",
            step1Highlight: "North East tawng puitu multilingual interface.",
            step2Title: "Memory Match Khelh",
            step2Desc: "Damlovin hriat ngai thlalak te zawngchhuah game an khel thei.",
            step2Highlight: "Thil hriat ngai hmanga rilru chawlhna game.",
            step3Title: "Gameplay Metric Chhui Zui",
            step3Desc: "Session zawh tawh a accuracy, hun hman ral leh duration a chhui zui zel.",
            step3Highlight: "Game harsa zawng a in-adjust chawp zel.",
            step4Title: "Caregiver Progress Dashboard",
            step4Desc: "Nitin nunphung leh chhungkaw note-te patient tin tan a hrangin a vawng.",
            step4Highlight: "Patient mal data isolation.",
            step5Title: "Print theih Gameplay Summary",
            step5Desc: "Enkawltu leh doctor tana hriat thiam awlsam gameplay summary.",
            step5Highlight: "Game result chauh a ni."
        },
    };

    const languageNames = {
        en: "English", hi: "हिन्दी", as: "অসমীয়া",
        bn: "বাংলা", kh: "Khasi", mni: "মৈতৈলোন", lus: "Mizo",
    };

    const phraseCatalog = {
        "Back home": {
            hi: "होम पर वापस", as: "ঘৰলৈ উভতক", bn: "হোমে ফিরে যান",
            kh: "Phai sha iing", mni: "য়ুমদা হনবা", lus: "In lam pan rawh"
        },
        "← Back home": {
            hi: "← होम पर वापस", as: "← ঘৰলৈ উভতক", bn: "← হোমে ফিরে যান",
            kh: "← Phai sha iing", mni: "← য়ুমদা হনবা", lus: "← In lam pan rawh"
        },
        "Back": {
            hi: "वापस", as: "উভতি", bn: "ফিরে",
            kh: "Leit biang", mni: "হনবা", lus: "Kir leh"
        },
        "back": {
            hi: "वापस", as: "উভতি", bn: "ফিরে",
            kh: "Leit biang", mni: "হনবা", lus: "Kir leh"
        },
        "Back to Games": {
            hi: "खेलों पर वापस", as: "খেললৈ উভতক", bn: "খেলায় ফিরে যান",
            kh: "Phai sha ki jingleh", mni: "সানাবদা হনবা", lus: "Infiamna lam pan rawh"
        },
        "← Back to Games": {
            hi: "← खेलों पर वापस", as: "← খেললৈ উভতক", bn: "← খেলায় ফিরে যান",
            kh: "← Phai sha ki jingleh", mni: "← সানাবদা হনবা", lus: "← Infiamna lam pan rawh"
        },
        // Top Ribbon & Header
        "SmritiSetu | Cognitive Gaming & Memory Care": {
            hi: "SmritiSetu | संज्ञानात्मक खेल एवं स्मृति देखभाल",
            as: "SmritiSetu | স্মৃতি খেল আৰু যত্ন পৰ্টেল",
            bn: "SmritiSetu | স্মৃতি খেলা ও যত্ন পোর্টাল",
            kh: "SmritiSetu | Jingleh jingmut bad sumar jingkynmaw",
            mni: "SmritiSetu | স্মৃতি অমসুং ৱাখলগী সানাবা",
            lus: "SmritiSetu | Hriatrengna infiamna leh enkawlna"
        },
        "Elder Assistive Technology & Neuro-Care Initiative • North Eastern Region": {
            hi: "वरिष्ठ सहायक तकनीक एवं न्यूरो-केयर पहल • पूर्वोत्तर क्षेत्र",
            as: "জ্যেষ্ঠ সহায়ক প্ৰযুক্তি আৰু যত্ন পদক্ষেপ • উত্তৰ-পূব অঞ্চল",
            bn: "বয়স্ক সহায়ক প্রযুক্তি ও নিউরো-কেয়ার উদ্যোগ • উত্তর-পূর্ব অঞ্চল",
            kh: "Ka jingiarap ia ki tymmen ha North East",
            mni: "অহলশিংগী তেংবাং অমসুং অৱাং-নোংপোক লমদমগী থৌরাং",
            lus: "Upate tanpuitu technology • North East Region"
        },
        "Text Size:": {
            hi: "अक्षर आकार:", as: "পাঠৰ আকাৰ:", bn: "অক্ষরের আকার:",
            kh: "Jingheh dak:", mni: "ময়িক্কী অচৌবা:", lus: "Hawrawp len lam:"
        },
        "স্মৃতিসেতু • Cognitive Care Portal": {
            hi: "SmritiSetu • संज्ञानात्मक देखभाल पोर्टल", as: "স্মৃতিসেতু • স্মৃতি যত্ন পৰ্টেল",
            bn: "স্মৃতিসেতু • জ্ঞানীয় যত্ন পোর্টাল", kh: "SmritiSetu • Ka portal sumar jingmut",
            mni: "স্মৃতিসেতু • স্মৃতি য়েংশিনবগী পোৰ্টেল", lus: "SmritiSetu • Hriatrengna enkawlna",
            en: "SmritiSetu • Cognitive Care Portal"
        },
        "SmritiSetu • Cognitive Care Portal": {
            hi: "SmritiSetu • संज्ञानात्मक देखभाल पोर्टल", as: "স্মৃতিসেতু • স্মৃতি যত্ন পৰ্টেল",
            bn: "স্মৃতিসেতু • জ্ঞানীয় যত্ন পোর্টাল", kh: "SmritiSetu • Ka portal sumar jingmut",
            mni: "স্মৃতিসেতু • স্মৃতি য়েংশিনবগী পোৰ্টেল", lus: "SmritiSetu • Hriatrengna enkawlna",
            en: "SmritiSetu • Cognitive Care Portal"
        },
        "স্মৃতিসেতু": {
            hi: "SmritiSetu", as: "স্মৃতিসেতু", bn: "স্মৃতিসেতু", kh: "SmritiSetu", mni: "স্মৃতিসেতু", lus: "SmritiSetu", en: "SmritiSetu"
        },

        // Navigation
        // Sidebar Navigation & Profiles
        "Care Navigation": { hi: "देखभाल नेविगेशन", as: "যত্ন নেভিগেচন", bn: "যত্ন নেভিগেশন", kh: "Jingïalam Sumar", mni: "য়েংশিনবগী লমজিংবা", lus: "Enkawlna Hruaitu" },
        "Care Circle Profiles": { hi: "देखभाल मंडल प्रोफ़ाइल", as: "যত্ন মণ্ডল প্ৰ'ফাইল", bn: "যত্ন বৃত্ত প্রোফাইল", kh: "Ki Profile Sumar", mni: "য়েংশিনবগী প্রোফাইল", lus: "Enkawltu Profile-te" },
        "Caregiver Profile": { hi: "देखभालकर्ता प्रोफ़ाइल", as: "পৰিচৰ্যাকাৰী প্ৰ'ফাইল", bn: "পরিচর্যাকারী প্রোফাইল", kh: "Profile nongsumar", mni: "য়েংশিনবগী প্রোফাইল", lus: "Enkawltu Profile" },
        "Patient Profile": { hi: "मरीज़ प्रोफ़ाइल", as: "ৰোগীৰ প্ৰ'ফাইল", bn: "রোগীর প্রোফাইল", kh: "Profile u nongpang", mni: "অনাবাগী প্রোফাইল", lus: "Damlo Profile" },
        "Edit Caregiver Profile": { hi: "देखभालकर्ता प्रोफ़ाइल संपादित करें", as: "পৰিচৰ্যাকাৰী প্ৰ'ফাইল সম্পাদনা কৰক", bn: "পরিচর্যাকারী প্রোফাইল সম্পাদনা করুন", kh: "Pynbna ia ka Profile nongsumar", mni: "য়েংশিনবগী প্রোফাইল শেমদোকউ", lus: "Enkawltu Profile siamthat rawh" },
        "Edit Patient Profile": { hi: "मरीज़ प्रोफ़ाइल संपादित करें", as: "ৰোগীৰ প্ৰ'ফাইল সম্পাদনা কৰক", bn: "রোগীর প্রোফাইল সম্পাদনা করুন", kh: "Pynbna ia ka Profile u nongpang", mni: "অনাবাগী প্রোফাইল শেমদোকউ", lus: "Damlo Profile siamthat rawh" },
        "Care Modules": { hi: "देखभाल मॉड्यूल", as: "যত্ন মডিউল", bn: "যত্ন মডিউল", kh: "Ki bynta sumar", mni: "য়েংশিনবগী মডিউল", lus: "Enkawlna Module-te" },
        "Patient Name": { hi: "मरीज़ का नाम", as: "ৰোগীৰ নাম", bn: "রোগীর নাম", kh: "Kyrteng u nongpang", mni: "অনাবাগী মিং", lus: "Damlo Hming" },
        "Age & Sex": { hi: "उम्र और लिंग", as: "বয়স আৰু লিংগ", bn: "বয়স ও লিঙ্গ", kh: "Rta & Jinglong shynrang/kynthei", mni: "চহি অমসুং নুপা/নুপী", lus: "Kum & Mipa/Hmeichhia" },
        "Dementia Stage": { hi: "डिमेंशिया चरण", as: "স্মৃতিভ্ৰংশৰ পৰ্যায়", bn: "ডিমেনশিয়া পর্যায়", kh: "Kyrdan jingklet", mni: "স্মৃতি মাংবগী তাংকক", lus: "Hriatrengna bo chin" },
        "Contact": { hi: "संपर्क", as: "যোগাযোগ", bn: "যোগাযোগ", kh: "Phone / Contact", mni: "পাউ ফাওনবা", lus: "Biakpawhna" },
        "Save Changes": { hi: "परिवर्तन सहेजें", as: "পৰিৱৰ্তন সংৰক্ষণ কৰক", bn: "পরিবর্তন সংরক্ষণ করুন", kh: "Kynshew ki jingkylla", mni: "শেমদোকপা থমিল্লু", lus: "Siamthat vawng tha rawh" },
        "Cancel": { hi: "रद्द करें", as: "বাতিল কৰক", bn: "বাতিল করুন", kh: "Sangeh", mni: "তোকউ", lus: "Thulh rawh" },
        "Edit": { hi: "संपादित करें", as: "সম্পাদনা কৰক", bn: "সম্পাদনা করুন", kh: "Pynbna", mni: "শেমদোকউ", lus: "Siamthat rawh" },
        "Home": { hi: "होम", as: "ঘৰ", bn: "হোম", kh: "Iing", mni: "য়ুম", lus: "In" },
        "Games": { hi: "खेल", as: "খেল", bn: "খেলা", kh: "Jingleh", mni: "সানাবা", lus: "Infiamna" },
        "Family Care": { hi: "पारिवारिक देखभाल", as: "পৰিয়াল যত্ন", bn: "পারিবারিক যত্ন", kh: "Ka sumar iing", mni: "ইমুংগী য়েংশিনবা", lus: "Chhungkua enkawlna" },
        "Doctor Report": { hi: "डॉक्टर रिपोर्ट", as: "চিকিৎসকৰ প্ৰতিবেদন", bn: "ডাক্তার রিপোর্ট", kh: "Report u Doctor", mni: "দোক্তরগী রিপোর্ট", lus: "Doctor report" },
        "🎵 Music": { hi: "🎵 संगीत", as: "🎵 সংগীত", bn: "🎵 সঙ্গীত", kh: "🎵 Rwai", mni: "🎵 ঈশৈ", lus: "🎵 Rimawi" },
        "Music": { hi: "संगीत", as: "সংগীত", bn: "সঙ্গীত", kh: "Rwai", mni: "ঈশৈ", lus: "Rimawi" },
        "Music & memories": { hi: "संगीत और यादें", as: "সংগীত আৰু স্মৃতি", bn: "সঙ্গীত ও স্মৃতি", kh: "Rwai bad jingkynmaw", mni: "ঈশৈ অমসুং নিংশিংবা", lus: "Rimawi leh hriatrengna" },
        "Bring a familiar sound into the room": {
            hi: "कमरे में एक परिचित मधुर संगीत लाएं", as: "কোঠাটোলৈ চিনাকি সুৰ লৈ আহক", bn: "ঘরে একটি পরিচিত সুর এনে দিন",
            kh: "Wanrah ia ka sur kaba ithuh", mni: "চিনবা খোন্থোক পুশিল্লকউ", lus: "Rimawi hriat lar tak ri tir rawh"
        },
        "Choose a state": { hi: "राज्य चुनें", as: "ৰাজ্য বাছক", bn: "রাজ্য বেছে নিন", kh: "Jied ia ka jylla", mni: "রাজ্য খনবীয়ু", lus: "State thlang rawh" },
        "Choose a community": { hi: "समुदाय चुनें", as: "সম্প্ৰদায় বাছক", bn: "সম্প্রদায় বেছে নিন", kh: "Jied ia ka kynhun", mni: "খুনাই খনবীয়ু", lus: "Community thlang rawh" },
        "All North East": { hi: "संपूर्ण पूर्वोत्तर", as: "সকলো উত্তৰ-পূব", bn: "সকল উত্তর-পূর্ব", kh: "Baroh ka North East", mni: "অৱাং-নোংপোক পুম্নমক", lus: "North East zawng zawng" },
        "All communities": { hi: "सभी समुदाय", as: "সকলো সম্প্ৰদায়", bn: "সকল সম্প্রদায়", kh: "Baroh ki kynhun", mni: "খুনাই পুম্নমক", lus: "Hnam zawng zawng" },
        "Sign out": { hi: "साइन आउट", as: "বাহিৰ হওক", bn: "সাইন আউট", kh: "Mih noh", mni: "থোকপা", lus: "Chhuak rawh" },
        "Sign in": { hi: "साइन इन", as: "প্ৰৱেশ কৰক", bn: "সাইন ইন", kh: "Rung", mni: "চংবা", lus: "Lut rawh" },
        "Start your care circle": { hi: "देखभाल मंडल शुरू करें", as: "আপোনাৰ যত্ন চক্ৰ আৰম্ভ কৰক", bn: "যত্ন বৃত্ত শুরু করুন", kh: "Sdang kynhun sumar", mni: "য়েংশিনবগী চক্ৰ হৌগনি", lus: "Enkawltu huang tan rawh" },
        "Close": { hi: "बंद करें", as: "বন্ধ", bn: "বন্ধ", kh: "Khad", mni: "থিংজিনবা", lus: "Khar rawh" },

        // Home Alignment Bar
        "Care Focus: Dementia & Memory Assistance": {
            hi: "देखभाल का केंद्र: डिमेंशिया और स्मृति सहायता",
            as: "যত্নৰ কেন্দ্ৰ: স্মৃতিভ্ৰংশ আৰু স্মৃতি সাহায্য",
            bn: "যত্নের কেন্দ্র: ডিমেনশিয়া ও স্মৃতি সহায়তা",
            kh: "Ka jingiarap kiba klet jingmut",
            mni: "মীৎয়েং: স্মৃতি মাংবা অমসুং তেংবাং",
            lus: "Enkawlna bik: Hriatna chhe tanpuitu"
        },
        "Assessment Framework: Structured Geriatric Cognitive Recall": {
            hi: "मूल्यांकन ढाँचा: संरचित बुजुर्ग संज्ञानात्मक स्मरण",
            as: "মূল্যাংকন কাঠামো: জ্যেষ্ঠ স্মৃতি স্মৰণ",
            bn: "মূল্যায়ন কাঠামো: প্রবীণ স্মৃতি স্মরণ",
            kh: "Ka jingthew ia ka jingkynmaw",
            mni: "য়েনশিনবা: স্মৃতি অমসুং ৱাখল চাংয়েং",
            lus: "Hriatna teh dan felfai"
        },
        "Activity Tracking: Structured Memory Activity Sessions": {
            hi: "गतिविधि ट्रैकिंग: संरचित स्मृति सत्र",
            as: "কাৰ্য্যকলাপ অনুসৰণ: সুশৃংখলিত স্মৃতি সত্ৰ",
            bn: "কার্যকলাপ ট্র্যাকিং: সুসংগঠিত স্মৃতি সেশন",
            kh: "Ka jingbatai kam jingkynmaw",
            mni: "থবক য়েংশিনবা: সুশৃংখল স্মৃতি তাঙ্কক",
            lus: "Activity chhui zui: Hriatna session"
        },
        "Privacy First: Secure Family Care Circle": {
            hi: "गोपनीयता प्राथमिकता: सुरक्षित पारिवारिक देखभाल मंडल",
            as: "গোপনীয়তা প্ৰথম: সুৰক্ষিত পৰিয়াল চক্ৰ",
            bn: "গোপনীয়তা প্রথম: সুরক্ষিত পরিবার চক্র",
            kh: "Ka jingriem kaba shngain",
            mni: "লোয়ননা থম্বা: মশেলগী ইমুং মনুং",
            lus: "Chhungkua enkawlna him"
        },
        "Privacy First: Secure Patient-Isolated Care Circle": {
            hi: "गोपनीयता प्राथमिकता: सुरक्षित मरीज़-पृथक देखभाल मंडल",
            as: "গোপনীয়তা প্ৰথম: সুৰক্ষিত ৰোগী-পৃথক যত্ন চক্ৰ",
            bn: "গোপনীয়তা প্রথম: সুরক্ষিত রোগী-পৃথক যত্ন চক্র",
            kh: "Ka jingriem kaba shngain: Patient data ba la pynkyrpang",
            mni: "লোয়ননা থম্বা: তোখায়বা অনাবাগী যত্ন মণ্ডল",
            lus: "Privacy hmasa: Damlo hran enkawlna him"
        },
        "Inclusion: 7 Regional NE Languages with Audio": {
            hi: "समावेशन: ऑडियो सहित 7 पूर्वोत्तर क्षेत्रीय भाषाएँ",
            as: "অন্তৰ্ভুক্তি: অডিঅ'সহ ৭টা আঞ্চলিক উত্তৰ-পূব ভাষা",
            bn: "অন্তর্ভুক্তি: অডিও সহ ৭টি উত্তর-পূর্ব আঞ্চলিক ভাষা",
            kh: "7 tylli ki ktien bad ki sur",
            mni: "লোন ৭ অমসুং খুজিল খোন্থোক",
            lus: "North East tawng chi 7 leh rimawi"
        },
        "Inclusion: Multilingual interface with selected North East Indian language support": {
            hi: "समावेशन: पूर्वोत्तर भारतीय भाषा समर्थन सहित बहुभाषी इंटरफ़ेस",
            as: "অন্তৰ্ভুক্তি: উত্তৰ-পূব ভাৰতীয় ভাষাৰ সমৰ্থনসহ বহুভাষিক আন্তঃপৃষ্ঠ",
            bn: "অন্তর্ভুক্তি: উত্তর-পূর্ব ভারতীয় ভাষার সমর্থনসহ বহুভাষিক ইন্টারফেস",
            kh: "Multilingual interface ba don ki ktien North East",
            mni: "নোংপোক-অৱাং লোনশিংগী তেংবাং য়াওবা মলতি-লেংগুয়েজ ইন্তারফেস",
            lus: "North East tawng puitu multilingual interface"
        },

        // Home Emotional Banner
        "🌸 Daily Joy & Warmth": {
            hi: "दैनिक आनंद और स्नेह", as: "দৈনিক আনন্দ আৰু মৰম", bn: "প্রতিদিনের আনন্দ ও উষ্ণতা",
            kh: "Jingkmen man ka sngi", mni: "নুমিৎ খুদিংগী হরাওবা অমসুং নুংশিবা", lus: "Nitin hlimna leh hmangaihna"
        },
        "Daily Joy & Warmth": {
            hi: "दैनिक आनंद और स्नेह", as: "দৈনিক আনন্দ আৰু মৰম", bn: "প্রতিদিনের আনন্দ ও উষ্ণতা",
            kh: "Jingkmen man ka sngi", mni: "নুমিৎ খুদিংগী হরাওবা অমসুং নুংশিবা", lus: "Nitin hlimna leh hmangaihna"
        },
        "Caring Moments • Everyday Warmth": {
            hi: "देखभाल के पल • रोज़ाना का स्नेह", as: "যত্নৰ পল • প্ৰতিদিনৰ মৰম", bn: "যত্নের মুহূর্ত • প্রতিদিনের উষ্ণতা",
            kh: "Ki por sumar • Jingieit man ka sngi", mni: "নুংশিবগী তাঙ্কক • নোংমগী মীনুংশি", lus: "Enkawl hun • Nitin hmangaihna"
        },
        "\"Your warm smile brings sunshine into our home. We love you so much!\"": {
            hi: "\"आपकी प्यारी मुस्कान हमारे घर में धूप जैसी रोशनी लाती है। हम आपसे बहुत प्यार करते हैं!\"",
            as: "\"আপোনাৰ মিঠা হাঁহিয়ে আমাৰ ঘৰলৈ পোহৰ আনে। আমি আপোনাক বৰ ভাল পাওঁ!\"",
            bn: "\"আপনার মিষ্টি হাসি আমাদের ঘরে আলো এনে দেয়। আমরা আপনাকে অনেক ভালোবাসি!\"",
            kh: "\"Ka jingrkhie jong phi ka pynshai ia ka iing. Ngi ieit eh ia phi!\"",
            mni: "\"নহাক্কী নোক্ত্ৰিম্বা মমিদুনা ঐখোয়গী য়ুমদা নুমিৎকী মঙাল পুরক্কী। ঐখোয়না নহাকপু য়াম্না নুংশি!\"",
            lus: "\"I hmel hlim khan kan in a tichhangkang. Kan hmangaih lutuk che!\""
        },
        "\"Take a deep breath and relax your shoulders. Every peaceful memory shared together is a gift. Let's make today comfortable, quiet, and happy.\"": {
            hi: "\"गहरी सांस लें और तनाव मुक्त रहें। साथ बिताई हर शांतिपूर्ण याद एक उपहार है। आइए आज का दिन सुखद और आनंदमय बनाएं।\"",
            as: "\"দীঘলকৈ উশাহ লওক আৰু শান্ত হওক। একেলগে কটোৱা প্ৰতিটো স্মৃতি এক উপহাৰ। আজিৰ দিনটো আনন্দময় কৰোঁ আহক।\"",
            bn: "\"গভীর শ্বাস নিন এবং শান্ত থাকুন। একসাথে কাটানো প্রতিটি সুন্দর স্মৃতি একটি উপহার। আজকের দিনটি আনন্দময় হোক।\"",
            kh: "\"Kynmaw ban shongthait suk. Baroh ki jingkynmaw kiba ngi iadon lang ki long ka jingkyrkhu.\"",
            mni: "\"নুংঙাইনা পোথারবীয়ু। ঐখোয়না পুননা পুন্সি চুপ্পা নিংশিংবা মতম অসি খুদোলনি।\"",
            lus: "\"Hahdam takin thawk la la. Hriatrengna hlu tak kan insem hi thilpek a ni.\""
        },
        "Care Circle Active": {
            hi: "देखभाल मंडल सक्रिय", as: "যত্ন চক্ৰ সক্ৰিয়", bn: "কেয়ার সার্কেল সক্রিয়",
            kh: "Kynhun sumar ka trei", mni: "য়েংশিনবা মীয়াম এক্তিব ওইরি", lus: "Enkawltu chhungkua an inpeih"
        },
        "First Session Ready": {
            hi: "पहला सत्र तैयार", as: "প্ৰথম সত্ৰ সাজু", bn: "প্রথম সেশন প্রস্তুত",
            kh: "Ka session kaba nyngkong ka la biang", mni: "অহানবা তাঙ্কক শেমরে", lus: "Session hmasa ber a inpeih"
        },

        // Hero Section
        "Cognitive Gaming & Memory Assistance Platform • NER": {
            hi: "संज्ञानात्मक खेल एवं स्मृति सहायता मंच • पूर्वोत्तर",
            as: "স্মৃতি খেল আৰু মানসিক যত্ন মঞ্চ • উত্তৰ-পূব",
            bn: "স্মৃতি খেলা ও মানসিক যত্ন প্ল্যাটফর্ম • উত্তর-পূর্ব",
            kh: "Ka platform jingleh jingmut • North East",
            mni: "স্মৃতি সানাবা অমসুং ৱাখলগী তেংবাং • অৱাং-নোংপোক",
            lus: "Hriatrengna infiamna leh puitu platform • NER"
        },
        "Care that remembers,": {
            hi: "देखभाल जो याद रखती है,", as: "যত্ন যিয়ে মনত ৰাখে,", bn: "যত্ন যা মনে রাখে,",
            kh: "Ka jingsumar kaba kynmaw,", mni: "নিংশিংবা য়েংশিনবা,", lus: "Enkawlna hriatreng nei,"
        },
        "so they feel remembered.": {
            hi: "ताकि वे अपनापन महसूस करें।", as: "যাতে তেওঁলোকে আপোনত্ব অনুভৱ কৰে।", bn: "যাতে তারা আপন বোধ করে।",
            kh: "ba kin sngew ba la ieit.", mni: "মখোয়না নুংশিবা ফংহনবা।", lus: "theihreng an nih an inhriat theih nan."
        },
        "A calm, culturally grounded cognitive therapy companion designed for elders with dementia and their care circles.": {
            hi: "डिमेंशिया से जूझ रहे बुजुर्गों और उनके देखभालकर्ताओं के लिए एक शांत, सांस्कृतिक रूप से समृद्ध संज्ञानात्मक साथी।",
            as: "স্মৃতিভ্ৰংশত ভোগা জ্যেষ্ঠ আৰু তেওঁলোকৰ পৰিয়ালৰ বাবে এক শান্ত, সাংস্কৃতিকভাৱে উপযুক্ত সংগী।",
            bn: "ডিমেনশিয়ায় আক্রান্ত প্রবীণ ও তাদের পরিবারের জন্য একটি শান্ত, সাংস্কৃতিক স্মৃতি সঙ্গী।",
            kh: "U paralok ba sumar ia ki tymmen kiba don jingeh ha ka jingmut.",
            mni: "স্মৃতি মাংলবা অহলশিং অমসুং ইমুং মনুংগী শান্ত ওইবা সংগী।",
            lus: "Dementia nei upate leh an enkawltute tana duan thian tha tak."
        },
        "🧓 Start Patient Memory Activity →": {
            hi: "🧓 मरीज़ की स्मृति गतिविधि शुरू करें →", as: "🧓 ৰোগীৰ স্মৃতি খেল আৰম্ভ কৰক →", bn: "🧓 রোগীর স্মৃতি কার্যক্রম শুরু করুন →",
            kh: "🧓 Sdang ia ka kam jingkynmaw →", mni: "🧓 রুগীগী স্মৃতি সানাবা হৌগনি →", lus: "🧓 Damlo hriatrengna activity tan rawh →"
        },
        "🩺 View Doctor Clinical Report": {
            hi: "🩺 डॉक्टर क्लिनिकल रिपोर्ट देखें", as: "🩺 চিকিৎসকৰ ক্লিনিকেল প্ৰতিবেদন চাওক", bn: "🩺 ডাক্তারের ক্লিনিক্যাল রিপোর্ট দেখুন",
            kh: "🩺 Peit ia ka report u Doctor", mni: "🩺 দোক্তরগী ক্লিনিকেল রিপোর্ট য়েংবীয়ু", lus: "🩺 Doctor clinical report en rawh"
        },
        "View Gameplay Progress Summary": {
            hi: "गेमप्ले प्रगति सारांश देखें", as: "খেলৰ অগ্ৰগতি সাৰাংশ চাওক", bn: "গেমপ্লে অগ্রগতি সারাংশ দেখুন",
            kh: "Peit ia ka Gameplay Progress Summary", mni: "শানাবগী চাউখৎলকপা সারংশ য়েংবীয়ু", lus: "Gameplay Progress Summary en rawh"
        },
        "View Gameplay Progress Summary →": {
            hi: "गेमप्ले प्रगति सारांश देखें →", as: "খেলৰ অগ্ৰগতি সাৰাংশ চাওক →", bn: "গেমপ্লে অগ্রগতি সারাংশ দেখুন →",
            kh: "Peit ia ka Gameplay Progress Summary →", mni: "শানাবগী চাউখৎলকপা সারংশ য়েংবীয়ু →", lus: "Gameplay Progress Summary en rawh →"
        },
        "Print Summary": {
            hi: "सारांश प्रिंट करें", as: "সাৰাংশ প্ৰিণ্ট কৰক", bn: "সারাংশ প্রিন্ট করুন",
            kh: "Shon ia ka summary", mni: "সারংশ প্রিন্ত তৌবীয়ু", lus: "Summary print rawh"
        },
        "Trend data will appear after at least two completed game sessions.": {
            hi: "कम से कम दो पूर्ण गेम सत्रों के बाद रुझान डेटा दिखाई देगा।",
            as: "নূন্যতম দুটা সম্পূৰ্ণ খেলৰ সত্ৰৰ পিছত প্ৰৱণতা তথ্য দেখা যাব।",
            bn: "কমপক্ষে দুটি সম্পন্ন গেম সেশনের পরে প্রবণতা ডেটা প্রদর্শিত হবে।",
            kh: "Ki trend data kin mih hadien ba la dep ar tylli ki game session.",
            mni: "য়ামদ্রবদা শান্নবা তাঙ্কক অনী লোইশিনবা মতুংদা ট্রেন্দ দেতা উবা ফংগনি।",
            lus: "Game session pahnih zawh hnuah trend data a lang ang."
        },
        "Planned next activity": {
            hi: "योजनाबद्ध अगली गतिविधि", as: "পৰিকল্পিত পৰৱৰ্তী কাৰ्य্যকলাপ", bn: "পরিকল্পিত পরবর্তী কার্যকলাপ",
            kh: "Kam ba la thmu ban sa leh", mni: "পরিকলপনা তৌরিবা মথংগী থবক", lus: "Tih leh tura ruahman"
        },
        "Planned next activity.": {
            hi: "योजनाबद्ध अगली गतिविधि।", as: "পৰিকল্পিত পৰৱৰ্তী কাৰ্য্যকলাপ।", bn: "পরিকল্পিত পরবর্তী কার্যকলাপ।",
            kh: "Kam ba la thmu ban sa leh.", mni: "পরিকলপনা তৌরিবা মথংগী থবক।", lus: "Tih leh tura ruahman."
        },
        "+ Register Patient to Begin →": {
            hi: "+ शुरू करने के लिए मरीज़ जोड़ें →", as: "+ আৰম্ভ কৰিবলৈ ৰোগী যোগ কৰক →", bn: "+ শুরু করতে রোগী যোগ করুন →",
            kh: "+ Pynrung nongpang ban sdang →", mni: "+ হৌনবা রুগী হাপচিনবীয়ু →", lus: "+ Tan turin damlo ziah luh rawh →"
        },
        "Clinically grounded cognitive therapy • 7 Regional NE languages • Family care loop": {
            hi: "नैदानिक संज्ञानात्मक चिकित्सा • 7 पूर्वोत्तर क्षेत्रीय भाषाएँ • पारिवारिक देखभाल",
            as: "ক্লিনিকেল মানসিক যত্ন • ৭টা আঞ্চলিক উত্তৰ-পূব ভাষা • পৰিয়াল যত্ন চক্ৰ",
            bn: "ক্লিনিক্যাল স্মৃতি যত্ন • ৭টি উত্তর-পূর্ব ভাষা • পারিবারিক যত্ন চক্র",
            kh: "Ka jingsumar jingmut • 7 tylli ki ktien • Ka kynhun iing",
            mni: "ক্লিনিকেল থৌরাং • লোন ৭ • ইমুংগী য়েংশিনবা",
            lus: "Hriatna enkawlna • Tawng chi 7 • Chhungkua enkawlna"
        },
        "Gentle memory activities with caregiver support • Multilingual interface and calming soundscapes • Family care loop": {
            hi: "देखभालकर्ता सहायता सहित सौम्य स्मृति गतिविधियाँ • बहुभाषी इंटरफ़ेस एवं शांत संगीत • पारिवारिक देखभाल",
            as: "কেয়াৰগিভাৰ সমৰ্থনৰ সৈতে শান্ত স্মৃতি কাৰ্য্যকলাপ • বহুভাষিক আন্তঃপৃষ্ঠ আৰু শান্ত সংগীত • পৰিয়াল যত্ন চক্ৰ",
            bn: "পরিচর্যাকারীর সমর্থনসহ শান্ত স্মৃতি কার্যকলাপ • বহুভাষিক ইন্টারফেস ও শান্ত সঙ্গীত • পারিবারিক যত্ন চক্র",
            kh: "Ka ki kam jingkynmaw kiba jem • Multilingual interface bad ki sur ba jai-jai • Ka kynhun iing",
            mni: "কেয়রগিভরগী তেংবাংগা লোয়ননা শান্ত ওইবা স্মৃতি থবক • মলতি-লেংগুয়েজ ইন্তারফেস • ইমুংগী য়েংশিনবা",
            lus: "Enkawltu puihna nena game awlsam • Multilingual interface leh rimawi • Chhungkua enkawlna"
        },
        "Care Loop: Designed for 3 Shared Journeys": {
            hi: "देखभाल चक्र: 3 साझे अनुभवों के लिए डिज़ाइन किया गया",
            as: "যত্ন চক্ৰ: ৩টা সহভাগী যাত্ৰাৰ বাবে নিৰ্মিত",
            bn: "যত্ন চক্র: ৩টি যৌথ যাত্রার জন্য পরিকল্পিত",
            kh: "Ka jingsumar: Na ka bynta 3 tylli ki lynti",
            mni: "য়েংশিনবগী লম্বী: অখন্ন তাঙ্কক ৩ গীদমক",
            lus: "Enkawlna kawng: Mi chi 3 tana duan"
        },
        "01 • Daily Comfort": { hi: "01 • दैनिक सुख-शांति", as: "01 • দৈনিক আৰাম", bn: "01 • দৈনন্দিন আরাম", kh: "01 • Jingbha man ka sngi", mni: "01 • নোংমগী নুংঙাইবা", lus: "01 • Nitin hahdamna" },
        "Patient & Elder": { hi: "मरीज़ और बुजुर्ग", as: "ৰোগী আৰু জ্যেষ্ঠ", bn: "রোগী ও বয়স্ক", kh: "U Nongpang bad u Tymmen", mni: "রুগী অমসুং অহল", lus: "Damlo leh Upa" },
        "02 • Continuous Insight": { hi: "02 • निरंतर देखभाल समझ", as: "02 • নিৰন্তৰ যত্ন অন্তৰ্দৃষ্টি", bn: "02 • অবিচ্ছিন্ন পর্যবেক্ষণ", kh: "02 • Jingpeit beit", mni: "02 • লেপ্তনা য়েংশিনবা", lus: "02 • Enzui zelna" },
        "Caregiver & Family": { hi: "देखभालकर्ता और परिवार", as: "পৰিচৰ্যাকাৰী আৰু পৰিয়াল", bn: "পরিচর্যাকারী ও পরিবার", kh: "Nongsumar bad Iing", mni: "য়েংশিনবা অমসুং ইমুং", lus: "Enkawltu leh Chhungkua" },
        "03 • Clinical Evaluation": { hi: "03 • क्लिनिकल मूल्यांकन", as: "03 • ক্লিনিকেল মূল্যাংকন", bn: "03 • ক্লিনিক্যাল মূল্যায়ন", kh: "03 • Jingthew u Doctor", mni: "03 • দোক্তরগী চাংয়েং", lus: "03 • Doctor endikna" },
        "Doctor-Ready Clinical Summary": { hi: "डॉक्टर के लिए क्लिनिकल सारांश", as: "চিকিৎসকৰ বাবে ক্লিনিকেল সাৰাংশ", bn: "ডাক্তারের জন্য ক্লিনিক্যাল সারসংক্ষেপ", kh: "Ka report na ka bynta u Doctor", mni: "দোক্তরগীদমক ক্লিনিকেল সাৰাংশ", lus: "Doctor tana summary" },
        "Open Care Circle Dashboard →": { hi: "देखभाल मंडल डैशबोर्ड खोलें →", as: "যত্ন চক্ৰ ডেছবৰ্ড খোলক →", bn: "কেয়ার সার্কেল ড্যাশবোর্ড খুলুন →", kh: "Plie ia ka Dashboard →", mni: "কেয়ার ড্যাশবোর্ড হাংদোকউ →", lus: "Dashboard hawng rawh →" },
        "View Clinical Doctor Report →": { hi: "क्लिनिकल डॉक्टर रिपोर्ट देखें →", as: "ক্লিনিকেল চিকিৎসকৰ প্ৰতিবেদন চাওক →", bn: "ক্লিনিক্যাল ডাক্তার রিপোর্ট দেখুন →", kh: "Peit ia ka report u Doctor →", mni: "দোক্তরগী রিপোর্ট য়েংবীয়ু →", lus: "Doctor report en rawh →" },

        // Game Matching Screen
        "🧠 Cognitive Stimulation Activity": { hi: "🧠 संज्ञानात्मक सक्रियता गतिविधि", as: "🧠 মানসিক উদ্দীপক কাৰ্যকলাপ", bn: "🧠 মানসিক উদ্দীপক কার্যক্রম", kh: "🧠 Jingleh ba pynshai jingmut", mni: "🧠 ৱাখলগী মপাঙ্গল কনখৎহনবা", lus: "🧠 Hriatna chawhthawh activity" },
        "A gentle picture memory activity": { hi: "चित्रों को याद रखने की एक शांत गतिविधि", as: "ছবি মনত ৰখাৰ এক শান্ত খেল", bn: "ছবি মনে রাখার একটি শান্ত খেলা", kh: "Ka jingleh dur ba jemnud", mni: "ময়েক নিংশিংবগী শান্ত ওইবা খেল", lus: "Milem hriatreng infiamna nem tak" },
        "Memory Match": { hi: "स्मृति मिलान", as: "স্মৃতি মিলোৱা", bn: "স্মৃতি মিল", kh: "Jingpyniadei Dur", mni: "স্মৃতি মিলোইনবা", lus: "Hriatna inmil zawng" },
        "🍵 Relax & Smile": { hi: "🍵 आराम करें और मुस्कुराएं", as: "🍵 আৰাম কৰক আৰু হাঁহক", bn: "🍵 শান্ত থাকুন ও হাসুন", kh: "🍵 Shongthait bad rkhie", mni: "🍵 পোথারবীয়ু অমসুং নোক্ত্ৰিনবীয়ু", lus: "🍵 Hahdam la, nui rawh" },
        "Cognitive Skill Trained: Short-Term Visual Recall & Working Memory": {
            hi: "प्रशिक्षित कौशल: अल्पकालिक दृश्य स्मरण और कार्यशील स्मृति",
            as: "প্ৰশিক্ষিত দক্ষতা: হ্ৰস্বম্যাদী দৃষ্টি স্মৰণ আৰু কৰ্মক্ষম স্মৃতি",
            bn: "প্রশিক্ষিত দক্ষতা: স্বল্পমেয়াদী দৃষ্টি স্মরণ ও কার্যকরী স্মৃতি",
            kh: "Ka sap ba hikai: Jingkynmaw dur ba lyngkot",
            mni: "তম্বা দক্ষতা: ময়েক শেংনা নিংশিংবা",
            lus: "Thiamna zir: Hmuh hriatreng thiamna"
        },
        "Strengthens parietal-temporal recognition pathways using bold, comforting everyday cultural objects (Chai, Diya, Flowers).": {
            hi: "दैनिक परिचित वस्तुओं (चाय, दीया, फूल) द्वारा स्मृति और पहचान को मजबूत करता है।",
            as: "দৈনিক চিনাকি বস্তুৰে (চাহ, চাকি, ফুল) স্মৃতি সজীৱ কৰে।",
            bn: "পরিচিত জিনিস (চা, প্রদীপ, ফুল) দিয়ে স্মৃতিশক্তি শক্তিশালী করে।",
            kh: "Pynkhlain ia ka jingkynmaw da ki tiar ba man ka sngi (Sha, Sharak, Syntiew).",
            mni: "নোংমগী পোৎলমশিংনা (চা, থাবা, লৈ) স্মৃতি কন্নহন্দুনা থম্মী।",
            lus: "Nitin thil hmuh thin (Thingpui, Khawnvar, Pangpar) hmangin hriatna a tichak."
        },
        "Difficulty Level": { hi: "कठिनाई स्तर", as: "কঠিনতাৰ স্তৰ", bn: "কঠিনতার মাত্রা", kh: "Jingeh", mni: "লূবগী থাক", lus: "Harsa lam" },
        "Score": { hi: "स्कोर", as: "স্ক'ৰ", bn: "স্কোর", kh: "Score", mni: "স্কোর", lus: "Score" },
        "Gentle Moves": { hi: "सौम्य चालें", as: "লাহে লাহে চাল", bn: "শান্ত চাল", kh: "Ki jingkhih", mni: "খংথাংশিং", lus: "Chetsual lo" },
        "Moves": { hi: "चालें", as: "চাল", bn: "চাল", kh: "Ki jingkhih", mni: "খংথাং", lus: "Chetdan" },
        "Take your time and remember where each lovely picture is placed.": {
            hi: "अपना समय लें और याद रखें कि हर सुंदर तस्वीर कहाँ रखी है।",
            as: "লাহে লাহে খেলক আৰু মনত ৰাখক প্ৰতিখন ধুনীয়া ছবি ক'ত আছে।",
            bn: "ধীরে সুস্থে খেলুন এবং মনে রাখুন প্রতিটি সুন্দর ছবি কোথায় রাখা আছে।",
            kh: "Shim por ban kynmaw hangno ki dur ki don.",
            mni: "তপ্না সানৌ অমসুং ময়েকশিং কদাইদা লৈবগে নিংশিংবীয়ু।",
            lus: "Muangchangin khel la, milem awmna theihreng tum rawh."
        },
        "🌟 Splendid Effort": { hi: "🌟 शानदार प्रयास", as: "🌟 চমৎকার প্ৰচেষ্টা", bn: "🌟 দারুণ প্রচেষ্টা", kh: "🌟 Jingpyrshang ba bha", mni: "🌟 অখন্ন হোৎনবা", lus: "🌟 Tih that zualna" },
        "Super job! You found every single picture pair!": {
            hi: "शानदार काम! आपने हर तस्वीर का जोड़ा ढूंढ लिया!",
            as: "বঢ়িয়া কাম! আপুনি প্ৰতিটো ছবিৰ জোৰা বিচাৰি পালে!",
            bn: "দারুণ কাজ! আপনি সব ছবির জোড়া খুঁজে পেয়েছেন!",
            kh: "Phi la leh bha eh! Phi la shem ia baroh ki dur!",
            mni: "য়াম্না ফৈ! নহাক্না ময়েক খুদিংমক পুম্নমক ফংলে!",
            lus: "I ti tha lutuk! Milem kawp zawng zawng i hmu chhuak vek!"
        },
        "\"We are so proud of you! Rest your eyes and have a sip of warm tea.\"": {
            hi: "\"हमें आप पर बहुत गर्व है! थोड़ा आराम करें और गर्म चाय पिएं।\"",
            as: "\"আমি আপোনাক লৈ গৌৰৱান্বিত! অলপ জিৰণি লওক আৰু গৰম চাহ খাওক।\"",
            bn: "\"আমরা আপনাকে নিয়ে গর্বিত! একটু বিশ্রাম নিন এবং গরম চা খান।\"",
            kh: "\"Ngi sngewsarong eh ia phi! Shongthait bad dih sha syaid.\"",
            mni: "\"ঐখোয়না নহাকপু য়াম্না চাউথোকচৈ! পোথারবীয়ু অমসুং শাবা চা থকপীয়ু।\"",
            lus: "\"I chungah kan lawm lutuk! Chawl hahdam la, thingpui lum in rawh.\""
        },
        "✨ 4 of 4 Pairs Matched": { hi: "✨ 4 में से 4 जोड़े मिले", as: "✨ ৪টাৰ ভিতৰত ৪টা জোৰা মিলিল", bn: "✨ ৪টির মধ্যে ৪টি জোড়া মিলেছে", kh: "✨ 4 na 4 ki dur la iadei", mni: "✨ ৪ গী মনুংদা ৪ ময়েক চান্নরে", lus: "✨ 4 zinga 4 a inmil" },
        "📈 Memory Score Recorded": { hi: "📈 स्मृति स्कोर दर्ज हुआ", as: "📈 স্মৃতি স্কোৰ সংৰক্ষিত হ'ল", bn: "📈 স্মৃতি স্কোর সংরক্ষিত হয়েছে", kh: "📈 Score jingkynmaw la buh", mni: "📈 স্মৃতি স্কোর রেকর্ড তৌরে", lus: "📈 Hriatna score ziah luh a ni" },
        "Continue": { hi: "जारी रखें", as: "আগবাঢ়ক", bn: "চালিয়ে যান", kh: "Bteng", mni: "মখা চত্থৌ", lus: "Kal zel rawh" },
        "Return Home": { hi: "होम पर वापस", as: "ঘৰলৈ উভতি যাওক", bn: "হোমে ফিরে যান", kh: "Leit phai sha iing", mni: "য়ুমদা হনগনি", lus: "In lam-ah haw rawh" },

        // Games Selection & Pace Notes
        "← Back home": { hi: "← होम पर वापस", as: "← ঘৰলৈ উভতক", bn: "← হোমে ফিরে যান", kh: "← Phai sha iing", mni: "← য়ুমদা হনবা", lus: "← In lam pan rawh" },
        "Choose a gentle game": { hi: "एक शांत खेल चुनें", as: "এটা সহজ খেল বাছক", bn: "একটি সহজ খেলা বেছে নিন", kh: "Jied ia ka jingleh ba jem", mni: "শান্ত ওইবা খেল অমা খনবীয়ু", lus: "Infiamna nem thlang rawh" },
        "Dementia-Focused Cognitive Activities": { hi: "डिमेंशिया-केंद्रित संज्ञानात्मक गतिविधियाँ", as: "স্মৃতিভ্ৰংশ-কেন্দ্ৰিক কাৰ্যকলাপ", bn: "ডিমেনশিয়া-কেন্দ্রিক স্মৃতি কার্যক্রম", kh: "Ki jingleh na ka bynta ka jingklet", mni: "স্মৃতি মাংবগী কাৰ্যকলাপ", lus: "Hriatna chhe tanpuitu activities" },
        "Each activity is scientifically designed to gently stimulate neural pathways without causing frustration or fatigue.": {
            hi: "प्रत्येक गतिविधि बिना किसी तनाव या थकान के मस्तिष्क को सक्रिय करने के लिए बनाई गई है।",
            as: "প্ৰতিটো খেল ভাগৰ বা অশান্তি নোপোৱাকৈ মনক সতেজ কৰিবলৈ নিৰ্মাণ কৰা হৈছে।",
            bn: "প্রতিটি কার্যক্রম কোনো ক্লান্তি ছাড়াই মনকে শান্ত ও সক্রিয় রাখার জন্য তৈরি।",
            kh: "Kine ki jingleh ki iarap ban pynshai khlem da pynshitom ia ka jingmut.",
            mni: "থবক খুদিংমক ৱাখলদা ৱাহনদনা নুংঙাইনা শাননবা শেমবনি।",
            lus: "Hahdam tak leh hah mang lo turin duan a ni."
        },
        "Memory Skill Trained: Short-Term Visual Recall": { hi: "प्रशिक्षित कौशल: अल्पकालिक दृश्य स्मरण", as: "প্ৰশিক্ষিত দক্ষতা: হ্ৰস্বম্যাদী দৃষ্টি স্মৰণ", bn: "প্রশিক্ষিত দক্ষতা: স্বল্পমেয়াদী দৃষ্টি স্মরণ", kh: "Ka sap: Jingkynmaw dur", mni: "তম্বা দক্ষতা: উবা ৱাখল", lus: "Thiamna zir: Hmuh hriatna" },
        "Active MVP Game: Visual Recall & Pattern Matching": { hi: "सक्रिय MVP खेल: दृश्य स्मरण एवं पैटर्न मिलान", as: "সক্ৰিয় MVP খেল: দৃষ্টি স্মৰণ আৰু পেটাৰ্ণ মিলোৱা", bn: "সক্রিয় MVP গেম: দৃষ্টি স্মরণ ও প্যাটার্ন মিলানো", kh: "Jinglehkai MVP: Jingkynmaw dur", mni: "চৎনরিবা MVP শান্নবা: দৃষ্টি নিংশিংবা", lus: "Active MVP Game: Hriatrengna leh milem match" },
        "Planned Next Activity: Word Association": { hi: "योजनाबद्ध अगली गतिविधि: शब्द साहचर्य", as: "পৰিকল্পিত পৰৱৰ্তী কাৰ্য্যকলাপ: শব্দ সংযোগ", bn: "পরিকল্পিত পরবর্তী কার্যকলাপ: শব্দ সংযোগ", kh: "Kam ba la thmu: Kyntien", mni: "মথংগী শান্নবা: ৱাহৈ মরী", lus: "Tih leh tur: Tawngkam inzawmna" },
        "Planned Next Activity: Everyday Object Recognition": { hi: "योजनाबद्ध अगली गतिविधि: दैनिक वस्तु पहचान", as: "পৰিকল্পিত পৰৱৰ্তী কাৰ্য্যকলাপ: দৈনন্দিন বস্তু চিনাক্তকৰণ", bn: "পরিকল্পিত পরবর্তী কার্যকলাপ: দৈনন্দিন জিনিস সনাক্তকরণ", kh: "Kam ba la thmu: Jingithuh tiar", mni: "মথংগী শান্নবা: পোৎলম চিনজবা", lus: "Tih leh tur: Nitin thil hriat hran" },
        "Caregiver-Reported Stage": { hi: "देखभालकर्ता द्वारा रिपोर्ट किया गया स्तर", as: "কেয়াৰগিভাৰে প্ৰতিবেদন কৰা পৰ্যায়", bn: "পরিচর্যাকারী দ্বারা রিপোর্ট করা পর্যায়", kh: "Kyrdan ba la iathuh da u nongsumar", mni: "কেয়রগিভরনা পীরবা থাক", lus: "Enkawltu tarlan stage" },
        "Recall Skill Trained: Semantic & Lexical Retrieval": { hi: "प्रशिक्षित कौशल: शब्द एवं भाषा स्मरण", as: "প্ৰশিক্ষিত দক্ষতা: শব্দ আৰু ভাষা স্মৰণ", bn: "প্রশিক্ষিত দক্ষতা: শব্দ ও ভাষা স্মরণ", kh: "Ka sap: Jingkynmaw kyntien", mni: "তম্বা দক্ষতা: ৱাহৈ নিংশিংবা", lus: "Thiamna zir: Tawngkam hriatreng" },
        "Daily Living Skill: Object Recognition & Agnosia Defense": { hi: "दैनिक जीवन कौशल: वस्तुओं की पहचान", as: "দৈনিক জীৱনৰ দক্ষতা: চিনাকি বস্তুৰ চিনাক্তকৰণ", bn: "দৈনন্দিন জীবনের দক্ষতা: বস্তুর সঠিক পরিচয়", kh: "Ka sap man ka sngi: Jingithuh tiar", mni: "নোংমগী থবক: পোৎলম চিনজবা", lus: "Nitin thiamna: Thil hriat hran" },
        "Word Recall": { hi: "शब्द स्मरण", as: "শব্দ স্মৰণ", bn: "শব্দ স্মরণ", kh: "Kynmaw kyntien", mni: "ৱাহৈ নিংশিংবা", lus: "Tawngkam hriatreng" },
        "Familiar Things": { hi: "परिचित वस्तुएं", as: "পৰিচিত বস্তু", bn: "পরিচিত জিনিস", kh: "Ki tiar ba ithuh", mni: "চিনবা পোৎলমশিং", lus: "Thil hriat lar" },
        "Purpose: Strengthens working memory pathways using high-contrast everyday cultural objects (Chai, Diya, Flowers).": {
            hi: "उद्देश्य: सांस्कृतिक परिचित वस्तुओं (चाय, दीया, फूल) से स्मृति को सक्रिय रखना।",
            as: "উদ্দেশ্য: চিনাকি বস্তুৰে (চাহ, চাকি, ফুল) স্মৃতি সজীৱ কৰা।",
            bn: "উদ্দেশ্য: পরিচিত সাংস্কৃতিক বস্তু (চা, প্রদীপ, ফুল) দিয়ে স্মৃতি সতেজ রাখা।",
            kh: "Ka jingthmu: Ban pynkhlain ia ka jingkynmaw da ki tiar (Sha, Sharak, Syntiew).",
            mni: "পান্দম: চা, থাবা, লৈনা স্মৃতি সজীৱ তৌবা।",
            lus: "Tum ber: Thil hriat lar hmanga hriatrengna tihchak."
        },
        "Purpose: Encourages language access and verbal sequencing to sustain conversational confidence.": {
            hi: "उद्देश्य: बातचीत के आत्मविश्वास को बनाए रखने के लिए भाषा और शब्दों का अभ्यास।",
            as: "উদ্দেশ্য: কথা-বতৰাত আত্মবিশ্বাস বজাই ৰাখিবলৈ শব্দৰ চৰ্চা।",
            bn: "উদ্দেশ্য: কথা বলার আত্মবিশ্বাস ধরে রাখতে ভাষার চর্চা।",
            kh: "Ka jingthmu: Ban pynshlur ban iakren khlem da artatien.",
            mni: "পান্দম: ৱা ঙাংবদা থৌনা হাপ্পা।",
            lus: "Tum ber: Tawngkam hman thiam zualna."
        },
        "Purpose: Reconnects visual memory to everyday routines (morning tea, prayer lamp, kitchen tools).": {
            hi: "उद्देश्य: दैनिक दिनचर्या (सुबह की चाय, पूजा का दीया, रसोई के उपकरण) से स्मृति को जोड़ना।",
            as: "উদ্দেশ্য: দৈনিক কাম-কাজৰ (পুৱাৰ চাহ, পূজাৰ চাকি) লগত স্মৃতি সংযুক্ত কৰা।",
            bn: "উদ্দেশ্য: প্রতিদিনের রুটিনের (সকালের চা, প্রদীপ) সাথে স্মৃতি সংযোগ করা।",
            kh: "Ka jingthmu: Ban pyniasoh ia ka jingkynmaw bad ka rukom im man ka sngi.",
            mni: "পান্দম: নোংমগী পুন্সিদা স্মৃতি শম্নহনবা।",
            lus: "Tum ber: Nitin nuna nena hriatrengna inzawm tir."
        },
        "Start Activity →": { hi: "गतिविधि शुरू करें →", as: "কাৰ্যকলাপ আৰম্ভ কৰক →", bn: "কার্যক্রম শুরু করুন →", kh: "Sdang ia ka kam →", mni: "থবক হৌগনি →", lus: "Activity tan rawh →" },
        "Coming in Phase 2": { hi: "चरण 2 में आ रहा है", as: "দ্বিতীয় পৰ্যায়ত আহি আছে", bn: "দ্বিতীয় ধাপে আসছে", kh: "Ka ban sa wan ha Phase 2", mni: "তাঙ্কক ২দা লাক্কদবা", lus: "Phase 2-ah a lo thleng ang" },
        "🍵 Caring Gentle Reminder": { hi: "🍵 स्नेहपूर्ण सौम्य स्मरण", as: "🍵 মৰমৰ সোঁৱৰণী", bn: "🍵 যত্নের মৃদু স্মরণ", kh: "🍵 Ka jingkynmaw ba ieit", mni: "🍵 নুংশিবগী নিংশিংবা", lus: "🍵 Hriattirna duat tak" },
        "\"You are safe, loved, and doing wonderfully! Take your time and enjoy every moment.\"": {
            hi: "\"आप सुरक्षित हैं, अत्यंत प्रिय हैं और बहुत अच्छा कर रहे हैं! हर पल का आनंद लें।\"",
            as: "\"আপুনি সুৰক্ষিত, মৰমৰ আৰু বৰ ধুনীয়াকৈ কৰিছে! প্ৰতিটো পলৰ আনন্দ লওক।\"",
            bn: "\"আপনি নিরাপদ, আদরের এবং দারুণ করছেন! প্রতিটি মুহূর্তের আনন্দ নিন।\"",
            kh: "\"Phi long ba shngain, ba ieit bad phi la leh bha eh! Kmen man ka sngi.\"",
            mni: "\"নহাক য়াম্না নুংশিজৈ অমসুং চাউনা ফৈ! নুমিৎ খুদিং নুংঙাইনা লৈবীয়ু।\"",
            lus: "\"I him a, hmangaih i ni, i ti tha lutuk! Hlim takin hun hmang rawh.\""
        },
        "\"You are doing great! There is no rush—relax and have fun with each picture.\"": {
            hi: "\"आप बहुत अच्छा कर रहे हैं! कोई जल्दबाजी नहीं—आराम से खेलें और आनंद लें।\"",
            as: "\"আপুনি বহুত ভাল কৰিছে! কোনো খৰধৰ নাই—আৰামত খেলক আৰু আনন্দ লওক।\"",
            bn: "\"আপনি খুব ভালো করছেন! কোনো তাড়া নেই—শান্ত হয়ে খেলুন এবং আনন্দ নিন।\"",
            kh: "\"Phi la leh bha eh! Ym don jingkhamnoid—leh suk bad kmen.\"",
            mni: "\"নহাক্না য়াম্না ফনা তৌরি! খরা তপ্না নুংঙাইনা সানৌ।\"",
            lus: "\"I ti tha lutuk! Hmanhmawh a ngai lo—hahdam takin khel rawh.\""
        },
        "Choose an activity": { hi: "एक गतिविधि चुनें", as: "এটা কাৰ্যকলাপ বাছক", bn: "একটি কার্যক্রম বেছে নিন", kh: "Jied ia ka kam", mni: "কাৰ্যকলাপ অমা খনবীয়ু", lus: "Activity thlang rawh" },
        "Pick an activity below. Large cards and soothing sounds help make every moment feel peaceful.": {
            hi: "नीचे दी गई गतिविधि चुनें। बड़े कार्ड और सुखद आवाज़ें हर पल को शांतिपूर्ण बनाती हैं।",
            as: "তলত দিয়া কাৰ্যকলাপ বাছক। ডাঙৰ কাৰ্ড আৰু শান্ত শব্দই প্ৰতিটো পল আনন্দময় কৰে।",
            bn: "নিচের কার্যক্রম বেছে নিন। বড় কার্ড ও শান্ত শব্দ প্রতিটি মুহূর্তকে সুন্দর করে।",
            kh: "Jied ia ka kam harum. Ki card kiba heh ki iarap ban pynshai.",
            mni: "মখাগী থবক অমা খনবীয়ু। অচৌবা কার্দশিং অমসুং নুংঙাইবা খোন্থোক্না শান্ত ওইহনগনি।",
            lus: "A hnuai ami hi thlang rawh. Card lian tak leh rimawi nem takin a tanpui ang che."
        },
        "Play Now →": { hi: "अभी खेलें →", as: "এতিয়া খেলক →", bn: "এখন খেলুন →", kh: "Leh mynta →", mni: "হৌজিক সানৌ →", lus: "Khel tan rawh →" },

        // Dashboard Screen
        "SmritiSetu • Clinical & Cognitive Health System": {
            hi: "SmritiSetu • क्लिनिकल एवं संज्ञानात्मक स्वास्थ्य प्रणाली",
            as: "SmritiSetu • ক্লিনিকেল আৰু মানসিক স্বাস্থ্য ব্যৱস্থা",
            bn: "SmritiSetu • ক্লিনিক্যাল ও মানসিক স্বাস্থ্য ব্যবস্থা",
            kh: "SmritiSetu • Ka rukom sumar jingmut",
            mni: "SmritiSetu • ক্লিনিক্যাল অমসুং ৱাখলগী থৌরাং",
            lus: "SmritiSetu • Hriatna enkawl dan"
        },
        "Longitudinal Neuro-Cognitive Monitoring & Family Care Platform": {
            hi: "दीर्घकालिक न्यूरो-संज्ञानात्मक निगरानी एवं परिवार देखभाल मंच",
            as: "দীৰ্ঘম্যাদী স্মৃতি নিৰীক্ষণ আৰু পৰিয়াল যত্ন মঞ্চ",
            bn: "দীর্ঘমেয়াদী স্মৃতি পর্যবেক্ষণ ও পরিবার যত্ন প্ল্যাটফর্ম",
            kh: "Ka platform sumar ia ka jingmut ha iing",
            mni: "স্মৃতি অমসুং ইমুং মনুংগী য়েংশিনবা",
            lus: "Hriatrengna leh chhungkua enkawlna"
        },
        "Clinical Analytics Ready": { hi: "क्लिनिकल विश्लेषण तैयार", as: "ক্লিনিকেল বিশ্লেষণ সাজু", bn: "ক্লিনিক্যাল বিশ্লেষণ প্রস্তুত", kh: "Clinical Analytics la biang", mni: "ক্লিনিক্যাল এনালাইসিস শেমরে", lus: "Clinical analytics a inpeih" },
        "Care & Clinical Health Portal": { hi: "देखभाल एवं क्लिनिकल स्वास्थ्य पोर्टल", as: "যত্ন আৰু ক্লিনিকেল স্বাস্থ্য পৰ্টেল", bn: "যত্ন ও ক্লিনিক্যাল স্বাস্থ্য পোর্টাল", kh: "Ka portal sumar bad ka koit ka khiah", mni: "য়েংশিনবা অমসুং ক্লিনিকেল পোৰ্টেল", lus: "Enkawlna leh clinical portal" },
        "SmritiSetu Cognitive Care Analytics": { hi: "SmritiSetu संज्ञानात्मक देखभाल विश्लेषण", as: "SmritiSetu স্মৃতি যত্ন বিশ্লেষণ", bn: "SmritiSetu স্মৃতি যত্ন বিশ্লেষণ", kh: "SmritiSetu Analytics", mni: "SmritiSetu স্মৃতি এনালাইসিস", lus: "SmritiSetu Analytics" },
        "Caregiver & Family View": { hi: "देखभालकर्ता एवं परिवार दृश्य", as: "পৰিচৰ্যাকাৰী আৰু পৰিয়াল দৃশ্য", bn: "পরিচর্যাকারী ও পরিবার ভিউ", kh: "Ka jingiohi ki nongsumar bad iing", mni: "য়েংশিনবা অমসুং ইমুংগী মীয়াম", lus: "Enkawltu leh chhungkua enna" },
        "Doctor & Clinical View": { hi: "डॉक्टर एवं क्लिनिकल दृश्य", as: "চিকিৎসক আৰু ক্লিনিকেল দৃশ্য", bn: "ডাক্তার ও ক্লিনিক্যাল ভিউ", kh: "Ka jingiohi u Doctor", mni: "দোক্তর অমসুং ক্লিনিকেল য়েংবা", lus: "Doctor leh clinical enna" },
        "Identity & Demographics": {
            hi: "पहचान एवं विवरण", as: "পৰিচয় আৰু তথ্য", bn: "পরিচয় ও তথ্য",
            kh: "Ka jingtip u nongpang", mni: "মশক খঙদোকপা অমসুং অকুপ্পা ৱারোল", lus: "Damlo Chanchin leh Mizia"
        },
        "Cognitive Care Status": {
            hi: "संज्ञानात्मक देखभाल स्थिति", as: "জ্ঞানমূলক যত্নৰ স্থিতি", bn: "জ্ঞানমূলক যত্নের স্থিতি",
            kh: "Ka jinglong ka jingmut", mni: "ৱাখলগী চেকশিন-থৌরাংগী ফীভম", lus: "Hriatna Dinhmun Enkawlna"
        },
        "Caregiver & Support": {
            hi: "देखभालकर्ता एवं सहायता", as: "পৰিচৰ্যা আৰু সহায়", bn: "পরিচর্যা ও সহায়তা",
            kh: "Nongsumar bad Jingkyrshan", mni: "চেকশিনবীবা অমসুং তেংবাং", lus: "Enkawltu leh Tanpuina"
        },
        "Care Status": {
            hi: "देखभाल स्थिति", as: "যত্নৰ স্থিতি", bn: "যত্নের স্থিতি",
            kh: "Ka jinglong ka jingsumar", mni: "য়েংশিনবগী ফীভম", lus: "Enkawlna Dinhmun"
        },
        "Regularly Active": {
            hi: "नियमित सक्रिय", as: "নিয়মিতভাৱে সক্ৰিয়", bn: "নিয়মিত সক্রিয়",
            kh: "Ba trei kam bha", mni: "লেপ্পা লৈতনা থবক তৌরিবা", lus: "Chhunzawm reng a ni"
        },
        "Prescribed Activity": {
            hi: "अनुशंसित गतिविधि", as: "নিৰ্ধাৰিত কাৰ্যকলাপ", bn: "নির্ধারিত ক্রিয়াকলাপ",
            kh: "Ka kam ba la bthah", mni: "তৌগদবা থবক", lus: "Chawh chhuah Thiltih"
        },
        "Memory Match (Daily)": {
            hi: "स्मृति मिलान (दैनिक)", as: "স্মৃতি মিলোৱা (দৈনিক)", bn: "স্মৃতি মেলানো (দৈনিক)",
            kh: "Jingpyniasoh Jingkynmaw (Nitin)", mni: "স্মৃতি মেচিং (নোংমগী)", lus: "Hriatna Inmil Zawn (Nitawng)"
        },
        "Acoustic Routine": {
            hi: "ध्वनि एवं संगीत दिनचर्या", as: "শব্দ আৰু সংগীত ৰুটিন", bn: "শব্দ ও সঙ্গীত রুটিন",
            kh: "Ka jingrwai bad sur sngewbha", mni: "খোনজেলগী রুটিন", lus: "Rimawi Ngaithlak Dan"
        },
        "North East Folk Soundscapes": {
            hi: "पूर्वोत्तर लोक संगीत व ध्वनियां", as: "উত্তৰ-পূবৰ লোক সংগীত আৰু ধ্বনি", bn: "উত্তর-পূর্বের লোকসঙ্গীত ও ধ্বনি",
            kh: "Ki sur tynrai ka Dong Shatei Lam Mihngi", mni: "অৱাং নোংপোক্কী লোক ঈশৈ", lus: "Hmarchhak Hnam Rimawi"
        },
        "Edit Profile": {
            hi: "प्रोफ़ाइल संपादित करें", as: "প্র'ফাইল সম্পাদনা কৰক", bn: "প্রোফাইল সম্পাদনা করুন",
            kh: "Pynkylla ia ka Profile", mni: "প্রোফাইল শেমদোকপা", lus: "Profile Siatha rawh"
        },
        "Edit Details": {
            hi: "विवरण संपादित करें", as: "বিৱৰণ সম্পাদনা কৰক", bn: "বিবরণ সম্পাদনা করুন",
            kh: "Pynkylla ia ki jingtip", mni: "অকুপ্পা ৱারোল শেমদোকপা", lus: "Chiangna Siatha rawh"
        },
        "Early-Stage Support": {
            hi: "प्रारंभिक चरण सहायता", as: "প্ৰাৰম্ভিক স্তৰৰ সহায়", bn: "প্রাথমিক পর্যায়ের সহায়তা",
            kh: "Jingiarap kyrdan nyngkong", mni: "হৌরকপগী থাক্কী তেংবাং", lus: "A tir lam enkawlna"
        },
        "Early-Stage Mild Cognitive Impairment": {
            hi: "प्रारंभिक चरण हल्का संज्ञानात्मक विकार", as: "প্ৰাৰম্ভিক স্তৰৰ মৃদু স্মৃতিভ্ৰংশ", bn: "প্রাথমিক পর্যায়ের মৃদু স্মৃতিজনিত সমস্যা",
            kh: "Ka jingtlot jingmut kaba rit", mni: "হৌরকপগী ৱাখলগী অশোনবা", lus: "A tir lam rilru chhiatna zual lo"
        },
        "Patient Care & Play": {
            hi: "मरीज़ देखभाल एवं खेल", as: "ৰোগীৰ যত্ন আৰু খেল", bn: "রোগীর যত্ন ও খেলা",
            kh: "Ka jingsumar bad jingleh u nongpang", mni: "রুগীগী য়েংশিনবা অমসুং সানাবা", lus: "Damlo Enkawlna leh Infiamna"
        },
        "Family & Caregiver View": {
            hi: "देखभालकर्ता एवं परिवार दृश्य", as: "পৰিচৰ্যাকাৰী আৰু পৰিয়াল দৃশ্য", bn: "পরিচর্যাকারী ও পরিবার ভিউ",
            kh: "Ka jingiohi ki nongsumar bad iing", mni: "য়েংশিনবা অমসুং ইমুংগী মীয়াম", lus: "Enkawltu leh chhungkua enna"
        },
        "Doctor & Neurologist Report": {
            hi: "डॉक्टर एवं न्यूरोलॉजिस्ट रिपोर्ट", as: "চিকিৎসক আৰু স্নায়ুৰোগ বিশেষজ্ঞৰ প্ৰতিবেদন", bn: "ডাক্তার ও নিউরোলজিস্ট রিপোর্ট",
            kh: "Ka Report u Doctor", mni: "দোক্তরগী রিপোৰ্ট", lus: "Doctor leh Neurologist Report"
        },
        "Record Identifier": {
            hi: "अभिलेख पहचान", as: "নথি চিনাক্তকৰ্তা", bn: "রেকর্ড শনাক্তকারী",
            kh: "Ka jingtip Record", mni: "রেকর্ড মশক", lus: "Record Hriatna"
        },
        "Senior Care Category": {
            hi: "वरिष्ठ देखभाल श्रेणी", as: "জ্যেষ্ঠ যত্ন শ্ৰেণী", bn: "প্রবীণ পরিচর্যা বিভাগ",
            kh: "Ka kyrdan sumar tymmen", mni: "অহলগী য়েংশিনবগী থাক", lus: "Upa enkawlna huang"
        },
        "Demographic Record": {
            hi: "जनसांख्यिकी अभिलेख", as: "জনগাঁথনিৰ তথ্য", bn: "জনসংখ্যা তথ্য",
            kh: "Ka jingtip briew", mni: "মিয়ুংগী তথ্য", lus: "Mizia Record"
        },
        "Cognitive Support Tier": {
            hi: "संज्ञानात्मक सहायता स्तर", as: "জ্ঞানমূলক সাহায্য স্তৰ", bn: "জ্ঞানমূলক সহায়তা স্তর",
            kh: "Ka kyrdan jingiarap jingmut", mni: "ৱাখলগী তেংবাং থাক", lus: "Hriatna puitu huang"
        },
        "Circle Administrator": {
            hi: "मंडल संचालक", as: "চক্ৰ প্ৰশাসক", bn: "সার্কেল প্রশাসক",
            kh: "Nongpyniaid kynhun", mni: "ইমুংগী লমজিংবা", lus: "Enkawltu hotu"
        },
        "Care Connection": {
            hi: "देखभाल संबंध", as: "যত্নৰ সংযোগ", bn: "পরিচর্যা সম্পর্ক",
            kh: "Ka jingiadei sumar", mni: "য়েংশিনবগী মরী", lus: "Inlaichinna"
        },
        "Direct Family Contact": {
            hi: "प्रत्यक्ष पारिवारिक संपर्क", as: "পৰিয়ালৰ পোনপটীয়া যোগাযোগ", bn: "সরাসরি পারিবারিক যোগাযোগ",
            kh: "Ka phone iing", mni: "ইমুংগী ফোন নম্বর", lus: "Chhungkua biakpawhna"
        },
        "Daily Routine": {
            hi: "दैनिक दिनचर्या", as: "দৈনিক নিয়ম", bn: "দৈনিক রুটিন",
            kh: "Ka rukom leh man ka sngi", mni: "নোংমগী নিয়ম", lus: "Nitin Kalphung"
        },
        "Active Stimulation": {
            hi: "सक्रिय प्रोत्साहन", as: "সক্ৰিয় উদ্দীপনা", bn: "সক্রিয় উদ্দীপনা",
            kh: "Ka jingpynphriang jingmut", mni: "লেপ্পা লৈতবা ৱাখলগী থবক", lus: "Rilru chawhphurna"
        },
        "🖨️ Print / Download Clinical Summary": { hi: "🖨️ क्लिनिकल सारांश प्रिंट / डाउनलोड करें", as: "🖨️ ক্লিনিকেল প্ৰতিবেদন প্ৰিন্ট কৰক", bn: "🖨️ ক্লিনিক্যাল রিপোর্ট প্রিন্ট / ডাউনলোড করুন", kh: "🖨️ Shon ia ka Clinical Summary", mni: "🖨️ ক্লিনিক্যাল রিপোর্ট প্রিন্ট তৌবীয়ু", lus: "🖨️ Clinical summary print rawh" },
        "Clinical Neuro-Geriatric Evaluation Summary": { hi: "क्लिनिकल न्यूरो-जेरियाट्रिक मूल्यांकन सारांश", as: "ক্লিনিকেল জ্যেষ্ঠ স্নায়ু-স্মৃতি মূল্যাংকন সাৰাংশ", bn: "ক্লিনিক্যাল প্রবীণ স্মৃতি মূল্যায়ন সারসংক্ষেপ", kh: "Ka jingthew bniah u Doctor", mni: "দোক্তরগী অহিংবগী অকুপ্পা রিপোৰ্ট", lus: "Doctor-te endikna tlangpui" },
        "Cognitive Index (CI)": { hi: "संज्ञानात्मक सूचकांक (CI)", as: "সংজ্ঞানাত্মক সূচক (CI)", bn: "সংজ্ঞানাত্মক সূচক (CI)", kh: "Cognitive Index (CI)", mni: "স্মৃতি চাং (CI)", lus: "Hriatna tehfung (CI)" },
        "Visual Attention Latency": { hi: "दृश्य ध्यान विलंबता", as: "দৃষ্টি মনোযোগ বিলম্ব", bn: "দৃষ্টি মনোযোগ বিলম্ব", kh: "Jingpeit bniah", mni: "উবা অমসুং মীৎয়েংগী মতম", lus: "Hmuh hriat ran lam" },
        "Dementia Risk Stratum": { hi: "डिमेंशिया जोखिम स्तर", as: "স্মৃতিভ্ৰংশৰ আশংকাৰ স্তৰ", bn: "ডিমেনশিয়া ঝুঁকির মাত্রা", kh: "Ka jingma jong ka jingklet", mni: "স্মৃতি মাংবগী অকিবা", lus: "Hriatna chhiat hlauhawm lam" },
        "Care Routine Adherence": { hi: "नियमित देखभाल पालन", as: "নিয়মিত যত্ন পালন", bn: "নিয়মিত যত্ন পালন", kh: "Jingsumar man ka sngi", mni: "নুমিৎ খুদিংগী য়েংশিনবা", lus: "Nitin enkawlna zawm dan" },
        "Diagnostic Neuro-Cognitive Observations": { hi: "नैदानिक न्यूरो-संज्ञानात्मक अवलोकन", as: "ক্লিনিকেল স্নায়ু-স্মৃতি নিৰীক্ষণ", bn: "ক্লিনিক্যাল স্মৃতি পর্যবেক্ষণ", kh: "Ki jingtip ba shem u Doctor", mni: "দোক্তরনা উবা ৱাফমশিং", lus: "Enkawltu thil hmuh chhuah" },
        "Physician Clinical Recommendations:": { hi: "चिकित्सक क्लिनिकल परामर्श:", as: "চিকিৎসকৰ ক্লিনিকেল পৰামৰ্শ:", bn: "চিকিৎসকের ক্লিনিক্যাল পরামর্শ:", kh: "Ki jingbthah u Doctor:", mni: "দোক্তরগী পাউতাক:", lus: "Doctor thurawn:" },
        "Maintain Cognitive Stimulus:": {
            hi: "संज्ञानात्मक उत्तेजना बनाए रखें:",
            as: "সংজ্ঞানাত্মক উদ্দীপনা বজাই ৰাখক:",
            bn: "সংজ্ঞানাত্মক উদ্দীপনা বজায় রাখুন:",
            kh: "Pynneh ia ka jingpynphriang jingmut:",
            mni: "ৱাখলগী থৌনা মপাঙ্গল কনখৎহনবা:",
            lus: "Rilru chawhphurna vawnghim rawh:"
        },
        "Continue prescribed Memory Match Level 2–3 once daily to exercise parietal-temporal memory networks.": {
            hi: "पार्श्व-शंखीय स्मृति तंत्र के व्यायाम के लिए प्रतिदिन एक बार निर्धारित मेमोरी मैच स्तर 2-3 जारी रखें।",
            as: "মগজুৰ স্মৃতি সক্ৰিয় ৰাখিবলৈ দৈনিক এবাৰ নিৰ্ধাৰিত মেম'ৰী মেচ স্তৰ ২-৩ অনুশীলন অব্যাহত ৰাখক।",
            bn: "মস্তিষ্কের স্মৃতিশক্তি সচল রাখতে প্রতিদিন একবার নির্ধারিত মেমোরি ম্যাচ লেভেল ২-৩ অনুশীলন চালিয়ে যান।",
            kh: "Bteng ia ka Memory Match Level 2-3 man ka sngi ban kyntiew ia ka bor kynmaw.",
            mni: "স্মৃতি কনখৎহন্নবা নুমিৎ খুদিংগী মেমোরি মেচ লেভেল ২-৩ পাংথোকউ।",
            lus: "Hriatrengna tihchak nan ni tin Memory Match Level 2-3 chhunzawm rawh."
        },
        "Sensory Routine:": {
            hi: "संवेदी दिनचर्या:",
            as: "ইন্দ্ৰিয় সচেতন কাৰ্যসূচী:",
            bn: "সংবেদনশীল রুটিন:",
            kh: "Ka rukom pynpyngngad jingmut:",
            mni: "নুমিৎকী রুটিন:",
            lus: "Thil hriatna chawhthawh hun:"
        },
        "Schedule calming cultural acoustic audio sessions between 4:00 PM – 5:30 PM to prevent sundowning syndrome agitation.": {
            hi: "सनडाउनिंग सिंड्रोम की बेचैनी से बचने के लिए शाम 4:00 बजे से 5:30 बजे के बीच शांत सांस्कृतिक संगीत सत्र निर्धारित करें।",
            as: "সন্ধিয়াৰ অস্থিৰতা প্ৰতিৰোধ কৰিবলৈ বিয়লি ৪:০০ - ৫:৩০ বজাত শান্ত পৰম্পৰাগত সংগীত শুনাৰ ব্যৱস্থা কৰক।",
            bn: "সানডাউনিং অস্থিরতা রোধ করতে বিকেল ৪:০০ থেকে ৫:৩০ এর মধ্যে শান্তিদায়ক সাংস্কৃতিক সুর শুনুন।",
            kh: "Pynsngap ia ki jingrwai shngain por 4:00 PM – 5:30 PM ban pynjem ia ka jingkhuslai.",
            mni: "নুমিদাংগী অৱাবা হন্থহন্নবা নুমিৎ খুদিংগী নুমিদাংৱাই ৪:০০ - ৫:৩০ ফাওবা শান্ত ওইবা ঈশৈ তানবীয়ু।",
            lus: "Tlailam 4:00 PM – 5:30 PM inkarah thlamuanawm tak hla ngaithla rawh."
        },
        "Follow-up Consultation:": {
            hi: "अनुवर्ती परामर्श:",
            as: "পৰৱৰ্তী পৰামৰ্শ:",
            bn: "পরবর্তী পরামর্শ:",
            kh: "Ka jingiakynduh pat bad u Doctor:",
            mni: "মথংগী পরামর্শ:",
            lus: "Inentir leh hun:"
        },
        "Next clinical evaluation scheduled in 60 days.": {
            hi: "अगला क्लिनिकल मूल्यांकन 60 दिनों में निर्धारित है।",
            as: "পৰৱৰ্তী ক্লিনিকেল মূল্যাংকন ৬০ দিনৰ পিছত নিৰ্ধাৰণ কৰা হৈছে।",
            bn: "পরবর্তী ক্লিনিক্যাল মূল্যায়ন ৬০ দিন পর নির্ধারিত।",
            kh: "Ka jingbthah ban wan peit pat dei hadien 60 sngi.",
            mni: "মথংগী ক্লিনিক্যাল টেষ্ট নুমিৎ ৬০ গী মতুংদা পাংথোক্কনি।",
            lus: "Doctor inentir leh hun tur chu ni 60 hnuah a ni ang."
        },
        "Visual Agnosia & Figure-Ground Discernment:": {
            hi: "दृश्य पहचान एवं आकृति बोध:",
            as: "দৃশ্য চিনাক্তকৰণ আৰু আকাৰ নিৰ্ণয়:",
            bn: "দৃশ্য শনাক্তকরণ ও আকৃতি বোধ:",
            kh: "Ka jingtip ia ki dur:",
            mni: "উবা অমসুং চিনবা ঙম্বা:",
            lus: "Thil hmuh fiah theihna:"
        },
        "Attentional Capacity:": {
            hi: "ध्यान क्षमता:",
            as: "মনোযোগৰ ক্ষমতা:",
            bn: "মনোযোগের ক্ষমতা:",
            kh: "Ka bor ban pynleit jingmut:",
            mni: "মীৎয়েং থম্বা ঙম্বা:",
            lus: "Rilru pek theihna:"
        },
        "Emotional Stability:": {
            hi: "भावनात्मक स्थिरता:",
            as: "আৱেগিক সুস্থিৰতা:",
            bn: "আবেগীয় স্থায়িত্ব:",
            kh: "Ka jingsuk jong ka jingmut:",
            mni: "ৱাখল নুংশিবদা লেপচবা:",
            lus: "Rilru ngaihtuahna nghet:"
        },
        "14-Day Longitudinal Accuracy Track (%)": { hi: "14-दिवसीय सटीकता ट्रैकिंग (%)", as: "১৪-দিনীয়া সঠিকতা নিৰীক্ষণ (%)", bn: "১৪ দিনের নির্ভুলতা ট্র্যাকিং (%)", kh: "Jingthew 14 sngi (%)", mni: "নুমিৎ ১৪ গী নিংশিংবা (%)", lus: "Ni 14 chhung tehna (%)" },
        "Verified by: SmritiSetu Clinical Assessment Framework": { hi: "प्रमाणित: SmritiSetu क्लिनिकल मूल्यांकन प्रणाली", as: "প্ৰমাণিত: SmritiSetu ক্লিনিকেল মূল্যাংকন ব্যৱস্থা", bn: "যাচাইকৃত: SmritiSetu ক্লিনিক্যাল মূল্যায়ন ব্যবস্থা", kh: "La pynshisha da ka SmritiSetu Clinical Framework", mni: "SmritiSetu না লেপথাখ্রবা থৌরাং", lus: "SmritiSetu Clinical Framework finfiahna" },
        "SmritiSetu provides structured cognitive assistance and memory engagement tracking. Observational analytics support healthcare providers and families in early dementia care.": {
            hi: "SmritiSetu संरचित संज्ञानात्मक सहायता और स्मृति जुड़ाव ट्रैकिंग प्रदान करता है। विश्लेषणात्मक जानकारी प्रारंभिक डिमेंशिया देखभाल में चिकित्सकों और परिवारों की सहायता करती है।",
            as: "SmritiSetu স্মৃতি সাহায্য আৰু নিৰীক্ষণ আগবঢ়ায়। এই বিশ্লেষণে প্ৰাৰম্ভিক স্মৃতিভ্ৰংশৰ চিকিৎসাত সহায় কৰে।",
            bn: "SmritiSetu স্মৃতি সহায়তা ও পর্যবেক্ষণ প্রদান করে। এই তথ্য প্রাথমিক ডিমেনশিয়া চিকিৎসায় সহায়তা করে।",
            kh: "Ka SmritiSetu ka iarap ban sumar ia ka jingmut bad ki jingtip ki iarap ia ki Doctor.",
            mni: "SmritiSetu না স্মৃতি অমসুং ৱাখলগী তেংবাং পীবগা লোয়ননা দোক্তরশিংদা মতেং পাংই।",
            lus: "SmritiSetu hian hriatrengna enkawlna a pe a, doctor-te leh chhungkua a tanpui a ni."
        },

        // Game & Celebration Translations
        "Well done! 🌟": {
            hi: "शाबाश! 🌟", as: "বৰ ধুনীয়া! 🌟", bn: "সাবাশ! 🌟",
            kh: "Kaba bha palat! 🌟", mni: "য়াম্না ফরে! 🌟", lus: "I ti tha lutuk e! 🌟"
        },
        "✨ All Pairs Matched": {
            hi: "✨ सभी जोड़ियाँ मिल गईं", as: "✨ সকলো যোৰ মিলিল", bn: "✨ সব জোড়া মিলে গেছে",
            kh: "✨ Baroh ki la biang", mni: "✨ খুদিংমক মান্নরে", lus: "✨ A zawng zawng a inmil e"
        },
        "📈 Score Saved": {
            hi: "📈 स्कोर सहेजा गया", as: "📈 স্ক'ৰ সংৰক্ষণ কৰা হ'ল", bn: "📈 স্কোর সংরক্ষিত হয়েছে",
            kh: "📈 La pynsah jingkhein", mni: "📈 স্কোর থমখ্রে", lus: "📈 Score dahthat a ni e"
        },
        "🚀 Next Round": {
            hi: "🚀 अगला राउंड", as: "🚀 পৰৱৰ্তী ৰাউণ্ড", bn: "🚀 পরবর্তী রাউন্ড",
            kh: "🚀 Ka Round Bud", mni: "🚀 মথংগী রাউন্দ", lus: "🚀 Round lehpek"
        },
        "🔁 Play Again": {
            hi: "🔁 दोबारा खेलें", as: "🔁 পুনৰ খেলক", bn: "🔁 আবার খেলুন",
            kh: "🔁 Leh biang", mni: "🔁 অমুক হন্না শান্নসি", lus: "🔁 Khel nawn leh rawh"
        },
        "🎮 More Games": {
            hi: "🎮 और खेल", as: "🎮 অধিক খেল", bn: "🎮 আরও খেলা",
            kh: "🎮 Kiwei ki jingïalehkai", mni: "🎮 অতৈ শান্নপোৎ", lus: "🎮 Game dangte"
        },
        "Exit Game": {
            hi: "बाहर जाएं", as: "বাহিৰ হওক", bn: "বেরিয়ে যান",
            kh: "Pynkut", mni: "লোইশিনবা", lus: "Chhuahna"
        },
        "Exit & Save Progress": {
            hi: "खेल समाप्त करें और सहेजें", as: "খেল সমাপ্ত কৰক আৰু সংৰক্ষণ কৰক", bn: "খেলা শেষ করুন ও সংরক্ষণ করুন",
            kh: "Pynkut & Pynsah", mni: "শান্নবা লোইশিনসি অমসুং থমসি", lus: "Chhuak & Score Dahtha Rawh"
        },
        "Would you like to finish for now?": {
            hi: "क्या आप अभी रुकना चाहते हैं?", as: "আপুনি এতিয়া খেল সমাপ্ত কৰিব বিচাৰে নেকি?", bn: "আপনি কি এখন খেলা শেষ করতে চান?",
            kh: "Phi kwah ban sangeh noh?", mni: "হৌজিক শান্নবা তোকপীরগদ্রা?", lus: "Chawl rih i duh em?"
        },
        "Would you like to stop for now?": {
            hi: "क्या आप अभी रुकना चाहते हैं?", as: "আপুনি এতিয়া খেল সমাপ্ত কৰিব বিচাৰে নেকি?", bn: "আপনি কি এখন খেলা শেষ করতে চান?",
            kh: "Phi kwah ban sangeh noh?", mni: "হৌজিক শান্নবা তোকপীরগদ্রা?", lus: "Chawl rih i duh em?"
        },
        "🚪 Yes, Exit & Save": {
            hi: "🚪 हाँ, बाहर जाएं और सहेजें", as: "🚪 হয়, বাহিৰ হওক আৰু সংৰক্ষণ কৰক", bn: "🚪 হ্যাঁ, শেষ করুন ও সংরক্ষণ করুন",
            kh: "🚪 Ho, pynkut & pynsah", mni: "🚪 হোয়, লোইশিনসি অমসুং থমসি", lus: "🚪 Aw, chhuak & save rawh"
        },
        "🌸 Keep Playing": {
            hi: "🌸 खेलते रहें", as: "🌸 খেলি থাকক", bn: "🌸 খেলতে থাকুন",
            kh: "🌸 Ïalehkai bteng", mni: "🌸 মখাতানা শান্নসি", lus: "🌸 Khel chhunzawm rawh"
        },
        "For the Elderly User": {
            hi: "वरिष्ठ उपयोगकर्ता के लिए", as: "জ্যেষ্ঠ ব্যৱহাৰকাৰীৰ বাবে", bn: "প্রবীণ ব্যবহারকারীর জন্য",
            kh: "Na ka bynta ki tymmen", mni: "অহল ব্যৱহাৰকাৰীগীদমক", lus: "Upate hman tur"
        },
        "For Caregivers & Family Members": {
            hi: "देखभालकर्ताओं और परिवार के सदस्यों के लिए", as: "পৰিচৰ্যাকাৰী আৰু পৰিয়ালৰ বাবে", bn: "পরিচর্যাকারী ও পরিবারের জন্য",
            kh: "Na ka bynta ki nongsumar bad iing", mni: "য়েংশিনবা অমসুং ইমুং মনুংগীদমক", lus: "Enkawltute leh chhungkua tan"
        },
        "For Doctors & Healthcare Professionals": {
            hi: "डॉक्टरों और स्वास्थ्य विशेषज्ञों के लिए", as: "চিকিৎসক আৰু স্বাস্থ্য বিশেষজ্ঞৰ বাবে", bn: "ডাক্তার ও স্বাস্থ্য পেশাদারদের জন্য",
            kh: "Na ka bynta ki Doctor bad kiba trei sumar", mni: "দোক্তরশিং অমসুং হেল্থকেয়ারগীদমক", lus: "Doctor leh damdawi lam mite tan"
        },
        "Designed to improve memory recall, attention span, and everyday object recognition through familiar activities.": {
            hi: "परिचित गतिविधियों के माध्यम से स्मृति स्मरण, ध्यान अवधि और दैनिक वस्तुओं की पहचान में सुधार के लिए डिज़ाइन किया गया।",
            as: "পৰিচিত কাৰ্যকলাপৰ জৰিয়তে স্মৃতি স্মৰণ, মনোযোগ আৰু দৈনন্দিন বস্তু চিনি পোৱাত উন্নতি কৰিবলৈ নিৰ্মিত।",
            bn: "পরিচিত কার্যকলাপের মাধ্যমে স্মৃতি স্মরণ, মনোযোগের সময় এবং দৈনন্দিন বস্তু শনাক্তকরণ উন্নত করার জন্য তৈরি।",
            kh: "La shna ban pynbha ia ka jingkynmaw, ka jingpynleit jingmut bad jingithuh tiar man ka sngi.",
            mni: "চিনবা সানাবশিংগী খুত্থাংদা স্মৃতি অমসুং ৱাখল চংবা হেনগৎহন্নবা শেমবা।",
            lus: "Hriatrengna, rilru pekna, leh nitin thil hriat theihna tihhmasawn tura duan a ni."
        },
        "Family members can add photos, notes, and important memories that patients can revisit during daily sessions.": {
            hi: "परिवार के सदस्य तस्वीरें, नोट्स और महत्वपूर्ण यादें जोड़ सकते हैं जिन्हें मरीज़ दैनिक सत्रों के दौरान देख सकते हैं।",
            as: "পৰিয়ালৰ সদস্যসকলে ছবি, টোকা আৰু গুৰুত্বপূৰ্ণ স্মৃতি যোগ কৰিব পাৰে যিবোৰ ৰোগীয়ে দৈনিক সত্ৰত চাব পাৰে।",
            bn: "পরিবারের সদস্যরা ছবি, নোট এবং গুরুত্বপূর্ণ স্মৃতি যোগ করতে পারেন যা রোগীরা প্রতিদিন দেখতে পাবেন।",
            kh: "Ki baha iing ki lah ban buh dur, jingthoh bad jingkynmaw ba u nongpang un peit man ka sngi.",
            mni: "ইমুংগী মীশিংনা ফোতো, নোতশিং অমসুং নিংশিংনিঙাইশিং হাপচিনবা য়াগনি।",
            lus: "Chhungkhatte'n thlalak leh hriatrengna te an dah thei a, damlo'n nitin a en nawn thei ang."
        },
        "Converts game performance into easy-to-understand cognitive reports for caregivers and doctors. Tracks memory accuracy, response speed, consistency, and overall cognitive progress.": {
            hi: "खेल के प्रदर्शन को देखभालकर्ताओं और डॉक्टरों के लिए समझने में आसान संज्ञानात्मक रिपोर्ट में बदलता है। स्मृति सटीकता, प्रतिक्रिया गति, स्थिरता और समग्र प्रगति को ट्रैक करता है।",
            as: "খেলৰ প্ৰদৰ্শনক পৰিচৰ্যাকাৰী আৰু চিকিৎসকৰ বাবে সহজ প্ৰতিবেদনলৈ ৰূপান্তৰ কৰে। স্মৃতিৰ শুদ্ধতা, গতি আৰু অগ্ৰগতি নিৰীক্ষণ কৰে।",
            bn: "খেলার ফলাফলকে সহজবোধ্য রিপোর্টে রূপান্তরিত করে। স্মৃতির নির্ভুলতা, গতি ও সামগ্রিক অগ্রগতি পর্যবেক্ষণ করে।",
            kh: "Pynkylla ia ka jinglehkai sha ka report kaba suk ban sngewthuh ia ki nongsumar bad Doctor.",
            mni: "সানাবগী মহৈবু দোক্তরশিং অমসুং ইমুং মনুংনা খঙবা য়াবা রিপোর্ট ওইনা ওন্থোকই।",
            lus: "Infiamna result chu enkawltute leh doctor-te hriatthiam theih tur report-ah a chantir."
        },
        "Early warning indicators based on cognitive performance trends.": {
            hi: "संज्ञानात्मक प्रदर्शन रुझानों पर आधारित प्रारंभिक चेतावनी संकेत।",
            as: "মানসিক কাৰ্যক্ষমতাৰ ধাৰাৰ ওপৰত আধাৰিত প্ৰাৰম্ভিক সতৰ্কতা সংকেত।",
            bn: "জ্ঞানীয় পারফরম্যান্স প্রবণতার উপর ভিত্তি করে প্রাথমিক সতর্কবার্তা নির্দেশক।",
            kh: "Ki dak jingma ba shai katkum ka rukom trei ka jingmut.",
            mni: "ৱাখলগী মহৈগী ওপনদা য়াম্না হান্না খঙহনবা চেত্থবা।",
            lus: "Hriatna dinhmun a zira hriattirna hmasa pek theihna."
        },
        "Elder Assistive Technology & Neuro-Care Initiative • North Eastern Region": { hi: "वरिष्ठ नागरिक सहायक तकनीक एवं न्यूरो-केयर पहल • पूर्वोत्तर क्षेत्र", as: "জ্যেষ্ঠ সহায়ক প্ৰযুক্তি আৰু স্নায়ু-যত্ন পদক্ষেপ • উত্তৰ-পূব অঞ্চল", bn: "বয়স্ক সহায়ক প্রযুক্তি ও নিউরো-কেয়ার উদ্যোগ • উত্তর-পূর্ব অঞ্চল", kh: "Ka jingiarap ia ki tymmen ha North East", mni: "অহলশিংগী তেংবাং অমসুং অৱাং-নোংপোক লমদমগী থৌরাং", lus: "Upate tanpuitu technology • North East Region" },
        "Text:": { hi: "अक्षर:", as: "পাঠ:", bn: "অক্ষর:", kh: "Dak:", mni: "ময়িক:", lus: "Hawrawp:" },
        "Care Focus:": { hi: "देखभाल केंद्र:", as: "যত্নৰ কেন্দ্ৰ:", bn: "যত্নের কেন্দ্র:", kh: "Ka jingiarap:", mni: "মীৎয়েং:", lus: "Enkawlna bik:" },
        "Dementia & Memory Assistance": { hi: "डिमेंशिया एवं स्मृति सहायता", as: "স্মৃতিভ্ৰংশ আৰু স্মৃতি সাহায্য", bn: "ডিমেনশিয়া ও স্মৃতি সহায়তা", kh: "Ka jingiarap kiba klet jingmut", mni: "স্মৃতি মাংবা অমসুং তেংবাং", lus: "Hriatna chhe tanpuitu" },
        "Assessment Framework:": { hi: "मूल्यांकन ढाँचा:", as: "মূল্যাংকন কাঠামো:", bn: "মূল্যায়ন কাঠামো:", kh: "Ka rukom thew:", mni: "চাংয়েং পথাপ:", lus: "Teh dan ruamves:" },
        "Structured Geriatric Cognitive Recall": { hi: "संरचित बुजुर्ग संज्ञानात्मक स्मरण", as: "গাঁথনিগত জ্যেষ্ঠ মানসিক স্মৰণ", bn: "কাঠামোগত প্রবীণ স্মৃতি স্মরণ", kh: "Ka jingthew ia ka jingkynmaw", mni: "অহলশিংগী স্মৃতি চাংয়েং", lus: "Hriatna teh dan felfai" },
        "Privacy First:": { hi: "गोपनीयता प्रथम:", as: "গোপনীয়তা প্ৰথম:", bn: "গোপনীয়তা প্রথম:", kh: "Ka jingriem:", mni: "লোয়ননা থম্বা:", lus: "Inthup hmasak:" },
        "Secure Family Care Circle": { hi: "सुरक्षित पारिवारिक देखभाल मंडल", as: "সুৰক্ষিত পৰিয়াল যত্ন চক্ৰ", bn: "সুরক্ষিত পারিবারিক যত্ন বৃত্ত", kh: "Ka kynhun sumar kaba shngain", mni: "মশেলগী ইমুং মনুং চক্ৰ", lus: "Chhungkua enkawlna him" },
        "Inclusion:": { hi: "समावेशन:", as: "অন্তৰ্ভুক্তি:", bn: "অন্তর্ভুক্তি:", kh: "Kiba kynthup:", mni: "য়াওহনবা:", lus: "Telh kim:" },
        "7 Regional NE Languages with Audio": { hi: "ऑडियो सहित 7 पूर्वोत्तर क्षेत्रीय भाषाएँ", as: "অডিঅ'সহ ৭টা আঞ্চলিক উত্তৰ-পূব ভাষা", bn: "অডিও সহ ৭টি উত্তর-পূর্ব আঞ্চলিক ভাষা", kh: "7 tylli ki ktien bad ki sur", mni: "লোন ৭ অমসুং খুজিল খোন্থোক", lus: "North East tawng chi 7 leh rimawi" },
        "🌸 Daily Joy & Warmth": { hi: "🌸 दैनिक आनंद और स्नेह", as: "🌸 দৈনিক আনন্দ আৰু মৰম", bn: "🌸 প্রতিদিনের আনন্দ ও উষ্ণতা", kh: "🌸 Jingkmen man ka sngi", mni: "🌸 নুমিৎ খুদিংগী হরাওবা অমসুং নুংশিবা", lus: "🌸 Nitin hlimna leh hmangaihna" },
        "Care Circle Active": { hi: "देखभाल मंडल सक्रिय", as: "যত্ন চক্ৰ সক্ৰিয়", bn: "কেয়ার সার্কেল সক্রিয়", kh: "Kynhun sumar ka trei", mni: "য়েংশিনবা মীয়াম এক্তিব ওইরি", lus: "Enkawltu chhungkua an inpeih" },
        "First Session Ready": { hi: "पहला सत्र तैयार", as: "প্ৰথম সত্ৰ সাজু", bn: "প্রথম সেশন প্রস্তুত", kh: "Ka session kaba nyngkong ka la biang", mni: "অহানবা তাঙ্কক শেমরে", lus: "Session hmasa ber a inpeih" },
        "Three Connected Care Journeys": { hi: "तीन परस्पर जुड़ी देखभाल यात्राएं", as: "তিনিটা সংযুক্ত যত্ন যাত্ৰা", bn: "তিনটি সংযুক্ত যত্ন যাত্রা", kh: "Lai tylli ki lynti sumar ba iasoh", mni: "মশেল তান্নবা য়েংশিনবগী লম্বী অহুম", lus: "Inzawm tawn enkawlna kawng 3" },
        "Built for Patient, Family, and Doctor": { hi: "मरीज़, परिवार और डॉक्टर के लिए निर्मित", as: "ৰোগী, পৰিয়াল আৰু চিকিৎসকৰ বাবে নিৰ্মিত", bn: "রোগী, পরিবার এবং ডাক্তারের জন্য নির্মিত", kh: "Shna na ka bynta u Nongpang, Iing bad u Doctor", mni: "রুগী, ইমুং অমসুং দোক্তরগীদমক শেমবা", lus: "Damlo, Chhungkua leh Doctor tana siam" },
        "01 • Patient Journey": { hi: "01 • मरीज़ यात्रा", as: "01 • ৰোগীৰ যাত্ৰা", bn: "01 • রোগীর যাত্রা", kh: "01 • Ka lynti u nongpang", mni: "01 • রুগীগী লম্বী", lus: "01 • Damlo zinkawng" },
        "Calm Cognitive Play": { hi: "शांत संज्ञानात्मक खेल", as: "শান্ত মানসিক খেল", bn: "শান্ত স্মৃতি খেলা", kh: "Ka jinglehkai ba jemnud", mni: "শান্ত ওইবা স্মৃতি সানাবা", lus: "Hriatna infiamna nem" },
        "For the Elderly User": { hi: "बुजुर्ग उपयोगकर्ता के लिए", as: "জ্যেষ্ঠ ব্যৱহাৰকাৰীৰ বাবে", bn: "বয়স্ক ব্যবহারকারীর জন্য", kh: "Na ka bynta ki tymmen", mni: "অহল ব্যৱহাৰকাৰীগীদমক", lus: "Upa hmangtu tan" },
        "Gentle, large-button memory games with high-contrast everyday objects. Designed to improve memory recall, attention span, and everyday object recognition through familiar activities.": { hi: "दैनिक परिचित वस्तुओं के साथ बड़े बटन वाले सरल स्मृति खेल। स्मृति स्मरण, एकाग्रता और दैनिक वस्तु पहचान में सुधार के लिए तैयार।", as: "দৈনন্দিন চিনাকি বস্তুৰে নিৰ্মিত ডাঙৰ বুটামৰ সহজ স্মৃতি খেল। স্মৃতি শক্তি, মনোযোগ আৰু বস্তু চিনাক্তকৰণ উন্নত কৰিবলৈ ডিজাইন কৰা।", bn: "পরিচিত দৈনন্দিন জিনিসপত্র সহ বড় বোতামের সহজ স্মৃতি খেলা। স্মৃতি স্মরণ, মনোযোগ এবং বস্তু চেনার ক্ষমতা বাড়ানোর জন্য ডিজাইন করা।", kh: "Ki jingleh kynmaw ba jem kiba don ki button heh bad ki dur ba man ka sngi. Pynbha ia ka jingkynmaw bad jingmut.", mni: "চিনবা পোৎলমশিংনা শেম্বা অখন্ন স্মৃতি সানাবা। স্মৃতি অমসুং মীৎয়েং কন্নহন্নবা শেমবনি।", lus: "Button lian leh nitin thil hmuh thin hmanga hriatrengna infiamna nem tak. Hriatna leh rilru pek tichak tura siam." },
        "✓ Large, dementia-friendly picture matching": { hi: "✓ बड़े, डिमेंशिया-अनुकूल चित्र मिलान", as: "✓ ডাঙৰ, স্মৃতিভ্ৰংশ-অনুকূল ছবি মিলোৱা", bn: "✓ বড়, ডিমেনশিয়া-বান্ধব ছবি মিল", kh: "✓ Ka jingpyniadei dur kaba heh bad jem", mni: "✓ চাউবা, স্মৃতি মাংবদা মতেং ওইবা ময়েক মিলোইনবা", lus: "✓ Milem lian, dementia tana awlsam taka inmil zawng" },
        "✓ Soothing North Eastern folk lullabies & soundscapes": { hi: "✓ सुखदायक पूर्वोत्तर लोक लोरियाँ और संगीत", as: "✓ শান্ত উত্তৰ-পূবৰ লোকগীত আৰু প্ৰকৃতিৰ সুৰ", bn: "✓ শান্ত উত্তর-পূর্বের লোকগান ও প্রকৃতির সুর", kh: "✓ Ki rwai tymmen bad ki sur ba jem jong ka North East", mni: "✓ অৱাং-নোংপোক্কী শান্ত ওইবা ঈশৈ অমসুং খোন্থোক", lus: "✓ North East hla leh rimawi thian nemte" },
        "✓ Full support for 7 North Eastern regional languages": { hi: "✓ 7 पूर्वोत्तर क्षेत्रीय भाषाओं का पूर्ण समर्थन", as: "✓ ৭টা উত্তৰ-পূব আঞ্চলিক ভাষাৰ সম্পূৰ্ণ সমৰ্থন", bn: "✓ ৭টি উত্তর-পূর্ব আঞ্চলিক ভাষার সম্পূর্ণ সমর্থন", kh: "✓ Jingiarap ha baroh 7 tylli ki ktien North East", mni: "✓ অৱাং-নোংপোক লোন ৭ মপুং ফানা য়াওবা", lus: "✓ North East tawng chi 7 puitu kimchang" },
        "Play Memory Match →": { hi: "स्मृति मिलान खेलें →", as: "স্মৃতি মিলোৱা খেলক →", bn: "স্মৃতি মিল খেলুন →", kh: "Lehkai Memory Match →", mni: "স্মৃতি মিলোইনবা শানৌ →", lus: "Memory Match khel rawh →" },
        "02 • Family Care Circle": { hi: "02 • पारिवारिक देखभाल मंडल", as: "02 • পৰিয়াল যত্ন চক্ৰ", bn: "02 • পারিবারিক যত্ন বৃত্ত", kh: "02 • Kynhun sumar chhungkua", mni: "02 • ইমুংগী য়েংশিনবা চক্ৰ", lus: "02 • Chhungkua enkawltu huang" },
        "Daily Support Hub": { hi: "दैनिक सहायता केंद्र", as: "দৈনিক সাহায্য কেন্দ্ৰ", bn: "দৈনিক সহায়তা কেন্দ্র", kh: "Ka jaka iarap man ka sngi", mni: "নোংমগী তেংবাং মফম", lus: "Nitin tanpuina hmun" },
        "For Caregivers & Family Members": { hi: "देखभालकर्ताओं और परिवार के सदस्यों के लिए", as: "পৰিচৰ্যাকাৰী আৰু পৰিয়ালৰ সদস্যসকলৰ বাবে", bn: "পরিচর্যাকারী ও পরিবারের সদস্যদের জন্য", kh: "Na ka bynta ki nongsumar bad ki dkhot iing", mni: "য়েংশিনবশিং অমসুং ইমুংগী মীশিংগীদমক", lus: "Enkawltute leh Chhungte tan" },
        "Empowers daughters, sons, and professional caregivers to keep medication on track, log daily mood observations, and observe gradual cognitive trends.": { hi: "बेटियों, बेटों और देखभालकर्ताओं को समय पर दवा देने, दैनिक मनोदशा दर्ज करने और मानसिक प्रगति देखने में सक्षम बनाता है।", as: "কন্যা, পুত্ৰ আৰু পৰিচৰ্যাকাৰীক সময়মতে ঔষধ দিয়াত, দৈনিক মেজাজ লক্ষ্য কৰাত আৰু মানসিক ধাৰা নিৰীক্ষণ কৰাত সহায় কৰে।", bn: "কন্যা, পুত্র এবং পরিচর্যাকারীদের নিয়মিত ওষুধ দেওয়া, প্রতিদিনের মেজাজ নোট করা এবং মানসিক প্রবণতা দেখতে সক্ষম করে।", kh: "Ka iarap ia ki khun bad ki nongsumar ban kynmaw dawai bad ban buh jingkynmaw ia ka jingmut.", mni: "ইচানুপা, ইচানুপী অমসুং য়েংশিনবশিংনা হিদাক-লাংথক তান্নবা অমসুং নুমিৎ খুদিংগী ফিভম খন্নবদা তেংবাংই।", lus: "Damdawi ei hun vawn dik, nitin awmdan ziah luh leh rilru zawi zawia inthlak danglam thlithlai kawngah tanpui tu." },
        "✓ Medication & hydration timing reminders": { hi: "✓ दवा और पानी पीने के समय के स्मरणपत्र", as: "✓ ঔষধ আৰু পানী খোৱাৰ সময়ৰ সোঁৱৰণী", bn: "✓ ওষুধ ও জলপানের সময়ের অনুস্মারক", kh: "✓ Jingkynmaw ia ka por dih dawai bad um", mni: "✓ হিদাক অমসুং ঈশিং থকপগী মতম নিংশিংহনবা", lus: "✓ Damdawi leh tui in hun hriattirna" },
        "✓ Family members can add photos, notes, and important memories that patients can revisit during daily sessions.": { hi: "✓ परिवार के सदस्य तस्वीरें और यादें जोड़ सकते हैं जिन्हें मरीज़ दैनिक सत्रों में देख सकते हैं।", as: "✓ পৰিয়ালৰ সদস্যসকলে ফটো আৰু পুৰণি স্মৃতি যোগ কৰিব পাৰে যিবোৰ ৰোগীয়ে প্ৰতিদিনে চাব পাৰে।", bn: "✓ পরিবারের সদস্যরা ছবি ও স্মৃতি যোগ করতে পারেন যা রোগী প্রতিদিন দেখতে পারেন।", kh: "✓ Ka iing ka lah ban pynrung dur bad jingkynmaw kiba u nongpang u lah ban peit.", mni: "✓ ইমুংগী মীশিংনা ফটো অমসুং নিংশিংবা পোৎলম হাপচিনবা য়াই।", lus: "✓ Chhungten thlalak leh hriatrengna thil an dah thei a, damloin a en nawn thei ang." },
        "✓ Easy session trends & engagement history": { hi: "✓ आसान सत्र रुझान और जुड़ाव इतिहास", as: "✓ সহজ সত্ৰৰ গতি আৰু অংশগ্ৰহণৰ ইতিহাস", bn: "✓ সহজ সেশন প্রবণতা ও ইতিহাসের ধারাবাহিকতা", kh: "✓ Jingtrei bad jingkiew jinghiar ba suk", mni: "✓ লাইবা তাঙ্কক অমসুং চৎন-পথাপ", lus: "✓ Awlsam taka session kalphung leh inhnamhnawihna hriatna" },
        "03 • Clinical Evaluation": { hi: "03 • क्लिनिकल मूल्यांकन", as: "03 • ক্লিনিকেল মূল্যাংকন", bn: "03 • ক্লিনিক্যাল মূল্যায়ন", kh: "03 • Jingthew u Doctor", mni: "03 • দোক্তরগী ক্লিনিকেল চাংয়েং", lus: "03 • Doctor clinical endikna" },
        "Doctor-Ready Clinical Summary": { hi: "डॉक्टर के लिए क्लिनिकल सारांश", as: "চিকিৎসকৰ বাবে ক্লিনিকেল সাৰাংশ", bn: "ডাক্তারের জন্য ক্লিনিক্যাল সারসংক্ষেপ", kh: "Ka report na ka bynta u Doctor", mni: "দোক্তরগীদমক ক্লিনিকেল সাৰাংশ", lus: "Doctor tana summary" },
        "For Doctors & Healthcare Professionals": { hi: "डॉक्टरों एवं स्वास्थ्य पेशेवरों के लिए", as: "চিকিৎসক আৰু স্বাস্থ্যসেৱা পেছাদাৰীসকলৰ বাবে", bn: "ডাক্তার ও স্বাস্থ্যসেবা পেশাদারদের জন্য", kh: "Na ka bynta ki Doctor bad ki nongtrei koit khiah", mni: "দোক্তরশিং অমসুং হকশেলগী মীশিংগীদমক", lus: "Doctor leh Hriselna enkawltute tan" },
        "Converts game performance into easy-to-understand cognitive reports for caregivers and doctors. Tracks memory accuracy, response speed, consistency, and overall cognitive progress.": { hi: "खेल के प्रदर्शन को देखभालकर्ताओं और डॉक्टरों के लिए समझने में आसान संज्ञानात्मक रिपोर्ट में बदलता है। स्मृति सटीकता, प्रतिक्रिया गति और प्रगति को ट्रैक करता है।", as: "খেলৰ প্ৰদৰ্শনক সহজ ক্লিনিকেল প্ৰতিবেদনলৈ ৰূপান্তৰ কৰে। স্মৃতিৰ শুদ্ধতা, প্ৰতিক্ৰিয়াৰ গতি আৰু অগ্ৰগতি অনুসৰণ কৰে।", bn: "খেলার ফলাফলকে সহজবোধ্য রিপোর্টে রূপান্তরিত করে। স্মৃতি নির্ভুলতা, প্রতিক্রিয়া গতি এবং সামগ্রিক অগ্রগতি ট্র্যাক করে।", kh: "Pynkylla ia ka jingialehkai sha ka report kaba suk ban sngewthuh. Thiew ia ka jingbiang, jingkloi bad jingkiew.", mni: "সানাবগী ফল অসি লাইনা খঙবা য়াবা রিপোর্ট ওইনা ওন্থোকই। স্মৃতিগী অচুম্বা অমসুং খোঙজেল চাংয়েং তৌই।", lus: "Infiamna hmuh chhuah te chu hriat awlsam tak report-ah a chhuah. Hriatna dik dan, chhanlet ran zawng leh hmasawnna a chhui zui." },
        "✓ 14-day cognitive trajectory & trend analysis": { hi: "✓ 14-दिवसीय संज्ञानात्मक प्रक्षेपवक्र और रुझान विश्लेषण", as: "✓ ১৪ দিনৰ মানসিক গতি আৰু ধাৰা বিশ্লেষণ", bn: "✓ ১৪ দিনের স্মৃতি প্রবণতা ও গতিপথ বিশ্লেষণ", kh: "✓ 14 sngi ka jingbishar ia ka jingkynmaw", mni: "✓ নুমিৎ ১৪ গী স্মৃতিগী ফিভম চাংয়েং", lus: "✓ Ni 14 chhung rilru sukthlek leh endikna" },
        "✓ Early warning indicators based on cognitive performance trends.": { hi: "✓ संज्ञानात्मक प्रदर्शन रुझानों के आधार पर प्रारंभिक चेतावनी संकेतक।", as: "✓ মানসিক প্ৰদৰ্শনৰ ভিত্তিত আগতীয়াকৈ সতৰ্কবাণী।", bn: "✓ স্মৃতিশক্তির গতিবিধির ওপর ভিত্তি করে প্রাথমিক সতর্কবার্তা।", kh: "✓ Ki dak jingma ba kloi katkum ka jingtrei jingmut.", mni: "✓ স্মৃতি মাংলকপগী অহানবা চেৎনবা চেকশিনৱা।", lus: "✓ Hriatna chet dan a zira hriattirna hma tak pek." },
        "✓ Printable clinical summary report for hospital visits": { hi: "✓ अस्पताल यात्राओं के लिए मुद्रण योग्य क्लिनिकल सारांश रिपोर्ट", as: "✓ চিকিৎসালয়লৈ নিব পৰা প্ৰিন্টযোগ্য ক্লিনিকেল সাৰাংশ প্ৰতিবেদন", bn: "✓ ডাক্তার দেখানোর জন্য প্রিন্টযোগ্য ক্লিনিক্যাল সারাংশ রিপোর্ট", kh: "✓ Ka report ba lah ban print na ka bynta ka hospital", mni: "✓ হাস্পাতালদা পুবা য়াবা ফোঙদোকপা ক্লিনিকেল রিপোর্ট", lus: "✓ Damdawi in kal huna ken tur clinical summary print theih" },
        "Today's Memory Score": { hi: "आज का स्मृति स्कोर", as: "আজিৰ স্মৃতি স্কোৰ", bn: "আজকের স্মৃতি স্কোর", kh: "Ka Score jingkynmaw mynta", mni: "ঙসিগী স্মৃতি স্কোর", lus: "Vawiin hriatna score" },
        "Consistent improvement over 14 days": { hi: "14 दिनों में निरंतर सुधार", as: "১৪ দিনত ধাৰাবাহিক উন্নতি", bn: "১৪ দিনে ধারাবাহিক উন্নতি", kh: "Ka jingkiew man ka 14 sngi", mni: "নুমিৎ ১৪ গী মনুংদা লেংদনা ফগৎলকপা", lus: "Ni 14 chhung zawi zawia hmasawnna" },
        "Calculated from pattern recognition & visual recall speed.": { hi: "पैटर्न पहचान और दृश्य स्मरण गति से गणना की गई।", as: "আৰ্হি চিনাক্তকৰণ আৰু দৃষ্টি স্মৰণৰ গতিৰ পৰা গণিত।", bn: "প্যাটার্ন শনাক্তকরণ এবং স্মরণ গতির ওপর ভিত্তি করে পরিমাপিত।", kh: "Khein katkum ka jingithuh dur bad jingkloi.", mni: "ময়েক চিনজবা অমসুং নিংশিংবগী খোঙজেলদগী লেপপা।", lus: "Hriatreng ran zawng atanga chhut chhuah." },
        "Today's Cognitive Health & Daily Living Overview": { hi: "आज का संज्ञानात्मक स्वास्थ्य एवं दैनिक जीवन अवलोकन", as: "আজিৰ মানসিক স্বাস্থ্য আৰু দৈনিক জীৱনৰ অৱলোকন", bn: "আজকের মানসিক স্বাস্থ্য ও জীবনযাত্রার সংক্ষিপ্ত বিবরণ", kh: "Ka jingmut bad ka jingim man ka sngi mynta", mni: "ঙসিগী ৱাখলগী হকশেল অমসুং পুন্সি ফিভম", lus: "Vawiin hriatna hriselna leh nitin khawsak dan" },
        "Cognitive Health Status": { hi: "संज्ञानात्मक स्वास्थ्य स्थिति", as: "মানসিক স্বাস্থ্যৰ স্থিতি", bn: "মানসিক স্বাস্থ্য স্থিতি", kh: "Ka kyrdan ka jingmut", mni: "ৱাখল হকশেলগী ফিভম", lus: "Hriatna hriselna dinhmun" },
        "Attention & Focus:": { hi: "ध्यान एवं एकाग्रता:", as: "মনোযোগ আৰু একাগ্ৰতা:", bn: "মনোযোগ ও একাগ্রতা:", kh: "Ka jingpynleit jingmut:", mni: "মীৎয়েং অমসুং ৱাখল:", lus: "Rilru pekna:" },
        "Visual Recall:": { hi: "दृश्य स्मरण:", as: "দৃষ্টি স্মৰণ:", bn: "দৃষ্টি স্মরণ:", kh: "Jingkynmaw dur:", mni: "উবা নিংশিংবা:", lus: "Hmuh hriatreng:" },
        "Sundowning Risk:": { hi: "संध्याकालीन भ्रम (सनडाउनिंग) जोखिम:", as: "গধূলিৰ বিভ্ৰান্তিৰ আশংকা:", bn: "সান্ধ্যকালীন বিভ্রান্তির ঝুঁকি:", kh: "Ka jingeh janmiet:", mni: "নুমিদাং ৱাখল লানবগী খুদোংথিবা:", lus: "Tlailam buai theihna dinhmun:" },
        "Normal for age & stage": { hi: "आयु और चरण के अनुसार सामान्य", as: "বয়স আৰু পৰ্যায় অনুসৰি স্বাভাৱিক", bn: "বয়স ও স্তর অনুযায়ী স্বাভাবিক", kh: "Kaba long rukom katkum ka rta", mni: "চহি অমসুং থাককী মতুং ইন্না মহৌশানি", lus: "Kum leh dinhmun a zira pangngai" },
        "Low (Morning routine adhered)": { hi: "निम्न (सुबह की दिनचर्या का पालन हुआ)", as: "কম (ৰাতিপুৱাৰ নিয়ম পালন কৰা হ'ল)", bn: "স্বল্প (সকালের রুটিন পালন করা হয়েছে)", kh: "Duna (La bud ia ka por mynstep)", mni: "হন্থবা (অয়ুক্কী নিয়ম ইনখ্রে)", lus: "Tlem (Zing lam dan zawm a ni)" },
        "Review Neurological Summary ↗": { hi: "न्यूरोलॉजिकल सारांश देखें ↗", as: "স্নায়ুৰোগ সাৰাংশ চাওক ↗", bn: "নিউরো সারসংক্ষেপ দেখুন ↗", kh: "Peit ia ka report ↗", mni: "নিউরো রিপোর্ট য়েংবীয়ু ↗", lus: "Neurological summary en rawh ↗" },
        "Daily Care & Medication Routine": { hi: "दैनिक देखभाल एवं दवा दिनचर्या", as: "দৈনিক যত্ন আৰু ঔষধৰ নিয়ম", bn: "দৈনিক যত্ন ও ওষুধের রুটিন", kh: "Ka jingbuh por man ka sngi na ka bynta ka dawai", mni: "নুমিৎ খুদিংগী য়েংশিনবা অমসুং হিদাক্কী মতম", lus: "Nitin enkawl dan leh damdawi ei hun" },
        "Morning Memory Medication": { hi: "सुबह की स्मृति दवा", as: "ৰাতিপুৱাৰ স্মৃতি ঔষধ", bn: "সকালের স্মৃতি ওষুধ", kh: "Ka dawai jingkynmaw mynstep", mni: "অয়ুক্কী স্মৃতি হিদাক", lus: "Zing lam hriatna damdawi" },
        "Afternoon Hydration & Tea": { hi: "दोपहर का जलपान और चाय", as: "দুপৰীয়াৰ পানী আৰু চাহ", bn: "দুপুরের জলপান ও চা", kh: "Ka sha bad um janmiet", mni: "নুংথিলগী ঈশিং অমসুং চা", lus: "Chawhnu tui leh thingpui in hun" },
        "Gentle Picture Memory Activity": { hi: "सरल चित्र स्मृति गतिविधि", as: "সহজ ছবি স্মৃতি কাৰ্যকলাপ", bn: "সহজ ছবি স্মৃতি খেলা", kh: "Ka jingleh dur ba jem", mni: "ময়েক নিংশিংবগী শান্ত খেল", lus: "Milem hriatreng infiamna nem" },
        "Evening Folk Music & Relaxation": { hi: "शाम का लोक संगीत और विश्राम", as: "সন্ধিয়াৰ লোকগীত আৰু বিশ্ৰাম", bn: "সন্ধ্যার লোকগান ও বিশ্রাম", kh: "Ki rwai tymmen bad jingthait janmiet", mni: "নুমিদাংগী ঈশৈ অমসুং পোথারবা", lus: "Tlailam hla leh hahdamna" },
        "Completed": { hi: "पूर्ण हुआ", as: "সম্পূৰ্ণ হ'ল", bn: "সম্পন্ন", kh: "La dep", mni: "লোইরে", lus: "Zo tawh" },
        "Scheduled": { hi: "निर्धारित", as: "নিৰ্ধাৰিত", bn: "নির্ধারিত", kh: "La buh por", mni: "মতম লেপখ্রে", lus: "Hun ruat" },
        "Family Memory Notes & Anchors": { hi: "पारिवारिक स्मृति नोट्स और संबल", as: "পৰিয়ালৰ স্মৃতি টোকা আৰু আধাৰ", bn: "পারিবারিক স্মৃতি নোট ও নির্ভরতা", kh: "Ki jingkynmaw ka iing", mni: "ইমুংগী নিংশিংবা পাউ অমসুং আধার", lus: "Chhungkaw hriatrengna thuziak leh innghahna" },
        "+ Leave a Memory Note for Today": { hi: "+ आज के लिए एक स्नेहभरी याद लिखें", as: "+ আজিৰ বাবে এটা স্মৃতি টোকা লিখক", bn: "+ আজকের জন্য একটি স্মৃতি নোট লিখুন", kh: "+ Thoh jingkynmaw mynta ka sngi", mni: "+ ঙসিগীদমক নিংশিংবা পাউ অমা ইরম্বীয়ু", lus: "+ Vawiin atan thuziak dah rawh" },
        "Recent Activity Diary": { hi: "हालिया गतिविधि डायरी", as: "শেহতীয়া কাৰ্যকলাপৰ ডায়েৰী", bn: "সাম্প্রতিক কার্যক্রমের ডায়েরি", kh: "Ka kot thoh jingkynmaw ba shen", mni: "হৌজিক্কী সানাবগী দায়েরি", lus: "Tuna hna thawh dan diary" },
        "\"Completed 4 picture pairs with a calm smile. No agitation or fatigue observed.\"": { hi: "\"शांत मुस्कान के साथ 4 चित्र जोड़ियां पूरी कीं। कोई घबराहट या थकान नहीं देखी गई।\"", as: "\"শান্ত হাঁহিৰে ৪টা ছবিৰ যোৰা সম্পূৰ্ণ কৰিলে। কোনো অশান্তি বা ভাগৰ দেখা নগ'ল।\"", bn: "\"শান্ত হাসিমুখে ৪টি ছবির জোড়া মেলালেন। কোনো অস্থিরতা বা ক্লান্তি দেখা যায়নি।\"", kh: "\"La dep 4 tylli ki dur da ka jingrkhie. Ym shym la thait ne shitom.\"", mni: "\"শান্ত ওইবা নোক্ত্ৰিম্বগা লোয়ননা ময়েক ৪ লোইশিনখ্রে। ৱাবা অমসুং অশোয়বা অমত্তা উদে।\"", lus: "\"Hlim takin milem kawp 4 a zawm a. Hah hmel a pu lo hle.\"" },
        "\"Maa enjoyed her morning ginger tea and hummed along to the Bihu flute music. Recognised old family photo from Tezpur.\"": { hi: "\"माँ ने सुबह की अदरक वाली चाय का आनंद लिया और बिहू बांसुरी की धुन पर गुनगुनाया। तेज़पुर की पुरानी पारिवारिक तस्वीर पहचानी।\"", as: "\"মায়ে ৰাতিপুৱাৰ আদা চাহ খাই ভাল পালে আৰু বিহুৰ বাঁহীৰ সুৰত গুণগুণালে। তেজপুৰৰ পুৰণি পৰিয়ালৰ ফটোখন চিনি পালে।\"", bn: "\"মা সকালের আদা চা উপভোগ করলেন এবং বিহু বাঁশির সুরে সুর মেলালেন। তেজপুরের পুরানো পারিবারিক ছবি চিনতে পেরেছেন।\"", kh: "\"Ka Mei ka sngewtynnad ia ka sha syaid bad rwai sur besli. Ithuh ia ka dur iing kaba rim na Tezpur.\"", mni: "\"ইমানা অয়ুক্কী চা থকখি অমসুং বাঁশীগী খোন্থোক্তা ঈশৈ শকখি। তেজপুরগী পুন্সিগী অহৈবা ফটো চিনখি।\"", lus: "\"Kanu khan thingpui lum a in a, rimawi a zawm ve a. Tezpur thlalak hlui a hre thei bawk.\"" },
        "\"You are safe, loved, and doing wonderfully! Take your time and enjoy every moment.\"": { hi: "\"आप सुरक्षित हैं, प्रिय हैं और बहुत अच्छा कर रहे हैं! अपना समय लें और हर पल का आनंद लें।\"", as: "\"আপুনি সুৰক্ষিত, মৰমৰ আৰু বৰ ভাল কৰিছে! সময় লওক আৰু প্ৰতিটো মুহূৰ্ত উপভোগ কৰক।\"", bn: "\"আপনি নিরাপদ, প্রিয় এবং খুব ভালো করছেন! ধীরে ধীরে খেলুন এবং প্রতিটি মুহূর্ত উপভোগ করুন।\"", kh: "\"Phi long kiba shngain bad la ieit! Shim por bad leh kmen ia man ka khyllipmat.\"", mni: "\"নহাক চেকশিন্না লৈরি, নুংশৈ অমসুং য়াম্না ফৈ! মতম লৌবীয়ু অমসুং নুংঙাইনা লৈবীয়ু।\"", lus: "\"I him a, hmangaih i ni e! Muangchangin ti la, engkim hi hlimpui rawh.\"" },
        "Priya (Daughter)": { hi: "प्रिया (बेटी)", as: "প্ৰিয়া (কন্যা)", bn: "প্রিয়া (কন্যা)", kh: "Priya (Khun kynthei)", mni: "প্রিয়া (ইচানুপী)", lus: "Priya (Fanu)" },
        "Rahul (Caregiver)": { hi: "राहुल (देखभालकर्ता)", as: "ৰাহুল (পৰিচৰ্যাকাৰী)", bn: "রাহুল (পরিচর্যাকারী)", kh: "Rahul (Nongsumar)", mni: "রাহুল (য়েংশিনবা)", lus: "Rahul (Enkawltu)" },
        "Today, 11:30 AM": { hi: "आज, 11:30 पूर्वाह्न", as: "আজি, ১১:৩০ পুৱা", bn: "আজ, ১১:৩০ পূর্বাহ্ন", kh: "Mynta, 11:30 Mynstep", mni: "ঙসি, অয়ুক ১১:৩০", lus: "Vawiin, 11:30 AM" },
        "Yesterday, 5:00 PM": { hi: "कल, 5:00 अपराह्न", as: "কালি, ৫:০০ আবেলি", bn: "গতকাল, ৫:০০ অপরাহ্ন", kh: "Mynnin, 5:00 Janmiet", mni: "ঙরাং, নুমিদাং ৫:০০", lus: "Nimin, 5:00 PM" },
        "Daily Care Recommendation & Memory Guidance": { hi: "दैनिक देखभाल अनुशंसा एवं स्मृति मार्गदर्शन", as: "দৈনিক যত্নৰ পৰামৰ্শ আৰু স্মৃতি পথপ্ৰদৰ্শন", bn: "দৈনিক যত্নের সুপারিশ ও স্মৃতি নির্দেশনা", kh: "Ka jingbthah na ka bynta ka jingkynmaw man ka sngi", mni: "নোংমগী য়েংশিনবগী পাউতাক অমসুং স্মৃতি লমজিংবা", lus: "Nitin enkawlna thurawn leh hriatna kaihhruaina" },
        "These gentle trends reflect comforting practice over time. Use them to celebrate everyday victories, keep routines calm, and encourage warm family conversations.": { hi: "ये सरल रुझान निरंतर अभ्यास को दर्शाते हैं। रोज़मर्रा की छोटी जीतों का जश्न मनाएं, दिनचर्या शांत रखें और पारिवारिक बातचीत को बढ़ावा दें।", as: "এই সহজ ধাৰাবোৰে নিয়মীয়া অভ্যাস প্ৰতিফলিত কৰে। দৈনিক সৰু সৰু সফলতা উপভোগ কৰক আৰু শান্ত পৰিৱেশত কথা পাতক।", bn: "এই সহজ প্রবণতাগুলো নিয়মিত অনুশীলনের ফলাফল। প্রতিদিনের ছোট ছোট সাফল্য উদযাপন করুন এবং শান্ত আলোচনা করুন।", kh: "Kine ki jingtrei ki pyni ia ka jinglehkai ba man ka sngi. Leh kmen ia ki jingjop bad kren suk bad ka iing.", mni: "খোংজেলশিং অসিনা লেপ্তনা সানবগী ফগৎলকপা উৎলি। নোংমগী ফগৎপশিং হরাওবীয়ু অমসুং শান্ত ওইনা খন্নবীয়ু।", lus: "Hengte hian zawi zawia hmasawnna an entir. Nitin hlawhtlinna lawm la, chhungkua inbiak tam nan hmang rawh." },
        "Register a patient profile to connect the care circle.": { hi: "देखभाल मंडल से जुड़ने के लिए मरीज़ प्रोफ़ाइल पंजीकृत करें।", as: "যত্ন চক্ৰৰ সৈতে সংযোগ কৰিবলৈ ৰোগীৰ প্ৰ'ফাইল পঞ্জীয়ন কৰক।", bn: "কেয়ার সার্কেলে যুক্ত হতে রোগীর প্রোফাইল নিবন্ধন করুন।", kh: "Pynrung nongpang ban iasoh bad ka kynhun sumar.", mni: "কেয়ার চক্ৰগা শম্ননবা রুগীগী প্রোফাইল থাগৎলকউ।", lus: "Enkawltu huang zawm turin damlo profile register rawh." },
        "© 2026 SmritiSetu | A calm memory-care companion": { hi: "© 2026 SmritiSetu | एक शांत स्मृति-देखभाल साथी", as: "© ২০২৬ স্মৃতিসেতু | এক শান্ত স্মৃতি-যত্ন সংগী", bn: "© ২০২৬ স্মৃতিসেতু | একটি শান্ত স্মৃতি-পরিচর্যা সঙ্গী", kh: "© 2026 SmritiSetu | U paralok sumar jingmut", mni: "© ২০২৬ স্মৃতিসেতু | শান্ত ওইবা স্মৃতি য়েংশিনবা সংগী", lus: "© 2026 SmritiSetu | Hriatna enkawltu thian tha" },
        "Dementia-Focused Cognitive Activities": { hi: "डिमेंशिया-केंद्रित संज्ञानात्मक गतिविधियाँ", as: "স্মৃতিভ্ৰংশ-কেন্দ্ৰিক মানসিক খেল", bn: "ডিমেনশিয়া-কেন্দ্রিক স্মৃতি কার্যক্রম", kh: "Ki jinglehkai na ka bynta ka jingklet", mni: "স্মৃতি মাংবগী কাৰ্যকলাপ", lus: "Hriatna chhe tanpuitu activities" },
        "Strengthens working memory pathways using high-contrast everyday cultural objects.": { hi: "दैनिक सांस्कृतिक परिचित वस्तुओं के माध्यम से कार्यशील स्मृति को मजबूत करता है।", as: "সাংস্কৃতিক চিনাকি বস্তু ব্যৱহাৰ কৰি স্মৃতিশক্তি সজীৱ কৰে।", bn: "সাংস্কৃতিক পরিচিত বস্তুর সাহায্যে কার্যকরী স্মৃতিশক্তি মজবুত করে।", kh: "Pynkhlain ia ka jingkynmaw da ki tiar ba man ka sngi.", mni: "চিনবা পোৎলমশিংনা স্মৃতি কন্নহন্দুনা থম্মী।", lus: "Nitin thil hmuh thin hmangin hriatna a tichak." },
        "Encourages language access and verbal sequencing to sustain conversational confidence.": { hi: "बातचीत में आत्मविश्वास बनाए रखने के लिए भाषा और शब्दों की पुनर्प्राप्ति को प्रोत्साहित करता है।", as: "কথা-বতৰাত আত্মবিশ্বাস বজাই ৰাখিবলৈ ভাষা আৰু শব্দ স্মৰণত উৎসাহিত কৰে।", bn: "কথোপকথনে আত্মবিশ্বাস ধরে রাখতে ভাষা ও শব্দ স্মরণে উৎসাহ দেয়।", kh: "Pynshlur ban kynmaw kyntien khnang ban shaniah ban kren.", mni: "ৱারী শানবদা থৌনা ফংহন্নবা ৱাহৈ নিংশিংবদা মতেং পাংই।", lus: "Inbiak pawh laia inrintawkna nei turin tawngkam hriatreng a tanpui." },
        "Reconnects visual memory to everyday routines (morning tea, prayer lamp, kitchen tools).": { hi: "दृश्य स्मृति को दैनिक दिनचर्या (सुबह की चाय, पूजा का दीया, रसोई के बर्तन) से पुनः जोड़ता है।", as: "দৈনিক নিয়মৰ সৈতে দৃষ্টি স্মৃতিক পুনৰ সংযোগ কৰে (ৰাতিপুৱাৰ চাহ, পূজাৰ চাকি, পাকঘৰৰ সঁজুলি)।", bn: "দৈনন্দিন রুটিনের সাথে দৃষ্টি স্মৃতিকে পুনরায় যুক্ত করে (সকালের চা, প্রার্থনার প্রদীপ, রান্নাঘরের সরঞ্জাম)।", kh: "Pyniasoh biang ia ka jingkynmaw bad ki kam man ka sngi.", mni: "নোংমগী থবকশিংগা উবা স্মৃতিগা শম্নহনবা (অয়ুক্কী চা, থাবা, চান-থকনবগী পোৎলম)।", lus: "Nitin thil tih thin (thingpui in, khawnvar, choka hmanrua) nen hriatrengna a thlunzawm leh." },
        "Daily Living Skill:": { hi: "दैनिक जीवन कौशल:", as: "দৈনিক জীৱনৰ দক্ষতা:", bn: "দৈনন্দিন জীবনের দক্ষতা:", kh: "Ka sap man ka sngi:", mni: "নোংমগী থবক:", lus: "Nitin thiamna:" },
        "Object Recognition & Agnosia Defense": { hi: "वस्तु पहचान एवं एग्नोसिया से बचाव", as: "বস্তু চিনাক্তকৰণ আৰু স্মৃতিভ্ৰাট প্ৰতিৰোধ", bn: "বস্তুর শনাক্তকরণ ও বিভ্রান্তি প্রতিরোধ", kh: "Ka jingithuh ia ki tiar", mni: "পোৎলম চিনজবা অমসুং মাংহনদবা", lus: "Thil hriat hran leh vawn him" },
        "Memory Skill Trained:": { hi: "प्रशिक्षित स्मृति कौशल:", as: "প্ৰশিক্ষিত স্মৃতি দক্ষতা:", bn: "প্রশিক্ষিত স্মৃতি দক্ষতা:", kh: "Ka sap jingkynmaw:", mni: "তম্বা স্মৃতি দক্ষতা:", lus: "Hriatna thiamna zir:" },
        "Recall Skill Trained:": { hi: "प्रशिक्षित स्मरण कौशल:", as: "প্ৰশিক্ষিত স্মৰণ দক্ষতা:", bn: "প্রশিক্ষিত স্মরণ দক্ষতা:", kh: "Ka sap kynmaw:", mni: "তম্বা নিংশিংবা দক্ষতা:", lus: "Tawngkam thiamna zir:" },
        "Short-Term Visual Recall": { hi: "अल्पकालिक दृश्य स्मरण", as: "হ্ৰস্বম্যাদী দৃষ্টি স্মৰণ", bn: "স্বল্পমেয়াদী দৃষ্টি স্মরণ", kh: "Jingkynmaw dur ba lyngkot", mni: "ময়েক উবা নিংশিংবা", lus: "Hmuh hriatreng rei lo te" },
        "Semantic & Lexical Retrieval": { hi: "अर्थपूर्ण एवं शाब्दिक पुनर्प्राप्ति", as: "অৰ্থপূৰ্ণ আৰু শব্দ উদ্ধাৰ", bn: "শব্দার্থ ও আভিধানিক স্মরণ", kh: "Kynmaw kyntien bad jingmut", mni: "ৱাহৈ অমসুং মরম নিংশিংবা", lus: "Tawngkam leh awmzia hriatreng" },
        "Purpose:": { hi: "उद्देश्य:", as: "উদ্দেশ্য:", bn: "উদ্দেশ্য:", kh: "Ka jingthmu:", mni: "পান্দম:", lus: "A tum:" },
        "Start Activity →": { hi: "गतिविधि शुरू करें →", as: "কাৰ্যকলাপ আৰম্ভ কৰক →", bn: "কার্যক্রম শুরু করুন →", kh: "Sdang ban leh →", mni: "সানাবা হৌগনি →", lus: "Tan rawh →" },
        "Coming in Phase 2": { hi: "चरण 2 में आ रहा है", as: "দ্বিতীয় পৰ্যায়ত আহিব", bn: "দ্বিতীয় পর্যায়ে আসছে", kh: "Ban sa wan ha ka Phase 2", mni: "থাক ২ দা লাক্কনি", lus: "Phase 2 ah a lo thleng ang" },
        "🍵 Caring Gentle Reminder": { hi: "🍵 स्नेहपूर्ण सौम्य स्मरणपत्र", as: "🍵 মৰমৰ সহজ সোঁৱৰণী", bn: "🍵 স্নেহময় শান্ত অনুস্মারক", kh: "🍵 Ka jingkynmaw ba jem", mni: "🍵 নুংশিবা নিংশিংহনবা", lus: "🍵 Hriattirna nem tak" },
        "\"You are doing great! There is no rush—relax and have fun with each picture.\"": { hi: "\"आप बहुत अच्छा कर रहे हैं! कोई जल्दबाजी नहीं है—आराम से हर तस्वीर का आनंद लें।\"", as: "\"আপুনি বৰ ভাল কৰিছে! কোনো খৰখেদা নাই—আৰামেৰে প্ৰতিখন ছবি উপভোগ কৰক।\"", bn: "\"আপনি চমৎকার করছেন! কোনো তাড়াহুড়ো নেই—শান্ত থাকুন এবং প্রতিটি ছবি উপভোগ করুন।\"", kh: "\"Phi leh bha eh! Ym don jingkyrkieh—shongthait bad lehkai kmen.\"", mni: "\"নহাক য়াম্না ফৈ! নোংমত্তা খঙনবা লৈতে—শান্ত ওইনা ছবি খুদিংমক শানৌ।\"", lus: "\"I ti tha lutuk e! Hmanhmawh a ngai lo—hahdam takin milemte hi hlimpui rawh.\"" },
        "Exit Game": { hi: "खेल छोड़ें", as: "খেল সমাপ্ত কৰক", bn: "খেলা সমাপ্ত", kh: "Mih noh", mni: "লোইশিনবা", lus: "Chhuahna" },
        "Exit & Save Progress": { hi: "बाहर निकलें और स्कोर सहेजें", as: "বাহিৰ হওক আৰু স্কোৰ ৰাখক", bn: "বেরিয়ে যান ও সংরক্ষণ করুন", kh: "Mih & Kynshew", mni: "শান্নবা লোইশিনসি অমসুং থমসি", lus: "Chhuak & Score Dahtha Rawh" },
        "Would you like to stop for now?": { hi: "क्या आप अभी रुकना चाहते हैं?", as: "আপুনি এতিয়া খেল বন্ধ কৰিব বিচাৰে নেকি?", bn: "আপনি কি এখন খেলা থামাতে চান?", kh: "Phi kwah ban sangeh noh shipor?", mni: "হৌজিক শান্নবা তোকপীরগদ্রা?", lus: "Chawl rih i duh em?" },
        "🚪 Yes, Exit & Save": { hi: "🚪 हाँ, बाहर निकलें और सहेजें", as: "🚪 হয়, বাহিৰ হওক আৰু সংৰক্ষণ কৰক", bn: "🚪 হ্যাঁ, প্রস্থান ও সংরক্ষণ", kh: "🚪 Hooid, Mih & Kynshew", mni: "🚪 হোয়, লোইশিনসি অমসুং থমসি", lus: "🚪 Aw, chhuak & save rawh" },
        "🌸 Keep Playing": { hi: "🌸 खेलते रहें", as: "🌸 খেলি থাকক", bn: "🌸 খেলা চালিয়ে যান", kh: "🌸 Lehkai biang", mni: "🌸 মখাতানা শান্নসি", lus: "🌸 Khel chhunzawm rawh" },
        "🏡 Family & Caregiver View": { hi: "🏡 पारिवारिक एवं देखभालकर्ता दृश्य", as: "🏡 পৰিয়াল আৰু পৰিচৰ্যাকাৰী দৃশ্য", bn: "🏡 পারিবারিক ও পরিচর্যাকারী দৃশ্য", kh: "🏡 Ka jingpeit ka iing bad nongsumar", mni: "🏡 ইমুং অমসুং য়েংশিনবগী য়েংবা", lus: "🏡 Chhungkua leh Enkawltu Enna" },
        "🩺 Doctor & Neurologist Report": { hi: "🩺 डॉक्टर एवं न्यूरोलॉजिस्ट रिपोर्ट", as: "🩺 চিকিৎসক আৰু স্নায়ুৰোগ বিশেষজ্ঞৰ প্ৰতিবেদন", bn: "🩺 ডাক্তার ও নিউরোলজিস্ট রিপোর্ট", kh: "🩺 Ka report u Doctor bad Neurologist", mni: "🩺 দোক্তর অমসুং নিউরোলজিষ্টকী রিপোর্ট", lus: "🩺 Doctor leh Neurologist Report" },
        "🌿 Active Care Circle": { hi: "🌿 सक्रिय देखभाल मंडल", as: "🌿 সক্ৰিয় যত্ন চক্ৰ", bn: "🌿 সক্রিয় কেয়ার সার্কেল", kh: "🌿 Kynhun sumar kaba trei", mni: "🌿 এক্তিব ওইবা কেয়ার চক্ৰ", lus: "🌿 Enkawltu huang inpeih", en: "🌿 Active Care Circle" },
        "Active Care Circle": { hi: "सक्रिय देखभाल मंडल", as: "সক্ৰিয় যত্ন চক্ৰ", bn: "সক্রিয় যত্ন বৃত্ত", kh: "Kynhun sumar kaba trei", mni: "য়াম্না থৌরাং লৈবা য়েংশিনবগী চক্ৰ", lus: "Enkawltu huang inpeih", en: "Active Care Circle" },
        "Record Identifier": { hi: "रिकॉर्ड पहचानकर्ता", as: "নথি চিনাক্তকৰ্তা", bn: "রেকর্ড শনাক্তকারী", kh: "Ka jingithuh record", mni: "রেকর্ড মশক খঙদোকপা", lus: "Record Hriat hran na", en: "Record Identifier" },
        "Senior Care Category": { hi: "वरिष्ठ देखभाल श्रेणी", as: "জ্যেষ্ঠ যত্ন শ্ৰেণী", bn: "সিনিয়র যত্ন বিভাগ", kh: "Kyrdan sumar tymmen", mni: "অহলশিংগী য়েংশিনবা থাক", lus: "Upate enkawlna category", en: "Senior Care Category" },
        "Demographic Record": { hi: "जनसांख्यिकीय रिकॉर्ड", as: "জনগাঁথনিৰ নথি", bn: "জনতাত্ত্বিক রেকর্ড", kh: "Record jinglong briew", mni: "মীয়ামগী রেকর্ড", lus: "Mimal chanchin record", en: "Demographic Record" },
        "Cognitive Support Tier": { hi: "संज्ञानात्मक सहायता स्तर", as: "জ্ঞানীয় সাহায্য স্তৰ", bn: "জ্ঞানীয় সহায়তা স্তর", kh: "Kyrdan jingiarap jingmut", mni: "স্মৃতি তেংবাং থাক", lus: "Rilru tanpuina dinhmun", en: "Cognitive Support Tier" },
        "Primary Caregiver": { hi: "मुख्य देखभालकर्ता", as: "প্ৰধান পৰিচৰ্যাকাৰী", bn: "প্রধান পরিচর্যাকারী", kh: "Nongsumar ba hakhmat", mni: "মরুওইবা য়েংশিনবা", lus: "Enkawltu ber", en: "Primary Caregiver" },
        "Family Care Circle": { hi: "पारिवारिक देखभाल मंडल", as: "পৰিয়াল যত্ন চক্ৰ", bn: "পারিবারিক যত্ন বৃত্ত", kh: "Kynhun sumar iing", mni: "ইমুংগী য়েংশিনবা চক্ৰ", lus: "Chhungkaw enkawlna huang", en: "Family Care Circle" },
        "Kinship Care Link": { hi: "पारिवारिक संबंध कड़ी", as: "পৰিয়াল সম্পৰ্ক সংযোগ", bn: "পারিবারিক সম্পর্ক লিঙ্ক", kh: "Jingïadei bahaiing", mni: "ইমুংগী মরী শম্নবা", lus: "Chhungkhat inzawmna", en: "Kinship Care Link" },
        "Emergency Contact": { hi: "आपातकालीन संपर्क", as: "জৰুৰীকালীন যোগাযোগ", bn: "জরুরি যোগাযোগ", kh: "Phone ban pyndonkam kyrkieh", mni: "অকিবগী পাউ ফাওনবা", lus: "Hmanhmawh thilah biakpawhna", en: "Emergency Contact" },
        "Care Circle Line": { hi: "देखभाल मंडल संपर्क", as: "যত্ন চক্ৰ সংযোগ", bn: "যত্ন বৃত্ত যোগাযোগ", kh: "Line sumar", mni: "য়েংশিনবগী লাইন", lus: "Enkawltu biakpawhna", en: "Care Circle Line" },
        "Daily Routine": { hi: "दैनिक दिनचर्या", as: "দৈনিক নিয়ম", bn: "দৈনিক রুটিন", kh: "Rukom trei man ka sngi", mni: "নোংমগী নিয়ম", lus: "Nitin tih thin", en: "Daily Routine" },
        "Active Stimulation Routine": { hi: "सक्रिय प्रोत्साहन दिनचर्या", as: "সক্ৰিয় উদ্দীপনাৰ নিয়ম", bn: "সক্রিয় উদ্দীপনা রুটিন", kh: "Rukom pynshlur ba trei", mni: "এক্টিভ থৌগৎপগী নিয়ম", lus: "Nitin chona kalphung", en: "Active Stimulation Routine" },
        "Family Caregiver": { hi: "पारिवारिक देखभालकर्ता", as: "পৰিয়ালৰ পৰিচৰ্যাকাৰী", bn: "পারিবারিক পরিচর্যাকারী", kh: "Nongsumar bahaiing", mni: "ইমুংগী য়েংশিনবা", lus: "Chhungkaw enkawltu", en: "Family Caregiver" },
        "Registered Elder": { hi: "पंजीकृत वरिष्ठ", as: "পঞ্জীয়নভুক্ত জ্যেষ্ঠ", bn: "নিবন্ধিত প্রবীণ", kh: "U tymmen ba la pynrung kyrteng", mni: "হাপচিনলবা অহল", lus: "Upate inziak lut", en: "Registered Elder" },
        "Patient ID": { hi: "मरीज़ आईडी", as: "ৰোগীৰ আই ডি", bn: "রোগী আইডি", kh: "ID u nongpang", mni: "রুগী আই দি", lus: "Damlo ID" },
        "Age & Sex": { hi: "उम्र और लिंग", as: "বয়স আৰু লিংগ", bn: "বয়স ও লিঙ্গ", kh: "Rta & Jinglong", mni: "চহি অমসুং নুপা/নুপী", lus: "Kum & Mipa/Hmeichhia" },
        "Relationship": { hi: "संबंध", as: "সম্পৰ্ক", bn: "সম্পর্ক", kh: "Jingiasoh", mni: "মরি", lus: "Inlaichinna" },
        "Dementia Stage": { hi: "डिमेंशिया चरण", as: "স্মৃতিভ্ৰংশৰ পৰ্যায়", bn: "ডিমেনশিয়া পর্যায়", kh: "Kyrdan jingklet", mni: "স্মৃতি মাংবগী তাংকক", lus: "Hriatrengna bo chin" },
        "Contact Number": { hi: "संपर्क नंबर", as: "যোগাযোগ নম্বৰ", bn: "যোগাযোগ নম্বর", kh: "Number phone", mni: "ফোন নম্বর", lus: "Phone number" },
        "Total sessions": { hi: "कुल सत्र", as: "মুঠ সত্ৰ", bn: "মোট সেশন", kh: "Baroh ki session", mni: "মুঠ তাঙ্কক", lus: "Session zawng zawng" },
        "Recorded memory activities": { hi: "दर्ज की गई स्मृति गतिविधियां", as: "সংৰক্ষিত স্মৃতি খেল", bn: "রেকর্ডকৃত স্মৃতি কার্যক্রম", kh: "Ki jingleh ba la buh", mni: "রেকর্ড তৌরবা সানাবশিং", lus: "Hriatna activity ziah luh te" },
        "Average accuracy": { hi: "औसत सटीकता", as: "গড় শুদ্ধতা", bn: "গড় নির্ভুলতা", kh: "Ka jingbiang pdeng", mni: "ময়ায় ওইবা অচুম্বা", lus: "Dik dan chawhrual" },
        "Across completed gentle games": { hi: "पूर्ण किए गए सरल खेलों में", as: "সম্পূৰ্ণ কৰা সহজ খেলবোৰত", bn: "সম্পন্ন করা সহজ খেলাগুলোতে", kh: "Na ki jingleh ba la dep", mni: "লোইশিনখিবা সানাবশিংগী মনুংদা", lus: "Infiamna zawh tawh atangin" },
        "Latest score": { hi: "नवीनतम स्कोर", as: "শেহতীয়া স্কোৰ", bn: "সর্বশেষ স্কোর", kh: "Ka score ba khadduh", mni: "হৌজিক্কী স্কোর", lus: "Score hnuhnung ber" },
        "Most recent activity": { hi: "हालिया गतिविधि", as: "শেহতীয়া কাৰ্যকলাপ", bn: "সাম্প্রতিক কার্যক্রম", kh: "Ka kam kaba shen", mni: "হৌজিক্কী সানাবা", lus: "Activity hnuhnung ber" },
        "Engagement & Score Over Time": { hi: "समय के साथ जुड़ाव और स्कोर", as: "সময়ৰ সৈতে অংশগ্ৰহণ আৰু স্কোৰ", bn: "সময়ের সাথে সাথে অংশগ্রহণ ও স্কোর", kh: "Ka score katba nang iaid ka por", mni: "মতমগী মতুং ইন্না স্কোর", lus: "Hun a liam zela score kalhmang" },
        "Updated from daily play": { hi: "दैनिक खेल से अपडेट किया गया", as: "দৈনিক খেলৰ পৰা আপডেট কৰা", bn: "প্রতিদিনের খেলা থেকে হালনাগাদ", kh: "La pynbha na ka jingialeh man ka sngi", mni: "নোংমগী সানাবাদগী শেমদোকপা", lus: "Nitin khelh atanga update" },
        "Activity": { hi: "गतिविधि", as: "কাৰ্যকলাপ", bn: "কার্যক্রম", kh: "Kam", mni: "সানাবা", lus: "Thawh tur" },
        "Difficulty": { hi: "कठिनाई", as: "কঠিনতা", bn: "কঠিনতা", kh: "Jingeh", mni: "লূবা", lus: "Harsatna" },
        "Loading sessions…": { hi: "सत्र लोड हो रहे हैं…", as: "সত্ৰ লোড হৈ আছে…", bn: "সেশন লোড হচ্ছে…", kh: "Dang load ia ki session…", mni: "তাঙ্ককশিং পুরক্লি…", lus: "Session a la load mek…" },
        "No sessions available.": { hi: "कोई सत्र उपलब्ध नहीं है।", as: "কোনো সত্ৰ উপলব্ধ নাই।", bn: "কোনো সেশন উপলব্ধ নেই।", kh: "Ym don session.", mni: "তাঙ্কক অমত্তা লৈতে।", lus: "Session a awm lo." },
        "Unable to load session data.": { hi: "सत्र डेटा लोड करने में असमर्थ।", as: "সত্ৰ তথ্য লোড কৰিব পৰা নগ'ল।", bn: "সেশন তথ্য লোড করতে অক্ষম।", kh: "Ym lah ban load ia ka data.", mni: "তাঙ্কক তথ্য পুরকপা ঙমদে।", lus: "Session data a la thei lo." },
        "Clinical Neuro-Geriatric Evaluation Summary": { hi: "क्लिनिकल न्यूरो-जेरियाट्रिक मूल्यांकन सारांश", as: "ক্লিনিকেল স্নায়ু-জৰা মূল্যাংকন সাৰাংশ", bn: "ক্লিনিক্যাল নিউরো-জেরিয়াট্রিক মূল্যায়ন সারসংক্ষেপ", kh: "Ka report u Doctor ia ka jingmut", mni: "ক্লিনিকেল ৱাখল চাংয়েং সাৰাংশ", lus: "Clinical Neuro-Geriatric Evaluation Summary" },
        "🖨️ Print / Download Clinical Summary": { hi: "🖨️ क्लिनिकल सारांश प्रिंट / डाउनलोड करें", as: "🖨️ ক্লিনিকেল সাৰাংশ প্ৰিন্ট / ডাউনলোড কৰক", bn: "🖨️ ক্লিনিক্যাল সারসংক্ষেপ প্রিন্ট / ডাউনলোড করুন", kh: "🖨️ Print / Download ka report", mni: "🖨️ ক্লিনিকেল রিপোর্ট ফোঙদোকউ", lus: "🖨️ Clinical Summary print / download rawh" },
        "Cognitive Index (CI)": { hi: "संज्ञानात्मक सूचकांक (CI)", as: "মানসিক সূচক (CI)", bn: "স্মৃতি সূচক (CI)", kh: "Jingthew jingmut (CI)", mni: "স্মৃতি সূচক (CI)", lus: "Cognitive Index (CI)" },
        "Trending Up (+12%)": { hi: "सकारात्मक रुझान (+12%)", as: "উন্নতিৰ দিশে (+১২%)", bn: "উন্নতির দিকে (+১২%)", kh: "Kiew (+12%)", mni: "ফগৎলকপা (+১২%)", lus: "Chho zawng (+12%)" },
        "Visual Attention Latency": { hi: "दृश्य ध्यान विलंबता", as: "দৃষ্টি মনোযোগৰ সময়", bn: "দৃষ্টি মনোযোগের প্রতিক্রিয়া সময়", kh: "Por peit dur", mni: "উবা মীৎয়েংগী মতম", lus: "Visual Attention Latency" },
        "Moderate": { hi: "मध्यम", as: "মধ্যম", bn: "মাঝারি", kh: "Pdeng", mni: "ময়ায়", lus: "Felfai tawk" },
        "2.8s Median Response": { hi: "2.8 सेकंड औसत प्रतिक्रिया", as: "২.৮ ছেকেণ্ড গড় প্ৰতিক্ৰিয়া", bn: "২.৮ সেকেন্ড গড় প্রতিক্রিয়া", kh: "2.8s ka por sngap", mni: "সেকেন্ড ২.৮ গী পাউখুম", lus: "2.8s chhanlet ran zawng" },
        "Dementia Risk Stratum": { hi: "डिमेंशिया जोखिम स्तर", as: "স্মৃতিভ্ৰংশৰ আশংকাৰ স্তৰ", bn: "ডিমেনশিয়া ঝুঁকির মাত্রা", kh: "Ka jingma jingklet", mni: "স্মৃতি মাংবগী খুদোংথিবা থাক", lus: "Dementia Risk Stratum" },
        "Low Risk": { hi: "कम जोखिम", as: "কম আশংকা", bn: "কম ঝুঁকি", kh: "Duna jingma", mni: "খুদোংথিবা হন্থবা", lus: "Hlauhawm loh lam" },
        "Stable Trajectory": { hi: "स्थिर प्रक्षेपवक्र", as: "স্থিৰ গতিপথ", bn: "স্থিতিশীল গতিপথ", kh: "Skhem ka lynti", mni: "লেংদবা খোংজেল", lus: "Kalphung nghet" },
        "Care Routine Adherence": { hi: "देखभाल दिनचर्या अनुपालन", as: "যত্নৰ নিয়ম পালন", bn: "যত্নের রুটিন মেনে চলা", kh: "Jingbud ia ka rukom sumar", mni: "নিয়ম ইনবা", lus: "Enkawl dan zawm kim" },
        "Daily Schedule Active": { hi: "दैनिक कार्यक्रम सक्रिय", as: "দৈনিক কাৰ্যসূচী সক্ৰিয়", bn: "দৈনিক সময়সূচি সক্রিয়", kh: "Ka rukom man ka sngi ka trei", mni: "নোংমগী নিয়ম চৎথরি", lus: "Nitin hunbi kal mek" },
        "Diagnostic Neuro-Cognitive Observations": { hi: "नैदानिक तंत्रिका-संज्ञानात्मक अवलोकन", as: "নিদানমূলক স্নায়ু-মানসিক নিৰীক্ষণ", bn: "ডায়াগনস্টিক নিউরো-কগনিটিভ পর্যবেক্ষণ", kh: "Ki jingthuh jingmut u Doctor", mni: "দোক্তরগী ৱাখল চাংয়েং য়েংশিনবা", lus: "Rilru lam dinhmun hmuh chhuah te" },
        "Longitudinal evaluation demonstrates sustained working memory consolidation in": { hi: "दीर्घकालिक मूल्यांकन से स्पष्ट है कि निरंतर स्मृति मिलान कार्य में सुधार हुआ है:", as: "দীৰ্ঘম্যাদী মূল্যাংকনে দেখুৱাইছে যে ধাৰাবাহিক স্মৃতি খেলত স্মৃতি সজীৱ হৈছে:", bn: "দীর্ঘমেয়াদী মূল্যায়নে দেখা গেছে যে ধারাবাহিক স্মৃতি খেলায় স্মৃতিশক্তি মজবুত হয়েছে:", kh: "Ka jingthew ka pyni ia ka jingkynmaw kaba skhem ha", mni: "লেপ্তনা চাংয়েং তৌবদা উবা ফংলে যে স্মৃতি মপাঙ্গল কনখৎলে:", lus: "Thlithlai chhunzawmna atangin hmuh a ni:" },
        "during structured visual matching tasks with culturally familiar icons.": { hi: "सांस्कृतिक रूप से परिचित प्रतीकों के साथ संरचित दृश्य मिलान कार्यों के दौरान।", as: "সাংস্কৃতিকভাৱে চিনাকি ছবিৰে কৰা দৃশ্য মিলোৱা কাৰ্যকলাপৰ সময়ত।", bn: "সাংস্কৃতিক পরিচিত ছবির সাহায্যে দৃষ্টি মিল করার সময়।", kh: "haba lehkai ia ki dur ba ithuh.", mni: "চিনবা ময়েকশিংগা লোয়ননা স্মৃতি মিলোইনবগী মতমদা।", lus: "hriat lar tak milem hmanga inmil zawng a khelh laiin." },
        "Visual Agnosia & Figure-Ground Discernment:": { hi: "दृश्य एग्नोसिया एवं वस्तु पहचान अंतर:", as: "দৃষ্টি বিভ্ৰাট আৰু বস্তু চিনাক্তকৰণ ক্ষমতা:", bn: "দৃষ্টি বিভ্রান্তি ও চিত্র-পটভূমি শনাক্তকরণ:", kh: "Ka jingithuh ia ki dur:", mni: "ময়েক চিনজবা অমসুং খেন্নবা খঙবা:", lus: "Milem hriat hran theihna:" },
        "Intact recognition of high-contrast silhouettes. Rapid discrimination between semantic pairs with low perseverative error.": { hi: "उच्च-कंट्रास्ट आकृतियों की पहचान अक्षुण्ण है। कम त्रुटि के साथ अर्थपूर्ण जोड़ियों में त्वरित भेद।", as: "স্পষ্ট ছবি চিনাক্ত কৰিব পাৰে। কম ভুলৰ সৈতে অৰ্থপূৰ্ণ যোৰবোৰ ক্ষিপ্ৰতাৰে চিনাক্ত কৰে।", bn: "উচ্চ-কন্ট্রাস্ট ছবি সঠিকভাবে চিনতে সক্ষম। কম ভুলে দ্রুত অর্থপূর্ণ জোড়া শনাক্তকরণ।", kh: "Lah ban ithuh bha ia ki dur kiba shai. Kynmaw kloi khlem bakla.", mni: "ময়েক শেংবা শক্তম চিনজবা ঙম্মী। অশোয়বা য়াওদনা অথুবা মতমদা ময়েক মিলোইবা ঙম্মী।", lus: "Milem fiah tak te chiang takin a hre thei. Sual tlemte chauh neiin a thliar hrang zung zung thei." },
        "Attentional Capacity:": { hi: "एकाग्रता क्षमता:", as: "মনোযোগৰ ক্ষমতা:", bn: "মনোযোগের ক্ষমতা:", kh: "Ka bor pynleit jingmut:", mni: "মীৎয়েং চাবগী পাঙ্গল:", lus: "Rilru pek theihna:" },
        "Maintained focused task engagement across 5-minute cognitive stimulation cycles without sudden fatigue or distress.": { hi: "बिना किसी अचानक थकान या तनाव के 5 मिनट के मानसिक सक्रियता चक्र में ध्यान बनाए रखा।", as: "হঠাৎ ভাগৰ বা অশান্তি নোহোৱাকৈ ৫ মিনিটৰ মানসিক খেলত মনোযোগ বজাই ৰাখিলে।", bn: "হঠাৎ কোনো ক্লান্তি বা কষ্ট ছাড়াই ৫ মিনিটের স্মৃতি কার্যক্রমে মনোযোগ বজায় রেখেছেন।", kh: "Pynleit jingmut 5 minit khlem thait ne shitom.", mni: "অকুপ্পা ৱাহনদনা মিনিট ৫ গী সানাবদা মীৎয়েং লেংদনা থম্মী।", lus: "Hahchhawh miah loin minute 5 chhung rilru a pe thei." },
        "Emotional Stability:": { hi: "भावनात्मक स्थिरता:", as: "আৱেগিক স্থিৰতা:", bn: "মানসিক ও আবেগিক স্থিতিশীলতা:", kh: "Ka jingskhem ha ka jingmut:", mni: "নুংশিবগী ফিভম লেংদবা:", lus: "Rilru nghetna:" },
        "Caregiver notes indicate significant anxiety reduction when morning sessions are paired with authentic North Eastern folk soundscapes (Assam Flute / Meghalaya Rain).": { hi: "देखभालकर्ता के नोट दर्शाते हैं कि जब सुबह के सत्रों में पूर्वोत्तर लोक धुनों (असम बांसुरी / मेघालय वर्षा) का उपयोग किया जाता है, तो घबराहट में उल्लेखनीय कमी आती है।", as: "পৰিচৰ্যাকাৰীৰ টোকাই দেখুৱায় যে ৰাতিপুৱাৰ সত্ৰত উত্তৰ-পূবৰ লোক সুৰ (অসমৰ বাঁহী / মেঘালয়ৰ বৰষুণ) বাজিলে উদ্বেগ যথেষ্ট হ্ৰাস পায়।", bn: "পরিচর্যাকারীর নোটে দেখা গেছে সকালের সেশনে উত্তর-পূর্ব লোকসংগীত (আসামের বাঁশি / মেঘালয়ের বৃষ্টি) শুনলে উদ্বেগ অনেকটাই কমে যায়।", kh: "Ka jingkhuslai ka duna haba pynbyrngia da ki sur rwai North East mynstep.", mni: "অয়ুক্কী মতমদা অৱাং-নোংপোক্কী বাঁশী অমসুং নোংগী খোন্থোক তারবদা অকিবা অমসুং ৱাবা হন্থরকই।", lus: "Zing lamah North East rimawi an ngaihthlak tir hian an rilru hahna a kiam sawt hle." },
        "Physician Clinical Recommendations:": { hi: "चिकित्सक नैदानिक अनुशंसाएँ:", as: "চিকিৎসকৰ ক্লিনিকেল পৰামৰ্শাৱলী:", bn: "চিকিৎসকের ক্লিনিক্যাল সুপারিশসমূহ:", kh: "Ki jingbthah u Doctor:", mni: "দোক্তরগী ক্লিনিকেল পাউতাকশিং:", lus: "Doctor thurawn te:" },
        "Maintain Cognitive Stimulus:": { hi: "संज्ञानात्मक उत्तेजना बनाए रखें:", as: "মানসিক উদ্দীপনা বজাই ৰাখক:", bn: "মানসিক উদ্দীপনা বজায় রাখুন:", kh: "Pynbha ia ka bor jingkynmaw:", mni: "স্মৃতিগী মপাঙ্গল কনখৎহন্দুনা থম্মু:", lus: "Rilru chawhphur chhunzawm zel rawh:" },
        "Continue prescribed Memory Match Level 2–3 once daily to exercise parietal-temporal memory networks.": { hi: "मस्तिष्क के स्मृति केंद्रों को सक्रिय रखने के लिए प्रतिदिन एक बार निर्धारित मेमोरी मैच स्तर 2-3 जारी रखें।", as: "মস্তিষ্কৰ স্মৃতি অংশ সজীৱ ৰাখিবলৈ দিনে এবাৰ নিৰ্ধাৰিত মেমৰি মেচ লেভেল ২-৩ খেল অব্যাহত ৰাখক।", bn: "মস্তিষ্কের স্মৃতি অংশ সতেজ রাখতে দিনে একবার স্মৃতি মিল লেভেল ২-৩ চালিয়ে যান।", kh: "Lehkai Memory Match Level 2-3 man ka sngi ban pynkhlain ia ka jingmut.", mni: "নোংমদা অনিরক স্মৃতি মিলোইনবা থাক ২-৩ শানদুনা স্মৃতি কন্নহন্নবা তৌবীয়ু।", lus: "Hriatna tichak turin nitin Memory Match Level 2-3 vawikhat khelh ziah tur." },
        "Sensory Routine:": { hi: "संवेदी दिनचर्या:", as: "ইন্দ্ৰিয়গত নিয়ম:", bn: "ইন্দ্রিয় রুটিন:", kh: "Rukom sngap sur:", mni: "ইন্দ্রিয়গী নিয়ম:", lus: "Sensory Routine:" },
        "Schedule calming cultural acoustic audio sessions between 4:00 PM – 5:30 PM to prevent sundowning syndrome agitation.": { hi: "शाम की बेचैनी (सनडाउनिंग सिंड्रोम) से बचने के लिए शाम 4:00 से 5:30 बजे के बीच शांत सांस्कृतिक संगीत सत्र निर्धारित करें।", as: "গধূলিৰ বিভ্ৰান্তি প্ৰতিৰোধ কৰিবলৈ আবেলি ৪:০০ ৰ পৰা ৫:৩০ বজাৰ ভিতৰত শান্ত সাংস্কৃতিক সংগীত শুনাৰ নিয়ম কৰক।", bn: "সন্ধ্যার অস্থিরতা এড়াতে বিকেল ৪:০০ থেকে ৫:৩০ এর মধ্যে শান্ত সুরের সংগীত সেশন নির্ধারণ করুন।", kh: "Buh por ban sngap rwai jemnud hapdeng 4:00 PM – 5:30 PM.", mni: "নুমিদাং ৱাহনদনবা নুমিদাং ৪:০০ দগী ৫:৩০ ফাওবা শান্ত ওইবা ঈশৈ তানবা মতম লেপউ।", lus: "Tlailam buai loh nan 4:00 PM leh 5:30 PM inkarah rimawi ngaihthlak hun ruat rawh." },
        "Follow-up Consultation:": { hi: "अनुवर्ती परामर्श:", as: "পৰৱৰ্তী পৰামৰ্শ:", bn: "পরবর্তী পরামর্শ:", kh: "Ka jingiakynduh biang:", mni: "মথংগী দোক্তরগা উনবা:", lus: "Follow-up Consultation:" },
        "Next clinical evaluation scheduled in 60 days.": { hi: "अगला क्लिनिकल मूल्यांकन 60 दिनों में निर्धारित है।", as: "পৰৱৰ্তী ক্লিনিকেল মূল্যাংকন ৬০ দিনৰ পিছত নিৰ্ধাৰিত।", bn: "পরবর্তী ক্লিনিক্যাল মূল্যায়ন ৬০ দিন পর নির্ধারিত।", kh: "Ka jingpeit biang u Doctor kan long hadien 60 sngi.", mni: "মথংগী ক্লিনিকেল চাংয়েং নুমিৎ ৬০ গী মতুংদা তৌগনি।", lus: "Doctor nen inentir leh hun tur chu ni 60 hnuah a ni ang." },
        "Verified by: SmritiSetu Clinical Assessment Framework": { hi: "सत्यापित: SmritiSetu क्लिनिकल मूल्यांकन ढाँचा", as: "প্ৰমাণিত: স্মৃতিসেতু ক্লিনিকেল মূল্যাংকন কাঠামো", bn: "যাচাইকৃত: স্মৃতিসেতু ক্লিনিক্যাল মূল্যায়ন কাঠামো", kh: "La pynskhem da: SmritiSetu Clinical Assessment Framework", mni: "শেংদোক্লবা: স্মৃতিসেতু ক্লিনিকেল চাংয়েং পথাপ", lus: "SmritiSetu Clinical Assessment Framework hriatpuina" },
        "Clinical Trajectory Tracking": { hi: "क्लिनिकल प्रक्षेपवक्र ट्रैकिंग", as: "ক্লিনিকেল গতিপথ অনুসৰণ", bn: "ক্লিনিক্যাল গতিপথ ট্র্যাকিং", kh: "Ka jingbudeit ia ka jingkoit jingkhiah", mni: "ক্লিনিকেল খোংজেল চাংয়েং", lus: "Clinical kalphung chhui zui zelna" },
        "14-Day Longitudinal Accuracy Track (%)": { hi: "14-दिवसीय दीर्घकालिक सटीकता ट्रैक (%)", as: "১৪ দিনৰ ধাৰাবাহিক শুদ্ধতা ট্ৰেক (%)", bn: "১৪ দিনের ধারাবাহিক নির্ভুলতা ট্র্যাক (%)", kh: "14 sngi ka jingthew jingbiang (%)", mni: "নুমিৎ ১৪ গী অচুম্বা চাংয়েং (%)", lus: "Ni 14 chhung dik dan chhui zui (%)" },
        "● Patient Accuracy": { hi: "● मरीज़ की सटीकता", as: "● ৰোগীৰ শুদ্ধতা", bn: "● রোগীর নির্ভুলতা", kh: "● Ka jingbiang u nongpang", mni: "● রুগীগী অচুম্বা", lus: "● Damlo dik dan" },
        "--- Target Stability (75%)": { hi: "--- लक्षित स्थिरता (75%)", as: "--- লক্ষ্য স্থিৰতা (৭৫%)", bn: "--- লক্ষ্য স্থায়িত্ব (৭৫%)", kh: "--- Jingthew ba skhem (75%)", mni: "--- পান্দমগী স্থিৰতা (৭৫%)", lus: "--- Tum dinhmun nghet (75%)" },
        "Initial 14-Day Baseline Mode:": { hi: "प्रारंभिक 14-दिवसीय आधारभूत मोड:", as: "প্ৰাৰম্ভিক ১৪ দিনৰ আধাৰ মোড:", bn: "প্রাথমিক ১৪ দিনের ভিত্তি মোড:", kh: "Ka rukom thew kaba nyngkong 14 sngi:", mni: "অহানবা নুমিৎ ১৪ গী আধার মোদ:", lus: "Ni 14 kalphung hmasa:" },
        "Showing neuro-geriatric baseline stability trajectory. As daily Memory Match activities are played, live patient accuracy points will overlay across this 14-day window.": { hi: "न्यूरो-जेरियाट्रिक आधारभूत स्थिरता प्रक्षेपवक्र दिखा रहा है। जैसे-जैसे दैनिक स्मृति मिलान खेल खेला जाएगा, मरीज़ के सटीक अंक इस 14-दिन की विंडो पर दिखाई देंगे।", as: "স্নায়ু-জৰা স্থিৰতাৰ গতিপথ প্ৰদৰ্শন কৰা হৈছে। প্ৰতিদিনে স্মৃতি মিলোৱা খেল খেলাৰ লগে লগে ৰোগীৰ সঠিক পইণ্ট এই ১৪ দিনত প্ৰদৰ্শিত হ'ব।", bn: "নিউরো-জেরিয়াট্রিক স্থায়িত্বের গতিপথ প্রদর্শিত হচ্ছে। প্রতিদিন মেমরি ম্যাচ খেললে রোগীর লাইভ নির্ভুলতা পয়েন্ট এই ১৪ দিনের গ্রাফে যুক্ত হবে।", kh: "Ka pyni ia ka jingrkhiang ka jingmut. Katba dang lehkai, ki point kin mih hangne.", mni: "নুমিৎ ১৪ গী হকশেল ফিভম উৎলি। নোংমগী স্মৃতি সানাবা সানরবদা রুগীগী অচুম্বা পয়েন্তশিং গ্রাফ অসিদা উগনি।", lus: "Rilru nghet dan kalphung a entir. Nitin Memory Match an khelh zual zel hian point hi a lang tel zel ang." },
        "SmritiSetu provides structured cognitive assistance and memory engagement tracking. Observational analytics support healthcare providers and families in early dementia care.": { hi: "SmritiSetu संरचित संज्ञानात्मक सहायता और स्मृति जुड़ाव ट्रैकिंग प्रदान करता है। अवलोकन विश्लेषिकी शुरुआती डिमेंशिया देखभाल में स्वास्थ्य सेवा प्रदाताओं और परिवारों का समर्थन करती है।", as: "স্মৃতিসেতুৱে গাঁথনিগত মানসিক সাহায্য আৰু স্মৃতি অনুসৰণ প্ৰদান কৰে। নিৰীক্ষণ বিশ্লেষণে প্ৰাৰম্ভিক ডিমেনচিয়া যত্নত পৰিয়াল আৰু চিকিৎসকক সহায় কৰে।", bn: "স্মৃতিসেতু সুসংগঠিত স্মৃতি সহায়তা এবং অগ্রগতি ট্র্যাকিং প্রদান করে। পর্যবেক্ষণ বিশ্লেষণ প্রাথমিক ডিমেনশিয়া সেবায় স্বাস্থ্যসেবা প্রদানকারী এবং পরিবারকে সমর্থন করে।", kh: "SmritiSetu ka iarap ban pynshai jingmut bad buh jingkynmaw ia ka jingmut. Ka iarap ia ki doctor bad ka iing.", mni: "স্মৃতিসেতুনা স্মৃতিগী তেংবাং অমসুং চাংয়েং তৌই। অসিনা অহানবা স্মৃতি মাংবদা ইমুং অমসুং দোক্তরদা মতেং পাংই।", lus: "SmritiSetu hian hriatna tanpuina leh chhui zui na felfai tak a pe. Hemi hian chhungkua leh doctor te a tanpui a ni." },
        "Caregiver Name": { hi: "देखभालकर्ता का नाम", as: "পৰিচৰ্যাকাৰীৰ নাম", bn: "পরিচর্যাকারীর নাম", kh: "Kyrteng nongsumar", mni: "য়েংশিনবগী মিং", lus: "Enkawltu Hming" },
        "Patient Full Name": { hi: "मरीज़ का पूरा नाम", as: "ৰোগীৰ সম্পূৰ্ণ নাম", bn: "রোগীর পুরো নাম", kh: "Kyrteng pura u nongpang", mni: "রুগীগী অপুনবা মিং", lus: "Damlo Hming Pumhlum" },
        "Email Address": { hi: "ईमेल पता", as: "ইমেইল ঠিকনা", bn: "ইমেইল ঠিকানা", kh: "Email address", mni: "ইমেল এদ্রেস", lus: "Email address" },
        "Close": { hi: "बंद करें", as: "বন্ধ কৰক", bn: "বন্ধ করুন", kh: "Khad", mni: "থিংজিনবা", lus: "Khar rawh" },
        "Female": { hi: "महिला", as: "মহিলা", bn: "মহিলা", kh: "Kynthei", mni: "নুপী", lus: "Hmeichhia" },
        "Male": { hi: "पुरुष", as: "পুৰুষ", bn: "পুরুষ", kh: "Shynrang", mni: "নুপা", lus: "Mipa" },
        "Daughter": { hi: "बेटी", as: "কন্যা", bn: "কন্যা", kh: "Khun kynthei", mni: "ইচানুপী", lus: "Fanu" },
        "DAUGHTER": { hi: "बेटी", as: "কন্যা", bn: "কন্যা", kh: "Khun kynthei", mni: "ইচানুপী", lus: "Fanu" },
        "Son": { hi: "बेटा", as: "পুত্ৰ", bn: "পুত্র", kh: "Khun shynrang", mni: "ইচানুপা", lus: "Fapa" },
        "Caregiver": { hi: "देखभालकर्ता", as: "পৰিচৰ্যাকাৰী", bn: "পরিচর্যাকারী", kh: "Nongsumar", mni: "য়েংশিনবা", lus: "Enkawltu" },
        "Not sure / undiagnosed": { hi: "अनिश्चित / अनिदानित", as: "অনিশ্চিত / অজ্ঞাত", bn: "অনিশ্চিত / অনির্ণীত", kh: "Bym pat shai", mni: "খঙদবা", lus: "Hriat chian loh" },
        "Early stage": { hi: "प्रारंभिक चरण", as: "প্ৰাৰম্ভিক পৰ্যায়", bn: "প্রাথমিক পর্যায়", kh: "Kyrdan ba nyngkong", mni: "অহানবা থাক", lus: "A tir lam" },
        "Middle stage": { hi: "मध्यम चरण", as: "মধ্যম পৰ্যায়", bn: "মধ্যবর্তী পর্যায়", kh: "Kyrdan pdeng", mni: "ময়ায় থাক", lus: "A laihawl" },
        "Advanced stage": { hi: "गंभीर चरण", as: "উন্নত পৰ্যায়", bn: "উন্নত পর্যায়", kh: "Kyrdan ba jur", mni: "অকনবা থাক", lus: "A zual lam" },
        "Longitudinal memory progress and neuro-geriatric tracking for": {
            hi: "दीर्घकालिक स्मृति प्रगति एवं तंत्रिका-वृद्धावस्था ट्रैकिंग:",
            as: "দীৰ্ঘম্যাদী স্মৃতি প্ৰগতি আৰু স্নায়ু-জৰা যত্ন নিৰীক্ষণ:",
            bn: "দীর্ঘমেয়াদী স্মৃতি অগ্রগতি এবং নিউরো-জেরিয়াট্রিক ট্র্যাকিং:",
            kh: "Ka jingbudeit ia ka jingkynmaw na ka bynta",
            mni: "স্মৃতিগী চাউখৎলকপা অমসুং ৱাখল য়েংশিনবা:",
            lus: "Hriatrengna kalphung chhui zui zelna tana"
        },
        "🧠 Cognitive Therapy & Memory Assistance Modules": {
            hi: "🧠 संज्ञानात्मक चिकित्सा एवं स्मृति सहायता मॉड्यूल",
            as: "🧠 মানসিক যত্ন আৰু স্মৃতি সাহায্য মডিউল",
            bn: "🧠 স্মৃতি চিকিৎসা ও সহায়তা মডিউল",
            kh: "🧠 Ki bynta sumar jingmut",
            mni: "🧠 স্মৃতি য়েংশিনবগী মডিউল",
            lus: "🧠 Hriatna tanpuina module-te"
        },
        "Create Account | SmritiSetu": {
            hi: "खाता बनाएं | SmritiSetu",
            as: "একাউণ্ট খোলক | স্মৃতিসেতু",
            bn: "অ্যাকাউন্ট তৈরি করুন | স্মৃতিসেতু",
            kh: "Shna account | SmritiSetu",
            mni: "একাউন্ত শেম্বা | স্মৃতিসেতু",
            lus: "Account siam rawh | SmritiSetu"
        },
        "Sign In | SmritiSetu": {
            hi: "साइन इन | SmritiSetu",
            as: "প্ৰৱেশ কৰক | স্মৃতিসেতু",
            bn: "সাইন ইন | স্মৃতিসেতু",
            kh: "Rung | SmritiSetu",
            mni: "চংবা | স্মৃতিসেতু",
            lus: "Lut rawh | SmritiSetu"
        },
        "Add Patient | SmritiSetu": {
            hi: "मरीज़ जोड़ें | SmritiSetu",
            as: "ৰোগী যোগ কৰক | স্মৃতিসেতু",
            bn: "রোগী যোগ করুন | স্মৃতিসেতু",
            kh: "Pynrung nongpang | SmritiSetu",
            mni: "রুগী হাপচিনবা | স্মৃতিসেতু",
            lus: "Damlo thar ziah luh | SmritiSetu"
        },
        "Memory Games | SmritiSetu": {
            hi: "स्मृति खेल | SmritiSetu",
            as: "স্মৃতি খেল | স্মৃতিসেতু",
            bn: "স্মৃতি খেলা | স্মৃতিসেতু",
            kh: "Jingleh jingkynmaw | SmritiSetu",
            mni: "স্মৃতি সানাবা | স্মৃতিসেতু",
            lus: "Hriatna infiamna | SmritiSetu"
        },
        "Redirecting...": {
            hi: "पुनर्निर्देशित कर रहे हैं...",
            as: "পুনৰ্নিৰ্দেশনা কৰা হৈছে...",
            bn: "পুনর্নির্দেশ করা হচ্ছে...",
            kh: "Dang pynphai sha...",
            mni: "হলহনবগী খোংজেল...",
            lus: "Hruai mek i ni..."
        },
        "404 Not Found": {
            hi: "404 पृष्ठ नहीं मिला",
            as: "৪০৪ পৃষ্ঠা বিচাৰি পোৱা নগ'ল",
            bn: "৪০৪ পৃষ্ঠা পাওয়া যায়নি",
            kh: "404 Ym shem ia ka page",
            mni: "৪০৪ লাম্বা ফংদে",
            lus: "404 Hmuh a ni lo"
        },
        "Not Found": {
            hi: "नहीं मिला",
            as: "বিচাৰি পোৱা নগ'ল",
            bn: "পাওয়া যায়নি",
            kh: "Ym shem",
            mni: "ফংদে",
            lus: "Hmuh loh"
        },
        ". If not, click the link.": {
            hi: "। यदि नहीं, तो लिंक पर क्लिक करें।",
            as: "। যদি নহয়, অনুগ্ৰহ কৰি লিংকটোত ক্লিক কৰক।",
            bn: "। যদি না হয়, লিঙ্কে ক্লিক করুন।",
            kh: ". Lada em, thap ia ka link.",
            mni: "। নত্রবদি, লিঙ্ক অসিদা নম্বীয়ু।",
            lus: ". A nih loh chuan, link hi hmet rawh."
        },
        "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.": {
            hi: "अनुरोधित पृष्ठ सर्वर पर नहीं मिला। कृपया पुनः प्रयास करें।",
            as: "অনুৰোধ কৰা পৃষ্ঠা পোৱা নগ'ল। অনুগ্ৰহ কৰি পুনৰ চেষ্টা কৰক।",
            bn: "অনুরোধ করা পৃষ্ঠা পাওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
            kh: "Ym shem ia ka page. Sngewbha pyrshang biang.",
            mni: "পৃষ্ঠা অসি ফংদে। অমুক হন্না হোৎনবীয়ু।",
            lus: "Page zawn hmuh a ni lo. Khawngaihin ti nawn leh rawh."
        }
    };

    const dynamicPatterns = [
        {
            re: /^(\d+:\d+)\s*(AM|PM)\s*(?:•|\.)?$/i,
            render: (match, lang) => {
                const t = match[1];
                const ampm = match[2].toUpperCase();
                const ampmMap = {
                    AM: { hi: "पूर्वाह्न", as: "পুৱা", bn: "পূর্বাহ্ন", kh: "Mynstep", mni: "অয়ুক", lus: "Zing" },
                    PM: { hi: "अपराह्न", as: "আবেলি", bn: "অপরাহ্ন", kh: "Janmiet", mni: "নুমিদাং", lus: "Tlai" }
                };
                const trans = (ampmMap[ampm] && ampmMap[ampm][lang]) || ampm;
                return `${t} ${trans} •`;
            }
        },
        {
            re: /^\(UHID\s*#(\d+)\)$/i,
            render: (match, lang) => {
                const id = match[1];
                const map = {
                    hi: `(विशिष्ट मरीज़ आईडी #${id})`,
                    as: `(ইউ এইচ আই ডি #${id})`,
                    bn: `(ইউএইচআইডি #${id})`,
                    kh: `(ID Nongpang #${id})`,
                    mni: `(ইউ ঐচ আই দি #${id})`,
                    lus: `(Damlo ID #${id})`,
                    en: `(UHID #${id})`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^🧠\s*Level\s*(\d+)$/i,
            render: (match, lang) => {
                const lvl = match[1];
                const map = {
                    hi: `🧠 स्तर ${lvl}`,
                    as: `🧠 স্তৰ ${lvl}`,
                    bn: `🧠 লেভেল ${lvl}`,
                    kh: `🧠 Kyrdan ${lvl}`,
                    mni: `🧠 থাক ${lvl}`,
                    lus: `🧠 Level ${lvl}`,
                    en: `🧠 Level ${lvl}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^🚀\s*Level\s*Up!\s*\(Level\s*(\d+)\)$/i,
            render: (match, lang) => {
                const lvl = match[1];
                const map = {
                    hi: `🚀 नया स्तर! (लेवल ${lvl})`,
                    as: `🚀 নতুন স্তৰ! (স্তৰ ${lvl})`,
                    bn: `🚀 নতুন লেভেল! (লেভেল ${lvl})`,
                    kh: `🚀 Kyrdan thymmai! (Kyrdan ${lvl})`,
                    mni: `🚀 অনৌবা থাক! (থাক ${lvl})`,
                    lus: `🚀 Sang zawk! (Level ${lvl})`,
                    en: `🚀 Level Up! (Level ${lvl})`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^💚\s*Easier\s*Round\s*\(Level\s*(\d+)\)$/i,
            render: (match, lang) => {
                const lvl = match[1];
                const map = {
                    hi: `💚 आसान राउंड (लेवल ${lvl})`,
                    as: `💚 সহজ ৰাউণ্ড (স্তৰ ${lvl})`,
                    bn: `💚 সহজ রাউন্ড (লেভেল ${lvl})`,
                    kh: `💚 Kaba jem (Kyrdan ${lvl})`,
                    mni: `💚 লাইবা রাউন্দ (থাক ${lvl})`,
                    lus: `💚 Awlsam zawk (Level ${lvl})`,
                    en: `💚 Easier Round (Level ${lvl})`
                };
                return map[lang] || map.en;
            }
        },

        {
            re: /^Welcome\s+Home,?\s*(.+)!?$/i,
            render: (match, lang) => {
                const name = match[1].replace(/[!🌸]+$/, "").trim();
                const map = {
                    hi: `घर में स्वागत है, ${name}!`,
                    as: `ঘৰলৈ স্বাগতম, ${name}!`,
                    bn: `ঘরে স্বাগতম, ${name}!`,
                    kh: `Wanbha sha iing, ${name}!`,
                    mni: `য়ুমদা য়াম্না তরাম্না ওকচরি, ${name}!`,
                    lus: `In-ah lo haw rawh le, ${name}!`,
                    en: `Welcome Home, ${name}!`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Welcome\s+Back,?\s*(.+)!?$/i,
            render: (match, lang) => {
                const name = match[1].replace(/[!🌸]+$/, "").trim();
                const map = {
                    hi: `वापस स्वागत है, ${name}!`,
                    as: `পুনৰ স্বাগতম, ${name}!`,
                    bn: `আবার স্বাগতম, ${name}!`,
                    kh: `Wanbha biang sha iing, ${name}!`,
                    mni: `অমুক হন্না তরাম্না ওকচরি, ${name}!`,
                    lus: `Lo kir leh rawh le, ${name}!`,
                    en: `Welcome Back, ${name}!`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^You\s+can\s+do\s+it,?\s*(.+?)!\s*Take your time,\s*smile,\s*and have fun!?$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `आप यह कर सकते हैं, ${name}! 🍵 अपना समय लें, मुस्कुराएं और आनंद लें!`,
                    as: `আপুনি কৰিব পাৰিব, ${name}! 🍵 লাহে লাহে কৰক, হাঁহক আৰু আনন্দ লওক!`,
                    bn: `আপনি করতে পারবেন, ${name}! 🍵 ধীরে সুস্থে খেলুন, হাসুন এবং আনন্দ নিন!`,
                    kh: `Phi lah ban leh ia kane, ${name}! 🍵 Shim por, rkhie bad kmen!`,
                    mni: `নহাক্না তৌবা ঙমগনি, ${name}! 🍵 তপ্না তৌবীয়ু, নোক্ত্ৰিনবীয়ু অমসুং নুংঙাইনা লৈবীয়ু!`,
                    lus: `I ti thei em em ang, ${name}! 🍵 Muangchangin ti la, nui la, hlim rawh!`,
                    en: `You can do it, ${name}! 🍵 Take your time, smile, and have fun!`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Bravo,?\s*(.+)!?$/i,
            render: (match, lang) => {
                const name = match[1].replace(/!+$/, "").trim();
                const map = {
                    hi: `शाबाश, ${name}! 🌟`,
                    as: `বঢ়িয়া, ${name}! 🌟`,
                    bn: `দারুণ, ${name}! 🌟`,
                    kh: `Phi la leh bha eh, ${name}! 🌟`,
                    mni: `য়াম্না ফৈ, ${name}! 🌟`,
                    lus: `I ti tha lutuk, ${name}! 🌟`,
                    en: `Bravo, ${name}! 🌟`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Playing\s+with:?\s*(.+)$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `${name} के साथ खेल रहे हैं`,
                    as: `${name} ৰ সৈতে খেলি আছে`,
                    bn: `${name}-এর সাথে খেলছেন`,
                    kh: `Ialeh bad ${name}`,
                    mni: `${name} গা লোয়ননা শানরি`,
                    lus: `${name} nena khelh mek`,
                    en: `Playing with: ${name}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^For\s+(.+?)\s*&\s*Family$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `${name} और परिवार के लिए`,
                    as: `${name} আৰু পৰিয়ালৰ বাবে`,
                    bn: `${name} ও পরিবারের জন্য`,
                    kh: `Na ka bynta ${name} bad ka Iing`,
                    mni: `${name} অমসুং ইমুংগীদমক`,
                    lus: `${name} leh chhungkua tan`,
                    en: `For ${name} & Family`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Gentle\s+Memory\s+Activities\s+for\s+(.+)$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `${name} के लिए सौम्य स्मृति गतिविधियाँ`,
                    as: `${name} ৰ বাবে সহজ স্মৃতি খেল`,
                    bn: `${name}-এর জন্য শান্ত স্মৃতি খেলা`,
                    kh: `Ki jingleh jingmut na ka bynta ${name}`,
                    mni: `${name} গীদমক নুংঙাইবা স্মৃতি খেল`,
                    lus: `${name} tana hriatrengna infiamna nem`,
                    en: `Gentle Memory Activities for ${name}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Module:\s*Visual Recall\s*•\s*Level\s*(\d+)$/i,
            render: (match, lang) => {
                const lvl = match[1];
                const map = {
                    hi: `मॉड्यूल: दृश्य स्मरण • स्तर ${lvl}`,
                    as: `মডিউল: দৃষ্টি স্মৰণ • স্তৰ ${lvl}`,
                    bn: `মডিউল: দৃষ্টি স্মরণ • স্তর ${lvl}`,
                    kh: `Module: Jingkynmaw dur • Level ${lvl}`,
                    mni: `মডিউল: উবা নিংশিংবা • থাক ${lvl}`,
                    lus: `Module: Hmuh hriatreng • Level ${lvl}`,
                    en: `Module: Visual Recall • Level ${lvl}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Patient\s*:\s*(.+)$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `मरीज़: ${name}`,
                    as: `ৰোগী: ${name}`,
                    bn: `রোগী: ${name}`,
                    kh: `Nongpang: ${name}`,
                    mni: `রুগী: ${name}`,
                    lus: `Damlo: ${name}`,
                    en: `Patient: ${name}`
                };
                return map[lang] || map.en;
            }
        }
,
        {
            re: /^Welcome\s+(?:Home|Back),\s*(.+?)!*$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `स्वागत है, ${name}!`,
                    as: `স্বাগতম, ${name}!`,
                    bn: `স্বাগতম, ${name}!`,
                    kh: `Khublei wanphai, ${name}!`,
                    mni: `তরাম্না ওকচরি, ${name}!`,
                    lus: `Chibai, ${name}!`,
                    en: `Welcome Home, ${name}!`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Signed\s+in\s+as\s+(.+?)\.*$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `${name} के रूप में साइन इन हैं।`,
                    as: `${name} হিচাপে প্ৰৱিষ্ট।`,
                    bn: `${name} হিসেবে সাইন ইন করা।`,
                    kh: `La rung kum ${name}.`,
                    mni: `${name} ওইনা চংলে।`,
                    lus: `${name} anga lut a ni.`,
                    en: `Signed in as ${name}.`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Caring\s+for\s+(.+?)\s*\(Age:\s*(\d+),\s*Gender:\s*(\w+)\)\.*$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const age = match[2];
                const g = match[3];
                const gMap = {
                    Female: { hi: "महिला", as: "মহিলা", bn: "মহিলা", kh: "Kynthei", mni: "নুপী", lus: "Hmeichhia" },
                    Male: { hi: "पुरुष", as: "পুৰুষ", bn: "পুরুষ", kh: "Shynrang", mni: "নুপা", lus: "Mipa" }
                };
                const gTrans = (gMap[g] && gMap[g][lang]) || g;
                const map = {
                    hi: `${name} की देखभाल कर रहे हैं (आयु: ${age}, लिंग: ${gTrans})।`,
                    as: `${name} ৰ যত্ন লৈ থকা হৈছে (বয়স: ${age}, লিংগ: ${gTrans})।`,
                    bn: `${name}-এর যত্ন নিচ্ছেন (বয়স: ${age}, লিঙ্গ: ${gTrans})।`,
                    kh: `Sumar ia ${name} (Rta: ${age}, Jinglong: ${gTrans}).`,
                    mni: `${name} পু য়েংশিল্লি (চহি: ${age}, নুপা/নুপী: ${gTrans})।`,
                    lus: `${name} enkawl mek a ni (Kum: ${age}, Mipa/Hmeichhia: ${gTrans}).`,
                    en: `Caring for ${name} (Age: ${age}, Gender: ${g}).`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^(\d+)\s+Gentle\s+Sessions\s+Completed$/i,
            render: (match, lang) => {
                const n = match[1];
                const map = {
                    hi: `${n} सरल सत्र पूर्ण हुए`,
                    as: `${n}টা সহজ সত্ৰ সম্পূৰ্ণ হ'ল`,
                    bn: `${n}টি সহজ সেশন সম্পন্ন হয়েছে`,
                    kh: `${n} tylli ki session la dep`,
                    mni: `তাঙ্কক ${n} লোইশিনখ্রে`,
                    lus: `Session ${n} zawh a ni ta`,
                    en: `${n} Gentle Sessions Completed`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^(\d+|Elder)\s*yrs\s*•\s*(\w+|—)$/i,
            render: (match, lang) => {
                const age = match[1];
                const sex = match[2];
                const sexMap = {
                    Female: { hi: "महिला", as: "মহিলা", bn: "মহিলা", kh: "Kynthei", mni: "নুপী", lus: "Hmeichhia" },
                    Male: { hi: "पुरुष", as: "পুৰুষ", bn: "পুরুষ", kh: "Shynrang", mni: "নুপা", lus: "Mipa" }
                };
                const sTrans = (sexMap[sex] && sexMap[sex][lang]) || sex;
                const yrsMap = { hi: "वर्ष", as: "বছৰ", bn: "বছর", kh: "snem", mni: "চহি", lus: "kum" };
                const yTrans = yrsMap[lang] || "yrs";
                return `${age} ${yTrans} • ${sTrans}`;
            }
        },
        {
            re: /^Patient\s+Record\s+ID:\s*(.+)$/i,
            render: (match, lang) => {
                const id = match[1].trim();
                const map = {
                    hi: `मरीज़ रिकॉर्ड आईडी: ${id}`,
                    as: `ৰোগী ৰেকৰ্ড আই ডি: ${id}`,
                    bn: `রোগী রেকর্ড আইডি: ${id}`,
                    kh: `ID Nongpang: ${id}`,
                    mni: `রুগী রেকর্ড আই দি: ${id}`,
                    lus: `Damlo Record ID: ${id}`,
                    en: `Patient Record ID: ${id}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Authorized\s+Review\s+Date:\s*(.+)$/i,
            render: (match, lang) => {
                const dt = match[1].trim();
                const map = {
                    hi: `अधिकृत समीक्षा तिथि: ${dt}`,
                    as: `অনুমোদিত পৰ্যালোচনা তাৰিখ: ${dt}`,
                    bn: `অনুমোদিত পর্যালোচনার তারিখ: ${dt}`,
                    kh: `Tarik bishar: ${dt}`,
                    mni: `অয়াবা চাংয়েং তারিখ: ${dt}`,
                    lus: `Ennawn theih hun: ${dt}`,
                    en: `Authorized Review Date: ${dt}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Longitudinal\s+memory\s+progress\s+and\s+neuro-geriatric\s+tracking\s+for\s*(.+)$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `${name} के लिए दीर्घकालिक स्मृति प्रगति एवं तंत्रिका-वृद्धावस्था ट्रैकिंग`,
                    as: `${name} ৰ বাবে দীৰ্ঘম্যাদী স্মৃতি প্ৰগতি আৰু স্নায়ু-জৰা যত্ন নিৰীক্ষণ`,
                    bn: `${name}-এর দীর্ঘমেয়াদী স্মৃতি অগ্রগতি ও নিউরো-জেরিয়াট্রিক ট্র্যাকিং`,
                    kh: `Ka jingbudeit ia ka jingkynmaw na ka bynta ${name}`,
                    mni: `${name} গীদমক স্মৃতি চাউখৎলকপা অমসুং ৱাখল য়েংশিনবা`,
                    lus: `${name} tana hriatrengna kalphung chhui zui zelna`,
                    en: `Longitudinal memory progress and neuro-geriatric tracking for ${name}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^For\s+(.+?)\s*&\s*Family$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `${name} और परिवार के लिए`,
                    as: `${name} আৰু পৰিয়ালৰ বাবে`,
                    bn: `${name} ও পরিবারের জন্য`,
                    kh: `Na ka bynta ${name} bad ka Iing`,
                    mni: `${name} অমসুং ইমুংগীদমক`,
                    lus: `${name} leh Chhungkua tan`,
                    en: `For ${name} & Family`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^For\s+(.+)$/i,
            render: (match, lang) => {
                const name = match[1].trim();
                const map = {
                    hi: `${name} के लिए`,
                    as: `${name} ৰ বাবে`,
                    bn: `${name}-এর জন্য`,
                    kh: `Na ka bynta ${name}`,
                    mni: `${name} গীদমক`,
                    lus: `${name} tan`,
                    en: `For ${name}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Today:\s*(\d+)\/100\s*Memory\s*Index$/i,
            render: (match, lang) => {
                const score = match[1];
                const map = {
                    hi: `आज: ${score}/100 स्मृति सूचकांक`,
                    as: `আজি: ${score}/১০০ স্মৃতি সূচক`,
                    bn: `আজ: ${score}/১০০ স্মৃতি সূচক`,
                    kh: `Mynta: ${score}/100 Jingkynmaw`,
                    mni: `ঙসি: ${score}/১০০ স্মৃতি সূচক`,
                    lus: `Vawiin: ${score}/100 Hriatna Index`,
                    en: `Today: ${score}/100 Memory Index`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^([🌱📈\s]*)([+-]?\d+\.?\d*%?\s*(?:vs\s+start(?:\s+vs\s+baseline)?|this\s+week))$/i,
            render: (match, lang) => {
                const icon = match[1] || '';
                const body = match[2];
                const map = {
                    hi: `${icon}${body.replace('vs start', 'शुरुआत की तुलना में').replace('this week', 'इस सप्ताह').replace('vs baseline', 'आधार रेखा से')}`,
                    as: `${icon}${body.replace('vs start', 'আৰম্ভণিৰ তুলনাত').replace('this week', 'এই সপ্তাহত').replace('vs baseline', 'আধাৰ ৰেখাৰ পৰা')}`,
                    bn: `${icon}${body.replace('vs start', 'শুরুর তুলনায়').replace('this week', 'এই সপ্তাহে').replace('vs baseline', 'ভিত্তিরেখা থেকে')}`,
                    kh: `${icon}${body.replace('vs start', 'katkum ka tynrai').replace('this week', 'ha kane ka taiew').replace('vs baseline', 'katkum ka baseline')}`,
                    mni: `${icon}${body.replace('vs start', 'হৌবদগী').replace('this week', 'চয়োলসিদা')}`,
                    lus: `${icon}${body.replace('vs start', 'a tirh atanga chhutin').replace('this week', 'kar kalta')}`,
                    en: `${icon}${body}`
                };
                return map[lang] || map.en;
            }
        },
        {
            re: /^Age:\s*(.+?)\s*\|\s*Gender:\s*(.+?)\s*\|\s*Staging:\s*(.+?)\s*\|\s*Caregiver\s+Contact:\s*(.+)$/i,
            render: (match, lang) => {
                const a = match[1];
                const g = match[2];
                const s = match[3];
                const c = match[4];
                const map = {
                    hi: `आयु: ${a} | लिंग: ${g} | चरण: ${s} | देखभालकर्ता संपर्क: ${c}`,
                    as: `বয়স: ${a} | লিংগ: ${g} | পৰ্যায়: ${s} | পৰিচৰ্যাকাৰীৰ যোগাযোগ: ${c}`,
                    bn: `বয়স: ${a} | লিঙ্গ: ${g} | পর্যায়: ${s} | পরিচর্যাকারীর যোগাযোগ: ${c}`,
                    kh: `Rta: ${a} | Jinglong: ${g} | Kyrdan: ${s} | Phone: ${c}`,
                    mni: `চহি: ${a} | নুপা/নুপী: ${g} | থাক: ${s} | পাউ ফাওনবা: ${c}`,
                    lus: `Kum: ${a} | Mipa/Hmeichhia: ${g} | Dinhmun: ${s} | Biakpawhna: ${c}`,
                    en: `Age: ${a} | Gender: ${g} | Staging: ${s} | Caregiver Contact: ${c}`
                };
                return map[lang] || map.en;
            }
        }
    ];

    function walkTextNodes(node, callback) {
        if (!node) return;
        if (node.nodeType === Node.TEXT_NODE) {
            callback(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const tag = node.tagName.toLowerCase();
            if (tag === 'script' || tag === 'style' || tag === 'select' || tag === 'option' || tag === 'noscript' || node.classList.contains('notranslate') || node.hasAttribute('data-no-translate') || node.hasAttribute('data-i18n')) {
                return;
            }
            for (let child = node.firstChild; child; child = child.nextSibling) {
                walkTextNodes(child, callback);
            }
        }
    }

    const saved = localStorage.getItem("smritisetu-language") || "en";

    const wordVocabulary = [
        { phrase: "Back home", re: new RegExp("\\bBack\\ home\\b", 'gi'), hi: "वापस होम", as: "ঘৰলৈ উভতক", bn: "বাড়ি ফিরুন", kh: "Ïoh sha iing", mni: "য়ুমদা হনবা", lus: "In lamah kir leh" },
        { phrase: "Back to Games", re: new RegExp("\\bBack\\ to\\ Games\\b", 'gi'), hi: "खेलों पर वापस", as: "খেললৈ উভতক", bn: "খেলায় ফিরে যান", kh: "Phai sha ki jingleh", mni: "সানাবদা হনবা", lus: "Infiamna lam pan rawh" },
        { phrase: "Back", re: new RegExp("\\bBack\\b", 'gi'), hi: "वापस", as: "উভতি", bn: "ফিরে", kh: "Leit biang", mni: "হনবা", lus: "Kir leh" },
        { phrase: "back", re: new RegExp("\\bback\\b", 'gi'), hi: "वापस", as: "উভতি", bn: "ফিরে", kh: "Leit biang", mni: "হনবা", lus: "Kir leh" },
        { phrase: "Dementia Care Dashboard & Assistance Hub", re: new RegExp("\\bDementia\\ Care\\ Dashboard\\ \\&\\ Assistance\\ Hub\\b", 'gi'), hi: "डिमेंशिया देखभाल डैशबोर्ड एवं सहायता केंद्र", as: "স্মৃতিভ্ৰংশ যত্ন ডেছবৰ্ড আৰু সাহায্য কেন্দ্ৰ", bn: "ডিমেনশিয়া পরিচর্যা ড্যাশবোর্ড ও সহায়তা কেন্দ্র", kh: "Dashboard sumar jingklet", mni: "স্মৃতি মাংবা য়েংশিনবগী ড্যাশবোর্ড", lus: "Dementia Enkawlna Dashboard" },
        { phrase: "Diagnostic Neuro-Cognitive Observations", re: new RegExp("\\bDiagnostic\\ Neuro\\-Cognitive\\ Observations\\b", 'gi'), hi: "नैदानिक तंत्रिका-संज्ञानात्मक अवलोकन", as: "নিদানমূলক স্নায়ু-মানসিক নিৰীক্ষণ", bn: "ডায়াগনস্টিক নিউরো-কগনিটিভ পর্যবেক্ষণ", kh: "Ki jingthuh u Doctor", mni: "দোক্তরগী ৱাখল চাংয়েং য়েংশিনবা", lus: "Rilru lam dinhmun hmuh chhuah te" },
        { phrase: "Tell us about the person you care for", re: new RegExp("\\bTell\\ us\\ about\\ the\\ person\\ you\\ care\\ for\\b", 'gi'), hi: "उस व्यक्ति के बारे में बताएं जिसकी आप देखभाल करते हैं", as: "আপুনি যত্ন লোৱা ব্যক্তিজনৰ বিষয়ে কওক", bn: "আপনি যার যত্ন নেন তার সম্পর্কে বলুন", kh: "Iathuh shaphang uba phi sumar", mni: "নহাক্না য়েংশিল্লিবা মীগী মরমদা হায়বীয়ু", lus: "I mi enkawl chungchang min hrilh rawh" },
        { phrase: "North Eastern Region Care Initiative", re: new RegExp("\\bNorth\\ Eastern\\ Region\\ Care\\ Initiative\\b", 'gi'), hi: "पूर्वोत्तर क्षेत्र देखभाल पहल", as: "উত্তৰ-পূব অঞ্চল যত্ন পদক্ষেপ", bn: "উত্তর-পূর্ব অঞ্চল পরিচর্যা উদ্যোগ", kh: "Ka kam sumar ha North East", mni: "অৱাং-নোংপোক লমদমগী থৌরাং", lus: "North East Region Enkawlna Hmalakna" },
        { phrase: "Physician Clinical Recommendations", re: new RegExp("\\bPhysician\\ Clinical\\ Recommendations\\b", 'gi'), hi: "चिकित्सक नैदानिक अनुशंसाएँ", as: "চিকিৎসকৰ ক্লিনিকেল পৰামৰ্শাৱলী", bn: "চিকিৎসকের ক্লিনিক্যাল সুপারিশসমূহ", kh: "Ki jingbthah u Doctor", mni: "দোক্তরগী ক্লিনিকেল পাউতাকশিং", lus: "Doctor thurawn te" },
        { phrase: "Register patient & view dashboard", re: new RegExp("\\bRegister\\ patient\\ \\&\\ view\\ dashboard\\b", 'gi'), hi: "मरीज़ पंजीकृत करें और डैशबोर्ड देखें", as: "ৰোগী পঞ্জীয়ন কৰক আৰু ডেছবৰ্ড চাওক", bn: "রোগী নিবন্ধন করুন ও ড্যাশবোর্ড দেখুন", kh: "Pynrung nongpang & peit dashboard", mni: "রুগী হাপচিনউ অমসুং ড্যাশবোর্ড য়েংবীয়ু", lus: "Damlo ziah lut la dashboard en rawh" },
        { phrase: "Evening Folk Music & Relaxation", re: new RegExp("\\bEvening\\ Folk\\ Music\\ \\&\\ Relaxation\\b", 'gi'), hi: "शाम का लोक संगीत और विश्राम", as: "সন্ধিয়াৰ লোকগীত আৰু বিশ্ৰাম", bn: "সন্ধ্যার লোকগান ও বিশ্রাম", kh: "Ki rwai tymmen bad jingthait janmiet", mni: "নুমিদাংগী ঈশৈ অমসুং পোথারবা", lus: "Tlailam hla leh hahdamna" },
        { phrase: "Gentle Picture Memory Activity", re: new RegExp("\\bGentle\\ Picture\\ Memory\\ Activity\\b", 'gi'), hi: "सरल चित्र स्मृति गतिविधि", as: "সহজ ছবি স্মৃতি কাৰ্যকলাপ", bn: "সহজ ছবি স্মৃতি খেলা", kh: "Ka jingleh dur ba jem", mni: "ময়েক নিংশিংবগী শান্ত খেল", lus: "Milem hriatreng infiamna nem" },
        { phrase: "Clinical Assessment Framework", re: new RegExp("\\bClinical\\ Assessment\\ Framework\\b", 'gi'), hi: "क्लिनिकल मूल्यांकन ढाँचा", as: "ক্লিনিকেল মূল্যাংকন কাঠামো", bn: "ক্লিনিক্যাল মূল্যায়ন কাঠামো", kh: "Ka rukom thew u Doctor", mni: "ক্লিনিকেল চাংয়েং পথাপ", lus: "Clinical Assessment Framework" },
        { phrase: "Create your caregiver account", re: new RegExp("\\bCreate\\ your\\ caregiver\\ account\\b", 'gi'), hi: "अपना देखभालकर्ता खाता बनाएं", as: "আপোনাৰ পৰিচৰ্যাকাৰী একাউণ্ট খোলক", bn: "আপনার পরিচর্যাকারী অ্যাকাউন্ট তৈরি করুন", kh: "Shna ka account nongsumar", mni: "য়েংশিনবগী একাউন্ত শেম্বা", lus: "Enkawltu account siam rawh" },
        { phrase: "Clinical Trajectory Tracking", re: new RegExp("\\bClinical\\ Trajectory\\ Tracking\\b", 'gi'), hi: "क्लिनिकल प्रक्षेपवक्र ट्रैकिंग", as: "ক্লিনিকেল গতিপথ অনুসৰণ", bn: "ক্লিনিক্যাল গতিপথ ট্র্যাকিং", kh: "Ka jingbudeit ia ka jingkoit jingkhiah", mni: "ক্লিনিকেল খোংজেল চাংয়েং", lus: "Clinical kalphung chhui zui" },
        { phrase: "Cognitive Assistance Portal", re: new RegExp("\\bCognitive\\ Assistance\\ Portal\\b", 'gi'), hi: "संज्ञानात्मक सहायता पोर्टल", as: "মানসিক সাহায্য পৰ্টেল", bn: "স্মৃতি সহায়তা পোর্টাল", kh: "Portal sumar jingmut", mni: "স্মৃতি তেংবাং পোৰ্টেল", lus: "Cognitive Assistance Portal" },
        { phrase: "Morning Memory Medication", re: new RegExp("\\bMorning\\ Memory\\ Medication\\b", 'gi'), hi: "सुबह की स्मृति दवा", as: "ৰাতিপুৱাৰ স্মৃতি ঔষধ", bn: "সকালের স্মৃতি ওষুধ", kh: "Ka dawai jingkynmaw mynstep", mni: "অয়ুক্কী স্মৃতি হিদাক", lus: "Zing lam hriatna damdawi" },
        { phrase: "Afternoon Hydration & Tea", re: new RegExp("\\bAfternoon\\ Hydration\\ \\&\\ Tea\\b", 'gi'), hi: "दोपहर का जलपान और चाय", as: "দুপৰীয়াৰ পানী আৰু চাহ", bn: "দুপুরের জলপান ও চা", kh: "Ka sha bad um janmiet", mni: "নুংথিলগী ঈশিং অমসুং চা", lus: "Chawhnu tui leh thingpui in hun" },
        { phrase: "Dementia Care Dashboard", re: new RegExp("\\bDementia\\ Care\\ Dashboard\\b", 'gi'), hi: "डिमेंशिया देखभाल डैशबोर्ड", as: "স্মৃতিভ্ৰংশ যত্ন ডেছবৰ্ড", bn: "ডিমেনশিয়া পরিচর্যা ড্যাশবোর্ড", kh: "Dashboard sumar jingklet", mni: "স্মৃতি মাংবা ড্যাশবোর্ড", lus: "Dementia Enkawlna Dashboard" },
        { phrase: "Cognitive Health Status", re: new RegExp("\\bCognitive\\ Health\\ Status\\b", 'gi'), hi: "संज्ञानात्मक स्वास्थ्य स्थिति", as: "মানসিক স্বাস্থ্যৰ স্থিতি", bn: "মানসিক স্বাস্থ্য স্থিতি", kh: "Ka kyrdan ka jingmut", mni: "ৱাখল হকশেলগী ফিভম", lus: "Hriatna hriselna dinhmun" },
        { phrase: "Care & Clinical Report", re: new RegExp("\\bCare\\ \\&\\ Clinical\\ Report\\b", 'gi'), hi: "देखभाल एवं क्लिनिकल रिपोर्ट", as: "যত্ন আৰু ক্লিনিকেল প্ৰতিবেদন", bn: "যত্ন ও ক্লিনিক্যাল রিপোর্ট", kh: "Ka report sumar", mni: "য়েংশিনবা অমসুং ক্লিনিকেল রিপোর্ট", lus: "Enkawlna leh Clinical Report" },
        { phrase: "Care Routine Adherence", re: new RegExp("\\bCare\\ Routine\\ Adherence\\b", 'gi'), hi: "देखभाल दिनचर्या अनुपालन", as: "যত্নৰ নিয়ম পালন", bn: "যত্নের রুটিন মেনে চলা", kh: "Jingbud ia ka rukom", mni: "নিয়ম ইনবা", lus: "Enkawl dan zawm kim" },
        { phrase: "Edit Caregiver Profile", re: new RegExp("\\bEdit\\ Caregiver\\ Profile\\b", 'gi'), hi: "देखभालकर्ता प्रोफ़ाइल संपादित करें", as: "পৰিচৰ্যাকাৰী প্ৰ'ফাইল সম্পাদনা কৰক", bn: "পরিচর্যাকারী প্রোফাইল সম্পাদনা করুন", kh: "Pynbna ia ka Profile nongsumar", mni: "য়েংশিনবগী প্রোফাইল শেমদোকউ", lus: "Enkawltu Profile siamthat rawh" },
        { phrase: "Daily Schedule Active", re: new RegExp("\\bDaily\\ Schedule\\ Active\\b", 'gi'), hi: "दैनिक दिनचर्या सक्रिय", as: "দৈনিক নিয়ম সক্ৰিয়", bn: "দৈনিক সময়সূচি সক্রিয়", kh: "Ka rukom ka trei", mni: "নোংমগী নিয়ম চৎথরি", lus: "Nitin hunbi a kal" },
        { phrase: "Sign in to my account", re: new RegExp("\\bSign\\ in\\ to\\ my\\ account\\b", 'gi'), hi: "मेरे खाते में साइन इन करें", as: "মোৰ একাউণ্টত প্ৰৱেশ কৰক", bn: "আমার অ্যাকাউন্টে সাইন ইন করুন", kh: "Rung ha ka account", mni: "ঐগী একাউন্তদা চংবা", lus: "Ka account-ah lut rawh" },
        { phrase: "Sign in to SmritiSetu", re: new RegExp("\\bSign\\ in\\ to\\ SmritiSetu\\b", 'gi'), hi: "SmritiSetu में साइन इन करें", as: "স্মৃতিসেতুত প্ৰৱেশ কৰক", bn: "স্মৃতিসেতুতে সাইন ইন করুন", kh: "Rung ha SmritiSetu", mni: "স্মৃতিসেতুদা চংবা", lus: "SmritiSetu-ah lut rawh" },
        { phrase: "Care Circle Profiles", re: new RegExp("\\bCare\\ Circle\\ Profiles\\b", 'gi'), hi: "देखभाल मंडल प्रोफ़ाइल", as: "যত্ন মণ্ডল প্ৰ'ফাইল", bn: "যত্ন বৃত্ত প্রোফাইল", kh: "Ki Profile Sumar", mni: "য়েংশিনবগী প্রোফাইল", lus: "Enkawltu Profile-te" },
        { phrase: "Edit Patient Profile", re: new RegExp("\\bEdit\\ Patient\\ Profile\\b", 'gi'), hi: "मरीज़ प्रोफ़ाइल संपादित करें", as: "ৰোগীৰ প্ৰ'ফাইল সম্পাদনা কৰক", bn: "রোগীর প্রোফাইল সম্পাদনা করুন", kh: "Pynbna ia ka Profile u nongpang", mni: "অনাবাগী প্রোফাইল শেমদোকউ", lus: "Damlo Profile siamthat rawh" },
        { phrase: "Create a new account", re: new RegExp("\\bCreate\\ a\\ new\\ account\\b", 'gi'), hi: "नया खाता बनाएं", as: "নতুন একাউণ্ট খোলক", bn: "নতুন অ্যাকাউন্ট তৈরি করুন", kh: "Shna account thymmai", mni: "অনৌবা একাউন্ত শেম্বা", lus: "Account thar siam rawh" },
        { phrase: "Family Care Profile", re: new RegExp("\\bFamily\\ Care\\ Profile\\b", 'gi'), hi: "पारिवारिक देखभाल प्रोफ़ाइल", as: "পৰিয়াল যত্ন প্ৰ'ফাইল", bn: "পারিবারিক যত্ন প্রোফাইল", kh: "Profile sumar iing", mni: "ইমুংগী য়েংশিনবা প্রোফাইল", lus: "Chhungkaw Enkawlna Profile" },
        { phrase: "Already registered?", re: new RegExp("\\bAlready\\ registered\\?\\b", 'gi'), hi: "पहले से पंजीकृत हैं?", as: "ইতিমধ্যে পঞ্জীয়ন কৰা হৈছে?", bn: "ইতিমধ্যে নিবন্ধিত?", kh: "La dep pynrung?", mni: "হান্ননা হাপচিনখ্রব্রা?", lus: "I inziak lut tawh em?" },
        { phrase: "Moderate / Focused", re: new RegExp("\\bModerate\\ /\\ Focused\\b", 'gi'), hi: "मध्यम / एकाग्र", as: "মধ্যম / একাগ্ৰ", bn: "মাঝারি / একাগ্র", kh: "Pdeng / Pynleit jingmut", mni: "ময়ায় / মীৎয়েং চাবা", lus: "Felfai tawk / Rilru pe" },
        { phrase: "Attention & Focus", re: new RegExp("\\bAttention\\ \\&\\ Focus\\b", 'gi'), hi: "ध्यान एवं एकाग्रता", as: "মনোযোগ আৰু একাগ্ৰতা", bn: "মনোযোগ ও একাগ্রতা", kh: "Ka jingpynleit jingmut", mni: "মীৎয়েং অমসুং ৱাখল", lus: "Rilru pekna" },
        { phrase: "Stable Trajectory", re: new RegExp("\\bStable\\ Trajectory\\b", 'gi'), hi: "स्थिर प्रक्षेपवक्र", as: "স্থিৰ গতিপথ", bn: "স্থিতিশীল গতিপথ", kh: "Skhem ka lynti", mni: "লেংদবা খোংজেল", lus: "Kalphung nghet" },
        { phrase: "Caregiver Profile", re: new RegExp("\\bCaregiver\\ Profile\\b", 'gi'), hi: "देखभालकर्ता प्रोफ़ाइल", as: "পৰিচৰ্যাকাৰী প্ৰ'ফাইল", bn: "পরিচর্যাকারী প্রোফাইল", kh: "Profile nongsumar", mni: "য়েংশিনবগী প্রোফাইল", lus: "Enkawltu Profile" },
        { phrase: "Confirm password", re: new RegExp("\\bConfirm\\ password\\b", 'gi'), hi: "पासवर्ड की पुष्टि करें", as: "পাছৱৰ্ড নিশ্চিত কৰক", bn: "পাসওয়ার্ড নিশ্চিত করুন", kh: "Pynskhem password", mni: "পাসৱার্দ চেৎশিনহনবা", lus: "Password nemnghet rawh" },
        { phrase: "Music & memories", re: new RegExp("\\bMusic\\ \\&\\ memories\\b", 'gi'), hi: "संगीत और यादें", as: "সংগীত আৰু স্মৃতি", bn: "সঙ্গীত ও স্মৃতি", kh: "Rwai bad jingkynmaw", mni: "ঈশৈ অমসুং নিংশিংবা", lus: "Rimawi leh hriatrengna" },
        { phrase: "Familiar Things", re: new RegExp("\\bFamiliar\\ Things\\b", 'gi'), hi: "परिचित वस्तुएं", as: "পৰিচিত বস্তু", bn: "পরিচিত জিনিস", kh: "Ki tiar ba ithuh", mni: "চিনবা পোৎলমশিং", lus: "Thil hriat lar" },
        { phrase: "Sundowning Risk", re: new RegExp("\\bSundowning\\ Risk\\b", 'gi'), hi: "संध्याकालीन भ्रम जोखिम", as: "গধূলিৰ বিভ্ৰান্তিৰ আশংকা", bn: "সান্ধ্যকালীন বিভ্রান্তির ঝুঁকি", kh: "Ka jingeh janmiet", mni: "নুমিদাং ৱাখল লানবগী খুদোংথিবা", lus: "Tlailam buai theihna" },
        { phrase: "Stable & Active", re: new RegExp("\\bStable\\ \\&\\ Active\\b", 'gi'), hi: "स्थिर एवं सक्रिय", as: "স্থিৰ আৰু সক্ৰিয়", bn: "স্থির ও সক্রিয়", kh: "Skhem bad trei", mni: "লেংদবা অমসুং এক্তিব", lus: "Nghet leh nung sarh" },
        { phrase: "Care Navigation", re: new RegExp("\\bCare\\ Navigation\\b", 'gi'), hi: "देखभाल नेविगेशन", as: "যত্ন নেভিগেচন", bn: "যত্ন নেভিগেশন", kh: "Jingïalam Sumar", mni: "য়েংশিনবগী লমজিংবা", lus: "Enkawlna Hruaitu" },
        { phrase: "Patient Profile", re: new RegExp("\\bPatient\\ Profile\\b", 'gi'), hi: "मरीज़ प्रोफ़ाइल", as: "ৰোগীৰ প্ৰ'ফাইল", bn: "রোগীর প্রোফাইল", kh: "Profile u nongpang", mni: "অনাবাগী প্রোফাইল", lus: "Damlo Profile" },
        { phrase: "Recommendations", re: new RegExp("\\bRecommendations\\b", 'gi'), hi: "अनुशंसाएँ", as: "পৰামৰ্শাৱলী", bn: "সুপারিশসমূহ", kh: "Ki jingbthah", mni: "পাউতাকশিং", lus: "Thurawnte" },
        { phrase: "Dementia Stage", re: new RegExp("\\bDementia\\ Stage\\b", 'gi'), hi: "डिमेंशिया चरण", as: "স্মৃতিভ্ৰংশৰ পৰ্যায়", bn: "ডিমেনশিয়া পর্যায়", kh: "Kyrdan jingklet", mni: "স্মৃতি মাংবগী তাংকক", lus: "Hriatrengna bo chin" },
        { phrase: "Contact Number", re: new RegExp("\\bContact\\ Number\\b", 'gi'), hi: "संपर्क नंबर", as: "যোগাযোগ নম্বৰ", bn: "যোগাযোগ নম্বর", kh: "Phone / Contact", mni: "পাউ ফাওনবা", lus: "Biakpawhna" },
        { phrase: "Recommendation", re: new RegExp("\\bRecommendation\\b", 'gi'), hi: "अनुशंसा", as: "পৰামৰ্শ", bn: "সুপারিশ", kh: "Jingbthah", mni: "পাউতাক", lus: "Thurawn" },
        { phrase: "Visual Recall", re: new RegExp("\\bVisual\\ Recall\\b", 'gi'), hi: "दृश्य स्मरण", as: "দৃষ্টি স্মৰণ", bn: "দৃষ্টি স্মরণ", kh: "Jingkynmaw dur", mni: "উবা নিংশিংবা", lus: "Hmuh hriatreng" },
        { phrase: "Doctor Report", re: new RegExp("\\bDoctor\\ Report\\b", 'gi'), hi: "डॉक्टर रिपोर्ट", as: "চিকিৎসকৰ প্ৰতিবেদন", bn: "ডাক্তার রিপোর্ট", kh: "Report u Doctor", mni: "দোক্তরগী রিপোর্ট", lus: "Doctor report" },
        { phrase: "Email Address", re: new RegExp("\\bEmail\\ Address\\b", 'gi'), hi: "ईमेल पता", as: "ইমেইল ঠিকনা", bn: "ইমেইল ঠিকানা", kh: "Email address", mni: "ইমেল এদ্রেস", lus: "Email address" },
        { phrase: "Memory Games", re: new RegExp("\\bMemory\\ Games\\b", 'gi'), hi: "स्मृति खेल", as: "স্মৃতি খেল", bn: "স্মৃতি খেলা", kh: "Jingleh jingkynmaw", mni: "স্মৃতি সানাবশিং", lus: "Hriatrengna infiamna" },
        { phrase: "Memory Match", re: new RegExp("\\bMemory\\ Match\\b", 'gi'), hi: "स्मृति मिलान", as: "স্মৃতি মিলোৱা", bn: "স্মৃতি মিল", kh: "Memory Match", mni: "স্মৃতি মিলোইনবা", lus: "Memory Match" },
        { phrase: "Care Modules", re: new RegExp("\\bCare\\ Modules\\b", 'gi'), hi: "देखभाल मॉड्यूल", as: "যত্ন মডিউল", bn: "যত্ন মডিউল", kh: "Ki bynta sumar", mni: "য়েংশিনবগী মডিউল", lus: "Enkawlna Module-te" },
        { phrase: "Patient Name", re: new RegExp("\\bPatient\\ Name\\b", 'gi'), hi: "मरीज़ का नाम", as: "ৰোগীৰ নাম", bn: "রোগীর নাম", kh: "Kyrteng u nongpang", mni: "অনাবাগী মিং", lus: "Damlo Hming" },
        { phrase: "Save Changes", re: new RegExp("\\bSave\\ Changes\\b", 'gi'), hi: "परिवर्तन सहेजें", as: "পৰিৱৰ্তন সংৰক্ষণ কৰক", bn: "পরিবর্তন সংরক্ষণ করুন", kh: "Kynshew ki jingkylla", mni: "শেমদোকপা থমিল্লু", lus: "Siamthat vawng tha rawh" },
        { phrase: "Observations", re: new RegExp("\\bObservations\\b", 'gi'), hi: "अवलोकन", as: "নিৰীক্ষণ", bn: "পর্যবেক্ষণ", kh: "Ki jingbithuh", mni: "য়েংশিনবশিং", lus: "Hmuh chhuah te" },
        { phrase: "Consultation", re: new RegExp("\\bConsultation\\b", 'gi'), hi: "परामर्श", as: "পৰামৰ্শ", bn: "পরামর্শ", kh: "Jingiakynduh", mni: "উনবা", lus: "Inbiakna" },
        { phrase: "Memory Game", re: new RegExp("\\bMemory\\ Game\\b", 'gi'), hi: "स्मृति खेल", as: "স্মৃতি খেল", bn: "স্মৃতি খেলা", kh: "Jingleh jingkynmaw", mni: "স্মৃতি সানাবা", lus: "Hriatrengna infiamna" },
        { phrase: "Word Recall", re: new RegExp("\\bWord\\ Recall\\b", 'gi'), hi: "शब्द स्मरण", as: "শব্দ স্মৰণ", bn: "শব্দ স্মরণ", kh: "Kynmaw kyntien", mni: "ৱাহৈ নিংশিংবা", lus: "Tawngkam hriatreng" },
        { phrase: "Family Care", re: new RegExp("\\bFamily\\ Care\\b", 'gi'), hi: "पारिवारिक देखभाल", as: "পৰিয়াল যত্ন", bn: "পারিবারিক যত্ন", kh: "Ka sumar iing", mni: "ইমুংগী য়েংশিনবা", lus: "Chhungkua enkawlna" },
        { phrase: "Observation", re: new RegExp("\\bObservation\\b", 'gi'), hi: "अवलोकन", as: "নিৰীক্ষণ", bn: "পর্যবেক্ষণ", kh: "Jingbithuh", mni: "য়েংশিনবা", lus: "Hmuh chhuah" },
        { phrase: "Medication", re: new RegExp("\\bMedication\\b", 'gi'), hi: "दवा", as: "ঔষধ", bn: "ওষুধ", kh: "Dawai", mni: "হিদাক", lus: "Damdawi" },
        { phrase: "Difficulty", re: new RegExp("\\bDifficulty\\b", 'gi'), hi: "कठिनाई", as: "কঠিনতা", bn: "কঠিনতা", kh: "Jingeh", mni: "লূবা", lus: "Harsatna" },
        { phrase: "Relaxation", re: new RegExp("\\bRelaxation\\b", 'gi'), hi: "विश्राम", as: "বিশ্ৰাম", bn: "বিশ্রাম", kh: "Jingthait", mni: "পোথারবা", lus: "Hahdamna" },
        { phrase: "Trajectory", re: new RegExp("\\bTrajectory\\b", 'gi'), hi: "प्रक्षेपवक्र", as: "গতিপথ", bn: "গতিপথ", kh: "Lynti", mni: "খোংজেল", lus: "Kalphung" },
        { phrase: "Activities", re: new RegExp("\\bActivities\\b", 'gi'), hi: "गतिविधियाँ", as: "কাৰ্যকলাপ", bn: "কার্যক্রম", kh: "Ki kam", mni: "সানাবশিং", lus: "Activity-te" },
        { phrase: "Age & Sex", re: new RegExp("\\bAge\\ \\&\\ Sex\\b", 'gi'), hi: "उम्र और लिंग", as: "বয়স আৰু লিংগ", bn: "বয়স ও লিঙ্গ", kh: "Rta & Jinglong", mni: "চহি অমসুং নুপা/নুপী", lus: "Kum & Mipa/Hmeichhia" },
        { phrase: "New here?", re: new RegExp("\\bNew\\ here\\?\\b", 'gi'), hi: "नए हैं?", as: "নতুন নেকি?", bn: "নতুন এখানে?", kh: "Thymmai hangne?", mni: "অনৌবা ওইরিব্রা?", lus: "I thar em?" },
        { phrase: "Completed", re: new RegExp("\\bCompleted\\b", 'gi'), hi: "पूर्ण", as: "সম্পূৰ্ণ", bn: "সম্পন্ন", kh: "La dep", mni: "লোইরে", lus: "Zo" },
        { phrase: "Scheduled", re: new RegExp("\\bScheduled\\b", 'gi'), hi: "निर्धारित", as: "নিৰ্ধাৰিত", bn: "নির্ধারিত", kh: "La buh por", mni: "মতম লেপখ্রে", lus: "Hun ruat" },
        { phrase: "Hydration", re: new RegExp("\\bHydration\\b", 'gi'), hi: "जलपान", as: "পানী", bn: "জলপান", kh: "Dih um", mni: "ঈশিং", lus: "Tui in" },
        { phrase: "Afternoon", re: new RegExp("\\bAfternoon\\b", 'gi'), hi: "दोपहर", as: "দুপৰীয়া", bn: "দুপুর", kh: "Janmiet", mni: "নুংথিল", lus: "Chawhnu" },
        { phrase: "Caregiver", re: new RegExp("\\bCaregiver\\b", 'gi'), hi: "देखभालकर्ता", as: "পৰিচৰ্যাকাৰী", bn: "পরিচর্যাকারী", kh: "Nongsumar", mni: "য়েংশিনবা", lus: "Enkawltu" },
        { phrase: "Yesterday", re: new RegExp("\\bYesterday\\b", 'gi'), hi: "कल", as: "কালি", bn: "গতকাল", kh: "Mynnin", mni: "ঙরাং", lus: "Nimin" },
        { phrase: "Attention", re: new RegExp("\\bAttention\\b", 'gi'), hi: "ध्यान", as: "মনোযোগ", bn: "মনোযোগ", kh: "Jingmut", mni: "মীৎয়েং", lus: "Rilru pek" },
        { phrase: "Stability", re: new RegExp("\\bStability\\b", 'gi'), hi: "स्थिरता", as: "স্থিৰতা", bn: "স্থায়িত্ব", kh: "Jingskhem", mni: "স্থিৰতা", lus: "Nghetna" },
        { phrase: "Follow-up", re: new RegExp("\\bFollow\\-up\\b", 'gi'), hi: "अनुवर्ती", as: "পৰৱৰ্তী", bn: "পরবর্তী", kh: "Jingbudeit", mni: "মথংগী", lus: "Follow-up" },
        { phrase: "Low Risk", re: new RegExp("\\bLow\\ Risk\\b", 'gi'), hi: "कम जोखिम", as: "কম আশংকা", bn: "কম ঝুঁকি", kh: "Duna jingma", mni: "খুদোংথিবা হন্থবা", lus: "Hlauhawm loh lam" },
        { phrase: "Sign out", re: new RegExp("\\bSign\\ out\\b", 'gi'), hi: "साइन आउट", as: "বাহিৰ হওক", bn: "সাইন আউট", kh: "Mih noh", mni: "থোকপা", lus: "Chhuak rawh" },
        { phrase: "Daughter", re: new RegExp("\\bDaughter\\b", 'gi'), hi: "बेटी", as: "কন্যা", bn: "কন্যা", kh: "Khun kynthei", mni: "ইচানুপী", lus: "Fanu" },
        { phrase: "Sessions", re: new RegExp("\\bSessions\\b", 'gi'), hi: "सत्र", as: "সত্ৰ", bn: "সেশন", kh: "Ki session", mni: "তাঙ্ককশিং", lus: "Session-te" },
        { phrase: "Accuracy", re: new RegExp("\\bAccuracy\\b", 'gi'), hi: "सटीकता", as: "শুদ্ধতা", bn: "নির্ভুলতা", kh: "Jingbiang", mni: "অচুম্বা", lus: "Dik dan" },
        { phrase: "Moderate", re: new RegExp("\\bModerate\\b", 'gi'), hi: "मध्यम", as: "মধ্যম", bn: "মাঝারি", kh: "Pdeng", mni: "ময়ায়", lus: "Felfai tawk" },
        { phrase: "Overview", re: new RegExp("\\bOverview\\b", 'gi'), hi: "अवलोकन", as: "অৱলোকন", bn: "সংক্ষিপ্ত বিবরণ", kh: "Jingpeit bniah", mni: "য়েংশিনবা", lus: "Thlirna" },
        { phrase: "Guidance", re: new RegExp("\\bGuidance\\b", 'gi'), hi: "मार्गदर्शन", as: "পথপ্ৰদৰ্শন", bn: "নির্দেশনা", kh: "Jingbthah", mni: "লমজিংবা", lus: "Kaihhruaina" },
        { phrase: "Baseline", re: new RegExp("\\bBaseline\\b", 'gi'), hi: "आधारभूत", as: "আধাৰ", bn: "ভিত্তি", kh: "Jingthew tynrai", mni: "আধার", lus: "Innghahna" },
        { phrase: "Download", re: new RegExp("\\bDownload\\b", 'gi'), hi: "डाउनलोड", as: "ডাউনলোড", bn: "ডাউনলোড", kh: "Download", mni: "ডাউনলোদ", lus: "Download" },
        { phrase: "Activity", re: new RegExp("\\bActivity\\b", 'gi'), hi: "गतिविधि", as: "কাৰ্যকলাপ", bn: "কার্যক্রম", kh: "Kam", mni: "সানাবা", lus: "Activity" },
        { phrase: "Sign in", re: new RegExp("\\bSign\\ in\\b", 'gi'), hi: "साइन इन", as: "প্ৰৱেশ কৰক", bn: "সাইন ইন", kh: "Rung", mni: "চংবা", lus: "Lut rawh" },
        { phrase: "Morning", re: new RegExp("\\bMorning\\b", 'gi'), hi: "सुबह", as: "ৰাতিপুৱা", bn: "সকাল", kh: "Mynstep", mni: "অয়ুক", lus: "Zing" },
        { phrase: "Evening", re: new RegExp("\\bEvening\\b", 'gi'), hi: "शाम", as: "সন্ধিয়া", bn: "সন্ধ্যা", kh: "Janmiet", mni: "নুমিদাং", lus: "Tlailam" },
        { phrase: "Patient", re: new RegExp("\\bPatient\\b", 'gi'), hi: "मरीज़", as: "ৰোগী", bn: "রোগী", kh: "Nongpang", mni: "রুগী", lus: "Damlo" },
        { phrase: "Session", re: new RegExp("\\bSession\\b", 'gi'), hi: "सत्र", as: "সত্ৰ", bn: "সেশন", kh: "Session", mni: "তাঙ্কক", lus: "Session" },
        { phrase: "Routine", re: new RegExp("\\bRoutine\\b", 'gi'), hi: "दिनचर्या", as: "নিয়ম", bn: "রুটিন", kh: "Rukom", mni: "নিয়ম", lus: "Kalphung" },
        { phrase: "Sensory", re: new RegExp("\\bSensory\\b", 'gi'), hi: "संवेदी", as: "ইন্দ্ৰিয়গত", bn: "ইন্দ্রিয়গত", kh: "Sngap sur", mni: "ইন্দ্রিয়গী", lus: "Sensory" },
        { phrase: "Horizon", re: new RegExp("\\bHorizon\\b", 'gi'), hi: "क्षितिज", as: "দিগন্ত", bn: "দিগন্ত", kh: "Jingpeit jngai", mni: "মীৎয়েং", lus: "Thlirna" },
        { phrase: "Summary", re: new RegExp("\\bSummary\\b", 'gi'), hi: "सारांश", as: "সাৰাংশ", bn: "সারসংক্ষেপ", kh: "Kyntien lyngkot", mni: "সাৰাংশ", lus: "Summary" },
        { phrase: "Family", re: new RegExp("\\bFamily\\b", 'gi'), hi: "परिवार", as: "পৰিয়াল", bn: "পরিবার", kh: "Iing", mni: "ইমুং", lus: "Chhungkua" },
        { phrase: "Doctor", re: new RegExp("\\bDoctor\\b", 'gi'), hi: "डॉक्टर", as: "চিকিৎসক", bn: "ডাক্তার", kh: "Doctor", mni: "দোক্তর", lus: "Doctor" },
        { phrase: "Female", re: new RegExp("\\bFemale\\b", 'gi'), hi: "महिला", as: "মহিলা", bn: "মহিলা", kh: "Kynthei", mni: "নুপী", lus: "Hmeichhia" },
        { phrase: "Recent", re: new RegExp("\\bRecent\\b", 'gi'), hi: "हालिया", as: "শেহতীয়া", bn: "সাম্প্রতিক", kh: "Ba shen", mni: "হৌজিক্কী", lus: "Tuna mi" },
        { phrase: "Target", re: new RegExp("\\bTarget\\b", 'gi'), hi: "लक्षित", as: "লক্ষ্য", bn: "লক্ষ্য", kh: "Jingthmu", mni: "পান্দম", lus: "Tum ram" },
        { phrase: "Cancel", re: new RegExp("\\bCancel\\b", 'gi'), hi: "रद्द करें", as: "বাতিল কৰক", bn: "বাতিল করুন", kh: "Sangeh", mni: "তোকউ", lus: "Thulh rawh" },
        { phrase: "Night", re: new RegExp("\\bNight\\b", 'gi'), hi: "रात", as: "ৰাতি", bn: "রাত", kh: "Miet", mni: "অহিংশা", lus: "Zan" },
        { phrase: "Today", re: new RegExp("\\bToday\\b", 'gi'), hi: "आज", as: "আজি", bn: "আজ", kh: "Mynta", mni: "ঙসি", lus: "Vawiin" },
        { phrase: "Score", re: new RegExp("\\bScore\\b", 'gi'), hi: "स्कोर", as: "স্কোৰ", bn: "স্কোর", kh: "Score", mni: "স্কোর", lus: "Score" },
        { phrase: "Moves", re: new RegExp("\\bMoves\\b", 'gi'), hi: "चालें", as: "চাল", bn: "চাল", kh: "Ki jingkhih", mni: "খংথাংশিং", lus: "Chetdan" },
        { phrase: "Focus", re: new RegExp("\\bFocus\\b", 'gi'), hi: "एकाग्रता", as: "একাগ্ৰতা", bn: "একাগ্রতা", kh: "Pynleit jingmut", mni: "মীৎয়েং চাবা", lus: "Rilru pekna" },
        { phrase: "Level", re: new RegExp("\\bLevel\\b", 'gi'), hi: "स्तर", as: "স্তৰ", bn: "স্তর", kh: "Level", mni: "থাক", lus: "Level" },
        { phrase: "Music", re: new RegExp("\\bMusic\\b", 'gi'), hi: "संगीत", as: "সংগীত", bn: "সঙ্গীত", kh: "Rwai", mni: "ঈশৈ", lus: "Rimawi" },
        { phrase: "Notes", re: new RegExp("\\bNotes\\b", 'gi'), hi: "नोट्स", as: "টোকা", bn: "নোট", kh: "Ki jingthoh", mni: "পাউশিং", lus: "Thuziakte" },
        { phrase: "Diary", re: new RegExp("\\bDiary\\b", 'gi'), hi: "डायरी", as: "ডায়েৰী", bn: "ডায়েরি", kh: "Kot thoh", mni: "দায়েরি", lus: "Diary" },
        { phrase: "Print", re: new RegExp("\\bPrint\\b", 'gi'), hi: "प्रिंट", as: "প্ৰিন্ট", bn: "প্রিন্ট", kh: "Print", mni: "ফোঙদোকউ", lus: "Print" },
        { phrase: "Close", re: new RegExp("\\bClose\\b", 'gi'), hi: "बंद करें", as: "বন্ধ কৰক", bn: "বন্ধ করুন", kh: "Khad", mni: "থিংজিনবা", lus: "Khar rawh" },
        { phrase: "Games", re: new RegExp("\\bGames\\b", 'gi'), hi: "खेल", as: "খেল", bn: "খেলা", kh: "Jingleh", mni: "সানাবা", lus: "Infiamna" },
        { phrase: "Male", re: new RegExp("\\bMale\\b", 'gi'), hi: "पुरुष", as: "পুৰুষ", bn: "পুরুষ", kh: "Shynrang", mni: "নুপা", lus: "Mipa" },
        { phrase: "Edit", re: new RegExp("\\bEdit\\b", 'gi'), hi: "संपादित करें", as: "সম্পাদনা কৰক", bn: "সম্পাদনা করুন", kh: "Pynbna", mni: "শেমদোকউ", lus: "Siamthat rawh" },
        { phrase: "Save", re: new RegExp("\\bSave\\b", 'gi'), hi: "सहेजें", as: "সংৰক্ষণ কৰক", bn: "সংরক্ষণ করুন", kh: "Kynshew", mni: "থমিল্লু", lus: "Vawng tha rawh" },
        { phrase: "Game", re: new RegExp("\\bGame\\b", 'gi'), hi: "खेल", as: "খেল", bn: "খেলা", kh: "Jingleh", mni: "সানাবা", lus: "Infiamna" },
        { phrase: "Play", re: new RegExp("\\bPlay\\b", 'gi'), hi: "खेलें", as: "খেলক", bn: "খেলুন", kh: "Lehkai", mni: "শানৌ", lus: "Khel rawh" },
        { phrase: "Home", re: new RegExp("\\bHome\\b", 'gi'), hi: "होम", as: "ঘৰ", bn: "হোম", kh: "Iing", mni: "য়ুম", lus: "In" },
        { phrase: "Tea", re: new RegExp("\\bTea\\b", 'gi'), hi: "चाय", as: "চাহ", bn: "চা", kh: "Sha", mni: "চা", lus: "Thingpui" },
        { phrase: "Son", re: new RegExp("\\bSon\\b", 'gi'), hi: "बेटा", as: "পুত্ৰ", bn: "পুত্র", kh: "Khun shynrang", mni: "ইচানুপা", lus: "Fapa" }
    ];

    // ══════════════════════════════════════════════════════════════════
    // REVERSE TRANSLATION ENGINE (BIDIRECTIONAL: REGIONAL <-> ENGLISH)
    // ══════════════════════════════════════════════════════════════════

    const reverseCatalog = {};
    const reverseWords = [];

    // 1. Index phraseCatalog into reverseCatalog
    for (const [englishKey, transObj] of Object.entries(phraseCatalog)) {
        const en = transObj.en || englishKey;
        reverseCatalog[englishKey.trim()] = en;
        for (const [langKey, transVal] of Object.entries(transObj)) {
            if (transVal && typeof transVal === 'string') {
                reverseCatalog[transVal.trim()] = en;
            }
        }
    }

    // 2. Index translations dictionary into reverseCatalog
    const enDict = translations.en || {};
    for (const [key, enVal] of Object.entries(enDict)) {
        if (!enVal) continue;
        reverseCatalog[enVal.trim()] = enVal;
        for (const langKey of ['hi', 'as', 'bn', 'kh', 'mni', 'lus']) {
            const regVal = translations[langKey] && translations[langKey][key];
            if (regVal && typeof regVal === 'string') {
                reverseCatalog[regVal.trim()] = enVal;
            }
        }
    }

    // 3. Index wordVocabulary into reverseWords and reverseCatalog
    const seenReverseWords = new Set();
    for (const item of wordVocabulary) {
        const enPhrase = item.phrase;
        if (!enPhrase) continue;
        reverseCatalog[enPhrase.trim()] = enPhrase;
        for (const langKey of ['hi', 'as', 'bn', 'kh', 'mni', 'lus']) {
            const regWord = item[langKey];
            if (regWord && typeof regWord === 'string' && regWord.trim() !== enPhrase.trim()) {
                const trimmedReg = regWord.trim();
                reverseCatalog[trimmedReg] = enPhrase;
                if (!seenReverseWords.has(trimmedReg)) {
                    seenReverseWords.add(trimmedReg);
                    const escaped = trimmedReg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    reverseWords.push({
                        en: enPhrase,
                        re: new RegExp(escaped, 'g'),
                        length: trimmedReg.length
                    });
                }
            }
        }
    }

    // Sort reverse words descending by length to prioritize longest phrase matches
    reverseWords.sort((a, b) => b.length - a.length);

    // Dynamic patterns supporting both English and Regional input formats
    const multiDynamicPatterns = [
        // AM / PM Time Format
        {
            re: /^(\d+:\d+)\s*(AM|PM|पूर्वाह्न|अपराह्न|পুৱা|আবেলি|পূর্বাহ্ন|অপরাহ্ন|Mynstep|Janmiet|অয়ুক|নুমিদাং|Zing|Tlai)\s*(?:•|\.)?$/i,
            render: (m, lang) => {
                const t = m[1];
                const tok = m[2];
                const isPM = /PM|अपराह्न|আবেলি|অপরাহ্ন|Janmiet|নুমিদাং|Tlai/i.test(tok);
                if (lang === 'en') return `${t} ${isPM ? 'PM' : 'AM'} •`;
                const ampmMap = {
                    AM: { hi: "पूर्वाह्न", as: "পুৱা", bn: "পূর্বাহ্ন", kh: "Mynstep", mni: "অয়ুক", lus: "Zing" },
                    PM: { hi: "अपराह्न", as: "আবেলি", bn: "অপরাহ্ন", kh: "Janmiet", mni: "নুমিদাং", lus: "Tlai" }
                };
                const key = isPM ? 'PM' : 'AM';
                const trans = (ampmMap[key] && ampmMap[key][lang]) || key;
                return `${t} ${trans} •`;
            }
        },
        // UHID
        {
            re: /^\((?:UHID|विशिष्ट मरीज़ आईडी|ইউ এইচ আই ডি|ইউএইচআইডি|ID Nongpang|ইউ ঐচ আই দি|Damlo ID)\s*#(\d+)\)$/i,
            render: (m, lang) => {
                const id = m[1];
                const map = {
                    hi: `(विशिष्ट मरीज़ आईडी #${id})`, as: `(ইউ এইচ আই ডি #${id})`, bn: `(ইউএইচআইডি #${id})`,
                    kh: `(ID Nongpang #${id})`, mni: `(ইউ ঐচ আই দি #${id})`, lus: `(Damlo ID #${id})`, en: `(UHID #${id})`
                };
                return map[lang] || map.en;
            }
        },
        // Level
        {
            re: /^🧠\s*(?:Level|स्तर|স্তৰ|লেভেল|থাক|Kyrdan)\s*(\d+)$/i,
            render: (m, lang) => {
                const lvl = m[1];
                const map = {
                    hi: `🧠 स्तर ${lvl}`, as: `🧠 স্তৰ ${lvl}`, bn: `🧠 লেভেল ${lvl}`,
                    kh: `🧠 Kyrdan ${lvl}`, mni: `🧠 থাক ${lvl}`, lus: `🧠 Level ${lvl}`, en: `🧠 Level ${lvl}`
                };
                return map[lang] || map.en;
            }
        },
        // Level Up!
        {
            re: /^🚀\s*(?:Level Up!|नया स्तर!|নতুন স্তৰ!|নতুন লেভেল!|Kyrdan thymmai!|অনৌবা থাক!|Sang zawk!)\s*\((?:Level|लेवल|স্তৰ|লেভেল|Kyrdan|থাক)\s*(\d+)\)$/i,
            render: (m, lang) => {
                const lvl = m[1];
                const map = {
                    hi: `🚀 नया स्तर! (लेवल ${lvl})`, as: `🚀 নতুন স্তৰ! (স্তৰ ${lvl})`, bn: `🚀 নতুন লেভেল! (লেভেল ${lvl})`,
                    kh: `🚀 Kyrdan thymmai! (Kyrdan ${lvl})`, mni: `🚀 অনৌবা থাক! (থাক ${lvl})`, lus: `🚀 Sang zawk! (Level ${lvl})`, en: `🚀 Level Up! (Level ${lvl})`
                };
                return map[lang] || map.en;
            }
        },
        // Easier Round
        {
            re: /^💚\s*(?:Easier Round|आसान राउंड|সহজ ৰাউণ্ড|সহজ রাউন্ড|Kaba jem|লাইবা রাউন্দ|Awlsam zawk)\s*\((?:Level|लेवल|স্তৰ|লেভেল|Kyrdan|থাক)\s*(\d+)\)$/i,
            render: (m, lang) => {
                const lvl = m[1];
                const map = {
                    hi: `💚 आसान राउंड (लेवल ${lvl})`, as: `💚 সহজ ৰাউণ্ড (স্তৰ ${lvl})`, bn: `💚 সহজ রাউন্ড (লেভেল ${lvl})`,
                    kh: `💚 Kaba jem (Kyrdan ${lvl})`, mni: `💚 লাইবা রাউন্দ (থাক ${lvl})`, lus: `💚 Awlsam zawk (Level ${lvl})`, en: `💚 Easier Round (Level ${lvl})`
                };
                return map[lang] || map.en;
            }
        },
        // Welcome Home / Back
        {
            re: /^(?:Welcome\s+(?:Home|Back)|घर में स्वागत है|वापस स्वागत है|স্বাগতম|ঘরে স্বাগতম|পুনৰ স্বাগতম|আবার স্বাগতম|Wanbha sha iing|Wanbha biang sha iing|য়ুমদা য়াম্না তরাম্না ওকচরি|অমুক হন্না তরাম্না ওকচরি|In-ah lo haw rawh le|Lo kir leh rawh le),?\s*(.+?)(?:!|\s*🌸)*$/i,
            render: (m, lang) => {
                const name = m[1].replace(/[!🌸]+$/, "").trim();
                const map = {
                    hi: `वापस स्वागत है, ${name}!`, as: `পুনৰ স্বাগতম, ${name}!`, bn: `আবার স্বাগতম, ${name}!`,
                    kh: `Wanbha biang sha iing, ${name}!`, mni: `অমুক হন্না তরাম্না ওকচরি, ${name}!`, lus: `Lo kir leh rawh le, ${name}!`, en: `Welcome Back, ${name}!`
                };
                return map[lang] || map.en;
            }
        },
        // You can do it
        {
            re: /^(?:You\s+can\s+do\s+it|आप यह कर सकते हैं|আপুনি কৰিব পাৰিব|আপনি করতে পারবেন|Phi lah ban leh ia kane|নহাক্না তৌবা ঙমগনি|I ti thei em em ang),?\s*(.+?)(?:!|\s*🍵).*$/i,
            render: (m, lang) => {
                const name = m[1].trim();
                const map = {
                    hi: `आप यह कर सकते हैं, ${name}! 🍵 अपना समय लें, मुस्कुराएं और आनंद लें!`,
                    as: `আপুনি কৰিব পাৰিব, ${name}! 🍵 লাহে লাহে কৰক, হাঁহক আৰু আনন্দ লওক!`,
                    bn: `আপনি করতে পারবেন, ${name}! 🍵 ধীরে সুস্থে খেলুন, হাসুন এবং আনন্দ নিন!`,
                    kh: `Phi lah ban leh ia kane, ${name}! 🍵 Shim por, rkhie bad kmen!`,
                    mni: `নহাক্না তৌবা ঙমগনি, ${name}! 🍵 তপ্না তৌবীয়ু, নোক্ত্ৰিনবীয়ু অমসুং নুংঙাইনা লৈবীয়ু!`,
                    lus: `I ti thei em em ang, ${name}! 🍵 Muangchangin ti la, nui la, hlim rawh!`,
                    en: `You can do it, ${name}! 🍵 Take your time, smile, and have fun!`
                };
                return map[lang] || map.en;
            }
        },
        // Bravo
        {
            re: /^(?:Bravo|शाबाश|বঢ়িয়া|দারুণ|Phi la leh bha eh|য়াম্না ফৈ|I ti tha lutuk),?\s*(.+?)(?:!|\s*🌟)*$/i,
            render: (m, lang) => {
                const name = m[1].replace(/[!🌟]+$/, "").trim();
                const map = {
                    hi: `शाबाश, ${name}! 🌟`, as: `বঢ়িয়া, ${name}! 🌟`, bn: `দারুণ, ${name}! 🌟`,
                    kh: `Phi la leh bha eh, ${name}! 🌟`, mni: `য়াম্না ফৈ, ${name}! 🌟`, lus: `I ti tha lutuk, ${name}! 🌟`, en: `Bravo, ${name}! 🌟`
                };
                return map[lang] || map.en;
            }
        },
        // Playing with
        {
            re: /^(?:Playing with:?\s*(.+)|(.+?)\s*के साथ खेल रहे हैं|(.+?)\s*ৰ সৈতে খেলি আছে|(.+?)\s*-এর সাথে খেলছেন|Ialeh bad\s*(.+)|(.+?)\s*গা লোয়ননা শানরি|(.+?)\s*nena khelh mek)$/i,
            render: (m, lang) => {
                const name = (m[1] || m[2] || m[3] || m[4] || m[5] || m[6] || m[7] || "").trim();
                const map = {
                    hi: `${name} के साथ खेल रहे हैं`, as: `${name} ৰ সৈতে খেলি আছে`, bn: `${name}-এর সাথে খেলছেন`,
                    kh: `Ialeh bad ${name}`, mni: `${name} গা লোয়ননা শানরি`, lus: `${name} nena khelh mek`, en: `Playing with: ${name}`
                };
                return map[lang] || map.en;
            }
        },
        // Signed in as
        {
            re: /^(?:Signed in as\s*(.+?)|(.+?)\s*के रूप में साइन इन हैं|(.+?)\s*হিচাপে প্ৰৱিষ্ট|(.+?)\s*হিসেবে সাইন ইন করা|La rung kum\s*(.+?)|(.+?)\s*ওইনা চংলে|(.+?)\s*anga lut a ni)[\.\।]*$/i,
            render: (m, lang) => {
                const name = (m[1] || m[2] || m[3] || m[4] || m[5] || m[6] || m[7] || "").trim();
                const map = {
                    hi: `${name} के रूप में साइन इन हैं।`, as: `${name} হিচাপে প্ৰৱিষ্ট।`, bn: `${name} হিসেবে সাইন ইন করা।`,
                    kh: `La rung kum ${name}.`, mni: `${name} ওইনা চংলে।`, lus: `${name} anga lut a ni.`, en: `Signed in as ${name}.`
                };
                return map[lang] || map.en;
            }
        },
        // Sessions completed
        {
            re: /^(\d+)\s*(?:Gentle Sessions Completed|सरल सत्र पूर्ण हुए|सौम्य सत्र पूरे हुए|টা সহজ সত্ৰ সম্পূৰ্ণ হ'ল|টি সহজ সেশন সম্পন্ন হয়েছে|tylli ki session la dep|তাঙ্কক .* লোইশিনখ্রে|Session .* zawh a ni ta)/i,
            render: (m, lang) => {
                const n = m[1];
                const map = {
                    hi: `${n} सरल सत्र पूर्ण हुए`, as: `${n}টা সহজ সত্ৰ সম্পূৰ্ণ হ'ল`, bn: `${n}টি সহজ সেশন সম্পন্ন হয়েছে`,
                    kh: `${n} tylli ki session la dep`, mni: `তাঙ্কক ${n} লোইশিনখ্রে`, lus: `Session ${n} zawh a ni ta`, en: `${n} Gentle Sessions Completed`
                };
                return map[lang] || map.en;
            }
        },
        // Today Memory Index
        {
            re: /^(?:Today:|आज:|আজি:|আজ:|Mynta:|ঙসি:|Vawiin:)\s*(\d+)\/(?:100|১০০)\s*(?:Memory Index|स्मृति सूचकांक|স্মৃতি সূচক|Jingkynmaw|Hriatna Index)$/i,
            render: (m, lang) => {
                const score = m[1];
                const map = {
                    hi: `आज: ${score}/100 स्मृति सूचकांक`, as: `আজি: ${score}/১০০ স্মৃতি সূচক`, bn: `আজ: ${score}/১০০ স্মৃতি সূচক`,
                    kh: `Mynta: ${score}/100 Jingkynmaw`, mni: `ঙসি: ${score}/১০০ স্মৃতি সূচক`, lus: `Vawiin: ${score}/100 Hriatna Index`, en: `Today: ${score}/100 Memory Index`
                };
                return map[lang] || map.en;
            }
        }
    ];

    function translateTextValue(val, lang) {
        if (!val) return val;
        const trimmed = val.trim();
        if (!trimmed) return val;

        // ══════════════════════════════════════════════════════════════════
        // 1. TARGET LANGUAGE: ENGLISH ('en')
        // ══════════════════════════════════════════════════════════════════
        if (lang === 'en') {
            // (a) Direct Reverse Match in reverseCatalog
            if (reverseCatalog[trimmed]) {
                const match = val.match(/^(\s*)(.*?)(\s*)$/s);
                return match ? (match[1] + reverseCatalog[trimmed] + match[3]) : reverseCatalog[trimmed];
            }

            // (b) Multi-lingual Dynamic Patterns
            for (const pat of multiDynamicPatterns) {
                const m = trimmed.match(pat.re);
                if (m) {
                    const rendered = pat.render(m, 'en');
                    const match = val.match(/^(\s*)(.*?)(\s*)$/s);
                    return match ? (match[1] + rendered + match[3]) : rendered;
                }
            }
            for (const pat of dynamicPatterns) {
                const m = trimmed.match(pat.re);
                if (m) {
                    const rendered = pat.render(m, 'en');
                    const match = val.match(/^(\s*)(.*?)(\s*)$/s);
                    return match ? (match[1] + rendered + match[3]) : rendered;
                }
            }

            // (c) Reverse Subphrase & Word Token Fallback
            let replaced = trimmed;
            let anyReplaced = false;

            for (const item of reverseWords) {
                if (item.re.test(replaced)) {
                    replaced = replaced.replace(item.re, item.en);
                    anyReplaced = true;
                }
            }

            // (d) Special Brand Cleanup: e.g. "স্মৃতিসেতু" / "स्मृतिसेतु" -> "SmritiSetu"
            if (/[\u0900-\u09FF]/.test(replaced)) {
                if (/স্মৃতিসেতু|स्मृतिसेतु/.test(replaced)) {
                    replaced = replaced.replace(/স্মৃতিসেতু|स्मृतिसेतु/g, "SmritiSetu");
                    anyReplaced = true;
                }
            }

            if (anyReplaced) {
                const match = val.match(/^(\s*)(.*?)(\s*)$/s);
                return match ? (match[1] + replaced + match[3]) : replaced;
            }

            return val;
        }

        // ══════════════════════════════════════════════════════════════════
        // 2. TARGET LANGUAGES: REGIONAL (hi, as, bn, kh, mni, lus)
        // ══════════════════════════════════════════════════════════════════
        // (a) Direct dictionary match
        if (phraseCatalog[trimmed] && phraseCatalog[trimmed][lang]) {
            const match = val.match(/^(\s*)(.*?)(\s*)$/s);
            return match ? (match[1] + phraseCatalog[trimmed][lang] + match[3]) : phraseCatalog[trimmed][lang];
        }

        // (b) Cross-language translation: if trimmed is in a regional language, resolve English key first
        const enKey = reverseCatalog[trimmed];
        if (enKey && phraseCatalog[enKey] && phraseCatalog[enKey][lang]) {
            const match = val.match(/^(\s*)(.*?)(\s*)$/s);
            return match ? (match[1] + phraseCatalog[enKey][lang] + match[3]) : phraseCatalog[enKey][lang];
        }

        // (c) Multi-lingual Dynamic Patterns
        for (const pat of multiDynamicPatterns) {
            const m = trimmed.match(pat.re);
            if (m) {
                const rendered = pat.render(m, lang);
                const match = val.match(/^(\s*)(.*?)(\s*)$/s);
                return match ? (match[1] + rendered + match[3]) : rendered;
            }
        }
        for (const pat of dynamicPatterns) {
            const m = trimmed.match(pat.re);
            if (m) {
                const rendered = pat.render(m, lang);
                const match = val.match(/^(\s*)(.*?)(\s*)$/s);
                return match ? (match[1] + rendered + match[3]) : rendered;
            }
        }

        // (d) Smart Subphrase & Word Token Fallback
        let replaced = trimmed;
        let anyReplaced = false;

        // Convert any non-English tokens to English base first
        for (const item of reverseWords) {
            if (item.re.test(replaced)) {
                replaced = replaced.replace(item.re, item.en);
                anyReplaced = true;
            }
        }

        for (const item of wordVocabulary) {
            const trans = item[lang];
            if (!trans) continue;
            if (item.re.test(replaced)) {
                replaced = replaced.replace(item.re, trans);
                anyReplaced = true;
            }
        }

        if (anyReplaced) {
            const match = val.match(/^(\s*)(.*?)(\s*)$/s);
            return match ? (match[1] + replaced + match[3]) : replaced;
        }

        return null;
    }

    let isTranslating = false;
    let currentAppliedLanguage = null;

    function applyLanguage(lang) {
        if (isTranslating) return;
        isTranslating = true;
        const prevLang = currentAppliedLanguage;
        currentAppliedLanguage = lang;

        try {
            const dict = translations[lang] || translations.en;
            if (!dict.chooseLanguage && dict.step1Title) {
                dict.chooseLanguage = dict.step1Title;
            }
            document.documentElement.lang = lang;

            // Sync all language dropdown selectors across headers and mobile drawers
            document.querySelectorAll("#language-select").forEach((sel) => {
                sel.value = lang;
            });

            // Sync all interactive language pill buttons
            document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
                const isCurrent = btn.getAttribute("data-lang-btn") === lang;
                btn.classList.toggle("active", isCurrent);
                btn.setAttribute("aria-pressed", isCurrent ? "true" : "false");
            });

            /* 1. Attributes based translation */
            document.querySelectorAll("[data-i18n]").forEach((el) => {
                const key = el.dataset.i18n;
                if (dict[key] !== undefined) {
                    el.textContent = dict[key];
                    if (lang === "en") el._origText = dict[key];
                }
            });

            document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
                const key = el.dataset.i18nPlaceholder;
                if (dict[key] !== undefined) el.placeholder = dict[key];
            });

            document.querySelectorAll("[data-language-label]").forEach((el) => {
                el.textContent = languageNames[lang] || languageNames.en;
            });

            /* 2. Deep DOM Text Node Walker for 100% full-screen translation */
            walkTextNodes(document.body, (textNode) => {
                if (!textNode.nodeValue || !textNode.nodeValue.trim()) return;

                if (lang === "en") {
                    // Try translating current nodeValue to English
                    const enTrans = translateTextValue(textNode.nodeValue, "en");
                    if (enTrans && enTrans !== textNode.nodeValue) {
                        textNode.nodeValue = enTrans;
                        textNode._origText = enTrans;
                        return;
                    }

                    // If nodeValue has an _origText, check if _origText needs translation or can be restored
                    if (textNode._origText !== undefined) {
                        const enFromOrig = translateTextValue(textNode._origText, "en");
                        if (enFromOrig && enFromOrig !== textNode._origText) {
                            textNode.nodeValue = enFromOrig;
                            textNode._origText = enFromOrig;
                            return;
                        }
                        textNode.nodeValue = textNode._origText;
                        return;
                    }

                    // If text contains non-ASCII characters, translate
                    if (/[^\x00-\x7F]/.test(textNode.nodeValue)) {
                        const trans = translateTextValue(textNode.nodeValue, "en");
                        if (trans) {
                            textNode.nodeValue = trans;
                            textNode._origText = trans;
                        }
                    } else {
                        textNode._origText = textNode.nodeValue;
                    }
                } else {
                    if (textNode._origText === undefined) {
                        // Capture original English string
                        const enText = translateTextValue(textNode.nodeValue, "en");
                        textNode._origText = enText || textNode.nodeValue;
                    }

                    const translated = translateTextValue(textNode._origText, lang);
                    if (translated !== null) {
                        textNode.nodeValue = translated;
                    }
                }
            });

            /* 3. Button and Input Placeholders & Values */
            document.querySelectorAll("button, input[type='button'], input[type='submit'], a.button").forEach((btn) => {
                if (btn.tagName.toLowerCase() === "input") {
                    if (btn._origVal === undefined) {
                        const enVal = translateTextValue(btn.value, "en");
                        btn._origVal = enVal || btn.value;
                    }
                    if (lang === "en") {
                        const enVal = translateTextValue(btn.value, "en");
                        btn.value = enVal || btn._origVal;
                    } else {
                        const trans = translateTextValue(btn._origVal, lang);
                        if (trans) btn.value = trans;
                    }
                }
            });

            /* 4. Document Title & Aria-labels */
            if (document.title) {
                if (document._origTitle === undefined) {
                    const enTitle = translateTextValue(document.title, "en");
                    document._origTitle = enTitle || document.title;
                }
                if (lang === "en") {
                    const enTitle = translateTextValue(document.title, "en");
                    document.title = enTitle || document._origTitle;
                } else {
                    const transTitle = translateTextValue(document._origTitle, lang);
                    if (transTitle) document.title = transTitle;
                }
            }

            document.querySelectorAll("[aria-label]").forEach((el) => {
                if (el._origAria === undefined) {
                    const enAria = translateTextValue(el.getAttribute("aria-label"), "en");
                    el._origAria = enAria || el.getAttribute("aria-label");
                }
                if (lang === "en") {
                    const enAria = translateTextValue(el.getAttribute("aria-label"), "en");
                    el.setAttribute("aria-label", enAria || el._origAria);
                } else {
                    const transAria = translateTextValue(el._origAria, lang);
                    if (transAria) el.setAttribute("aria-label", transAria);
                }
            });

            /* 5. Select Option Elements (translates options in stage, sex, etc., excluding language selector) */
            document.querySelectorAll("select:not(#language-select) option").forEach((opt) => {
                const key = opt.dataset.i18n;
                if (key && dict[key]) {
                    opt.textContent = dict[key];
                    if (lang === "en") opt._origText = dict[key];
                } else {
                    if (opt._origText === undefined) {
                        const enOpt = translateTextValue(opt.textContent.trim(), "en");
                        opt._origText = enOpt || opt.textContent.trim();
                    }
                    if (lang === "en") {
                        const enOpt = translateTextValue(opt.textContent.trim(), "en");
                        opt.textContent = enOpt || opt._origText;
                    } else {
                        const trans = translateTextValue(opt._origText, lang);
                        if (trans) opt.textContent = trans;
                    }
                }
            });

            localStorage.setItem("smritisetu-language", lang);
            if (prevLang !== lang) {
                document.dispatchEvent(new CustomEvent("smritisetu:language", { detail: lang }));
            }
        } finally {
            isTranslating = false;
        }
    }

    window.smritiApplyLanguage = applyLanguage;

    /* Live translation observer for dynamic elements */
    if (typeof MutationObserver !== 'undefined') {
        let timer = null;
        const observer = new MutationObserver((mutations) => {
            if (isTranslating) return;
            const currentLang = localStorage.getItem("smritisetu-language") || "en";

            let hasNewNodes = false;
            for (const m of mutations) {
                const targetEl = m.target.nodeType === 1 ? m.target : m.target.parentElement;
                if (targetEl && targetEl.closest('.notranslate, [data-no-translate], #mascot, #mascot-msg, .mascot-row, .mascot-bubble')) {
                    continue;
                }
                if (m.addedNodes && m.addedNodes.length > 0) {
                    for (const n of m.addedNodes) {
                        const el = n.nodeType === 1 ? n : n.parentElement;
                        if (el && (el.matches('.notranslate, [data-no-translate], #mascot, #mascot-msg, .mascot-row, .mascot-bubble') || (el.closest && el.closest('.notranslate, [data-no-translate], #mascot, #mascot-msg, .mascot-row, .mascot-bubble')))) {
                            continue;
                        }
                        if (n.nodeType === 1 || n.nodeType === 3) {
                            hasNewNodes = true;
                            break;
                        }
                    }
                }
                if (hasNewNodes) break;
            }

            if (hasNewNodes) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    applyLanguage(currentLang);
                }, 40);
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            if (document.body) {
                observer.observe(document.body, { childList: true, subtree: true });
            }
        });
    }

    function initI18n() {
        /* language selector */
        document.querySelectorAll("#language-select").forEach((sel) => {
            sel.value = saved;
            sel.addEventListener("change", (e) => applyLanguage(e.target.value));
        });

        /* interactive language buttons / pills */
        document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const targetLang = btn.getAttribute("data-lang-btn");
                if (targetLang) applyLanguage(targetLang);
            });
        });

        applyLanguage(saved);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initI18n);
    } else {
        initI18n();
    }
})();
