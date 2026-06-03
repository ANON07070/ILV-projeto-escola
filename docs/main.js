// =====================================================
// ILV — International Logistics Valve
// main.js
// =====================================================

// ── Theme Toggle ──
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? '🌙' : '☀️';
});

// ── Mobile Menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ── Scroll effects (navbar shrink) ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.height = window.scrollY > 40 ? '60px' : '72px';
});

// ── Reveal on scroll ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Stagger animation delay for grid cards ──
document.querySelectorAll('.services-grid .svc-card, .kpi-grid .kpi-card, .tech-grid .tech-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
});

// ── Animate hero bars on load ──
setTimeout(() => {
  document.querySelectorAll('.dc-bar-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
    setTimeout(() => bar.style.width = w, 300);
  });
}, 800);

// =====================================================
// MODAL — Login / Cadastro
// =====================================================

function openModal() {
  document.getElementById('loginModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('loginModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar modal ao clicar fora
document.getElementById('loginModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// Trocar abas (Entrar / Cadastrar)
function switchTab(btn, tab) {
  document.querySelectorAll('.mtab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('loginForm').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? '' : 'none';
}

// Ação de login / cadastro (simulação)
function loginAction(btn) {
  const orig = btn.textContent;
  btn.textContent = '⏳ Aguarde...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✅ Conectado!';
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      closeModal();
    }, 1200);
  }, 1400);
}

// =====================================================
// FORMULÁRIO DE CONTATO
// =====================================================

function submitForm(btn) {
  const orig = btn.textContent;
  btn.textContent = '⏳ Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✅ Mensagem enviada!';
    btn.style.background = 'linear-gradient(135deg,#00C48C,#00FFB2)';
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      btn.style.background = '';
    }, 3000);
  }, 1500);
}

// =====================================================
// CHATBOT ILV
// =====================================================

function sendChat() {
  const input = document.getElementById('chatInput');
  const msgs = document.getElementById('chatMsgs');
  const text = input.value.trim();
  if (!text) return;

  // Mensagem do usuário
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = text;
  msgs.appendChild(userMsg);
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  // Resposta do bot
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    const lc = text.toLowerCase();

    if (lc.includes('rastrea') || lc.includes('#')) {
      botMsg.innerHTML = '🔍 <strong>Buscando carga...</strong><br/>📡 Conectando ao Oracle NetSuite<br/>✅ Carga em trânsito · ETA: 12 dias';
    } else if (lc.includes('entrega') || lc.includes('prazo')) {
      botMsg.innerHTML = '📅 Previsão calculada por IA: <strong>+12 dias úteis</strong><br/>🌤️ Condições marítimas: Favoráveis<br/>⚡ Rota otimizada: Rotterdam via Santos';
    } else if (lc.includes('rota')) {
      botMsg.innerHTML = '🗺️ Rota ótima identificada:<br/><strong>Santos → Santos Port → Rotterdam → Destino</strong><br/>⏱️ 14 dias · 📉 -8% combustível vs rota padrão';
    } else if (lc.includes('olá') || lc.includes('oi') || lc.includes('bom')) {
      botMsg.innerHTML = '👋 Olá! Sou o assistente ILV.<br/>Posso ajudar com <strong>rastreamento, status de cargas, rotas e previsões</strong>.<br/>Como posso ajudar?';
    } else {
      botMsg.innerHTML = '🤖 Analisando sua solicitação com IA ILV...<br/>💡 Dica: Pergunte sobre <em>rastreamento, rotas, prazos ou status</em>.';
    }

    msgs.appendChild(botMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 900);
}

// Enviar chat com Enter
document.getElementById('chatInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') sendChat();
});
