import pathlib

html = pathlib.Path(r'c:\Users\mahen\SIH26003\templates\game_matching.html').read_text(encoding='utf-8')
print('Has game-stage-bar:', 'game-stage-bar' in html)
hdr_idx = html.find('class="game-header"')
mascot_idx = html.find('id="mascot"')
print('Header index:', hdr_idx, 'Mascot index:', mascot_idx)
print('Header before mascot:', hdr_idx < mascot_idx)
print('Has contained board style:', 'Strict Board Containment' in html)
print('Cards min-height unset:', 'min-height: unset' in html)

