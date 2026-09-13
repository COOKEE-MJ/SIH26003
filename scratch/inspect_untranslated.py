# Helper script to inspect and augment i18n.js
import json
import re

with open('scratch_untranslated.txt', 'r', encoding='utf-8') as f:
    untranslated_lines = [line.strip() for line in f if line.strip()]

print(f"Total untranslated candidate lines: {len(untranslated_lines)}")

