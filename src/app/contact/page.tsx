'use client'
import React, { useState } from 'react';
import './styles.css';

const Contact = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!nome || !telefone || !mensagem) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/contatos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nome, telefone, mensagem }),
            });
            if (!response.ok) {
                throw new Error("Erro ao enviar mensagem.");
            }
            setMensagemSucesso("Mensagem enviada com sucesso!");
            setNome(""); 
            setTelefone(""); 
            setMensagem(""); 
        } catch (error) {
            console.error(error);
            setErro("Erro ao enviar mensagem. Por favor, tente novamente.");
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Envie sua mensagem <img src="/email.png" alt="" width='35px' /></h3>
                <p>Nosso espaço de contato é uma fonte confiável para esclarecer dúvidas e responder perguntas, oferecendo
                    um canal acessível e amigável para obter assistência. Aqui, estamos dedicados a fornecer suporte 
                    e orientação em uma variedade de tópicos, desde questões técnicas até sugestões e comentários sobre 
                    nossos serviços. Estamos aqui para tornar sua experiência mais tranquila e garantir que você tenha 
                    todas as informações necessárias para tomar decisões informadas. Seja qual for a sua consulta, 
                    estamos prontos para ajudar de maneira rápida e eficiente, garantindo que você se sinta valorizado e ouvido.
                </p>
                <ul>
                    <li><img src="/ofcialemail.png" alt="" />blufuture@gmail.com</li>
                    <li><img src="telefone.png" alt="" />+55 11 96829-9796</li>
                    <li><img src="local.webp" alt="" />Av. Paulista, 1106 - Bela Vista, São Paulo - SP, 01311-000</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={handleSubmit} method="post">
                    <label>Nome</label>
                    <input 
                        type='text' 
                        name="nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        placeholder='Digite seu nome' 
                    />

                    <label>Telefone</label>
                    <input 
                        type='tel' 
                        name="telefone" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        placeholder='Digite seu número de telefone' 
                    />

                    <label>Escreva sua Mensagem</label>
                    <textarea 
                        name='mensagem' 
                        rows={6} 
                        value={mensagem} 
                        onChange={(e) => setMensagem(e.target.value)} 
                        placeholder='Digite sua mensagem' 
                    ></textarea>

                    <button type='submit' className='btn dark-btn'>Enviar mensagem</button>
                    {erro && <p className="error">{erro}</p>}
                    {mensagemSucesso && <p className="success">{mensagemSucesso}</p>}
                </form>
                <span></span>
            </div>
        </div>
    );
}

export default Contact;
