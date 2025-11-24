// Elementos da página de login/cadastro
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// ==============================================
// CONTROLE DA INTERFACE (PAINÉIS DE LOGIN/CADASTRO)
// ==============================================

// Alterna para o painel de cadastro
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

// Alterna para o painel de login
signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// ==============================================
// GERENCIAMENTO DE NAVEGAÇÃO
// ==============================================

/**
 * Salva a página atual antes de redirecionar para login
 */
function saveCurrentPage() {
  const currentPath = window.location.pathname;
  if (!currentPath.includes('/login') && !currentPath.includes('/signup')) {
    localStorage.setItem('lastVisitedPage', currentPath);
    console.log('Página salva:', currentPath); // Debug
  }
}

/**
 * Redireciona para a página anterior após login bem-sucedido
 */
function redirectAfterAuth() {
  const lastPage = localStorage.getItem('lastVisitedPage') || '/';
  localStorage.removeItem('lastVisitedPage');
  console.log('Redirecionando para:', lastPage); // Debug
  window.location.href = lastPage;
}

// ==============================================
// FUNÇÕES DE AUTENTICAÇÃO
// ==============================================

/**
 * Realiza login automático após cadastro
 */
async function autoLogin(email, password) {
  try {
    console.log('Iniciando login automático para:', email); // Debug
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Login automático bem-sucedido:', data); // Debug
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.name);
      return true;
    }
    console.error('Falha no login automático:', data); // Debug
    return false;
  } catch (error) {
    console.error('Erro no login automático:', error); // Debug
    return false;
  }
}

// ==============================================
// FORMULÁRIO DE CADASTRO
// ==============================================
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log('Tentativa de cadastro:', { email }); // Debug

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Cadastro bem-sucedido:', data); // Debug
      
      // Tenta login automático
      const loginSuccess = await autoLogin(email, password);
      
      if (loginSuccess) {
        alert('Cadastro e login realizados com sucesso! Redirecionando...');
        redirectAfterAuth();
      } else {
        alert('Cadastro realizado! Por favor faça login manualmente.');
        signInButton.click();
        document.getElementById('loginEmail').value = email;
      }
    } else {
      console.error('Erro no cadastro:', data); // Debug
      alert(data.message || 'Erro durante o cadastro');
    }
  } catch (error) {
    console.error('Erro no cadastro:', error); // Debug
    alert('Erro de conexão com o servidor');
  }
});

// ==============================================
// FORMULÁRIO DE LOGIN
// ==============================================
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log('Tentativa de login:', { email }); // Debug

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (response.ok) {
      // Verificação crítica dos dados
      if (!data.token || !data.name) {
        throw new Error('Dados incompletos recebidos do servidor');
      }
      
      console.log('Login bem-sucedido:', { 
        token: data.token, 
        name: data.name 
      }); // Debug
      
      // Armazena os dados de autenticação
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.name);
      
      // Redireciona o usuário
      redirectAfterAuth();
    } else {
      console.error('Falha no login:', data); // Debug
      alert(data.message || 'Credenciais inválidas');
    }
  } catch (error) {
    console.error('Erro no login:', error); // Debug
    alert(error.message || 'Erro durante o login');
  }
});

// ==============================================
// INICIALIZAÇÃO DA PÁGINA
// ==============================================
window.addEventListener('load', () => {
  // Salva a página atual
  saveCurrentPage();
  
  // Verifica se usuário já está autenticado
  const token = localStorage.getItem('token');
  const isAuthPage = window.location.pathname.includes('/login') || 
                    window.location.pathname.includes('/signup');

  if (token && isAuthPage) {
    console.log('Usuário já autenticado, redirecionando...'); // Debug
    redirectAfterAuth();
  }
});

// ==============================================
// DEBUG ADICIONAL (OPCIONAL)
// ==============================================
console.log('index.js carregado com sucesso'); // Confirmação de carregamento