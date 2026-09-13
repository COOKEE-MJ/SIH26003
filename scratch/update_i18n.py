import pathlib, re

i18n_path = pathlib.Path(r'c:\Users\mahen\SIH26003\static\js\i18n.js')
text = i18n_path.read_text(encoding='utf-8')

new_phrases = '''
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
'''

new_patterns = '''
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
'''

# Insert new phrases right before "    };" of phraseCatalog
target_pc_end = "    };\n\n    const dynamicPatterns = ["
if target_pc_end in text:
    text = text.replace(target_pc_end, new_phrases + "    };\n\n    const dynamicPatterns = [" + new_patterns)
    i18n_path.write_text(text, encoding='utf-8')
    print('SUCCESS: i18n.js updated with all phrases and dynamic patterns!')
else:
    print('ERROR: target pattern not found in i18n.js')

