// ── Auth guard ──
if (!localStorage.getItem('username')) {
    window.location.href = 'login.html';
}

// ── Language guard ──
const lang = localStorage.getItem('currentLang');
if (!lang) {
    window.location.href = 'choice.html';
}

// ── UserId guard ──
const userId = localStorage.getItem('userId');
if (!userId) {
    localStorage.clear();
    window.location.href = 'login.html';
}

// ── Show username ──
const username = localStorage.getItem('username') || 'Guest';
const nameEl = document.querySelector('.name');
if (nameEl) {
    nameEl.textContent = username;
}

// ── DOM Elements ──
const levelsContainer = document.getElementById('levelsContainer');
const title = document.getElementById('topicTitle');
const topics = document.querySelectorAll('.topic');

// ── Safety check ──
if (!levelsContainer || !title || !topics.length) {
    console.error("Missing required DOM elements");
} else {
    initLevelsPage();
}

// ── Main Init Function ──
function initLevelsPage() {

    // ── Sidebar toggle ──
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('open');
            document.querySelector('.page').classList.toggle('shift');
        });
    }

    // ── Topic click listeners ──
    topics.forEach(topic => {
        topic.addEventListener('click', async () => {
            topics.forEach(t => t.classList.remove('active'));
            topic.classList.add('active');
            await loadLevels(topic.dataset.topic);
        });
    });

    // ── Profile dropdown ──
    setupProfileDropdown();

    // ── Load topics initially ──
    loadTopicsFromDB();
}

// ── Get progress from backend ──
async function getProgress(topicName) {
    try {
        const res = await fetch(`http://localhost:3000/api/progress?userId=${userId}&lang=${lang}&topic=${encodeURIComponent(topicName)}`);
        const data = await res.json();
        return data || { completedLevels: [], currentLevel: 1 };
    } catch {
        return { completedLevels: [], currentLevel: 1 };
    }
}

// ── Load levels ──
async function loadLevels(topicName) {
    levelsContainer.innerHTML = '';
    title.innerText = `${lang} - ${topicName}`;

     const progress = await getProgress(topicName); 

    for (let i = 1; i <= 5; i++) {
        let div = document.createElement('div');
        div.className = 'level';

        let status = '';

        if (progress.completedLevels?.includes(i)) {
            status = 'completed';
        } else if (i === progress.currentLevel) {
            status = 'active';
        } else {
            status = 'locked';
        }

        div.classList.add(status);

        div.innerHTML = `
        <span>Level ${i}</span>
        <button 
        class="btn ${status}"
        ${status !== 'active' ? 'disabled' : ''}
        onclick="${status === 'active' ? `goToGame('${topicName}', ${i})` : ''}">
        ${status === 'completed' ? 'Completed' : status === 'active' ? 'Start' : 'Locked'}
        </button>
        `;

        levelsContainer.appendChild(div);
    }
}

// ── Load topics ──
async function loadTopicsFromDB() {
    let loader = document.getElementById('loader');
    loader.style.display='none';
    try {
        const res = await fetch(`http://localhost:3000/api/topics?lang=${lang}`);
        const data = await res.json();

        if (!Array.isArray(data)) {
            console.error('Topics not found:', data);
            return;
        }

        topics.forEach((el, i) => {
            if (data[i]) {
                el.innerText = data[i].topicName;
                el.dataset.topic = data[i].topicName;
            }
        });

        if (data.length > 0) {
            await loadLevels(data[0].topicName);
        }

    } catch (err) {
        console.error('Failed to load topics:', err);
    }
}

// ── Start game ──
function goToGame(topicName, levelNum) {
    localStorage.setItem('currentTopic', topicName);
    localStorage.setItem('currentLevel', levelNum);
    window.location.href = 'instructions.html';
}

// ── Profile dropdown setup ──
function setupProfileDropdown() {
    const profileBtn = document.getElementById('profileBtn');
    const dropdown = document.getElementById('dropdownMenu');

    if (!profileBtn || !dropdown) return;

    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!profileBtn.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
}

// ── Navigation functions ──
function goToProfile() {
    window.location.href = 'profile.html';
}

function goToLang() {
    window.location.href = 'choice.html';
}

function logout() {
    localStorage.clear();
    window.location.href = 'login.html';
}