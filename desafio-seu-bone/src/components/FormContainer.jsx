export default function FormContainer() {
    return(
        <div className='flex w-[70%] mx-auto my-10'>

        <div className='flex flex-col justify-between my-10'>
          <h1 className='font-bold text-5xl w-115'>Ainda com Dúvidas?</h1>
          <h1 className='font-bold text-5xl w-80'>Fale Conosco!</h1>
          <p className='font-semibold text-md' >Nossa equipe está pronta para ajudar você a criar os kits de brindes perfeitos para sua empresa.</p>
          <p className='font-semibold text-md' >Envie sua pergunta e receba uma consultoria personalizada sem compromisso.</p>
        </div>

        <div>
          <form action="POST" className='flex flex-col gap-4 justify-between w-200 mx-auto p-6 bg-[#D9D9D9] rounded-[25px] shadow-lg'>
            <div className='flex justify-between gap-8'>
              <input type="text" placeholder='Nome Completo:' className='   bg-white rounded-full shadow-lg p-4 w-[50%] focus:outline-none focus:ring-2 focus:ring-[#FBBB1B] transition-colors'/>
              <input type="text" placeholder='Email:' className=' bg-white rounded-full shadow-lg p-4 w-[50%] focus:outline-none focus:ring-2 focus:ring-[#FBBB1B] transition-colors'/>
            </div>
            <textarea name="" id="" placeholder='Mensagem:' className='bg-white w-full h-40 mt-4 p-2 rounded-[25px] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FBBB1B] transition-colors'>

            </textarea>
            <input type="submit" value="Enviar!" className=' bg-white shadow-lg rounded-full p-3 hover:bg-[#FBBB1B] transition-colors font-semibold'/>

          </form>
        </div>
      </div>
    );
    
}