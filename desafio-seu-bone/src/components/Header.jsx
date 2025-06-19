import logo from '../assets/Logo.png';

export default function Header() {
    return(
        <div className='flex items-center justify-center my-5'> 
            <header className='w-[70%] flex items-center justify-between rounded-full p-4 shadow-lg'>
                <img src={logo} alt="logo" />
                <nav>
                    <ul className='flex items-center gap-4'>
                        <li className='text-lg font-semibold text-black hover:text-[#FBBB1B] transition cursor-pointer'>Redes Sociais</li>
                        <li className='text-lg font-semibold text-black hover:text-[#FBBB1B] transition cursor-pointer'>Kits Personalizaveis</li>
                        <li className='text-lg font-semibold text-black hover:text-[#FBBB1B] transition cursor-pointer'>Contatos</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}