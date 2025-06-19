export default function FullSizeContainer({children, backgroundColor}) {
    return (
        // Depois definir altura certa para o container.
        <div className='w-full h-full flex items-center justify-center my-5'>
            <div
                className='w-[70%]  rounded-[30px] shadow-lg p-10'
                style={{ backgroundColor: backgroundColor || 'white' }}
            >
                {children}
            </div>
        </div>
    );
}