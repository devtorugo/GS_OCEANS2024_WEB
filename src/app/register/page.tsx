'use client'
import React, { useState } from 'react';
import './styles.css';

const Register = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [causaSocial, setCausaSocial] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleClick = async () => {
        if (!nome || !sobrenome || !email || !causaSocial || !senha) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/cadastros", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    nome: nome, 
                    sobrenome: sobrenome, 
                    email: email, 
                    causaSocial: causaSocial, 
                    senha: senha
                })
            });

            if (!response.ok) {
                throw new Error("Erro ao criar a conta.");
            }

            const data = await response.json();
            console.log(data);
            alert("Conta criada com sucesso!");
        } catch (error: any) {
            console.log("Ocorreu um erro");
            console.log(error.message);
            setError("Ocorreu um erro ao criar a conta. Por favor, tente novamente mais tarde.");
        }
    };

    const handleNomeChange = (event: any) => {
        setNome(event.target.value);
    };

    const handleSobrenomeChange = (event: any) => {
        setSobrenome(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleCausaSocialChange = (event: any) => {
        setCausaSocial(event.target.value);
    };

    const handleSenhaChange = (event: any) => {
        setSenha(event.target.value);
    };

    return (
        <div className='register'>
            <div className='register-col'>
                <form>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type='text' name="nome" onChange={handleNomeChange} placeholder='Digite seu nome' />
                    </div>

                    <div className="form-group">
                        <label>Sobrenome</label>
                        <input type='text' name="sobrenome" onChange={handleSobrenomeChange} placeholder='Digite seu sobrenome' />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type='text' name="email" onChange={handleEmailChange} placeholder='Digite seu email' />
                    </div>

                    <div className="form-group">
                        <label>Causa Social</label>
                        <input type='text' name="causaSocial" onChange={handleCausaSocialChange} placeholder='Digite sua causa social' />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type='password' name="senha" onChange={handleSenhaChange} placeholder='Digite sua senha' />
                    </div>

                    <button type='button' onClick={handleClick} className='btn'>Criar conta</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;
