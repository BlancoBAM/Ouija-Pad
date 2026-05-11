/* ============================================
   OUIJA NOTEPAD - FULL SCREEN WEB APP
   ============================================ */

(() => {
  'use strict';

  // ---- CHARACTER POSITION MAP (Calculated Arcs) ----
  const CHAR_MAP = [
    { char: 'A', x: 28.0, y: 36.0, w: 3.5, h: 6.5 },
    { char: 'B', x: 31.4, y: 34.2, w: 3.5, h: 6.5 },
    { char: 'C', x: 34.8, y: 32.7, w: 3.5, h: 6.5 },
    { char: 'D', x: 38.2, y: 31.6, w: 3.5, h: 6.5 },
    { char: 'E', x: 41.7, y: 31.1, w: 3.5, h: 6.5 },
    { char: 'F', x: 45.1, y: 31.0, w: 3.5, h: 6.5 },
    { char: 'G', x: 48.5, y: 31.0, w: 3.5, h: 6.5 },
    { char: 'H', x: 51.9, y: 31.1, w: 3.5, h: 6.5 },
    { char: 'I', x: 55.3, y: 31.6, w: 3.5, h: 6.5 },
    { char: 'J', x: 58.8, y: 32.7, w: 3.5, h: 6.5 },
    { char: 'K', x: 62.2, y: 34.2, w: 3.5, h: 6.5 },
    { char: 'L', x: 65.6, y: 36.0, w: 3.5, h: 6.5 },
    { char: 'M', x: 69.0, y: 38.4, w: 3.5, h: 6.5 },
    { char: 'N', x: 28.0, y: 44.0, w: 3.5, h: 6.5 },
    { char: 'O', x: 31.4, y: 42.8, w: 3.5, h: 6.5 },
    { char: 'P', x: 34.8, y: 41.9, w: 3.5, h: 6.5 },
    { char: 'Q', x: 38.2, y: 41.6, w: 3.5, h: 6.5 },
    { char: 'R', x: 41.7, y: 41.5, w: 3.5, h: 6.5 },
    { char: 'S', x: 45.1, y: 41.5, w: 3.5, h: 6.5 },
    { char: 'T', x: 48.5, y: 41.5, w: 3.5, h: 6.5 },
    { char: 'U', x: 51.9, y: 41.5, w: 3.5, h: 6.5 },
    { char: 'V', x: 55.3, y: 41.6, w: 3.5, h: 6.5 },
    { char: 'W', x: 58.8, y: 41.9, w: 3.5, h: 6.5 },
    { char: 'X', x: 62.2, y: 42.8, w: 3.5, h: 6.5 },
    { char: 'Y', x: 65.6, y: 44.0, w: 3.5, h: 6.5 },
    { char: 'Z', x: 69.0, y: 45.6, w: 3.5, h: 6.5 },
    { char: '0', x: 36.0, y: 52.0, w: 3.5, h: 6.5 },
    { char: '1', x: 38.9, y: 52.0, w: 3.5, h: 6.5 },
    { char: '2', x: 41.8, y: 52.0, w: 3.5, h: 6.5 },
    { char: '3', x: 44.7, y: 52.0, w: 3.5, h: 6.5 },
    { char: '4', x: 47.6, y: 52.0, w: 3.5, h: 6.5 },
    { char: '5', x: 50.4, y: 52.0, w: 3.5, h: 6.5 },
    { char: '6', x: 53.3, y: 52.0, w: 3.5, h: 6.5 },
    { char: '7', x: 56.2, y: 52.0, w: 3.5, h: 6.5 },
    { char: '8', x: 59.1, y: 52.0, w: 3.5, h: 6.5 },
    { char: '9', x: 62.0, y: 52.0, w: 3.5, h: 6.5 },
    { char: '-', x: 31.0, y: 65.0, w: 2.5, h: 4.5 },
    { char: '+', x: 33.1, y: 65.0, w: 2.5, h: 4.5 },
    { char: '/', x: 35.2, y: 65.0, w: 2.5, h: 4.5 },
    { char: '|', x: 37.4, y: 65.0, w: 2.5, h: 4.5 },
    { char: '\\', x: 39.5, y: 65.0, w: 2.5, h: 4.5 },
    { char: ':', x: 41.6, y: 65.0, w: 2.5, h: 4.5 },
    { char: ';', x: 43.8, y: 65.0, w: 2.5, h: 4.5 },
    { char: '<', x: 45.9, y: 65.0, w: 2.5, h: 4.5 },
    { char: '_', x: 48.0, y: 65.0, w: 2.5, h: 4.5 },
    { char: '>', x: 50.1, y: 65.0, w: 2.5, h: 4.5 },
    { char: '?', x: 52.2, y: 65.0, w: 2.5, h: 4.5 },
    { char: '!', x: 54.4, y: 65.0, w: 2.5, h: 4.5 },
    { char: '.', x: 56.5, y: 65.0, w: 2.5, h: 4.5 },
    { char: ',', x: 58.6, y: 65.0, w: 2.5, h: 4.5 },
    { char: '@', x: 60.8, y: 65.0, w: 2.5, h: 4.5 },
    { char: '%', x: 62.9, y: 65.0, w: 2.5, h: 4.5 },
    { char: '&', x: 65.0, y: 65.0, w: 2.5, h: 4.5 },
    { char: '#', x: 38.0, y: 74.0, w: 2.5, h: 4.5 },
    { char: '*', x: 39.5, y: 74.0, w: 2.5, h: 4.5 },
    { char: '\'', x: 41.0, y: 74.0, w: 2.5, h: 4.5 },
    { char: '(', x: 42.5, y: 74.0, w: 2.5, h: 4.5 },
    { char: '~', x: 44.0, y: 74.0, w: 2.5, h: 4.5 },
    { char: ')', x: 45.5, y: 74.0, w: 2.5, h: 4.5 },
    { char: '"', x: 47.0, y: 74.0, w: 2.5, h: 4.5 },
    { char: '$', x: 48.5, y: 74.0, w: 2.5, h: 4.5 },
    { char: '€', x: 50.0, y: 74.0, w: 2.5, h: 4.5 },
    { char: '£', x: 51.5, y: 74.0, w: 2.5, h: 4.5 },
    { char: '¥', x: 53.0, y: 74.0, w: 2.5, h: 4.5 },
    { char: 'THE ', x: 57.0, y: 72.0, w: 3.5, h: 4.5 },
    { char: 'AND ', x: 62.0, y: 72.0, w: 3.5, h: 4.5 }
  ];

  const charLookup = {};
  CHAR_MAP.forEach(entry => charLookup[entry.char.trim()] = entry);

  // ---- DOM REFERENCES ----
  const hotspotsEl = document.getElementById('hotspots');
  const planchette = document.getElementById('planchette');
  const textarea = document.getElementById('notepad-input');
  const kbdDock = document.getElementById('keyboard-dock');
  const btnShowKbd = document.getElementById('btn-show-kbd');

  let planchetteVisible = false;

  // ---- LOCAL STORAGE ----
  const STORAGE_KEY = 'ouija_notepad_content';

  // ---- FILE STATE ----
  let currentFilePath = null;
  let isDirty = false;
  const invoke = window.__TAURI__?.core?.invoke || window.__TAURI__?.invoke;

  function getFileName(filePath) {
    if (!filePath) return null;
    return filePath.split('/').pop().split('\\').pop();
  }

  function updateTitleBar() {
    const fileNameEl = document.getElementById('file-name');
    if (!fileNameEl) return;
    const name = getFileName(currentFilePath);
    fileNameEl.textContent = name
      ? (isDirty ? '• ' : '') + name
      : (isDirty ? '• Untitled' : '');
  }

  function markDirty() {
    if (!isDirty) { isDirty = true; updateTitleBar(); }
  }

  function markClean() {
    isDirty = false;
    updateTitleBar();
  }

  async function openFile() {
    if (!invoke) { console.warn('Tauri invoke not available'); return; }
    if (isDirty && !confirm('You have unsaved changes. Open a new file anyway?')) return;
    try {
      const result = await invoke('open_file');
      if (result) {
        textarea.value = result.content;
        currentFilePath = result.path;
        localStorage.setItem(STORAGE_KEY, textarea.value);
        markClean();
        textarea.focus();
      }
    } catch (err) {
      console.error('Failed to open file:', err);
    }
  }

  async function saveFile() {
    if (!invoke) return;
    if (!currentFilePath) { return saveFileAs(); }
    try {
      await invoke('save_file', { path: currentFilePath, content: textarea.value });
      markClean();
    } catch (err) {
      console.error('Failed to save file:', err);
    }
  }

  async function saveFileAs() {
    if (!invoke) return;
    const defaultName = getFileName(currentFilePath) || 'untitled.txt';
    try {
      const newPath = await invoke('save_file_as', {
        content: textarea.value,
        defaultName,
      });
      if (newPath) {
        currentFilePath = newPath;
        markClean();
      }
    } catch (err) {
      console.error('Failed to save file as:', err);
    }
  }

  function loadSavedNotebook() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      textarea.value = saved;
    }
  }

  textarea.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
    markDirty();
  });

  document.getElementById('btn-open').addEventListener('click', openFile);
  document.getElementById('btn-save').addEventListener('click', saveFile);
  document.getElementById('btn-save-as').addEventListener('click', saveFileAs);

  document.getElementById('btn-clear').addEventListener('click', () => {
    if (confirm("Are you sure you want to burn this page? All secrets will be lost.")) {
      textarea.value = '';
      localStorage.removeItem(STORAGE_KEY);
      currentFilePath = null;
      markClean();
      textarea.focus();
    }
  });

  // ---- KEYBOARD SHORTCUTS ----
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'o') { e.preventDefault(); openFile(); }
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      if (e.shiftKey) saveFileAs(); else saveFile();
    }
  });

  // ---- TOGGLE KEYBOARD ----
  document.querySelector('.kbd-toggle').addEventListener('click', () => {
    kbdDock.classList.add('hidden');
    btnShowKbd.classList.remove('hidden');
  });

  btnShowKbd.addEventListener('click', () => {
    kbdDock.classList.remove('hidden');
    btnShowKbd.classList.add('hidden');
  });

  // ---- CREATE HOTSPOTS ----
  function createHotspots() {
    CHAR_MAP.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'hotspot';
      div.dataset.char = entry.char;
      div.title = entry.char;
      div.style.left = `${entry.x}%`;
      div.style.top = `${entry.y}%`;
      div.style.width = `${entry.w}%`;
      div.style.height = `${entry.h}%`;
      div.addEventListener('click', (e) => {
        e.preventDefault();
        selectChar(entry.char, div);
      });
      hotspotsEl.appendChild(div);
    });
  }

  // ---- TEXT INSERTION AT CURSOR ----
  function insertAtCursor(text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    textarea.value = val.substring(0, start) + text + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    localStorage.setItem(STORAGE_KEY, textarea.value);
    textarea.focus();
  }

  function deleteAtCursor() {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;

    if (start === end && start > 0) {
      textarea.value = val.substring(0, start - 1) + val.substring(start);
      textarea.selectionStart = textarea.selectionEnd = start - 1;
    } else if (start !== end) {
      textarea.value = val.substring(0, start) + val.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start;
    }
    localStorage.setItem(STORAGE_KEY, textarea.value);
    textarea.focus();
  }

  // ---- SELECT CHARACTER ----
  function selectChar(char, hotspotEl) {
    const entry = charLookup[char.trim()];
    if (entry) {
      movePlanchette(entry);
    }

    if (hotspotEl) {
      triggerFlash(hotspotEl);
    } else if (entry) {
      const el = hotspotsEl.querySelector(`[data-char="${CSS.escape(entry.char)}"]`);
      if (el) triggerFlash(el);
    }

    // Small delay to simulate the board taking a moment
    setTimeout(() => {
      insertAtCursor(char);
    }, 150);
  }

  function triggerFlash(el) {
    el.classList.remove('pressed');
    void el.offsetWidth;
    el.classList.add('pressed');
    setTimeout(() => el.classList.remove('pressed'), 300);
  }

  // ---- MOVE PLANCHETTE ----
  function movePlanchette(entry) {
    if (!planchetteVisible) {
      planchette.classList.add('visible');
      planchetteVisible = true;
    }
    const centerX = entry.x + entry.w / 2;
    const centerY = entry.y + entry.h / 2;
    planchette.style.left = `${centerX}%`;
    planchette.style.top = `${centerY}%`;
  }

  // ---- KEYBOARD INPUT FEEDBACK ----
  textarea.addEventListener('keydown', (e) => {
    // When typing in the textarea, also animate the planchette if it's on the board
    const key = e.key;

    if (key === 'Backspace' || key === 'Enter' || key === ' ') {
      // Don't animate these since they don't have board positions
      return;
    }

    const upperKey = key.toUpperCase();
    if (charLookup[upperKey]) {
      const entry = charLookup[upperKey];
      movePlanchette(entry);
      const el = hotspotsEl.querySelector(`[data-char="${CSS.escape(entry.char)}"]`);
      if (el) triggerFlash(el);
    } else if (charLookup[key]) {
      const entry = charLookup[key];
      movePlanchette(entry);
      const el = hotspotsEl.querySelector(`[data-char="${CSS.escape(entry.char)}"]`);
      if (el) triggerFlash(el);
    }
  });

  // ---- CONTROL BUTTONS ----
  document.querySelectorAll('.kbd-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.dataset.key;
      switch (action) {
        case 'Space':
          insertAtCursor(' ');
          break;
        case 'Backspace':
          deleteAtCursor();
          break;
        case 'Enter':
          insertAtCursor('\n');
          break;
      }
    });
  });

  // ---- INIT ----
  function init() {
    console.log("Ouija Pad initializing...");
    createHotspots();
    loadSavedNotebook();
    textarea.focus();
  }

  // Run init immediately for UI parts, but board hotspots need the image size/load
  const img = document.getElementById('board-image');
  if (img && img.complete) {
    init();
  } else if (img) {
    // If image fails or takes time, we still want the editor to work
    img.addEventListener('load', init);
    img.addEventListener('error', () => {
      console.error("Board image failed to load.");
      init(); 
    });
    // Safety timeout to ensure app becomes interactive even if image hangs
    setTimeout(init, 2000);
  } else {
    init();
  }
})();
