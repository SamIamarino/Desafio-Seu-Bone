import logo from '../assets/Logo.png';
export default function Footer() {
    return(
    <footer className="text-black p-6">
  <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
    
    {/* Coluna 1 - Logo e Contato */}
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className=""> <img src={logo} alt="" /></div>
        <span className="font-semibold text-lg text-black dark:text-white">SeuBoné</span>
      </div>
      <p className="text-black">seubone@gmail.com</p>
      <p className="text-black">xxxxx-xxxx</p>
    </div>

    {/* Coluna 2 - Endereço */}
    <div className="text-black">
      <p>Rua das Acácias, 789</p>
      <p>Bairro Primavera</p>
      <p>CEP: 13970-000</p>
      <p>Itapira - SP</p>
    </div>

    {/* Coluna 3 - Redes sociais e direitos */}
    <div className="flex flex-col items-start md:items-end text-black">
      <p className="transition-colors duration-200 hover:text-green-600 cursor-pointer">Whatsapp</p>
      <p className="transition-colors duration-200 hover:text-pink-600 cursor-pointer">Instagram</p>
      <p className="mt-4 text-xs text-black text-right">
        © 2024 SeuBoné Personalizados. <br />
        Todos os direitos reservados.
      </p>
    </div>
    
  </div>
</footer>);

}