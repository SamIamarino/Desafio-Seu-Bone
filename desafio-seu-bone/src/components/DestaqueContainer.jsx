import FullSizeContainer from "./FullSizeContainer";
import FotoBone from '../assets/FotoBone.png';
export default function DestaqueContainer() {
    return (
        <FullSizeContainer backgroundColor={'#FBBB1B'}>
            <div className='flex justify-between'>
                <div className='flex flex-col justify-between'>
                    <h1 className='text-5xl font-bold'>Destaque sua marca em eventos!</h1>
                    <p className='block w-100 font-semibold'>
                        Crie experiências memoráveis com bonés, mochilas, copos e outros brindes exclusivos. Aumente seu engajamento e gere leads qualificados em feiras, ativações e ações de endomarketing.
                    </p>
                    <button className='rounded-full w-50 shadow-lg p-4  bg-amber-50 cursor-pointer font-semibold'>
                        Conheça nossos Kits
                    </button>
                </div>
                <img src={FotoBone} alt="FotoBone" className='relative' />
            </div>
        </FullSizeContainer>
    );
}