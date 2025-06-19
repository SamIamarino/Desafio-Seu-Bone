import FullSizeContainer from "./FullSizeContainer";
import CapStepComponent from './CapStepComponent';
import icon1 from '../assets/iconbone1.png';
import icon2 from '../assets/iconbone2.png';
import icon3 from '../assets/iconbone3.png';
import icon4 from '../assets/iconbone4.png';

export default function SetepByStepContainer() {
    return(
        <FullSizeContainer backgroundColor={'#D9D9D9'}>
        <div className='flex flex-wrap justify-between gap-8'>
          <CapStepComponent imgSource={icon1} description={"Passo 1: Escolha seus Produtos: \"Selecione os itens ideais para o seu kit entre nossa vasta gama."}/>
          <CapStepComponent imgSource={icon2} description={"Passo 2: Personalize sua Marca: \"Envie sua logo e defina as cores e detalhes da personalização.\" (Ícone de personalização/upload)"}/>
          <CapStepComponent imgSource={icon3} description={"Passo 3: Receba sua Proposta: \"Solicite um orçamento detalhado e veja como podemos atender suas necessidades.\" (Ícone de orçamento/documento)"}/>
          <CapStepComponent imgSource={icon4} description={"Passo 4: Produção e Entrega: \"Produzimos seus brindes com qualidade e entregamos no prazo para o seu evento.\" (Ícone de entrega/tempo)"}/>
        </div>
      </FullSizeContainer>
    );
}