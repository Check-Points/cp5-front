import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = (e) => {
    e.preventDefault();

    // Validação simples de login
    if (username === 'admin' && password === '1234') {
      // Redireciona para a página de Cadastrar Produto
      navigate('/cadastrarproduto');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <body className='body'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
    </body>
  );
};

export default Login;
