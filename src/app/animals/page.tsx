import React from 'react';
import './styles.css';

const Animals = () => {
  return (
    <div className="animals-container">
      <h1>5 Animais Marinhos em Extinção</h1>

      <div className="animal-item">
    
        <img src="/foca-monge.jpg" alt="Foca Monge do Havaí" className="animal-image" />
        <div className="animal-description">
          <h2 className="animal-name">Foca-monge-do-havaí</h2>
          <p className="animal-info">
            A foca-monge-do-havaí, cientificamente conhecida como Neomonachus schauinslandi, é encontrada ao longo da costa do Havaí, nos EUA. Segundo o último levantamento divulgado pela IUCN, em 2014, há aproximadamente 632 animais da espécie, cujo estado de conservação está em constante mudança.
            Estes mamíferos habitam áreas de pouca profundidade, e sofrem ameaças vindas da pesca, doenças  — trazidas por espécies invasoras — , poluição e interferência humana em seu habitat natural, principalmente devido ao turismo.
          </p>
        </div>
      </div>
      <div className="animal-item">
        <img src="/cavalomarinho.jpg" alt="Cavalo-marinho Hippocampus whitei" className="animal-image" />
        <div className="animal-description">
          <h2 className="animal-name">Cavalo-marinho Hippocampus whitei</h2>
          <p className="animal-info">
            O Cavalo-marinho Hippocampus whitei vive na costa de New South Wales, na Austrália, e é protegido por lei. A espécie ameaçada se alimenta de pequenos crustáceos e vive, geralmente, nas macroalgas, corais e esponjas marinhas que se encontram a uma profundidade de apenas 12 metros.
            Segundo a IUCN, o animal é uma espécie ovovivípara (que nasce de ovos retidos no corpo do animal) e se reproduz, geralmente, entre outubro e abril de cada ano — sendo que as fêmeas depositam os ovos na bolsa incubadora dos machos e eles carregam os filhotes até o momento do nascimento.
          </p>
        </div>
      </div>
      <div className="animal-item">
        <img src="/baleia.jpg" alt="Baleia-azul" className="animal-image" />
        <div className="animal-description">
          <h2 className="animal-name">Baleia-azul</h2>
          <p className="animal-info">
            Muito conhecida no mundo inteiro e uma referência quando o assunto é oceano, a baleia-azul não foge da lista de animais marinhos ameaçados, mesmo abrangendo uma área de habitat que se estende por todos os oceanos do mundo.
            Segundo a Fundación Aquae, o animal é, ainda, o maior cetáceo que existe e está entre os maiores animais que já habitaram a Terra. O mamífero da ordem Cetartiodactyla pode atingir 30 metros de comprimento e pesar um total de 150 toneladas.
            No entanto, de acordo com dados registrados em 2018, apesar de estar na lista de animais ameaçados de extinção, a espécie apresenta uma tendência de crescimento populacional. Ainda assim, atualmente, o número estimado de indivíduos dessa espécie está entre 5 e 15 mil, com expectativa de vida de cerca de 30,8 anos.
          </p>
        </div>
      </div>
      <div className="animal-item">
        <img src="/raia.jpg" alt="Raia-diabo" className="animal-image" />
        <div className="animal-description">
          <h2 className="animal-name">Raia-diabo</h2>
          <p className="animal-info">
            Desde novembro de 2018, a raia-diabo, também conhecida como arraia-diabo ou manta-diabo (Mobula mobular), está categorizada como uma espécie em risco de extinção. O peixe cartilaginoso é natural dos oceanos Pacífico, Atlântico, Índico e do Mar Mediterrâneo e sofre, principalmente, com a pesca não intencional — as redes de pesca lançadas ao mar não as têm como alvo, mas são capturadas “sem querer”.
            A população dessas raias está diminuindo, e, atualmente, não existem estimativas globais atualizadas sobre a sua presença, de acordo com a IUCN. As raias-diabo têm uma esperança de vida de quase 13 anos e habitam profundidades em torno de 50 metros.
            Essa espécie realiza migrações em larga escala, cobrindo até 1.800 milhas diárias a velocidades mínimas de 63 milhas por hora, provavelmente em resposta a mudanças sazonais na disponibilidade de presas. – afirma a IUCN
          </p>
        </div>
      </div>
      <div className="animal-item">
        <img src="/atum.jpeg" alt="Atum-rabilho-do-sul" className="animal-image" />
        <div className="animal-description">
          <h2 className="animal-name">Atum-rabilho-do-sul</h2>
          <p className="animal-info">
            Por fim, o último animal da lista é o atum-rabilho do sul. O animal tem como principal ameaça a pesca excessiva. Até o início da década de 1980, a comercialização mais comum do animal — altamente valorizado — , era o enlatamento, sendo o Japão o principal mercado para esse tipo de alimento.
            Essa espécie habita profundidades de quase mil metros no mar e pode ser encontrada em águas próximas da Argentina, Brasil, Uruguai, Madagascar, Indonésia, África do Sul e Austrália.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Animals;
