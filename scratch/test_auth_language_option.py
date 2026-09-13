import sys, os
sys.path.insert(0, os.path.abspath('.'))
from app import app

client = app.test_client()

# 1. Test the very first screen (landing / auth_gate.html)
res = client.get('/')
assert res.status_code == 200, f"Unexpected status code: {res.status_code}"
html = res.get_data(as_text=True)

assert 'auth-language-section' in html, "auth-language-section missing from / (first screen)"
assert 'data-i18n="chooseLanguage"' in html or 'Choose Language' in html, "Choose Language label missing from /"

expected_langs = ['en', 'hi', 'as', 'bn', 'kh', 'mni', 'lus']
for lang in expected_langs:
    assert f'data-lang-btn="{lang}"' in html, f'data-lang-btn="{lang}" missing from /'

# Check native names
assert 'English' in html
assert 'हिन्दी' in html
assert 'অসমীয়া' in html
assert 'বাংলা' in html
assert 'Khasi' in html
assert 'মৈতৈলোন' in html
assert 'Mizo' in html

print("[PASS] The very first screen (/) has the Choose Language option with all 7 languages!")

# 2. Test the creating account page (/register, register.html)
res_reg = client.get('/register')
assert res_reg.status_code == 200, f"Unexpected status code: {res_reg.status_code}"
html_reg = res_reg.get_data(as_text=True)

assert 'auth-language-section' in html_reg, "auth-language-section missing from /register"
assert 'data-i18n="chooseLanguage"' in html_reg or 'Choose Language' in html_reg, "Choose Language label missing from /register"

for lang in expected_langs:
    assert f'data-lang-btn="{lang}"' in html_reg, f'data-lang-btn="{lang}" missing from /register'

assert 'English' in html_reg
assert 'हिन्दी' in html_reg
assert 'অসমীয়া' in html_reg
assert 'বাংলা' in html_reg
assert 'Khasi' in html_reg
assert 'মৈতৈলোন' in html_reg
assert 'Mizo' in html_reg

print("[PASS] The creating account page (/register) has the Choose Language option with all 7 languages!")

# 3. Test the login page (/login, login.html)
res_login = client.get('/login')
assert res_login.status_code == 200, f"Unexpected status code: {res_login.status_code}"
html_login = res_login.get_data(as_text=True)

assert 'auth-language-section' in html_login, "auth-language-section missing from /login"
for lang in expected_langs:
    assert f'data-lang-btn="{lang}"' in html_login, f'data-lang-btn="{lang}" missing from /login'

print("[PASS] The sign-in page (/login) has the Choose Language option with all 7 languages!")
print("\nALL VERIFICATIONS PASSED 100%!")
