import InstaLogo from '../assets/instagram.svg';
import WhatsLogo from '../assets/whatsapp.svg';
import homemOi from '../assets/homemDandoOi.png';
import FullSizeContainer from './FullSizeContainer';

export default function SocialMediaContainer() {
    return (
        <FullSizeContainer backgroundColor={'#FBBB1B'}>
            <div className='flex'>

                <div className='flex flex-col justify-between'>
                    <h1 className='font-bold text-5xl'>Siga-nos nas Redes Sociais</h1>
                    <p className='font-semibold text-xl w-110'>Acompanhe nossos trabalhos e inspire-se para o seu próximo evento.</p>

                    <div className='flex gap-8'>
                        <button className="rounded-full bg-white p-2 px-10 hover:hover:bg-amber-600 transition-colors cursor-pointer shadow-lg">
                            <img src={InstaLogo} alt="insta-icon" className='size-8 inline mr-2' />
                            Instagram
                        </button>
                        <button className="rounded-full bg-white p-2 px-10 hover:hover:bg-amber-600 transition-colors cursor-pointer shadow-lg">
                            <img src={WhatsLogo} alt="whats-icon" className='size-8 inline mr-2' />
                            Whatsapp
                        </button>
                    </div>
                </div>

                <img src={homemOi} alt="Homem acenando" className='relative top-10 left-30' />

            </div>
        </FullSizeContainer>
    );
}