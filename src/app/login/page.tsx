'use client'
import React, { useState, useEffect } from 'react';
import './styles.css';

interface Usuario {
    email: string;
    senha: string;
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [usuariosCadastrados, setUsuariosCadastrados] = useState<Usuario[]>([]);

    useEffect(() => {
        async function fetchUsuariosCadastrados() {
            try {
                const response = await fetch("http://localhost:8080/cadastros");
                if (!response.ok) {
                    throw new Error("Erro ao buscar usuários cadastrados.");
                }
                const data: Usuario[] = await response.json();
                setUsuariosCadastrados(data);
            } catch (error) {
                console.error(error);
                
            }
        }

        fetchUsuariosCadastrados();
    }, []);

    const handleLogin = (event: any) => {
        event.preventDefault();
        if (usuariosCadastrados.length === 0) {
            setError("Nenhum usuário cadastrado.");
            return;
        }

        const usuario = usuariosCadastrados.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuario) {
            setSuccessMessage("Login efetuado com sucesso!");
        } else {
            setError("Email ou senha incorretos. Por favor, tente novamente.");
        }
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event: any) => {
        setSenha(event.target.value);
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h3>Entre na sua conta</h3>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type='email' name="email" onChange={handleEmailChange} placeholder='Digite seu email' />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type='password' name="senha" onChange={handleSenhaChange} placeholder='Digite sua senha' />
                    </div>
 
                    <button type='submit' className='btn'>Entrar</button>
                    {error && <p className="error">{error}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
}
 
export default Login;
