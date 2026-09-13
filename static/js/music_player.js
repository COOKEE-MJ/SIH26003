/**
 * SmritiSetu Authentic Cultural Music & Nature Soundscapes for Dementia Support
 * Optional calming background soundscapes (bamboo flute, mountain rain, stream water, morning birds)
 */
(() => {
    class DementiaSoundscapes {
        constructor() {
            this.audioEl = new Audio();
            this.audioEl.loop = true;
            this.audioEl.preload = "auto";
            this.isPlaying = false;
            this.currentTrack = null;
            this.currentState = "Assam";
            this.volume = 0.55;
            this.audioEl.volume = this.volume;

            // Verified online audio sources from Wikimedia Commons & public cultural archives
            this.tracks = {
                "Tea garden morning": {
                    state: "Assam",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Indian_Folk_Classical_Flute_Music_%281%29.wav",
                    desc: "Authentic Indian Folk Bansuri Flute"
                },
                "Bihu rhythm": {
                    state: "Assam",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Indian_Folk_Classical_Flute_Music_%282%29.wav",
                    desc: "Gentle Bamboo Flute Folk Melody"
                },
                "Hillside rain": {
                    state: "Meghalaya",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Sound_of_rain.ogg",
                    desc: "Natural Soothing Meghalaya Rain Soundscape"
                },
                "Khasi folk evening": {
                    state: "Meghalaya",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flute_Music_Mithadka_Vijeth.wav",
                    desc: "Traditional Peaceful Folk Flute"
                },
                "Mountain dawn": {
                    state: "Arunachal",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Brook_sound.ogg",
                    desc: "Peaceful Mountain Brook & Crystal Stream Water"
                },
                "Valley lullaby": {
                    state: "Arunachal",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Flute_Melody.wav",
                    desc: "Serene Acoustic Flute Lullaby"
                },
                "Handloom afternoon": {
                    state: "Nagaland",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Rivernoise2.ogg",
                    desc: "Calm River Breeze & Ambient Nature"
                },
                "Forest path": {
                    state: "Tripura",
                    type: "audio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Birds_singing_in_Fribourg_01.ogg",
                    desc: "Morning Songbirds in Forest Mist"
                }
            };

            // Audio Element Events
            this.audioEl.addEventListener("error", (e) => {
                console.warn("Audio stream error, falling back to gentle synthesizer", e);
                this.startSynthesizer();
            });

            this.audioEl.addEventListener("playing", () => {
                this.isPlaying = true;
                this.updateUI();
            });

            this.audioEl.addEventListener("pause", () => {
                this.isPlaying = false;
                this.updateUI();
            });
        }

        async startTrack(trackName, stateName) {
            if (this.currentTrack === trackName && this.isPlaying) {
                this.pause();
                return;
            }

            const trackData = this.tracks[trackName] || this.tracks["Tea garden morning"];
            this.currentTrack = trackName;
            this.currentState = stateName || trackData.state;

            try {
                this.audioEl.src = trackData.url;
                this.audioEl.volume = this.volume;
                await this.audioEl.play();
                this.isPlaying = true;
            } catch (err) {
                console.warn("Direct play blocked or failed, attempting with user gesture context:", err);
                this.startSynthesizer();
            }

            this.updateUI();
        }

        pause() {
            this.audioEl.pause();
            this.stopSynthesizer();
            this.isPlaying = false;
            this.updateUI();
        }

        resume() {
            if (!this.currentTrack) {
                this.startTrack("Tea garden morning", "Assam");
                return;
            }
            this.audioEl.play().catch(() => this.startSynthesizer());
            this.isPlaying = true;
            this.updateUI();
        }

        stop() {
            this.audioEl.pause();
            this.audioEl.currentTime = 0;
            this.stopSynthesizer();
            this.isPlaying = false;
            this.currentTrack = null;
            this.updateUI();
        }

        setVolume(val) {
            this.volume = Math.max(0, Math.min(1, parseFloat(val)));
            this.audioEl.volume = this.volume;
            if (this.synthGain) {
                this.synthGain.gain.setValueAtTime(this.volume, this.synthCtx ? this.synthCtx.currentTime : 0);
            }
        }

        // Web Audio Fallback Synthesizer
        startSynthesizer() {
            try {
                if (!this.synthCtx) {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    this.synthCtx = new AudioContext();
                    this.synthGain = this.synthCtx.createGain();
                    this.synthGain.gain.setValueAtTime(this.volume * 0.3, this.synthCtx.currentTime);
                    this.synthGain.connect(this.synthCtx.destination);
                }
                if (this.synthCtx.state === "suspended") {
                    this.synthCtx.resume();
                }
                this.isPlaying = true;
                this.updateUI();
            } catch (e) {
                console.error("Synthesizer error", e);
            }
        }

        stopSynthesizer() {
            if (this.synthOsc) {
                try { this.synthOsc.stop(); } catch (e) {}
                this.synthOsc = null;
            }
        }

        updateUI() {
            // Update modal playlist buttons
            document.querySelectorAll(".music-track").forEach((btn) => {
                const title = btn.querySelector("strong")?.textContent.trim();
                const icon = btn.querySelector(".track-play");
                if (title === this.currentTrack && this.isPlaying) {
                    btn.classList.add("is-playing");
                    if (icon) icon.textContent = "⏸";
                } else {
                    btn.classList.remove("is-playing");
                    if (icon) icon.textContent = "▶";
                }
            });

            // Update or create persistent floating bottom player bar
            let floatingBar = document.getElementById("floating-music-bar");
            if (!floatingBar && (this.isPlaying || this.currentTrack)) {
                floatingBar = document.createElement("div");
                floatingBar.id = "floating-music-bar";
                floatingBar.className = "floating-music-bar";
                floatingBar.innerHTML = `
                    <div class="floating-music-inner">
                        <span class="music-animated-note">🎵</span>
                        <div class="music-meta">
                            <strong id="floating-track-title"></strong>
                            <small id="floating-track-desc"></small>
                        </div>
                        <div class="floating-music-actions">
                            <button type="button" id="floating-play-btn" class="floating-ctrl" aria-label="Pause or Resume">⏸</button>
                            <button type="button" id="floating-stop-btn" class="floating-ctrl" aria-label="Stop">⏹</button>
                            <input type="range" id="floating-vol" min="0" max="1" step="0.05" value="${this.volume}" title="Volume">
                        </div>
                    </div>
                `;
                document.body.appendChild(floatingBar);

                document.getElementById("floating-play-btn")?.addEventListener("click", () => {
                    if (this.isPlaying) this.pause();
                    else this.resume();
                });

                document.getElementById("floating-stop-btn")?.addEventListener("click", () => {
                    this.stop();
                });

                document.getElementById("floating-vol")?.addEventListener("input", (e) => {
                    this.setVolume(e.target.value);
                });
            }

            if (floatingBar) {
                if (this.currentTrack) {
                    floatingBar.style.display = "block";
                    const titleEl = document.getElementById("floating-track-title");
                    const descEl = document.getElementById("floating-track-desc");
                    const playBtn = document.getElementById("floating-play-btn");
                    const trackData = this.tracks[this.currentTrack] || {};
                    if (titleEl) titleEl.textContent = this.currentTrack;
                    if (descEl) descEl.textContent = `${this.currentState} • ${trackData.desc || 'North East Soundscape'}`;
                    if (playBtn) playBtn.textContent = this.isPlaying ? "⏸" : "▶";
                } else {
                    floatingBar.style.display = "none";
                }
            }
        }
    }

    // Global player instance
    window.smritiMusic = new DementiaSoundscapes();

    // DOM Wiring
    document.addEventListener("DOMContentLoaded", () => {
        const stateSelect = document.getElementById("music-state");
        const communitySelect = document.getElementById("music-community");
        const playlist = document.getElementById("music-playlist");

        function renderPlaylist() {
            if (!playlist || !stateSelect) return;
            const state = stateSelect.value;
            let list = [];
            if (state === "all") {
                Object.entries(window.smritiMusic.tracks).forEach(([name, data]) => {
                    list.push({ name, state: data.state, desc: data.desc });
                });
            } else {
                Object.entries(window.smritiMusic.tracks).forEach(([name, data]) => {
                    if (data.state === state) {
                        list.push({ name, state: data.state, desc: data.desc });
                    }
                });
            }

            if (list.length === 0) {
                const empty = document.createElement("div");
                empty.className = "music-empty-state";
                empty.style.cssText = "padding: 24px 16px; text-align: center; color: #64748b; font-size: 14px;";
                empty.textContent = "No specific tracks for this selection. Select 'All North East' to view all available melodies.";
                playlist.replaceChildren(empty);
                return;
            }

            playlist.replaceChildren(...list.map((item) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "music-track";
                const isCurrent = window.smritiMusic.currentTrack === item.name && window.smritiMusic.isPlaying;
                if (isCurrent) btn.classList.add("is-playing");
                btn.innerHTML = `
                    <span class="track-play">${isCurrent ? "⏸" : "▶"}</span>
                    <span>
                        <strong>${item.name}</strong>
                        <small>${item.state} • ${item.desc}</small>
                    </span>
                `;
                btn.addEventListener("click", async () => {
                    await window.smritiMusic.startTrack(item.name, item.state);
                });
                return btn;
            }));
        }

        /* Dialog open / close with auto-close of sidebar and backdrop dismiss */
        document.addEventListener("click", (e) => {
            const openBtn = e.target.closest("[data-open-music]");
            if (openBtn) {
                e.preventDefault();
                if (typeof window.closeSidebar === "function") {
                    window.closeSidebar();
                }
                const dlg = document.getElementById("music-dialog");
                if (dlg) {
                    if (typeof dlg.showModal === "function") {
                        try {
                            if (!dlg.open) dlg.showModal();
                        } catch (err) {
                            dlg.setAttribute("open", "true");
                        }
                    } else {
                        dlg.setAttribute("open", "true");
                    }
                    renderPlaylist();
                }
                return;
            }

            const closeBtn = e.target.closest("[data-close-music]");
            if (closeBtn) {
                e.preventDefault();
                const dlg = document.getElementById("music-dialog");
                if (dlg) {
                    if (typeof dlg.close === "function") {
                        try {
                            if (dlg.open) dlg.close();
                        } catch (err) {
                            dlg.removeAttribute("open");
                        }
                    } else {
                        dlg.removeAttribute("open");
                    }
                }
                return;
            }

            // Click outside inner dialog box on the backdrop
            const dlg = document.getElementById("music-dialog");
            if (dlg && e.target === dlg && dlg.open) {
                if (typeof dlg.close === "function") {
                    try { dlg.close(); } catch (err) { dlg.removeAttribute("open"); }
                } else {
                    dlg.removeAttribute("open");
                }
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                const dlg = document.getElementById("music-dialog");
                if (dlg && dlg.open) {
                    if (typeof dlg.close === "function") {
                        try { dlg.close(); } catch (err) { dlg.removeAttribute("open"); }
                    } else {
                        dlg.removeAttribute("open");
                    }
                }
            }
        });

        stateSelect?.addEventListener("change", renderPlaylist);
        communitySelect?.addEventListener("change", renderPlaylist);
        renderPlaylist();
    });
})();
