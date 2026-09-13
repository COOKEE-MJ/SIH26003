import glob, re, subprocess, tempfile, os

for fpath in glob.glob('templates/**/*.html', recursive=True):
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    
    scripts = re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
    for idx, s in enumerate(scripts):
        # Remove Jinja2 tags like {{ ... }} and {% ... %} for JS syntax checking
        cleaned = re.sub(r'\{\{.*?\}\}', '"dummy"', s)
        cleaned = re.sub(r'\{%.*?%\}', '', cleaned)
        cleaned = re.sub(r'<script type="application/ld\+json">', '', cleaned)
        if not cleaned.strip():
            continue
        with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as tmp:
            tmp.write(cleaned)
            tmp_name = tmp.name
        try:
            res = subprocess.run(['node', '--check', tmp_name], capture_output=True, text=True)
            if res.returncode != 0:
                print(f"Error in {fpath} script #{idx}:")
                print(res.stderr)
            else:
                print(f"OK: {fpath} script #{idx}")
        finally:
            if os.path.exists(tmp_name):
                os.remove(tmp_name)

