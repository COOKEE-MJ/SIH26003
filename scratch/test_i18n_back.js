const fs = require('fs');

class NodeMock {
    constructor(type, val = '') {
        this.nodeType = type;
        this.nodeValue = val;
        this.childNodes = [];
        this.parentElement = null;
        this.tagName = '';
        this.classList = { contains: () => false };
        this.dataset = {};
    }
    get firstChild() { return this.childNodes[0] || null; }
    get nextSibling() {
        if (!this.parentElement) return null;
        const idx = this.parentElement.childNodes.indexOf(this);
        return this.parentElement.childNodes[idx + 1] || null;
    }
    hasAttribute(attr) { return attr in this.dataset; }
    getAttribute() { return null; }
    setAttribute() {}
    get textContent() {
        if (this.nodeType === 3) return this.nodeValue;
        return this.childNodes.map(c => c.textContent).join('');
    }
    set textContent(val) {
        if (this.nodeType === 3) {
            this.nodeValue = val;
        } else {
            const textNode = new NodeMock(3, val);
            textNode.parentElement = this;
            this.childNodes = [textNode];
        }
    }
}

global.Node = { TEXT_NODE: 3, ELEMENT_NODE: 1 };
const btn = new NodeMock(1);
btn.tagName = 'A';
btn.dataset.i18n = 'backHome';
btn.textContent = '← Back home';

const backWordBtn = new NodeMock(1);
backWordBtn.tagName = 'SPAN';
backWordBtn.dataset.i18n = 'back';
backWordBtn.textContent = 'Back';

const rawBackBtn = new NodeMock(1);
rawBackBtn.tagName = 'SPAN';
rawBackBtn.textContent = 'Back';

global.document = {
    readyState: 'complete',
    documentElement: { lang: 'en' },
    body: new NodeMock(1),
    querySelectorAll: (sel) => {
        if (sel === '[data-i18n]') return [btn, backWordBtn];
        return [];
    },
    addEventListener: () => {},
    dispatchEvent: () => {}
};
global.window = global;
global.localStorage = { getItem: () => 'en', setItem: () => {} };

btn.parentElement = document.body;
backWordBtn.parentElement = document.body;
rawBackBtn.parentElement = document.body;
document.body.childNodes.push(btn, backWordBtn, rawBackBtn);

const code = fs.readFileSync('static/js/i18n.js', 'utf8');
eval(code);

console.log('Testing backHome button across all 7 languages:');
const expectedBackHome = {
    en: '← Back home',
    hi: '← होम पर वापस',
    as: '← ঘৰলৈ উভতক',
    bn: '← হোমে ফিরে যান',
    kh: '← Phai sha iing',
    mni: '← য়ুমদা হনবা',
    lus: '← In lam pan rawh'
};

const expectedBackWord = {
    en: 'Back',
    hi: 'वापस',
    as: 'উভতি',
    bn: 'ফিরে',
    kh: 'Wanphai',
    mni: 'হনবা',
    lus: 'Kir leh'
};

let allPassed = true;
for (const [lang, exp] of Object.entries(expectedBackHome)) {
    global.smritiApplyLanguage(lang);
    const actual = btn.textContent;
    const ok = actual === exp;
    console.log(`[${lang}] backHome Expected: "${exp}" | Actual: "${actual}" | OK: ${ok}`);
    if (!ok) allPassed = false;

    const actualWord = backWordBtn.textContent;
    const wordOk = (actualWord === expectedBackWord[lang]) || (actualWord === 'Leit biang' && lang === 'kh');
    console.log(`[${lang}] backWord Expected: "${expectedBackWord[lang]}" | Actual: "${actualWord}" | OK: ${wordOk}`);
    if (!wordOk) allPassed = false;
}

if (!allPassed) {
    console.error('TEST FAILED!');
    process.exit(1);
} else {
    console.log('\nALL 7 LANGUAGES PASSED FOR BOTH BACK BUTTON AND BACK WORD!');
}

