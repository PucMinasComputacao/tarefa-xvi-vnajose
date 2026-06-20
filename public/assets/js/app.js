const API_URL = '/filmes';

const CORES_GENERO = {
    'Ficção Científica': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    'Crime':             'linear-gradient(135deg, #1a1a1a, #3d3d3d)',
    'Drama':             'linear-gradient(135deg, #4b1248, #8e3038)',
    'Suspense':          'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    'Animação':          'linear-gradient(135deg, #f857a6, #ff5858)',
    'Ação':              'linear-gradient(135deg, #c94b4b, #4b134f)',
    'Comédia':           'linear-gradient(135deg, #f7971e, #ffd200)',
    'Romance':           'linear-gradient(135deg, #ee0979, #ff6a00)',
};

const ICONES_GENERO = {
    'Ficção Científica': '🚀',
    'Crime':             '🔫',
    'Drama':             '🎭',
    'Suspense':          '🕵️',
    'Animação':          '🎨',
    'Ação':              '💥',
    'Comédia':           '😂',
    'Romance':           '💕',
};

function getCorGenero(genero) {
    return CORES_GENERO[genero] || 'linear-gradient(135deg, #2c2c2c, #4a4a4a)';
}

function getIconeGenero(genero) {
    return ICONES_GENERO[genero] || '🎬';
}

function mostrarToast(mensagem, tipo = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = mensagem;
    toast.className = `toast toast-${tipo} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function getIdDaUrl() {
    return new URLSearchParams(location.search).get('id');
}

// ── CRUD API ──────────────────────────────────────────────────────────────────

async function listarFilmes() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Falha ao carregar filmes');
    return res.json();
}

async function obterFilme(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error('Filme não encontrado');
    return res.json();
}

async function criarFilme(dados) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error('Erro ao criar filme');
    return res.json();
}

async function atualizarFilme(id, dados) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error('Erro ao atualizar filme');
    return res.json();
}

async function excluirFilme(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Erro ao excluir filme');
    return true;
}
