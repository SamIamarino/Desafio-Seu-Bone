import Bones from '../assets/Bones.png';

export default function BonesContainer() {
    return(
        <div className='flex justify-center'>
                <div className='p-4 mb-8 bg-white w-[70%] flex'>
                  <img src={Bones} alt="Bones" className='size-98'/>
                  <div className='flex flex-col justify-between w-full gap-10 p-8 rounded-lg  font-semibold'>
                  <h1 className='font-bold text-4xl'>Personalize seus brindes com SeuBoné!</h1>
                  <p>Impressione seus clientes e colaboradores com brindes de alta qualidade e totalmente personalizados. Fortaleça sua marca e deixe uma lembrança duradoura.</p>
                  <p>A solução completa em brindes corporativos para feiras, eventos e ações de marketing. Conte com a SeuBoné para destacar a sua marca.</p>
                  <button className='rounded-full font-semibold bg-[#FBBB1B] p-4 hover:bg-amber-600 transition-colors shadow-lg'>Solicite seu Orçamento</button>
                </div>
                </div>
    </div>
    );
}