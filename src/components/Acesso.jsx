import React, { useState } from 'react';
import '../assets/styles/acesso.css'; // Importando os estilos

const Acesso = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Requisição de login
        setTimeout(() => {
            console.log('Dados do login:', { email, password, rememberMe });
            setIsLoading(false);
            // Aqui você pode adicionar a lógica de autenticação real
        }, 1500);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="card-header">
                    <h2>Bem-vindo de volta</h2>
                    <p>Por favor, insira suas credenciais</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Lembrar de mim
                        </label>

                        <a href="#forgot-password" className="forgot-password">
                            Esqueceu a senha?
                        </a>
                    </div>

                    <button type="submit" className="login-button" disabled={isLoading}>
                        {isLoading ? 'Carregando...' : 'Entrar'}
                    </button>
                </form>

                <div className="card-footer">
                    <p><a href="#signup">Cadastrar colaborador</a></p>
                </div>
            </div>
        </div>
    );
};

export default Acesso;