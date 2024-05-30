'use client'
import React, { useState } from 'react';
import './styles.css';

const Donation = () => {
    const [nomeDoador, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [valorDoacao, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [erro, setErro] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!nomeDoador || !cpf || !cep || !valorDoacao || !descricao) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/doacoes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nomeDoador, cpf, cep, valorDoacao, descricao }),
            });
            if (!response.ok) {
                throw new Error("Erro ao enviar doação.");
            }
            setMensagemSucesso("Doação realizada com sucesso!");
            setNome(""); 
            setCpf(""); 
            setCep(""); 
            setValor(""); 
            setDescricao(""); 
        } catch (error) {
            console.error(error);
            setErro("Erro ao enviar doação. Por favor, tente novamente.");
        }
    };

    return (
        <div className='donation-page'>
            <div className='donation-container'>
                <div className='donation-col'>
                    <h3>Faça sua doação e ajude a preservar nossos oceanos <img src="/donation.png" alt="" width='35px' /></h3>
                    <p>Ajude-nos a proteger e preservar nossos oceanos fazendo uma doação. Com sua contribuição, poderemos realizar diversas ações que impactam positivamente nosso ecossistema marinho. Veja como seu dinheiro pode fazer a diferença:</p>
                    <ul>
                        <li>Limpeza das praias e remoção de resíduos plásticos para evitar a poluição marinha;</li>
                        <li>Campanhas de conscientização sobre a importância da preservação dos oceanos;</li>
                        <li>Pesquisas científicas para entender e proteger a vida marinha;</li>
                        <li>Implementação de áreas marinhas protegidas para conservar ecossistemas vulneráveis;</li>
                        <li>Resgate e reabilitação de animais marinhos em perigo;</li>
                        <li>Educação ambiental para comunidades costeiras e escolas.</li>
                    </ul>
                </div>
                <div className='donation-col'>
                    <form onSubmit={handleSubmit} method="post">
                        <label>Nome</label>
                        <input 
                            type='text' 
                            name="nome" 
                            value={nomeDoador} 
                            onChange={(e) => setNome(e.target.value)} 
                            placeholder='Digite seu nome' 
                        />

                        <label>CPF</label>
                        <input 
                            type='text' 
                            name="cpf" 
                            value={cpf} 
                            onChange={(e) => setCpf(e.target.value)} 
                            placeholder='Digite seu CPF' 
                        />

                        <label>CEP</label>
                        <input 
                            type='text' 
                            name="cep" 
                            value={cep} 
                            onChange={(e) => setCep(e.target.value)} 
                            placeholder='Digite seu CEP' 
                        />

                        <label>Valor da Doação (R$)</label>
                        <input 
                            type='number' 
                            name="valor" 
                            value={valorDoacao} 
                            onChange={(e) => setValor(e.target.value)} 
                            placeholder='Digite o valor da doação' 
                        />

                        <label>Descrição</label>
                        <textarea 
                            name="descricao" 
                            rows={6} 
                            value={descricao} 
                            onChange={(e) => setDescricao(e.target.value)} 
                            placeholder='Descreva o motivo da sua doação' 
                        ></textarea>

                        <button type='submit' className='btn dark-btn'>Doar Agora</button>
                        {erro && <p className="error">{erro}</p>}
                        {mensagemSucesso && <p className="success">{mensagemSucesso}</p>}
                    </form>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Donation;
