import React from 'react';
import './styles.css'; 

const Contact = () => {
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
                <form>
                    <label>Nome</label>
                    <input type='text' name="name" placeholder='Digite seu nome' />

                    <label>Telefone</label>
                    <input type='tel' name="phone" placeholder='Digite seu número de telefone' />

                    <label>Escreva sua Mensagem</label>
                    <textarea name='message' rows={6} placeholder='Digite sua mensagem'></textarea>

                    <button type='submit' className='btn dark-btn'>Enviar mensagem</button>
                </form>
                <span></span>
            </div>
        </div>
    );
}

export default Contact;
