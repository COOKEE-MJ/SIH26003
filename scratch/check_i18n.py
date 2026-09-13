import re

with open('static/js/i18n.js', encoding='utf-8') as f:
    content = f.read()

titles = re.findall(r'step1Title:\s*"([^"]+)"', content)
for t in titles:
    print(ascii(t))

langs = re.findall(r'^\s{4,8}([a-z]{2,3}):\s*\{', content, re.M)
print("Languages found:", langs)

